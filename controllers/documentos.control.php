<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");
  require_once("models/recepcion.model.php");

  function run(){
  $revisar = array();
  $nombre=array();
  $descripcion="";



  switch ($_GET["accion"]) {
    case 'recepcion':
    if (isset($_GET["codigo"])) {
      $revisar=obtenerDocumentosRecepcionPorId($_GET["codigo"]);
      $nombre=obtenerUnDocumento($_GET["codigo"]);
      renderizar("documentos",array('solicitud'=>$revisar,'nombre'=>$nombre["proyectoNombre"],'descripcion'=>$nombre["proyectoDescrpcion"]));
    }
      break;

    case 'aprobacion':
    if (isset($_GET["codigo"])) {
      $revisar=obtenerDocumentos($_GET["codigo"]);
      $nombre=obtenerUnDocumento($_GET["codigo"]);
    }
    renderizar("documentos",array('solicitud'=>$revisar,'nombre'=>$nombre["proyectoNombre"],'descripcion'=>$nombre["proyectoDescrpcion"]));
      break;

  }
  //$documentos=verSolicitudesArchivos($revisar[""]);



  }
  run();
?>
