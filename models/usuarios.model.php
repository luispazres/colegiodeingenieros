<?php
    //modelo de datos de productos
    require_once("libs/dao.php");

    function obtenerUsuarios(){
          $usuario = array();
          $sqlstr = sprintf("SELECT *
          FROM tblusuarios tblu, tblroles tblr, tblestadocuenta tble WHERE tblu.rolId=tblr.rolId
          AND tblu.estadoCuentaId=tble.estadoCuentaId AND tble.estadoCuentaDescripcion='suspendido';");
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

    function obtnerUsuriosPorId($numeroId){
        $proyecto = array();
        $sqlstr = "select * from tblusuarios as tblu, tblroles as tblr, tblestadocuenta as tble WHERE tblu.rolId=tblr.rolId
        AND tblu.estadoCuentaId=tble.estadoCuentaId AND tblu.usuarioIdentidad='0801-1995-08222asdasd';";
        $sqlstr = sprintf($sqlstr, $numeroId);
        $proyecto = obtenerUnRegistro($sqlstr);

    function obtenerUsuariosPorId($id){
          $usuario = array();
          $sqlstr = "select * from tblusuarios as u, tblroles as r, tblestadocuenta as ec  where u.estadoCuentaId=ec.estadoCuentaId and u.rolId=r.rolId and usuarioIdentidad='0801-1995-08222asdasd';";
          //$sqlstr = sprintf($sqlstr, valstr($id));
          $usuario = obtenerUnRegistro($sqlstr);
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

  function actualizarEstado($usuarioIdentidad, $estadoCuenta){
    $sqlstr="UPDATE `tblusuarios`
    SET `estadoCuentaId` = $estadoCuenta
    WHERE `usuarioIdentidad` = '$usuarioIdentidad';";
    if(ejecutarNonQuery($sqlstr)){
    return ejecutarNonQueryConErrores($sqlstr);
    }
    return 0;
    }


  function insertUsuario($userId, $userPrimernombre, $userSegundonombre, $primerApellido, $segundoApellido,
  $numeroColegiacion, $userCelular,$userTelefono, $userDireccion, $userPassword, $estadoCuenta, $rolId, $email){

  $strsql = "INSERT INTO `tblusuarios`
  (`usuarioIdentidad`,`usuarioPrimerNombre`,`usuarioSegundoNombre`,`usuarioPrimerApellido`,
  `usuarioSegundoApellido`,`usuarioNumeroColegiacion`,`usuarioCelular`,`usuarioTelefono`,
  `usuarioDireccion`,`usuarioContrasenia`, estadoCuentaId, rolId, `usuarioCorreo`)
  VALUES
  ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', %d, %d, '%s');";
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
        valstr($email));
        if(ejecutarNonQuery($strsql)){
            return getLastInserId();
        }
        return 0;
    }

?>
