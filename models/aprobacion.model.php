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

function obtenerDocumentos(){
    $solicitudes = array();
    $sqlstr = "SELECT documentoNombre,proyectoNombre,proyectoDescrpcion,documentoDireccion
FROM cimeqh.tbldocumentosaprobacion tbld, tblsolicitudaprobacion tbls, tblproyectos tblp,
tblusuarios tblu
where tbls.solicitudAprobacionId=tbld.solicitudAprobacionId and
tblp.proyectoId=tbls.proyectoId and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.solicitudAprobacionId=84;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

function obtenerUnDocumento(){
    $solicitudes = array();
    $sqlstr = "SELECT documentoNombre,proyectoNombre,proyectoDescrpcion,documentoDireccion
    FROM cimeqh.tbldocumentosaprobacion tbld, tblsolicitudaprobacion tbls, tblproyectos tblp,
    tblusuarios tblu
    where tbls.solicitudAprobacionId=tbld.solicitudAprobacionId and
    tblp.proyectoId=tbls.proyectoId and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.solicitudAprobacionId=84
    order by proyectoNombre limit 1;";
    $solicitudes = obtenerUnRegistro($sqlstr);
    return $solicitudes;
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

function obtenerSolicitudAprobacion(){
    $solicitudes = array();
    $sqlstr = "SELECT  *
    FROM cimeqh.tblsolicitudaprobacion tbls, tblproyectos tblp, tblestadoaprobacion tble,
    tblusuarios tblu, tbldepartamentos tbld, tbldocumentosaprobacion tbldoc
    where tbls.proyectoId=tblp.proyectoId and
    tble.estadoAprobacionId=tbls.estadoSolicitudAprobacion
    and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.departamentoId=tblp.departamentoId
    and tbldoc.solicitudAprobacionId and tbls.estadoSolicitudAprobacion=4;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

function verSolicitudesAprobacion(){
    $solicitudes = array();
    $sqlstr = "SELECT  estadoAprobacionDescripcion, proyectoNombre,departamentoDescripcion ,proyectoDireccion, proyectoDescrpcion,
proyectoLatitud,proyectoLongitud,proyectoNombrePropietario,
proyectoIdentidadPropietario, proyectoTelefonoPropietario, proyectoCelularPropietario,
proyectoEmailPropietario, proyectoDireccionPropietario,
concat(usuarioPrimerNombre, ' ' ,usuarioSegundoNombre ,' ',
usuarioPrimerApellido, ' ', usuarioSegundoApellido) 'ingenieroNombre', usuarioNumeroColegiacion
usuarioNumeroColegiacion, usuarioTelefono, usuarioCelular, solicitudAprobacionId,
solicitudAaprobacionMontoEstimado, solicitudAprobacionCosto
FROM cimeqh.tblsolicitudaprobacion tbls, tblproyectos tblp, tblestadoaprobacion tble,
tblusuarios tblu, tbldepartamentos tbld
where tbls.proyectoId=tblp.proyectoId and
tble.estadoAprobacionId=tbls.estadoSolicitudAprobacion
and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.departamentoId=tblp.departamentoId and tbls.estadoSolicitudAprobacion=4;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}



function obtenerAprobacion(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicitudaprobacion as sa, tblproyectos as p, tblestadoaprobacion as ea where p.proyectoId=sa.proyectoId and sa.estadoSolicitudAprobacion=ea.estadoAprobacionId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}
 ?>
