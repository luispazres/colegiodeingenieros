<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");

  function run(){
  $revisar = array();
  $nombre=array();
  $descripcion="";
  $revisar=obtenerDocumentos();
  $nombre=obtenerUnDocumento();  
  //$documentos=verSolicitudesArchivos($revisar[""]);

  renderizar("documentos",array('solicitud'=>$revisar,'nombre'=>$nombre["proyectoNombre"],'descripcion'=>$nombre["proyectoDescrpcion"]));

  }
  run();
?>
