<?php

  require_once("libs/dao.php");

function registrarFactibilidad($voltajeId, $conexionId, $potencia, $crecmientoesperado, $kva, $proyectoId){
  $insertSQL = "INSERT INTO `tblsolicitudfactibilidad`
(
`voltajeId`,
`conexionId`,
`solicitudFactibilidadPotencia`,
`solicitudadFactibilidadCrecimientoEsperado`,
`solicitudFactibilidadKva`,
`estadoFactibilidadId`,
`proyectoId`)
VALUES(
%d, %d, %f, %f, %f, 4, %d);";
  $insertSQL = sprintf($insertSQL, $voltajeId, $conexionId, $potencia, $crecmientoesperado,$kva, $proyectoId);

  return ejecutarNonQueryConErrores($insertSQL);
}

function obtenerSolicitudesFactibilidad(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicitudfactibilidad as sf, tblproyectos as p, tblestadofactibilidad as ef where p.proyectoId=sf.proyectoId and sf.estadoFactibilidadId=ef.estadoFactibilidadId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

 ?>
