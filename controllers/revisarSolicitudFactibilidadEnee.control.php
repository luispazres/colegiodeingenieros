<?php
  require_once("libs/template_engine.php");
  require_once("models/factibilidad.model.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          if (mw_estaLogueado()) {
            if ($_SESSION["estado"]==1) {
              if ($_SESSION["rol"]==2) {
                addCssRef("public/css/home.css");
                renderizar("home",array());
              }else {
                redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
              }
            }else {
            redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
            }
          }else {
            mw_redirectToLogin("page=login");
          }
        }else {
          redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
        }
      }else {
      redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
      }
    }else {
      mw_redirectToLogin("page=login");
    }

  $revisar = array();

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

//Agregar un comentario segun sea aprobada o rechazada la solicitud

  if (isset($_POST["btnComentarFactibilidad"])) {
    if ($_POST["tipo"]=="rechazo") {
    agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],3);
  }elseif ($_POST["tipo"]=="aceptado") {
    agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],2);
  }
  }


  $revisar=verSolicitudesFactbilidadEnee();
  renderizar("revisarSolicitudFactibilidadEnee",array('solicitud'=>$revisar));

  }
  run();
?>
