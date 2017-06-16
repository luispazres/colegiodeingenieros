<?php

  require_once("libs/template_engine.php");

  require_once("models/proyectos.model.php");
  require_once("models/aprobacion.model.php");
  require_once("models/multiUpload.model.php");

  function run(){

    $respuesta="";
    $htmlDatos = array( );

    if (isset($_POST["btnSolicitarAprobacion"])) {

      $respuesta=registrarAprobacion($_POST["txtMonto"],$_POST["txtTotalTimbres"],$_POST["proyectoId"]);

      $files = $_FILES['userfile']['name'];

      //creamos una nueva instancia de la clase multiupload
     $upload = new Multiupload();
      //llamamos a la funcion upFiles y le pasamos el array de campos file del formulario
      $isUpload = $upload->upFiles($files,$respuesta);
       //llamamos a la funcion upFiles y le pasamos el array de campos file del formulari
      if ($isUpload===FALSE) {
         borrarAprobacion($respuesta);
         $alerta=redirectWithMessage("Error al subir el archivo ","index.php?page=aprobacionProyectos");
      }else {
         header("Location:index.php?page=aprobacionProyectos");
       }
    }

    if(isset($_GET["proyectoId"])){

      $proyectos=obtnerProyectosPorId($_GET["proyectoId"]);
      if($proyectos){
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
        }
      }

    renderizar("aprobacionProyectos", $htmlDatos);
  }

  run();

?>
