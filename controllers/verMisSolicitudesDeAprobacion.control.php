<?php
  require_once("libs/template_engine.php");

  require_once("models/aprobacion.model.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          $solicitudes = array();

          if(isset($_GET["codigo"])){
            $codigo=$_GET["codigo"];
            unlink("temp/$codigo.png");
          }

          $solicitudes=obtenerAprobacion();

          renderizar("verMisSolicitudesDeAprobacion", array('solicitudes'=> $solicitudes));
        }else {
          redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
        }
      }else if ($_SESSION["estado"]==4) {
          redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
      }elseif ($_SESSION["estado"]==3) {
        redirectWithMessage("Su cuenta ha sido supendida por: ".$_SESSION["comentario"],"?page=login");
      }
    }else {
      mw_redirectToLogin("page=login");
    }


  }

  run();

 ?>
