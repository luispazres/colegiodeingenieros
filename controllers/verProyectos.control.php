<?php
/* Home Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/proyectos.model.php");

  function run(){
    $proyectos = array( );

    $proyectos=obtenerTodosLosProyectos();

    renderizar("verProyectos",array('proyectos'=>$proyectos));
  }


  run();
?>
