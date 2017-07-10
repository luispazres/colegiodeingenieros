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
      if($_POST["txtCodigo"] != null)
      {
        $proyecto=obtenerSolicitudAprobacionPorCodigo($_POST["txtCodigo"]);
        if($proyecto != null)
        {
          $documentos=obtenerDocumentosSolicitudAprobacionPorCodigo($_POST["txtCodigo"]);
          $date= new DateTime($proyecto[0]["solicitudAprobacionFecha"]);
          $proyecto[0]["solicitudAprobacionFecha"]=date_format($date, 'Y-m-d');
        }
        else
        {
          redirectWithMessage("El código ingresado no existe","?page=revisarSolicitudAprobacionPublico");
        }
      }
      else {
        {
          redirectWithMessage("Favor ingrese el código de aprovación","?page=revisarSolicitudAprobacionPublico");
        }
      }
    }

    renderizar("revisarSolicitudAprobacionPublico",   array("solicitudes"=>$proyecto,"documentos"=>$documentos), 'layoutSinSesion.view.tpl');

  }

  run();
?>
