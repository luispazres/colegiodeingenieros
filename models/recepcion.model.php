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
 ?>
