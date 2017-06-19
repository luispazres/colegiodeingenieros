<?php
require_once("libs/dao.php");

  require_once("libs/dao.php");

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

//<<<<<<< Updated upstream
//=======
function agregarComentarioFactibilidad($solicitudId, $comentario, $estado){
  $sqlstr="UPDATE `tblsolicitudfactibilidad`
  SET `estadoFactibilidadId` = $estado,
  `comentario` = '$comentario'
  WHERE `solicitudFactibilidadId` = $solicitudId;";
  if(ejecutarNonQuery($sqlstr)){
  return ejecutarNonQueryConErrores($sqlstr);
  }
}


//>>>>>>> Stashed changes
function verFactbilidadPorId($factId){
$solicitudFactibilidad = array();
$sqlstr = "SELECT  tblsf.solicitudFactibilidadId,proyectoNombre,departamentoDescripcion,proyectoDireccion,proyectoDescrpcion,
proyectoNombrePropietario, concat(usuarioPrimerNombre, ' ' ,usuarioSegundoNombre ,' ' ,usuarioPrimerApellido, ' ', usuarioSegundoApellido) 'ingenieroNombre',
usuarioNumeroColegiacion, voltajeDescripcion,conexionDescripcion,solicitudFactibilidadPotencia,solicitudadFactibilidadCrecimientoEsperado,
solicitudFactibilidadKva,estadoFactibilidadDescripcion
FROM tblsolicitudfactibilidad tblsf, tblconexiones tblc, tblvoltajes tblv, tbldepartamentos tbld,tblproyectos tblp,
tblusuarios tblu, tblestadofactibilidad
where tblsf.proyectoId=tblp.proyectoId and tblsf.conexionId=tblc.conexionId
and tblsf.voltajeId=tblv.voltajeId and tblp.usuarioIdentidad=tblu.usuarioIdentidad
and tbld.departamentoId=tblp.departamentoId
and tblsf.estadoFactibilidadId=tblestadofactibilidad.estadoFactibilidadId
and tblsf.solicitudFactibilidadId=$factId;";
$solicitudFactibilidad = obtenerUnRegistro($sqlstr);
return $solicitudFactibilidad;
}

function verSolicitudesFactbilidad(){
    $solicitudFactibilidad = array();
    $sqlstr = "SELECT  tblsf.solicitudFactibilidadId,tblsf.estadoFactibilidadId,proyectoNombre, departamentoDescripcion, proyectoDireccion, proyectoDescrpcion,
    proyectoLatitud,proyectoLongitud, proyectoNombrePropietario,
    proyectoIdentidadPropietario, proyectoTelefonoPropietario, proyectoCelularPropietario,
    proyectoEmailPropietario, proyectoDireccionPropietario,concat(usuarioPrimerNombre, ' ' ,usuarioSegundoNombre ,' '
    ,usuarioPrimerApellido, ' ', usuarioSegundoApellido) 'ingenieroNombre',
    usuarioNumeroColegiacion, usuarioTelefono, usuarioCelular, voltajeDescripcion, conexionDescripcion,
    solicitudFactibilidadPotencia, solicitudadFactibilidadCrecimientoEsperado, solicitudFactibilidadKva,
    estadoFactibilidadDescripcion
    FROM tblsolicitudfactibilidad tblsf, tblconexiones tblc, tblvoltajes tblv, tbldepartamentos tbld,
    tblproyectos tblp, tblusuarios tblu,  tblestadofactibilidad
    where tblsf.proyectoId=tblp.proyectoId and tblsf.conexionId=tblc.conexionId
    and tblsf.voltajeId=tblv.voltajeId and tblp.usuarioIdentidad=tblu.usuarioIdentidad
    and tbld.departamentoId=tblp.departamentoId
    and tblsf.estadoFactibilidadId=tblestadofactibilidad.estadoFactibilidadId
    and tblsf.estadoFactibilidadId=4;";
    $solicitudFactibilidad = obtenerRegistros($sqlstr);
    return $solicitudFactibilidad;
}
/*
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
*/
function obtenerSolicitudesFactibilidad(){
    $solicitudes = array();
    $sqlstr = "SELECT * FROM tblsolicitudfactibilidad as sf, tblproyectos as p, tblestadofactibilidad as ef where p.proyectoId=sf.proyectoId and sf.estadoFactibilidadId=ef.estadoFactibilidadId;";
    $solicitudes = obtenerRegistros($sqlstr);
    return $solicitudes;
}

 ?>
