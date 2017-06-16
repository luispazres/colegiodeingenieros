<?php

function registrarAprobacion($monto, $costo, $proyectoId){
  $insertSQL = "INSERT INTO `tblsolicitudaprobacion`
(`solicitudAaprobacionMontoEstimado`,
`solicitudAprobacionCosto`,
`estadoSolicitudAprobacion`,
`proyectoId`)
VALUES
(%f,%f,4,%d);";
  $insertSQL = sprintf($insertSQL,$monto, $costo, $proyectoId);

  if(ejecutarNonQuery($insertSQL)){
             return getLastInserId();
         }
}

function borrarAprobacion($aprobacionID){
   $sqlstr = sprintf("delete from tblsolicitudaprobacion where solicitudAprobacionId= %d",$aprobacionID);
   if(ejecutarNonQuery($sqlstr)){
       return getLastInserId();
   }
}
 ?>
