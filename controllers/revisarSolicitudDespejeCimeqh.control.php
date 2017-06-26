<?php
  require_once("libs/template_engine.php");
  require_once("models/recepcion.model.php");

  function run(){


  if(isset($_POST["btnAceptar"])){
    $respuesta="";
    $numeroId="";
    $estadoCuenta=1;
    $numeroId=$_POST["usuarioIdentidad"];
    $respuesta=actualizarEstado($numeroId,$estadoCuenta);
    echo $respuesta;
  }

//Agregar un comentario segun sea aprobada o rechazada la solicitud

  if (isset($_POST["btnComentarRecepcion"])) {
    if ($_POST["tipo"]=="rechazo") {
    agregarComentarioRecepcion($_POST["codigoProyecto"],$_POST["comentario"],3);
  }elseif ($_POST["tipo"]=="aceptado") {
    agregarComentarioRecepcion($_POST["codigoProyecto"],$_POST["comentario"],1);
  }
  }

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==1) {
          $revisar = array();
        /*
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
        */
        //Agregar un comentario segun sea aprobada o rechazada la solicitud

          if (isset($_POST["btnComentarFactibilidad"])) {
            if ($_POST["tipo"]=="rechazo") {
            agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],1);
          }elseif ($_POST["tipo"]=="aceptado") {
            agregarComentarioFactibilidad($_POST["codigoProyecto"],$_POST["comentario"],2);
          }
          }


          $revisar=obtenerSolicitudRecepcion();
          renderizar("revisarSolicitudRecepcionCimeqh",array('solicitud'=>$revisar),"layoutCimeqh.view.tpl");

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
