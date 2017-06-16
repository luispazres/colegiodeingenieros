<?php

  require_once('libs/template_engine.php');
  require_once('models/factibilidad.model.php');
    require_once('models/proyectos.model.php');

  function run(){
    $solicitud = array();
    $htmlDatos = array();
    $htmlView = '';

    if(isset($_GET["accion"])){

    switch ($_GET["accion"]) {
    case 'factibilidad':
    $solicitud=verSolicitudesFactbilidad();
    if($solicitud){
      $htmlDatos["Nombre"] = $solicitud["proyectoNombre"];
      $htmlDatos["departamentoDescripcion"] = $solicitud["departamentoDescripcion"];
      $htmlDatos["proyectoDireccion"] = $solicitud["proyectoDireccion"];
      $htmlDatos["proyectoNombrePropietario"] = $solicitud["proyectoNombrePropietario"];
      $htmlDatos["proyectoIdentidadPropietario"] = $solicitud["proyectoIdentidadPropietario"];
      $htmlDatos["ingenieroNombre"] = $solicitud["ingenieroNombre"];
      $htmlDatos["usuarioNumeroColegiacion"] = $solicitud["usuarioNumeroColegiacion"];
      $htmlDatos["voltajeDescripcion"] = $solicitud["voltajeDescripcion"];
      $htmlDatos["conexionDescripcion"] = $solicitud["conexionDescripcion"];
      $htmlDatos["solicitudFactibilidadPotencia"] = $solicitud["solicitudFactibilidadPotencia"];
      $htmlDatos["solicitudadFactibilidadCrecimientoEsperado"] = $solicitud["solicitudadFactibilidadCrecimientoEsperado"];
      $htmlDatos["solicitudFactibilidadKva"] = $solicitud["solicitudFactibilidadKva"];
      $htmlDatos["vista"]="<div class='right_col' role='main'>
          <div class=''>
            <div class='page-title'>
              <div class='title_left'>
                <h3>Modificar Usuarios</h3>
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
                                                            <input type='text' id='txtUs'class='form-control' name='txtUs' value='".$htmlDatos["hola"]."' disabled='disabled'>
                                                            <input type='hidden' id='txtUsuarioId'class='form-control' name='txtUsuarioId' value='{{usuarioIdentidad}}'>
                                                        </div>
                                                    </div>
                                                    <div class='col-md-6'>
                                                        <div class='form-group'>
                                                            <label for='form_lastname'>Departamento *</label>
                                                            <input type='text' id='txtNumeroColegiacion'class='form-control' name='txtNumeroColegiacion' value='{{usuarioNumeroColegiacion}}' disabled='disabled'>
                                                        </div>
                                                    </div>
                                                    <div class='col-md-6'>
                                                        <div class='form-group'>
                                                            <label for='form_name'>Direccion *</label>
                                                            <input id='txtUsuarioNombre' type='text' name='txtUsuarioNombre' class='form-control'  value='{{usuarioPrimerNombre}} {{usuarioSegundoNombre}} {{usuarioPrimerApellido}} {{usuarioSegundoApellido}}' disabled='disabled'>
                                                        </div>
                                                    </div>
                                                    <div class='col-md-6'>
                                                        <div class='form-group'>
                                                            <label for='form_name'>Nombre Propietario *</label>
                                                            <input id='txtNumeroCelular' type='text' name='txtNumeroCelular' class='form-control'  value='{{usuarioCelular}}' disabled='disabled'>
                                                        </div>
                                                    </div>
                                                    <div class='col-md-6'>
                                                        <div class='form-group'>
                                                            <label for='form_name'>Numero Identida del Propietario *</label>
                                                            <input id='txtNumeroTelefono' type='text' name='txtNumeroTelefono' class='form-control'  value='{{usuarioTelefono}}' disabled='disabled'>
                                                        </div>
                                                    </div>
                                                    <div class='col-md-12'>
                                                     <div class='form-group'>
                                                         <label for='form_message'>Nombre del Ingeniero *</label>
                                                         <textarea id='txtDireccion' name='txtDireccion' class='form-control' disabled='disabled' rows='4'>{{usuarioDireccion}}</textarea>
                                                     </div>
                                                 </div>


                                                <div class='col-md-6'>
                                                    <div class='form-group'>
                                                        <label for='form_name'>Numero de Colegiación *</label>
                                                        <select ng-model='datos.departamento' name='cmbEstadoCuenta' id='cmbEstadoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                                        <option value='{{rolId}}' selected>{{rolDescripcion}}</option>
                                                        {{foreach roles}}
                                                          <option value='{{rolId}}'>{{rolDescripcion}}</option>
                                                        {{endfor roles}}
                                                        </select>
                                                    </div>
                                                </div>
                                                    <div class='col-md-6'>
                                                        <div class='form-group'>
                                                            <label for='form_lastname'>Voltaje Solicitado *</label>
                                                            <select ng-model='datos.departamento' name='cmbTipoCuenta' id='cmbTipoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                                                <option value='{{estadoCuentaId}}' selected>{{estadoCuentaDescripcion}}</option>
                                                            {{foreach estado}}
                                                              <option value='{{estadoCuentaId}}'>{{estadoCuentaDescripcion}}</option>
                                                            {{endfor estado}}
                    																				</select>
                                                        </div>
                                                    </div>
                    													</div>

                                              <div class='col-md-6'>
                                                  <div class='form-group'>
                                                      <label for='form_lastname'>Tipo de Conexión Solicitado *</label>
                                                      <select ng-model='datos.departamento' name='cmbTipoCuenta' id='cmbTipoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                                          <option value='{{estadoCuentaId}}' selected>{{estadoCuentaDescripcion}}</option>
                                                      {{foreach estado}}
                                                        <option value='{{estadoCuentaId}}'>{{estadoCuentaDescripcion}}</option>
                                                      {{endfor estado}}
                                                      </select>
                                                  </div>
                                              </div>
                                        </div>


                                        <div class='col-md-6'>
                                            <div class='form-group'>
                                                <label for='form_lastname'>Potencia *</label>
                                                <select ng-model='datos.departamento' name='cmbTipoCuenta' id='cmbTipoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                                    <option value='{{estadoCuentaId}}' selected>{{estadoCuentaDescripcion}}</option>
                                                {{foreach estado}}
                                                  <option value='{{estadoCuentaId}}'>{{estadoCuentaDescripcion}}</option>
                                                {{endfor estado}}
                                                </select>
                                            </div>
                                        </div>
                                  </div>


                                  <div class='col-md-6'>
                                      <div class='form-group'>
                                          <label for='form_lastname'>Crecimiento Futuro *</label>
                                          <select ng-model='datos.departamento' name='cmbTipoCuenta' id='cmbTipoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                              <option value='{{estadoCuentaId}}' selected>{{estadoCuentaDescripcion}}</option>
                                          {{foreach estado}}
                                            <option value='{{estadoCuentaId}}'>{{estadoCuentaDescripcion}}</option>
                                          {{endfor estado}}
                                          </select>
                                      </div>
                                  </div>
                            </div>


                            <div class='col-md-6'>
                                <div class='form-group'>
                                    <label for='form_lastname'>KV a Instalar *</label>
                                    <select ng-model='datos.departamento' name='cmbTipoCuenta' id='cmbTipoCuenta' class='form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched'>
                                        <option value='{{estadoCuentaId}}' selected>{{estadoCuentaDescripcion}}</option>
                                    {{foreach estado}}
                                      <option value='{{estadoCuentaId}}'>{{estadoCuentaDescripcion}}</option>
                                    {{endfor estado}}
                                    </select>
                                </div>
                            </div>
                      </div>




                    				<!--Boton Submit-->
                    				<button type='submit' id='btnActualizarUsuario' name='btnActualizarUsuario' class='btn btn-default'>
                    					Actualizar
                    				</button>
                    				<!--Fin Boton Submit-->
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
 ";
    }

    break;


    }

  }

    renderizar('comentarios',  $htmlDatos);
 }
  run();

?>
