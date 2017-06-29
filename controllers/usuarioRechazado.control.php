<?php

  require_once('libs/template_engine.php');
  require_once('models/usuarios.model.php');

  function run(){

    $solicitud = array();
    $htmlDatos = array();

    $htmlDatos["usuarioIdentidad"] = $_GET["codigo"];
    $htmlDatos["usuarioCorreo"] = $_GET["correo"];

    renderizar("usuarioRechazado",$htmlDatos,"layoutCimeqh.view.tpl");
  }

  run();

?>
