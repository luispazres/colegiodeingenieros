<?php

  require_once("libs/template_engine.php");

  require_once("models/proyectos.model.php");
  require_once("models/aprobacion.model.php");
  require_once("models/multiUpload.model.php");
  require_once("models/recepcion.model.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          $respuesta="";
          $htmlDatos = array( );

          if (isset($_POST["btnSolicitarAprobacion"])) {

            switch ($_POST["accion"]) {
              case 'INS':
              $respuesta=registrarRecepcion($_POST["solicitudAprobacionId"]);

              $files = $_FILES['userfile']['name'];

              //creamos una nueva instancia de la clase multiupload
             $upload = new Multiupload();
              //llamamos a la funcion upFiles y le pasamos el array de campos file del formulario
              $isUpload = $upload->upFiles($files,$respuesta,"recepcion");
               //llamamos a la funcion upFiles y le pasamos el array de campos file del formulari
              if ($isUpload===FALSE) {
                 borrarRecepcion($respuesta);
                 $alerta=redirectWithMessage("Error al subir el archivo ","index.php?page=recepcionProyectos");
              }else {
                 $header="Location:index.php?page=recepcionProyectos&respuesta=".$respuesta;
                 header($header);
               }

                break;

              case 'UPD':

                $files = $_FILES['userfile']['name'];

                //creamos una nueva instancia de la clase multiupload
                $upload = new Multiupload();
                //llamamos a la funcion upFiles y le pasamos el array de campos file del formulario
                $isUpload = $upload->upFiles($files,$_POST["recepcionId"],"recepcion");
                 //llamamos a la funcion upFiles y le pasamos el array de campos file del formulari

                $header="Location:index.php?page=recepcionProyectos&respuesta=".$respuesta;
                header($header);

                break;

              default:
                # code...
                break;
              }
            }



          if(isset($_GET["proyectoId"])){

            $proyectos=obtnerAprobacionPorId($_GET["proyectoId"]);
            if($proyectos){
              if (isset($_GET["accion"])) {
                $htmlDatos["accion"] = $_GET["accion"];
              }

              if (isset($_GET["recepcionId"])) {
                $htmlDatos["recepcionId"] = $_GET["recepcionId"];
              }

              $htmlDatos["proyectoId"] = $proyectos["proyectoId"];
              $htmlDatos["proyectoNombre"] = $proyectos["proyectoNombre"];
              $htmlDatos["departamentoNombre"] = $proyectos["departamentoDescripcion"];
              $htmlDatos["proyectoDireccion"] = $proyectos["proyectoDireccion"];
              $htmlDatos["proyectoDescrpcion"] = $proyectos["proyectoDescrpcion"];
              $htmlDatos["proyectoLatitud"] = $proyectos["proyectoLatitud"];
              $htmlDatos["proyectoLongitud"] = $proyectos["proyectoLongitud"];
              $htmlDatos["proyectoEmailPropietario"] = $proyectos["proyectoEmailPropietario"];
              $htmlDatos["proyectoNombrePropietario"] = $proyectos["proyectoNombrePropietario"];
              $htmlDatos["proyectoIdentidadPropietario"] = $proyectos["proyectoIdentidadPropietario"];
              $htmlDatos["proyectoCelularPropietario"] = $proyectos["proyectoCelularPropietario"];
              $htmlDatos["proyectoDireccionPropietario"] = $proyectos["proyectoDireccionPropietario"];
              $htmlDatos["proyectoTelefonoPropietario"] = $proyectos["proyectoTelefonoPropietario"];
              $htmlDatos["codigoAprobacion"] = $proyectos["codigoAprobacion"];
              $htmlDatos["solicitudAprobacionId"] = $proyectos["solicitudAprobacionId"];
              }
            }

          renderizar("recepcionProyectos", $htmlDatos);
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
