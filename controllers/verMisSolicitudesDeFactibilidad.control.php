<?php

require_once("libs/template_engine.php");

require_once("models/factibilidad.model.php");

function run(){

  if (mw_estaLogueado()) {
    if ($_SESSION["estado"]==1) {
      if ($_SESSION["rol"]==4) {
        $categorias = array();
        $solicitudes=  array();

        $solicitudes=obtenerSolicitudesFactibilidad();


        renderizar("verMisSolicitudesDeFactibilidad", array('solicitudes'=>$solicitudes));
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
