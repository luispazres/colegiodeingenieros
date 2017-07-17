<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");
  include_once("libs/phpqrcode/qrlib.php");

  function run(){
    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          $revisar = array();
          $htmlDatos= array();
          $error="";
            
            $htmlDatos["codigoAprobacion"] = $_GET["id"];
            $codigo=$htmlDatos["codigoAprobacion"];
            $htmlDatos["link"] = "http://conectahn.org/colegiodeingenieros/index.php?page=revisarSolicitudAprobacionPublico&codigo=";
            $htmlDatos["codigoqr"] = QRcode::png($htmlDatos["link"].$htmlDatos["codigoAprobacion"],"temp/$codigo.png",QR_ECLEVEL_H,4,1);
            renderizar("reporteSolicitudAprobacion",$htmlDatos,"layoutSinSesion2.view.tpl");


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
