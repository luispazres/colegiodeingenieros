<?php

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

 ?>
