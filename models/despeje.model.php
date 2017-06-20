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

function obtenerDespeje(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicituddespeje as sd, tblsolicitudaprobacion as sa, tblproyectos as p, tblestadodespeje as ed where p.proyectoId=sa.proyectoId and sa.solicitudAprobacionId=sd.tblsolicitudaprobacion_solicitudAprobacionId and sd.estadoDespejeId=ed.estadoDespejeId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

 ?>
