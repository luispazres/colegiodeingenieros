<?php
  require_once("libs/dao.php");

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
            $ultimoID=getLastInserId();
            $codigo = base_convert('0801199503314',10,36).base_convert(rand(1,99),10,36).base_convert(time(), 10, 36).base_convert(getLastInserId(), 10, 36);
            $codigo= (string)$codigo;
            $insertSQL2 = "UPDATE `tblsolicitudaprobacion`
            SET `codigoAprobacion` = '%s'
            WHERE `solicitudAprobacionId` = %d";

            $insertSQL2 = sprintf($insertSQL2,valstr($codigo), $ultimoID);
            ejecutarNonQuery($insertSQL2);

              return $ultimoID;

         }
}

function borrarAprobacion($aprobacionID){
   $sqlstr = sprintf("delete from tblsolicitudaprobacion where solicitudAprobacionId= %d",$aprobacionID);
   if(ejecutarNonQuery($sqlstr)){
       return getLastInserId();
   }
}

function obtnerAprobacionPorId($proyectoId){
    $proyecto = array();
    $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d, tblsolicitudaprobacion as sa where d.departamentoId=p.departamentoId and p.proyectoId=sa.proyectoId and p.proyectoId=%d;";
    $sqlstr = sprintf($sqlstr, $proyectoId);
    $proyecto = obtenerUnRegistro($sqlstr);
    return $proyecto;
}

function obtenerAprobacion(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicitudaprobacion as sa, tblproyectos as p, tblestadoaprobacion as ea where p.proyectoId=sa.proyectoId and sa.estadoSolicitudAprobacion=ea.estadoAprobacionId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}
 ?>
