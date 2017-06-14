<?php

require_once("libs/template_engine.php");
require_once("models/usuarios.model.php");

  function run(){
    $usuarios=array();
    $htmlData = array();
    $htmlData["mostrarErrores"] = false;
    $htmlData["errores"] = array();
    $respueta="";

    if(isset($_POST["btnRegistroUsuarios"])){
      $usuarios["txtNumeroId"]=$_POST["txtNumeroId"];
      $usuarios["txtNumeroColegiacion"]=$_POST["txtNumeroColegiacion"];
      $usuarios["txtPrimerNombre"]=$_POST["txtPrimerNombre"];
      $usuarios["txtSegundoNombre"]=$_POST["txtSegundoNombre"];
      $usuarios["txtPrimerApellido"]=$_POST["txtPrimerApellido"];
      $usuarios["txtSegundoApellido"]=$_POST["txtSegundoApellido"];
      $usuarios["txtNumeroCelular"]=$_POST["txtNumeroCelular"];
      $usuarios["txtNumeroFijo"]=$_POST["txtNumeroFijo"];
      $usuarios["txtDireccion"]=$_POST["txtDireccion"];
      $usuarios["txtContrasena"]=$_POST["txtContrasena"];
      $usuarios["txtContrasenaConfirmacion"]=$_POST["txtContrasenaConfirmacion"];
      $rolId = 3;
      $estadoCuenta = 3;
      $resultado = 0;
/*
($userId, $userPrimernombre, $userSegundonombre, $primerApellido, $segundoApellido,
$numeroColegiacion, $userCelular,$userTelefono, $userDireccion, $userPassword, $estadoCuenta, $rolId)

*/

      if($usuarios["txtContrasena"]==$usuarios["txtContrasenaConfirmacion"]){
        /*
        Crear contraseña encriptada
        */
        $contrasena= "";
        $contrasena = md5($usuarios["txtContrasena"]);
        //ingresar datos a la base de datos este caso tabla de usuarios

    $respueta = insertUsuario($usuarios["txtNumeroId"],
    $usuarios["txtPrimerNombre"],
    $usuarios["txtSegundoNombre"],
    $usuarios["txtPrimerApellido"],
    $usuarios["txtSegundoApellido"],
    $usuarios["txtNumeroColegiacion"],
    $usuarios["txtNumeroCelular"],
    $usuarios["txtNumeroFijo"],
    $usuarios["txtDireccion"],
    $contrasena,
    $estadoCuenta,
    $rolId);

    print_r($usuarios);
    echo $respueta;

    $location="Location:index.php?page=registroProyectos&error=".$respueta;
    header($location);

    }

    else {
      $htmlData["mostrarErrores"] = true;
      $htmlData["errores"][]=array("errmsg"=>"Contraseñas no coinciden");
      }
    }
    print_r($usuarios);
    echo $respueta;
    renderizar("registroUsuarios",  $htmlData);
  }
  run();
?>
