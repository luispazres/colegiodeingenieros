<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");

  function run(){
    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==1) {
          $revisar = array();
          $error="";
        //Agregar un comentario segun sea aprobada o rechazada la solicitud

          if (isset($_POST["btnComentarAprobacion"])) {
            if ($_POST["tipo"]=="rechazo") {
            $error=agregarComentarioAprobacion($_POST["codigoProyecto"],$_POST["comentario"],3);
          }elseif ($_POST["tipo"]=="aceptado") {
            agregarComentarioAprobacion($_POST["codigoProyecto"],$_POST["comentario"],1);
          }
          }


          $revisar=verSolicitudesAprobacion();
          //$documentos=verSolicitudesArchivos($revisar[""]);
          renderizar("revisarSolicitudAprobacionCimeqh",array('solicitud'=>$revisar),"layoutCimeqh.view.tpl");
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
