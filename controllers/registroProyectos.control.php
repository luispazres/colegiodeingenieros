<?php

  require_once("libs/template_engine.php");

  require_once("models/proyectos.model.php");

  function run(){
    $departamentos= array( );
    $proyecto = array( );
    $departamentos=obtenerDepartamentos();
    $tipos=obtenerTipoProyectos();
    $respueta="";

    if (isset($_POST["btnRegistrarProyecto"])) {
      $proyecto["txtNombrePropietario"]=$_POST["txtPropietarioNombre"];
      $proyecto["txtDireccionPropietario"]=$_POST["txtDireccionPropietario"];
      $proyecto["txtEmailPropietario"]=$_POST["txtEmailPropietario"];
      $proyecto["txtTelefonoPropietario"]=$_POST["txtTelefonoPropietario"];
      $proyecto["txtCelularPropietario"]=$_POST["txtCelularPropietario"];
      $proyecto["txtNombreProyecto"]=$_POST["txtNombreProyecto"];
      $proyecto["txtLatitud"]=$_POST["txtLatitud"];
      $proyecto["txtLongitud"]=$_POST["txtLongitud"];
      $proyecto["txtIdentidadPropietario"]=$_POST["txtIdentidadPropietario"];
      $proyecto["cmbDepartamentoProyecto"]=$_POST["cmbProyectoDepartamento"];
      $proyecto["txtDireccionProyecto"]=$_POST["txtDireccionProyecto"];
      $proyecto["txtDescripcionProyecto"]=$_POST["txtDescripcionProyecto"];
      $proyecto["cmbProyectoTipo"]=$_POST["cmbProyectoTipo"];

      $respueta=registrarProyecto($proyecto["txtNombrePropietario"],
      $proyecto["txtIdentidadPropietario"],
      $proyecto["txtDireccionPropietario"],
      $proyecto["txtEmailPropietario"],
      $proyecto["txtTelefonoPropietario"],
      $proyecto["txtCelularPropietario"],
      $proyecto["txtNombreProyecto"],
      $proyecto["txtLatitud"],
      $proyecto["txtLongitud"],
      $proyecto["txtDescripcionProyecto"],
      $proyecto["cmbDepartamentoProyecto"],
      $proyecto["txtDireccionProyecto"],
      $proyecto["txtNombreProyecto"],
      $proyecto["cmbProyectoTipo"]);

      $location="Location:index.php?page=registroProyectos&error=".$respueta;
      header($location);
    }

    renderizar("registroProyectos",  array("departamentos"=>$departamentos, "tipos"=>$tipos));

  }

  run();
?>
