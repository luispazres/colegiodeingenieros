<?php

  require_once("libs/template_engine.php");

  require_once("models/proyectos.model.php");

  function run(){

    $proyectos = array();

    if (isset($_GET["proyectoId"])) {
      $proyectos=obtnerProyectosPorId($_GET["proyectoId"]);
    }

    print_r($proyectos);
    renderizar("factibilidadProyectos",  $proyectos);
  }

  run();
?>
