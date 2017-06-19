<?php
  require_once("libs/template_engine.php");

  require_once("models/aprobacion.model.php");

  function run(){

    $solicitudes = array();

    $solicitudes=obtenerAprobacion();

    renderizar("verMisSolicitudesDeAprobacion", array('solicitudes'=> $solicitudes));
  }

  run();

 ?>
