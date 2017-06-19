<?php
    require_once("libs/dao.php");

    function obtenerDepartamentos(){
        $departamentos = array();
        $sqlstr = "select * from tbldepartamentos;";
        $departamentos = obtenerRegistros($sqlstr);
        return $departamentos;
    }

    function obtenerTipoProyectos(){
        $tipos = array();
        $sqlstr = "select * from tbltipoproyectos;";
        $tipos = obtenerRegistros($sqlstr);
        return $tipos;
    }

    function obtenerVoltajes(){
        $voltajes = array();
        $sqlstr = "select * from tblvoltajes;";
        $voltajes = obtenerRegistros($sqlstr);
        return $voltajes;
    }

    function verSolicitudesFactbilidad(){
        $solicitudFactibilidad = array();
        $sqlstr = "SELECT tblsf.estadoFactibilidadId,proyectoNombre, departamentoDescripcion, proyectoDireccion, proyectoDescrpcion,
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
solicitudFactibilidadId, voltajeId, conexionId, solicitudFactibilidadPotencia, solicitudadFactibilidadCrecimientoEsperado, solicitudFactibilidadKva, estadoFactibilidadId, proyectoId, conexionId, conexionDescripcion, voltajeId, voltajeDescripcion, departamentoId, departamentoDescripcion, proyectoId, proyectoNombrePropietario, proyectoIdentidadPropietario, proyectoCelularPropietario, proyectoEmailPropietario, proyectoDireccionPropietario, proyectoTelefonoPropietario, departamentoId, proyectoDescrpcion, proyectoLatitud, proyectoLongitud, proyectoDireccion, usuarioIdentidad, proyectoNombre, usuarioIdentidad, usuarioPrimerNombre, usuarioSegundoNombre, usuarioPrimerApellido, usuarioSegundoApellido, usuarioNumeroColegiacion, usuarioCelular, usuarioTelefono, usuarioDireccion, usuarioContrasenia, estadoCuentaId, rolId, usuarioCorreo
*/

    function obtenerConexions(){
        $conexiones = array();
        $sqlstr = "select * from tblconexiones;";
        $conexiones = obtenerRegistros($sqlstr);
        return $conexiones;
    }

    function obtenerTodosLosProyectos(){
        $departamentos = array();
        $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d where d.departamentoId=p.departamentoId;";
        $departamentos = obtenerRegistros($sqlstr);
        return $departamentos;
    }

    function obtnerProyectosPorId($proyectoId){
        $proyecto = array();
        $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d where d.departamentoId=p.departamentoId and p.proyectoId=%d;";
        $sqlstr = sprintf($sqlstr, $proyectoId);
        $proyecto = obtenerUnRegistro($sqlstr);
        return $proyecto;
    }

    

    function registrarProyecto($txtNombrePropietario,$txtIdentidadPropietario,$txtDireccionPropietario,$txtEmailPropietario,$txtTelefonoPropietario, $txtCelularPropietario, $txtProyectoNombre, $txtLatitud, $txtLongitud, $txtDescripcionProyecto,$cmbDepartamentoProyecto,$txtDireccionProyecto, $txtProyectoNombre,$tipos){
      $insertSQL = "INSERT INTO `tblProyectos` (`proyectoNombrePropietario`,`proyectoIdentidadPropietario`,
        `proyectoDireccionPropietario`, `proyectoCelularPropietario`,`proyectoEmailPropietario`,
        `proyectoTelefonoPropietario`,departamentoId, `proyectoDescrpcion`, proyectoLatitud, proyectoLongitud,
        `proyectoDireccion`, `usuarioIdentidad`,`proyectoNombre`,`tipoId`)
      values ('%s','%s','%s','%s','%s','%s',%d,'%s',%f,%f,'%s','0801199503314','%s',%d);";
      $insertSQL = sprintf($insertSQL,
                           valstr($txtNombrePropietario),
                           valstr($txtIdentidadPropietario),
                           valstr($txtDireccionPropietario),
                           valstr($txtCelularPropietario),
                           valstr($txtEmailPropietario),
                           valstr($txtTelefonoPropietario),
                           $cmbDepartamentoProyecto,
                           valstr($txtDescripcionProyecto),
                           $txtLatitud,
                           $txtLongitud,
                           valstr($txtDireccionProyecto),
                           valstr($txtProyectoNombre),
                           $tipos);
      return ejecutarNonQueryConErrores($insertSQL);
    }
 ?>
