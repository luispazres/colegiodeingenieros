<?php
    //modelo de datos de productos
    require_once("libs/dao.php");

    function obtenerUsuarios(){
        $usuario = array();
        $sqlstr = sprintf("SELECT *
  FROM tblusuarios tblu, tblroles tblr, tblestadocuenta tble WHERE tblu.rolId=tblr.rolId
  AND tblu.estadoCuentaId=tble.estadoCuentaId;");
        $usuario = obtenerRegistros($sqlstr);
        return $usuario;
    }

  function actualizarEstado($usuarioIdentidad, $estadoCuenta){
    $sqlstr="UPDATE `cimeqh`.`tblusuarios`
    SET `estadoCuentaId` = $estadoCuenta
    WHERE `usuarioIdentidad` = $usuarioIdentidad;";
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
