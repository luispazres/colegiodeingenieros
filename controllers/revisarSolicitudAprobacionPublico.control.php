<?php
/* Login Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");


  function run(){
    $proyecto = array();
    $documentos = array( );
    $date="";
    if (isset($_POST["btnBuscar"])) {
      $proyecto=obtenerSolicitudAprobacionPorCodigo($_POST["txtCodigo"]);
      $documentos=obtenerDocumentosSolicitudAprobacionPorCodigo($_POST["txtCodigo"]);
      $date= new DateTime($proyecto[0]["solicitudAprobacionFecha"]);
      $proyecto[0]["solicitudAprobacionFecha"]=date_format($date, 'Y-m-d');
    }

    renderizar("revisarSolicitudAprobacionPublico",   array("solicitudes"=>$proyecto,"documentos"=>$documentos), 'layoutSinSesion.view.tpl');

  }

  run();
?>
