<?php
require_once("libs/dao.php");
require_once('models/factibilidad.model.php');

class vistaComentarios
{
  public static function vista($proyectoNombre,$depto,$direccion,
  $descripcion,$nombrePropietario,$nombreIngeniero,$numeroColeg,
  $voltaje,$tipoConexion,$potencia,$crecimiento,$kva){
    $vista="<div class='right_col' role='main'>
        <div class=''>
          <div class='page-title'>
            <div class='title_left'>
              <h3>Agregar Comentarios</h3>
            </div>
            <div class='title_right'>
              <div class='col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search'>
                <div class='input-group'>
                  <input type='text' class='form-control' placeholder='Search for...'>
                  <span class='input-group-btn'>
                    <button class='btn btn-default' type='button'>Go!</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class='clearfix'></div>
          <div class='row'>
              <div class='col-md-12 col-sm-12 col-xs-12'>
                <div class='x_panel'>
                  <div class='x_title'>
                      <h2>Datos del Usuario</h2>
                      <ul class='nav navbar-right panel_toolbox'>
                        <li><a class='collapse-link'><i class='fa fa-chevron-up'></i></a>
                        </li>
                        <li class='dropdown'>
                          <a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'><i class='fa fa-wrench'></i></a>
                          <ul class='dropdown-menu' role='menu'>
                            <li><a href='#'>Settings 1</a>
                            </li>
                            <li><a href='#'>Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a class='close-link'><i class='fa fa-close'></i></a>
                        </li>
                      </ul>
                      <div class='clearfix'></div>
                    </div>
                    <div class='x_content'>
                      <br>

                        <form method='post' action='index.php?page=modificarUsuario' id='demo-form2' data-parsley-validate class='form-horizontal form-label-left'>
                          <div class='form-group'>

                             <div class='row'>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='txtProyectoNombre'>Nombre del Proyecto *</label>
                                                          <input type='text' id='txtUs'class='form-control' name='txtUs' value='".$proyectoNombre."' disabled='disabled'>
                                                          <input type='hidden' id='txtUsuarioId'class='form-control' name='txtUsuarioId' value='{{usuarioIdentidad}}'>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_lastname'>Departamento *</label>
                                                          <input type='text' id='txtNumeroColegiacion'class='form-control' name='txtNumeroColegiacion' value='".$depto."' disabled='disabled'>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Direccion del Proyecto *</label>
                                                          <input id='txtUsuarioNombre' type='text' name='txtUsuarioNombre' class='form-control'  value='".$direccion."' disabled='disabled'>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Descripcion del Proyecto *</label>
                                                          <input id='txtNumeroCelular' type='text' name='txtNumeroCelular' class='form-control'  value='".$descripcion."' disabled='disabled'>
                                                      </div>
                                                  </div>
                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Nombre del Propietario *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$nombrePropietario."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Nombre del Ingeniero *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$nombreIngeniero."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Numero de Colegiación *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$numeroColeg."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Voltaje *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$voltaje."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Tipo de Conexion *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$tipoConexion."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Potencia *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$potencia."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>Crecimiento Futuro *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$crecimiento." %' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-6'>
                                                      <div class='form-group'>
                                                          <label for='form_name'>KVA a Instalar *</label>
                                                          <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='".$kva."' disabled='disabled'>
                                                      </div>
                                                  </div>

                                                  <div class='col-md-12'>
                                                   <div class='form-group'>
                                                       <label for='form_message'>Comentarios *</label>
                                                       <textarea id='txtDireccion' placeholder='Describa Porque ha sido rechazado el proyecto' name='txtDireccion' class='form-control' rows='4'></textarea>
                                                   </div>
                                               </div>
                          <div class='col-md-12'>
                          <div class='form-group'>
                          <!--Boton Submit-->
                          <button type='submit' id='btnActualizarUsuario' name='btnActualizarUsuario' class='btn btn-default'>
                            Actualizar
                          </button>
                          <!--Fin Boton Submit-->
                          </div>
                      </div>
                </form>
              </div>
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
