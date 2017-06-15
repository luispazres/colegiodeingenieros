<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Factibilidad de Proyectos</h3>
        </div>
        <h1>{{proyectoId}}</h1>
        <div class="title_right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                  <h2>Datos del Proyecto</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Settings 1</a>
                        </li>
                        <li><a href="#">Settings 2</a>
                        </li>
                      </ul>
                    </li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <br>

                    <form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">
                      <div class="form-group">

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="txtProyectoNombre">Nombre del proyecto *</label>
                                                      <input type="text" id="txtProyectoNombre"class="form-control" name="txtProyectoNombre" value="{{proyectoNombre}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Departamento *</label>
                                                      <input type="text" id="txtproyectoDepartamento"class="form-control" name="txtproyectoDepartamento" value="{{departamentoNombre}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Dirección Exacta del Proyecto *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control"  value="{{proyectoDireccion}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-12">
                                               <div class="form-group">
                                                   <label for="form_message">Descripcion del Proyecto *</label>
                                                   <textarea id="form_message" name="message" class="form-control" disabled="disabled" rows="4">{{proyectoDescrpcion}}</textarea>
                                               </div>
                                           </div>
                                          </div>

                                          <h4>Coordenadas</h4>

                                          <div class="row">
                                                                      <div class="col-md-6">
                                                                          <div class="form-group">
                                                                              <label for="form_name">Latitud *</label>
                                                                              <input id="form_name" type="text" name="name" class="form-control" value="{{proyectoLatitud}}" disabled="disabled">
                                                                          </div>
                                                                      </div>
                                                                      <div class="col-md-6">
                                                                          <div class="form-group">
                                                                              <label for="form_lastname">Longitud *</label>
                                                                              <input id="form_lastname" type="text" name="surname" class="form-control" value="{{proyectoLongitud}}" disabled="disabled">
                                                                          </div>
                                                                      </div>
                                          </div>

              					 <h4>Datos Propietario</h4></br>
              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" value="{{proyectoNombrePropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Numero de Identidad del Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" value="{{proyectoIdentidadPropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Telefono Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" value="{{proyectoTelefonoPropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Celular Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" value="{{proyectoCelularPropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Email Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control"value="{{proyectoEmailPropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Dirección Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" value="{{proyectoDireccionPropietario}}" disabled="disabled">
                                                  </div>
                                              </div>
                                          </div>


              													<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Voltaje *</label>
                                                      <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
                                                      <option value="">Seleccione...</option>
                                                      {{foreach voltajes}}
                                                        <option value="{{voltajeId}}">{{voltajeDescripcion}}</option>
                                                      {{endfor voltajes}}
              																				</select>
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Tipo de Conexión *</label>
                                                      <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
                                                      <option value="">Seleccione...</option>
                                                      {{foreach conexiones}}
                                                        <option value="{{conexionId}}">{{conexionDescripcion}}</option>
                                                      {{endfor conexiones}}
              																				</select>
                                                  </div>
                                              </div>
              													</div>

              		<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Potencia *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Potencia *">
                                                  </div>
                                              </div>
              																<div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Crecimiento Futuro Esperado en % *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Crecimiento Futuro Esperado en % *">
                                                  </div>
                                              </div>
              		</div>


              			<div class="row">

                                          </div>
              				</div>

              				<!--Boton Submit-->
              				<button type="submit" class="btn btn-default">
              					Enviar
              				</button>
              				<!--Fin Boton Submit-->


                    </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
