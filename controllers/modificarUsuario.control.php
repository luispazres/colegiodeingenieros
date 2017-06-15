<?php
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");

  function run(){
  $usuarios = array();
  $htmlDatos = array();
/*
  if (isset($_GET["usuarioId"])) {
    $proyectos=obtenerUsuariosPorId($_GET["usuarioId"]);
  }
*/
  if(isset($_GET["usuarioId"])){
    $algo=$_GET["usuarioId"];
    $usuarios=obtenerUsuariosPorId($algo);
    if($usuarios){
      $htmlDatos["usuarioIdentidad"] = $usuarios=["usuarioIdentidad"];
      $htmlDatos["usuarioPrimerNombre"] = $usuarios=["usuarioPrimerNombre"];
      $htmlDatos["usuarioSegundoNombre"] = $usuarios=["usuarioSegundoNombre"];
      $htmlDatos["usuarioPrimerApellido"] = $usuarios=["usuarioPrimerApellido"];
      $htmlDatos["usuarioSegundoApellido"] = $usuarios=["usuarioSegundoApellido"];
      $htmlDatos["usuarioNumeroColegiacion"] = $usuarios=["usuarioNumeroColegiacion"];
      $htmlDatos["usuarioCelular"] = $usuarios=["usuarioCelular"];
      $htmlDatos["usuarioTelefono"] = $usuarios=["usuarioTelefono"];
      $htmlDatos["usuarioDireccion"] = $usuarios=["usuarioDireccion"];
      $htmlDatos["rolDescripcion"] = $usuarios=["rolDescripcion"];
      $htmlDatos["estadoCuentaDescripcion"] = $usuarios=["estadoCuentaDescripcion"];
    }
    }
    print_r($usuarios);
  renderizar("modificarUsuario",$htmlDatos);
  }
  run();
?>
