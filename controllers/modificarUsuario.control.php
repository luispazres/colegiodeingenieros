<?php
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");

  function run(){
  $usuarios = array();
  $htmlDatos = array();

<<<<<<< Updated upstream
  if(isset($_GET["usuarioId"])){
    $algo=$_GET["usuarioId"];
    $usuarios=obtnerUsuriosPorId($algo);
    if($usuarios){
      $htmlDatos["usuarioIdentidad"] = $usuarios["usuarioIdentidad"];
      $htmlDatos["usuarioPrimerNombre"] = $usuarios["usuarioPrimerNombre"];
      $htmlDatos["usuarioSegundoNombre"] = $usuarios["usuarioSegundoNombre"];
      $htmlDatos["usuarioPrimerApellido"] = $usuarios["usuarioPrimerApellido"];
      $htmlDatos["usuarioSegundoApellido"] = $usuarios["usuarioSegundoApellido"];
      $htmlDatos["usuarioNumeroColegiacion"] = $usuarios["usuarioNumeroColegiacion"];
      $htmlDatos["usuarioCelular"] = $usuarios["usuarioCelular"];
      $htmlDatos["usuarioTelefono"] = $usuarios["usuarioTelefono"];
      $htmlDatos["usuarioDireccion"] = $usuarios["usuarioDireccion"];
      $htmlDatos["rolDescripcion"] = $usuarios["rolDescripcion"];
      $htmlDatos["estadoCuentaDescripcion"] = $usuarios["estadoCuentaDescripcion"];
      $htmlDatos["estado"]=obtenerEstadoCuenta();
      $htmlDatos["roles"]=obtenerRoles();
    }
    }
    print_r($htmlDatos);
  renderizar("modificarUsuario", $htmlDatos);
=======

  if(isset($_GET["usuarioId"])){

    $usuarios=obtenerUsuariosPorId($_GET["usuarioId"]);
      print_r($usuarios);
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
      $htmlDatos["estadoCuentaDescripcion"] = $usuarios["estadoCuentaDescripcion"];
    }
    }

  renderizar("modificarUsuario",$htmlDatos);
>>>>>>> Stashed changes
  }
  run();
?>
