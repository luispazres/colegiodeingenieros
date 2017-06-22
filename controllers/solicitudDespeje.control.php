<?php

  require_once("libs/template_engine.php");


  require_once("models/proyectos.model.php");
  require_once("models/aprobacion.model.php");
  require_once("models/multiUpload.model.php");
  require_once("models/despeje.model.php");

  function run(){

    $respuesta="";
    $htmlDatos = array( );
    $fecha="";

    if (isset($_POST["btnSolicitarDespeje"])) {

      switch ($_POST["accion"]) {
        case 'INS':
          $respuesta=registrarDespeje($_POST["txtTiempo"],$_POST["txtCuadrillas"],$_POST["txtCantidadPersonal"],$_POST["txtFecha"],$_POST["solicitudAprobacionId"]);

          $header="Location:index.php?page=solicitudDespeje&respuesta=".$respuesta;
          header($header);
          break;

        case 'UPD':
          $respuesta=actualizarDespeje($_POST["txtTiempo"],$_POST["txtCuadrillas"],$_POST["txtCantidadPersonal"],$_POST["txtFecha"],$_POST["despejeId"]);

          $header="Location:index.php?page=solicitudDespeje&respuesta=".$respuesta;
          header($header);
          break;

        default:
          # code...
          break;
      }



    }
    echo $fecha;

    if(isset($_GET["proyectoId"])){

      $proyectos=obtnerAprobacionPorId($_GET["proyectoId"]);
      if($proyectos){
        if (isset($_GET["accion"])) {
          $htmlDatos["accion"] = $_GET["accion"];
        }
        if (isset($_GET["despejeId"])) {
          $htmlDatos["despejeId"] = $_GET["despejeId"];
        }
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
        $htmlDatos["codigoAprobacion"] = $proyectos["codigoAprobacion"];
        $htmlDatos["solicitudAprobacionId"] = $proyectos["solicitudAprobacionId"];
        }
      }

    renderizar("solicitudDespeje",  $htmlDatos);
  }

  run();
?>
