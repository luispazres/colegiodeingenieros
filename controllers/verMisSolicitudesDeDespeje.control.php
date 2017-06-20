<?php
/* Categorias Controller
 * 2015-03-05
 * Created By OJBA
 * Last Modification 2015-03-05 19:25:00
 */
  require_once("libs/template_engine.php");

  require_once("models/despeje.model.php");

  function run(){
    $solicitudes = array();

    $solicitudes=obtenerDespeje();

    renderizar("verMisSolicitudesDeDespeje", array('solicitudes'=> $solicitudes));
  }

  run();
?>
