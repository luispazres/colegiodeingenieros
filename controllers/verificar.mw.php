<?php
//middleware de verificación

    function mw_estaLogueado(){
        if( isset($_SESSION["userLogged"]) && $_SESSION["userLogged"] == true){
          return true;
        }else{
          $_SESSION["userLogged"] = false;
          $_SESSION["userName"] = "";
          return false;
        }
    }
    function mw_setEstaLogueado($usuario, $logueado,$rol,$estado,$nombre,$apellido,$comentario){
        if($logueado){
            $_SESSION["userLogged"] = true;
            $_SESSION["userName"] = $usuario;
            $_SESSION["rol"] = $rol;
            $_SESSION["estado"] = $estado;
            $_SESSION["nombre"] = $nombre;
            $_SESSION["apellido"] = $apellido;
            $_SESSION["comentario"] = $comentario;
        }else{
            $_SESSION["userLogged"] = false;
            $_SESSION["userName"] = "";
            $_SESSION["rol"] = "";
            $_SESSION["estado"] = "";
            $_SESSION["nombre"] ="";
            $_SESSION["apellido"] = "";
            $_SESSION["comentario"] = $comentario;
        }
    }
    function mw_redirectToLogin($to){
        $loginstring = urlencode("?".$to);
        $url = "index.php?page=login&returnUrl=".$loginstring;
        header("Location:" . $url);
        die();
    }

?>
