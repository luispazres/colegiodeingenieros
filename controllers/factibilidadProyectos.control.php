<?php

  require_once("libs/template_engine.php");

  require_once("models/proyectos.model.php");

  function run(){

    $proyectos = array();
    $htmlDatos = array( );

    if (isset($_GET["proyectoId"])) {
      $proyectos=obtnerProyectosPorId($_GET["proyectoId"]);
    }

    if(isset($_GET["proyectoId"])){
      $proyectos=obtnerProyectosPorId($_GET["proyectoId"]);
      if($proyectos){
        $htmlDatos["proyectoId"] = $proyectos["proyectoId"];
        $htmlDatos["proyectoNombre"] = $proyectos["proyectoNombre"];
        $htmlDatos["departamentoNombre"] = $proyectos["departamentoDescripcion"];
        $htmlDatos["proyectoDireccion"] = $proyectos["proyectoDireccion"];
        $htmlDatos["proyectoDescrpcion"] = $proyectos["proyectoDescrpcion"];
        $htmlDatos["proyectoLatitud"] = $proyectos["proyectoLatitud"];
        $htmlDatos["proyectoLongitud"] = $proyectos["proyectoLongitud"];
        $htmlDatos["proyectoEmailPropietario"] = $proyectos["proyectoEmailPropietario"];
        $htmlDatos["proyectoNombrePropietario"] = $proyectos["proyectoNombrePropietario"];
        $htmlDatos["proyectoIdentidadPropietario"] = $proyectos["proyectoIdentidadPropietario"];
        $htmlDatos["proyectoCelularPropietario"] = $proyectos["proyectoCelularPropietario"];
        $htmlDatos["proyectoDireccionPropietario"] = $proyectos["proyectoDireccionPropietario"];
        $htmlDatos["proyectoTelefonoPropietario"] = $proyectos["proyectoTelefonoPropietario"];
        $htmlDatos["voltajes"]=obtenerVoltajes();
        $htmlDatos["conexiones"]=obtenerConexions();
        }
      }

    print_r($htmlDatos);

    renderizar("factibilidadProyectos",  $htmlDatos);
  }
  run();
?>
