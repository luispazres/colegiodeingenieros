<?php

require_once("libs/template_engine.php");

require_once("models/factibilidad.model.php");

function run(){
  $categorias = array();
  $solicitudes=  array();

  $solicitudes=obtenerSolicitudesFactibilidad();


  renderizar("verMisSolicitudesDeFactibilidad", array('solicitudes'=>$solicitudes));
}

run();

 ?>
