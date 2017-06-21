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

function obtenerDocumentos($solicitudId){
    $solicitudes = array();
    $sqlstr = "SELECT documentoNombre,proyectoNombre,proyectoDescrpcion,documentoDireccion
FROM cimeqh.tbldocumentosaprobacion tbld, tblsolicitudaprobacion tbls, tblproyectos tblp,
tblusuarios tblu
where tbls.solicitudAprobacionId=tbld.solicitudAprobacionId and
tblp.proyectoId=tbls.proyectoId and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.solicitudAprobacionId=$solicitudId;";
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

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> master
function borrarDocumentoAprobacion($documentoId,$direccion){
  unlink($direccion);
   $sqlstr = sprintf("DELETE FROM `tbldocumentosaprobacion` WHERE `documentosAprobacionId`= %d;",$documentoId);
   if(ejecutarNonQuery($sqlstr)){
       return getLastInserId();
   }
}

<<<<<<< HEAD

=======
=======
>>>>>>> master

function obtenerSolicitudAprobacionPorId($solicitudId){
    $proyecto = array();
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
    and tblu.usuarioIdentidad=tblp.usuarioIdentidad and tbld.departamentoId=tblp.departamentoId and solicitudAprobacionId=%d;
";
    $sqlstr = sprintf($sqlstr, $solicitudId);
    $proyecto = obtenerUnRegistro($sqlstr);
    return $proyecto;
}



<<<<<<< HEAD

=======
>>>>>>> master
>>>>>>> master
function obtnerAprobacionPorId($proyectoId){
    $proyecto = array();
    $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d, tblsolicitudaprobacion as sa where d.departamentoId=p.departamentoId and p.proyectoId=sa.proyectoId and p.proyectoId=%d;";
    $sqlstr = sprintf($sqlstr, $proyectoId);
    $proyecto = obtenerUnRegistro($sqlstr);
    return $proyecto;
}


function obtenerDocumentosAprobacionPorId($aprobacionId){
    $proyecto = array();
    $sqlstr = "SELECT * FROM tbldocumentosaprobacion where solicitudAprobacionId=%d;";
    $sqlstr = sprintf($sqlstr, $aprobacionId);
    $proyecto = obtenerRegistros($sqlstr);
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

function agregarComentarioAprobacion($solicitudId, $comentario, $estado){
  $sqlstr="UPDATE `tblsolicitudaprobacion`
SET
`estadoSolicitudAprobacion` = %d,
`comentarioAprobacion` ='%s'
WHERE `solicitudAprobacionId` = %d;";
$sqlstr = sprintf($sqlstr, $estado,$comentario,$solicitudId);
  if(ejecutarNonQuery($sqlstr)){
  return ejecutarNonQueryConErrores($sqlstr);
  }
}

<<<<<<< HEAD

=======
>>>>>>> master
>>>>>>> master
function obtenerAprobacion(){
    $solicitudes = array();
    $sqlstr = "SELECT if(ea.estadoAprobacionId=3,true,null) 'reintentar', p.proyectoId, p.proyectoNombre, p.proyectoNombrePropietario, p.proyectoIdentidadPropietario, sa.solicitudAprobacionId, ea.estadoAprobacionId, ea.estadoAprobacionDescripcion FROM tblsolicitudaprobacion as sa, tblproyectos as p, tblestadoaprobacion as ea where p.proyectoId=sa.proyectoId and sa.estadoSolicitudAprobacion=ea.estadoAprobacionId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}
 ?>
