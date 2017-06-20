<?php
  require_once("libs/template_engine.php");
  require_once("models/factibilidad.model.php");

  function run(){
  $revisar = array();

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

//Agregar un comentario segun sea aprobada o rechazada la solicitud

  if (isset($_POST["btnComentarFactibilidad"])) {
    if ($_POST["tipo"]=="rechazo") {
    agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],1);
  }elseif ($_POST["tipo"]=="aceptado") {
    agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],2);
  }
  }


  $revisar=verSolicitudesFactbilidad();
  renderizar("revisarSolicitudFactibilidad",array('solicitud'=>$revisar));

  }
  run();
?>
