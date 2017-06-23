<?php
  require_once("libs/template_engine.php");
  require_once("models/recepcion.model.php");

  function run(){
  $revisar = array();
/*
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
*/
//Agregar un comentario segun sea aprobada o rechazada la solicitud

  if (isset($_POST["btnComentarRecepcion"])) {
    if ($_POST["tipo"]=="rechazo") {
    agregarComentarioRecepcion($_POST["codigoProyecto"],$_POST["comentario"],3);
  }elseif ($_POST["tipo"]=="aceptado") {
    agregarComentarioRecepcion($_POST["codigoProyecto"],$_POST["comentario"],1);
  }
  }


  $revisar=obtenerSolicitudRecepcion();
  renderizar("revisarSolicitudRecepcionCimeqh",array('solicitud'=>$revisar));

  }
  run();
?>
