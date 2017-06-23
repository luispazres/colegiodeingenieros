<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");

  function run(){
  $revisar = array();
  $error="";
//Agregar un comentario segun sea aprobada o rechazada la solicitud

  if (isset($_POST["btnComentarAprobacion"])) {
    if ($_POST["tipo"]=="rechazo") {
    $error=agregarComentarioAprobacion($_POST["codigoProyecto"],$_POST["comentario"],3);
  }elseif ($_POST["tipo"]=="aceptado") {
    agregarComentarioAprobacion($_POST["codigoProyecto"],$_POST["comentario"],2);
  }
  }


  $revisar=verSolicitudesAprobacionEnee();
  //$documentos=verSolicitudesArchivos($revisar[""]);
  renderizar("revisarSolicitudAprobacionEnee",array('solicitud'=>$revisar));

  }
  run();
?>
