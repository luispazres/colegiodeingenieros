<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");

  function run(){
  $revisar = array();
  $nombre=array();
  $descripcion="";

  if (isset($_GET["codigo"])) {
    $revisar=obtenerDocumentos($_GET["codigo"]);
    $nombre=obtenerUnDocumento($_GET["codigo"]);
  }


  //$documentos=verSolicitudesArchivos($revisar[""]);

  renderizar("documentos",array('solicitud'=>$revisar,'nombre'=>$nombre["proyectoNombre"],'descripcion'=>$nombre["proyectoDescrpcion"]));

  }
  run();
?>
