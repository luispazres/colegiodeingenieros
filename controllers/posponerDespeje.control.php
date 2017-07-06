<?php
  require_once("libs/template_engine.php");
  require_once("models/despeje.model.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==2) {
          $solicitud = array();

          if (isset($_POST["btnPosponerDespeje"])) {
            $respuesta=posponerDespeje($_POST["solicitudDespejeId"],$_POST["txtCostoDespeje"],$_POST["txtFecha"],$_POST["txtComentario"],3);
            redirectWithMessage("Despeje pospuesto con exito.","?page=revisarSolicitudDespejeEnee");
          }

          if (isset($_GET["codigo"])) {
            $solicitud=obtenerSolicitudDespejePorId($_GET["codigo"]);
          }

          renderizar("posponerDespeje",$solicitud,"layoutEnee.view.tpl");

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
