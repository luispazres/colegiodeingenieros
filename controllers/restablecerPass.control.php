<?php

require_once("libs/template_engine.php");
require_once("models/usuarios.model.php");

  function run(){
    $usuarios=array();
    $htmlData = array();
    $htmlData["mostrarErrores"] = false;
    $htmlData["errores"] = array();
    $respueta="";


    if(isset($_GET["id"])){
      if (isset($_GET["token"])) {
        $usuarios=obtenerUsuariosPorId($_GET["id"]);
        if ($usuarios["usuarioToken"]==$_GET["token"]) {
          renderizar("restablecerPass",  $usuarios,'layoutSinSesion2.view.tpl');
        }else {
          redirectWithMessage("EL enlace solicitado ya  expiro","?page=login");
        }
      }
    }

    if(isset($_POST["btnRestablecer"])){
      $usuarios["txtContrasena"]=$_POST["txtContrasena"];
      $usuarios["txtContrasenaConfirmacion"]=$_POST["txtContrasenaConfirmacion"];

      if($usuarios["txtContrasena"]==$usuarios["txtContrasenaConfirmacion"]){
          /*Crear contraseña encriptada*/
          $usuario = obtenerUsuariosPorId($_POST["txtid"]);
          $fchingreso = $usuario["usuarioFechaIngreso"];
          $contrasena= "";
          if($fchingreso % 2 == 0){
            $contrasena = $usuarios["txtContrasena"] . $fchingreso;
          }else{
            $contrasena = $fchingreso . $usuarios["txtContrasena"];
          }
          $contrasena = md5($contrasena);
          agregarContrasena($contrasena,$_POST["txtid"]);
          redirectWithMessage("La contraseña ha sido cambiada","?page=login");
          renderizar("login",  $htmlData,'layoutSinSesion2.view.tpl');
         }
    }
  }
  run();
?>
