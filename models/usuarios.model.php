<?php
    //modelo de datos de productos
    require_once("libs/dao.php");

    function obtenerUsuario($userName){
        $usuario = array();
        $sqlstr = sprintf("SELECT idusuarios, usuarioemail, usuarionom, usuariopwd, usuarioest, UNIX_TIMESTAMP(usuariofching) as usuariofching, usuariolstlgn, usuariofatm, usuariofchlp FROM usuarios where usuarioemail = '%s';",$userName);

        $usuario = obtenerUnRegistro($sqlstr);
        return $usuario;
    }

    function insertUsuario($userId, $userPrimernombre, $userSegundonombre, $primerApellido, $segundoApellido,
    $numeroColegiacion, $userCelular,$userTelefono, $userDireccion, $userPassword, $estadoCuenta, $rolId){

        $strsql = "INSERT INTO `tblusuarios`
  (`usuarioIdentidad`,`usuarioPrimerNombre`,`usuarioSegundoNombre`,`usuarioPrimerApellido`,
  `usuarioSegundoApellido`,`usuarioNumeroColegiacion`,`usuarioCelular`,`usuarioTelefono`,
  `usuarioDireccion`,`usuarioContrasenia`, estadoCuentaId, rolId)
  VALUES
  ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', %d, %d);";
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
        $rolId);
        if(ejecutarNonQuery($strsql)){
            return getLastInserId();
        }
        return 0;
    }

?>
