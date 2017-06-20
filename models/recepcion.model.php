<?php

require_once("libs/dao.php");

function registrarRecepcion($aprobacionId){
  $insertSQL = "INSERT INTO `tblsolicitudrecepcion`
(`solicitudRecepcioEstado`,
`solicitudAprobacionId`)
VALUES
(1,%d);";
  $insertSQL = sprintf($insertSQL,$aprobacionId);

  if (ejecutarNonQuery($insertSQL)) {
    return getLastInserId();
  }

}

function borrarRecepcion($recepcionId){
   $sqlstr = sprintf("delete from tblsolicitudrecepcion where solicitudRecepcionId= %d",$recepcionId);
   if(ejecutarNonQuery($sqlstr)){
       return getLastInserId();
   }
}

function obtenerRecepcion(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicitudrecepcion as sr, tblsolicitudaprobacion as sa, tblproyectos as p, tblestadorecepcion as er where p.proyectoId=sa.proyectoId and sa.solicitudAprobacionId=sr.solicitudAprobacionId and sr.solicitudRecepcioEstado=er.estadoRecepcionId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}
 ?>
