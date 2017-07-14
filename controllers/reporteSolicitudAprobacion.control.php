<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");
  require_once("libs/dompdf/dompdf_config.inc.php");

  function run(){
    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          $revisar = array();
          $htmlDatos= array();
          $error="";

            $htmlDatos["codigoAprobacion"] = $_GET["id"];
            $htmlDatos["codigoqr"] = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ejemplo';
            renderizar("reporteSolicitudAprobacion",$htmlDatos,"layout.view.tpl");


        }else {
          redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
        }
      }else {
      redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
      }
    }else {
      mw_redirectToLogin("page=login");
    }


  }
  run();
?>
