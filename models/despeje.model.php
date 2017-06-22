<?php

require_once("libs/dao.php");

function registrarDespeje($tiempo,$cuadrillas,$personal,$fecha,$aprobacionId){
  $insertSQL = "INSERT INTO `cimeqh`.`tblsolicituddespeje`
(`solicitudDespejeHoras`,
`solicitudDespejeCuadrillas`,
`solicitudDespejeCantidadPersonal`,
`solicitudDespejeFecha`,
`tblsolicitudaprobacion_solicitudAprobacionId`,
`estadoDespejeId`)
VALUES
(%d,%d,%d,'%s',%d,4);";
  $insertSQL = sprintf($insertSQL,$tiempo,$cuadrillas,$personal,$fecha,$aprobacionId);

  if (ejecutarNonQuery($insertSQL)) {
    return getLastInserId();
  }

}

function actualizarDespeje($tiempo,$cuadrillas,$personal,$fecha,$despejeId){
  $insertSQL = "UPDATE `tblsolicituddespeje`
SET
`solicitudDespejeHoras` =%d,
`solicitudDespejeCuadrillas` = %d,
`solicitudDespejeCantidadPersonal` = %d,
`solicitudDespejeFecha` = '%s',
`estadoDespejeId` = 4,
`comentarioDespeje` = ''
WHERE `solicitudDespejeId` = %d;
";
  $insertSQL = sprintf($insertSQL,$tiempo,$cuadrillas,$personal,$fecha,$despejeId);

  if (ejecutarNonQuery($insertSQL)) {
    return getLastInserId();
  }

}

function obtenerDespeje(){
    $solicitudes = array();
    $sqlstr = "SELECT if(ed.estadoDespejeId=2,true,null) 'reintentar',sd.solicitudDespejeId,ed.estadoDespejeDescripcion,sd.solicitudDespejeId, sd.estadoDespejeId,sa.solicitudAprobacionId,p.proyectoId,p.proyectoNombre,p.proyectoNombrePropietario,p.proyectoIdentidadPropietario,sd.solicitudDespejeFecha,sd.solicitudDespejeHoras,sd.solicitudDespejeCantidadPersonal,sd.solicitudDespejeCantidadPersonal,sd.comentarioDespeje FROM tblsolicituddespeje as sd, tblsolicitudaprobacion as sa, tblproyectos as p, tblestadodespeje as ed where p.proyectoId=sa.proyectoId and sa.solicitudAprobacionId=sd.tblsolicitudaprobacion_solicitudAprobacionId and sd.estadoDespejeId=ed.estadoDespejeId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

 ?>
