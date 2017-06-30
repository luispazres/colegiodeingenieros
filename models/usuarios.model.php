<?php
    //modelo de datos de productos
    require_once("libs/dao.php");

    function obtenerUsuarios(){
          $usuario = array();
          $sqlstr = "SELECT *
          FROM tblusuarios tblu, tblroles tblr, tblestadocuenta tble WHERE tblu.rolId=tblr.rolId
          AND tblu.estadoCuentaId=tble.estadoCuentaId AND tblu.estadoCuentaId=4;";
          $usuario = obtenerRegistros($sqlstr);
          return $usuario;
    }


    function obtenerUsuariosLogueado($id){
          $usuario = array();
          $sqlstr = "select * from tblusuarios as u, tblroles as r, tblestadocuenta as ec  where
          u.estadoCuentaId=ec.estadoCuentaId and u.rolId=r.rolId
          and usuarioIdentidad!='%s' AND u.estadoCuentaId=4;";
          $sqlstr = sprintf($sqlstr, valstr($id));
          $usuario = obtenerRegistros($sqlstr);
          return $usuario;
    }


    function obtenerRoles(){
        $roles = array();
        $sqlstr = "select * from tblroles;";
        $roles = obtenerRegistros($sqlstr);
        return $roles;
    }

    function obtenerEstadoCuenta(){
        $estado = array();
        $sqlstr = "select * from tblestadocuenta;";
        $estado = obtenerRegistros($sqlstr);
        return $estado;
    }


    function obtenerUsuariosPorId($id){
          $usuario = array();
          $sqlstr = "select * from tblusuarios as u, tblroles as r, tblestadocuenta as ec  where
          u.estadoCuentaId=ec.estadoCuentaId and u.rolId=r.rolId and usuarioIdentidad='%s';";
          $sqlstr = sprintf($sqlstr, valstr($id));
          $usuario = obtenerUnRegistro($sqlstr);
          return $usuario;
    }

    function obtenerUsuariosMenosLogueado($id){
          $usuario = array();
          $sqlstr = "select * from tblusuarios as u, tblroles as r, tblestadocuenta as ec  where
          u.estadoCuentaId=ec.estadoCuentaId and u.rolId=r.rolId and usuarioIdentidad!='%s';";
          $sqlstr = sprintf($sqlstr, valstr($id));
          $usuario = obtenerRegistros($sqlstr);
          return $usuario;
    }

    function obtenerTodosLosUsuarios(){
          $usuario = array();
          $sqlstr = sprintf("SELECT *
          FROM tblusuarios tblu, tblroles tblr, tblestadocuenta tble WHERE tblu.rolId=tblr.rolId
          AND tblu.estadoCuentaId=tble.estadoCuentaId;");
          $usuario = obtenerRegistros($sqlstr);
          return $usuario;
    }


    function modificarUsuarios($usuarioIdentidad, $estadoCuenta,$rolId){
    $sqlstr="UPDATE `tblusuarios`
    SET `estadoCuentaId` = %d,
    `rolId` = %d
    WHERE `usuarioIdentidad` = '%s';";
    $sqlstr = sprintf($sqlstr,$estadoCuenta,$rolId,$usuarioIdentidad);
    ejecutarNonQueryConErrores($sqlstr);
    }
    return 0;


    function actualizarEstado($usuarioIdentidad, $estadoCuenta){
    $sqlstr="UPDATE `tblusuarios`
    SET `estadoCuentaId` = $estadoCuenta
    WHERE `usuarioIdentidad` = '$usuarioIdentidad';";
    if(ejecutarNonQuery($sqlstr)){
    return ejecutarNonQueryConErrores($sqlstr);
    }
    return 0;
    }

    function usuarioRechazado($usuarioIdentidad, $monto, $comentario){
    $sqlstr="UPDATE `tblusuarios`
    SET `usuarioComentario` = '%s',
    `estadoCuentaId` = 2,
    `usuarioMora` = %d
    WHERE `usuarioIdentidad` = '%s';";
    $sqlstr = sprintf($sqlstr,$comentario,$monto,$usuarioIdentidad);
    if(ejecutarNonQuery($sqlstr)){
    return ejecutarNonQueryConErrores($sqlstr);
    }
    return 0;
    }


  function insertUsuario($userId, $userPrimernombre, $userSegundonombre, $primerApellido, $segundoApellido,
  $numeroColegiacion, $userCelular,$userTelefono, $userDireccion, $userPassword, $estadoCuenta, $rolId, $email,$fecha){

  $strsql = "INSERT INTO `tblusuarios`
  (`usuarioIdentidad`,`usuarioPrimerNombre`,`usuarioSegundoNombre`,`usuarioPrimerApellido`,
  `usuarioSegundoApellido`,`usuarioNumeroColegiacion`,`usuarioCelular`,`usuarioTelefono`,
  `usuarioDireccion`,`usuarioContrasenia`, estadoCuentaId, rolId, `usuarioCorreo`,`usuarioFechaIngreso`)
  VALUES
  ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', %d, %d, '%s',%d);";
        $strsql = sprintf($strsql,
        valstr($userId),
        valstr($userPrimernombre),
        valstr($userSegundonombre),
        valstr($primerApellido),
        valstr($segundoApellido),
        valstr($numeroColegiacion),
        valstr($userCelular),
        valstr($userTelefono),
        valstr($userDireccion),
        valstr($userPassword),
        $estadoCuenta,
        $rolId,
        valstr($email),
        $fecha);
        ejecutarNonQueryConErrores($strsql);

    }

?>
