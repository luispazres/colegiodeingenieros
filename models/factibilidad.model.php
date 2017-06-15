<?php

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

 ?>
