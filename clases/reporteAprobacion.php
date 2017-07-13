<?php
require_once("libs/dao.php");
require_once('models/aprobacion.model.php');

class vistaReporteAprobacion
{

  public static function vista($codigo,$proyectoNombre,$depto,$direccion,
  $descripcion,$nombrePropietario,$nombreIngeniero,$numeroColeg,
  $monto,$costo){

  $vista="<div class='right_col' role='main'>
        <div class=''>
          <div class='page-title'>
            <h1>Reporte De Aprobación</h1>
            <div class='title_right'>
              <div class='col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search'>
              </div>
            </div>
          </div>
          <div class='clearfix'></div>
          <div class='row'>
              <div class='col-md-12 col-sm-12 col-xs-12'>
                <div class='x_panel'>
                    <div class='x_content'>
                      <br>

                             <div class='row'>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='txtProyectoNombre'>Nombre del Proyecto ".$proyectoNombre."</h2>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_lastname'>Departamento ".$depto."</h2>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Direccion del Proyecto ".$direccion."</h2>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Descripcion del Proyecto ".$descripcion."</h2>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Nombre del Propietario ".$nombrePropietario."</h2>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Nombre del Ingeniero ".$nombreIngeniero."</h2>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Numero de Colegiación ".$numeroColeg."</h2>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Monto Estimado ".$monto. 'Lempiras'. "</h2>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <h2 for='form_name'>Costo de los timbres ".$costo.' Lempiras'."</h2>
                                                      </div>
                                                  </div>
                          <div class='col-md-12'>
                            <form method='post' action='index.php?page=reporteSolicitudAprobacion' id='defaultForm' name'defaultForm' data-parsley-validate class='form-horizontal form-label-left'>
                          <!--Boton Submit-->
                          <button type='submit' id='btnDescargarAprobacion' name='btnDescargarAprobacion' class='btn btn-default'>
                            Descargar PDF
                          </button>
                          <input type='hidden' id='codigoProyecto'class='form-control' name='codigoProyecto' value='".$codigo."'>
                          <!--Fin Boton Submit-->
                      </div>
                </form>
              </div>
          </div>
        </div>
    </div>
    </div>
";

      return $vista;
  }
}

?>
