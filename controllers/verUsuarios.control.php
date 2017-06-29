<?php
/* Home Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==1) {

            $usuario = array();
            $userId=$_SESSION["userName"];

            if(isset($_POST["btnRechazar"])){

              $numeroId="";
              $estadoCuenta=2;
              $numeroId=$_POST["usuarioIdentidad"];
              actualizarEstado($numeroId,$estadoCuenta);
              }

            if(isset($_POST["btnAceptar"])){
              $respuesta="";
              $numeroId="";
              $estadoCuenta=1;
              $numeroId=$_POST["usuarioIdentidad"];
              $respuesta=actualizarEstado($numeroId,$estadoCuenta);
              echo $respuesta;
            }

            if(isset($_POST["btnActualizarUsuario"])){
              $respuesta="";
              $estadoCuenta=$_POST["cmbEstadoCuenta"];
              $usuarioIdentidad=$_POST["usid"];
              $rolId=$_POST["cmbTipoCuenta"];
              $respuesta=modificarUsuarios($usuarioIdentidad, $estadoCuenta, $rolId);
              }
            $usuario=obtenerUsuariosMenosLogueado($userId);
            renderizar("verUsuarios",array('usuario'=>$usuario),"layoutCimeqh.view.tpl");

        }else {
          redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
        }
      }else {
      redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
      }
    }else {
      mw_redirectToLogin("page=login");
    }

  }
  run();
?>
