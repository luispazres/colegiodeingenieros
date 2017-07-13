<?php
  require_once("libs/template_engine.php");
  require_once("models/aprobacion.model.php");
  require_once("libs/dompdf/dompdf_config.inc.php");

  function run(){
    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==4) {
          $revisar = array();
          $error="";
        //Agregar un comentario segun sea aprobada o rechazada la solicitud

          if (isset($_POST["btnDescargarAprobacion"])) {
            $solicitud=obtenerSolicitudAprobacionPorId($_POST["codigoProyecto"]);
            if($solicitud){
              $htmlDatos["proyectoNombre"] = $solicitud["proyectoNombre"];
              $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
              $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
              $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
              $htmlDatos["proyectoDescrpcion"] = $solicitud["proyectoDescrpcion"];
              $htmlDatos["usuarioPrimerNombre"] = $solicitud["usuarioPrimerNombre"];
              $htmlDatos["usuarioSegundoNombre"] = $solicitud["usuarioSegundoNombre"];
              $htmlDatos["usuarioSegundoApellido"] = $solicitud["usuarioSegundoApellido"];
              $htmlDatos["usuarioPrimerApellido"] = $solicitud["usuarioPrimerApellido"];
              $htmlDatos["ingenieroNombre"] =  $htmlDatos["usuarioPrimerNombre"]." ".  $htmlDatos["usuarioSegundoNombre"]." ".$htmlDatos["usuarioPrimerApellido"]." ".  $htmlDatos["usuarioSegundoApellido"];
              $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
              $htmlDatos["solicitudAaprobacionMontoEstimado"] = $solicitud["solicitudAaprobacionMontoEstimado"];
              $htmlDatos["solicitudAprobacionCosto"] = $solicitud["solicitudAprobacionCosto"];
            ob_start();
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
                                                                    <h2 for='txtProyectoNombre'>Nombre del Proyecto ".$htmlDatos["proyectoNombre"]."</h2>
                                                                </div>
                                                            </div>
                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_lastname'>Departamento ".$htmlDatos["departamentoDescripcion"]."</h2>
                                                                </div>
                                                            </div>
                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Direccion del Proyecto ".$htmlDatos["proyectoDireccion"]."</h2>
                                                                </div>
                                                            </div>
                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Descripcion del Proyecto ".$htmlDatos["proyectoNombrePropietario"]."</h2>
                                                                </div>
                                                            </div>
                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Nombre del Propietario ".$htmlDatos["proyectoDescrpcion"]."</h2>
                                                                </div>
                                                            </div>

                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Nombre del Ingeniero ".$htmlDatos["ingenieroNombre"]."</h2>
                                                                </div>
                                                            </div>

                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Numero de Colegiación ".$htmlDatos["usuarioNumeroColegiacion"]."</h2>
                                                                </div>
                                                            </div>

                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Monto Estimado ".$htmlDatos["solicitudAaprobacionMontoEstimado"]. 'Lempiras'. "</h2>
                                                                </div>
                                                            </div>

                                                            <div class='col-md-6'>
                                                                <div class='form-group'>
                                                                    <h2 for='form_name'>Costo de los timbres ".$htmlDatos["solicitudAprobacionCosto"].' Lempiras'."</h2>
                                                                </div>
                                                            </div>
                                    <div class='col-md-12'>
                                      <form method='post' action='index.php?page=reporteSolicitudAprobacion' id='defaultForm' name'defaultForm' data-parsley-validate class='form-horizontal form-label-left'>
                                    <!--Boton Submit-->
                                    <button type='submit' id='btnDescargarAprobacion' name='btnDescargarAprobacion' class='btn btn-default'>
                                      Descargar PDF
                                    </button>
                                    <!--Fin Boton Submit-->
                                </div>
                          </form>
                        </div>
                    </div>
                  </div>
              </div>
              </div>
          ";
            $dompdf = new DOMPDF();
            $dompdf->load_html(ob_get_clean());
            $dompdf->render();
            $pdf = $dompdf->output();
            $filename = "ejemplo".time().'.pdf';
            file_put_contents($filename, $pdf);
            $dompdf->stream($filename);
          }
        }


          $revisar=verSolicitudesAprobacion();
          //$documentos=verSolicitudesArchivos($revisar[""]);
          renderizar("reporteSolicitudAprobacion",array('solicitud'=>$revisar),"layoutCimeqh.view.tpl");
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
