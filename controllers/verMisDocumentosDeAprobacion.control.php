<?php
/* Home Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");

  function run(){

  $respuesta="";
  $documentos = array();

  if (isset($_POST["btnEliminarDocumento"])) {
    borrarDocumentoAprobacion($_POST["txtDocumentoId"],$_POST["txtDocumentoDireccion"]);
  }

  if (isset($_GET["aprobacionId"])) {
    $documentos=obtenerDocumentosAprobacionPorId($_GET["aprobacionId"]);
  }

  renderizar("verMisDocumentosDeAprobacion",array('documentos'=>$documentos,'aprobacionId'=>$_GET["aprobacionId"]));

  }
  run();
?>
