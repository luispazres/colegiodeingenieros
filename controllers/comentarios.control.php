<?php

  require_once('libs/template_engine.php');
  require_once('models/factibilidad.model.php');
  require_once('models/aprobacion.model.php');
  include 'clases\comentariosFactibilidad.php';
  include 'clases\comentariosAprobacion.php';

  function run(){

    $solicitud = array();
    $htmlDatos = array();
    $htmlView = '';

    if(isset($_GET["accion"])){

    switch ($_GET["accion"]) {
    case 'factibilidad':
    $solicitud=verFactbilidadPorId($_GET["codigo"]);
    if($solicitud){
      $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
      $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
      $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
      $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
      $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
      $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
      $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
      $htmlDatos["voltajeDescripcion"] = $solicitud["voltajeDescripcion"];
      $htmlDatos["conexionDescripcion"] = $solicitud["conexionDescripcion"];
      $htmlDatos["solicitudFactibilidadPotencia"] = $solicitud["solicitudFactibilidadPotencia"];
      $htmlDatos["solicitudadFactibilidadCrecimientoEsperado"] = $solicitud["solicitudadFactibilidadCrecimientoEsperado"];
      $htmlDatos["solicitudFactibilidadKva"] = $solicitud["solicitudFactibilidadKva"];
      $htmlDatos["estadoFactibilidadDescripcion"] = $solicitud["estadoFactibilidadDescripcion"];
      $htmlDatos["vista"]=vistaComentariosFactibilidad::vista($_GET["tipo"],$_GET["codigo"],$htmlDatos["proyectoNombre"],$htmlDatos["departamentoDescripcion"],$htmlDatos["proyectoDireccion"], $htmlDatos["proyectoDescrpcion"],
      $htmlDatos["proyectoNombrePropietario"],$htmlDatos["ingenieroNombre"],$htmlDatos["usuarioNumeroColegiacion"],$htmlDatos["voltajeDescripcion"],
      $htmlDatos["conexionDescripcion"],$htmlDatos["solicitudFactibilidadPotencia"],$htmlDatos["solicitudadFactibilidadCrecimientoEsperado"],$htmlDatos["solicitudFactibilidadKva"]);
    }


    break;

    case 'factibilidadEnee':
    $solicitud=verFactbilidadPorId($_GET["codigo"]);
    if($solicitud){
      $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
      $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
      $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
      $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
      $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
      $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
      $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
      $htmlDatos["voltajeDescripcion"] = $solicitud["voltajeDescripcion"];
      $htmlDatos["conexionDescripcion"] = $solicitud["conexionDescripcion"];
      $htmlDatos["solicitudFactibilidadPotencia"] = $solicitud["solicitudFactibilidadPotencia"];
      $htmlDatos["solicitudadFactibilidadCrecimientoEsperado"] = $solicitud["solicitudadFactibilidadCrecimientoEsperado"];
      $htmlDatos["solicitudFactibilidadKva"] = $solicitud["solicitudFactibilidadKva"];
      $htmlDatos["estadoFactibilidadDescripcion"] = $solicitud["estadoFactibilidadDescripcion"];
      $htmlDatos["vista"]=vistaComentariosFactibilidad::vista($_GET["tipo"],$_GET["codigo"],$htmlDatos["proyectoNombre"],$htmlDatos["departamentoDescripcion"],$htmlDatos["proyectoDireccion"], $htmlDatos["proyectoDescrpcion"],
      $htmlDatos["proyectoNombrePropietario"],$htmlDatos["ingenieroNombre"],$htmlDatos["usuarioNumeroColegiacion"],$htmlDatos["voltajeDescripcion"],
      $htmlDatos["conexionDescripcion"],$htmlDatos["solicitudFactibilidadPotencia"],$htmlDatos["solicitudadFactibilidadCrecimientoEsperado"],$htmlDatos["solicitudFactibilidadKva"]);
    }


    break;

    case 'aprobacion':
    $solicitud=obtenerSolicitudAprobacionPorId($_GET["codigo"]);
    if($solicitud){
      $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
      $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
      $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
      $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
      $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
      $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
      $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
      $htmlDatos["solicitudAaprobacionMontoEstimado"] = $solicitud["solicitudAaprobacionMontoEstimado"];
      $htmlDatos["solicitudAprobacionCosto"] = $solicitud["solicitudAprobacionCosto"];
      $htmlDatos["vista"]=vistaComentariosAprobacion::vista($_GET["tipo"],$_GET["codigo"],
      $htmlDatos["proyectoNombre"],$htmlDatos["departamentoDescripcion"],$htmlDatos["proyectoDireccion"],
      $htmlDatos["proyectoDescrpcion"],$htmlDatos["proyectoNombrePropietario"],
      $htmlDatos["ingenieroNombre"],$htmlDatos["usuarioNumeroColegiacion"],
      $htmlDatos["solicitudAaprobacionMontoEstimado"],$htmlDatos["solicitudAprobacionCosto"]);
    }
      break;

      case 'aprobacionEnee':
      $solicitud=obtenerSolicitudAprobacionPorId($_GET["codigo"]);
      if($solicitud){
        $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
        $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
        $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
        $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
        $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
        $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
        $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
        $htmlDatos["solicitudAaprobacionMontoEstimado"] = $solicitud["solicitudAaprobacionMontoEstimado"];
        $htmlDatos["solicitudAprobacionCosto"] = $solicitud["solicitudAprobacionCosto"];
        $htmlDatos["vista"]=vistaComentariosAprobacion::vistaEnee($_GET["tipo"],$_GET["codigo"],
        $htmlDatos["proyectoNombre"],$htmlDatos["departamentoDescripcion"],$htmlDatos["proyectoDireccion"],
        $htmlDatos["proyectoDescrpcion"],$htmlDatos["proyectoNombrePropietario"],
        $htmlDatos["ingenieroNombre"],$htmlDatos["usuarioNumeroColegiacion"],
        $htmlDatos["solicitudAaprobacionMontoEstimado"],$htmlDatos["solicitudAprobacionCosto"]);
      }
        break;

      case 'recepcion':
      $solicitud=obtenerSolicitudAprobacionPorId($_GET["codigo"]);
      if($solicitud){
        $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
        $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
        $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
        $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
        $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
        $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
        $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
        $htmlDatos["solicitudAaprobacionMontoEstimado"] = $solicitud["solicitudAaprobacionMontoEstimado"];
        $htmlDatos["solicitudAprobacionCosto"] = $solicitud["solicitudAprobacionCosto"];
        $htmlDatos["vista"]=vistaComentariosAprobacion::vista($_GET["tipo"],$_GET["codigo"],
        $htmlDatos["proyectoNombre"],$htmlDatos["departamentoDescripcion"],$htmlDatos["proyectoDireccion"],
        $htmlDatos["proyectoDescrpcion"],$htmlDatos["proyectoNombrePropietario"],
        $htmlDatos["ingenieroNombre"],$htmlDatos["usuarioNumeroColegiacion"],
        $htmlDatos["solicitudAaprobacionMontoEstimado"],$htmlDatos["solicitudAprobacionCosto"]);
        break;

    }

  }

    renderizar('comentarios',  $htmlDatos);
 }

 }
  run();

?>
