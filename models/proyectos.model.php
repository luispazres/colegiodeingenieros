<?php
    require_once("libs/dao.php");

    function obtenerDepartamentos(){
        $departamentos = array();
        $sqlstr = "select * from tbldepartamentos;";
        $departamentos = obtenerRegistros($sqlstr);
        return $departamentos;
    }

    function obtenerTodosLosProyectos(){
        $departamentos = array();
        $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d where d.departamentoId=p.departamentoId;";
        $departamentos = obtenerRegistros($sqlstr);
        return $departamentos;
    }

    function obtnerProyectosPorId($proyectoId){
        $proyecto = array();
        $sqlstr = "select * from tblproyectos as p, tbldepartamentos as d where d.departamentoId=p.departamentoId;";
        $departamentos = obtenerRegistros($sqlstr);
        return $departamentos;
    }

    function registrarProyecto($txtNombrePropietario,$txtIdentidadPropietario,$txtDireccionPropietario,$txtEmailPropietario,$txtTelefonoPropietario, $txtCelularPropietario, $txtProyectoNombre, $txtLatitud, $txtLongitud, $txtDescripcionProyecto,$cmbDepartamentoProyecto,$txtDireccionProyecto, $txtProyectoNombre){
      $insertSQL = "INSERT INTO `tblProyectos` (`proyectoNombrePropietario`,`proyectoIdentidadPropietario`,
        `proyectoDireccionPropietario`, `proyectoCelularPropietario`,`proyectoEmailPropietario`,
        `proyectoTelefonoPropietario`,departamentoId, `proyectoDescrpcion`, proyectoLatitud, proyectoLongitud,
        `proyectoDireccion`, `usuarioIdentidad`,`proyectoNombre`)
      values ('%s','%s','%s','%s','%s','%s',%d,'%s',%d,%d,'%s','0801199503314','%s');";
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
                           valstr($txtProyectoNombre));
      return ejecutarNonQueryConErrores($insertSQL);
    }
 ?>
