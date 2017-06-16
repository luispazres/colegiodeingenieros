<?php

  require_once("libs/template_engine.php");

  require_once("models/factibilidad.model.php");
    require_once("models/proyectos.model.php");

  function run(){

    $proyectos = array();
    $htmlDatos = array( );

    $resultado="";


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

      if (isset($_POST["btnSolicitarFactibilidad"])) {
        $resultado=registrarFactibilidad($_POST["cmbVoltaje"],$_POST["cmbConexion"],$_POST["txtPotencia"],$_POST["txtCrecimientoEsperado"],$_POST["txtKva"],$_POST["proyectoId"]);
      }

    renderizar("factibilidadProyectos",  $htmlDatos);
  }
  run();
?>
