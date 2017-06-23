<?php
//middleware de configuración de todo el sitio

function site_init(){
  if (mw_estaLogueado()) {
    addToContext("page_title","Simple MVC Example");
    addToContext($_SESSION["nombre"],"nombre");
    addToContext($_SESSION["apellido"],"apellido");
  }
  addToContext("prueba","CIMEQH");
}

site_init();
?>
