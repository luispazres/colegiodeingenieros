<?php
/* Home Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");

  function run(){
  $usuario = array();

  if(isset($_POST["btnRechazar"])){

    $numeroId="";
    $estadoCuenta=2;
    $numeroId=$_POST["usuarioIdentidad"];
    actualizarEstado($numeroId,$estadoCuenta);
    }

  if(isset($_POST["btnAceptar"])){
    $respuesta="";
    $numeroId="";
    $estadoCuenta=1;
    $numeroId=$_POST["usuarioIdentidad"];
    $respuesta=actualizarEstado($numeroId,$estadoCuenta);
    echo $respuesta;
  }

  $usuario=obtenerUsuarios();
  renderizar("solicitudDeCuentas",array('usuario'=>$usuario));

  }
  run();
?>
