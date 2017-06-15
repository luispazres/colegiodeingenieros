<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Modificar Usuarios</h3>
        </div>
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
                  <h2>Datos del Usuario</h2>
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
                                                      <label for="txtProyectoNombre">Numero de Identidad *</label>
                                                      <input type="text" id="txtProyectoNombre"class="form-control" name="txtProyectoNombre" value="{{usuarioIdentidad}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Numero de Colegiación *</label>
                                                      <input type="text" id="txtproyectoDepartamento"class="form-control" name="txtproyectoDepartamento" value="{{usuarioNumeroColegiacion}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Nombre *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control"  value="{{usuarioPrimerNombre}} {{usuarioSegundoNombre}} {{usuarioPrimerApellido}} {{usuarioSegundoApellido}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Numero de Celular *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control"  value="{{usuarioCelular}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Numero Telefonico *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control"  value="{{usuarioTelefono}}" disabled="disabled">
                                                  </div>
                                              </div>
                                              <div class="col-md-12">
                                               <div class="form-group">
                                                   <label for="form_message">Dirección *</label>
                                                   <textarea id="form_message" name="message" class="form-control" disabled="disabled" rows="4">{{usuarioDireccion}}</textarea>
                                               </div>
                                           </div>


                                          <div class="col-md-6">
                                              <div class="form-group">
                                                  <label for="form_name">Estado Cuenta *</label>
                                                  <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
                                                  <option value="">Seleccione...</option>
                                                  {{foreach roles}}
                                                    <option value="{{rolId}}">{{rolDescripcion}}</option>
                                                  {{endfor roles}}
                                                  </select>
                                              </div>
                                          </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Tipo de Cuenta *</label>
                                                      <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
                                                      <option value="">Seleccione...</option>
                                                      {{foreach estado}}
                                                        <option value="{{estadoCuentaId}}">{{estadoCuentaDescripcion}}</option>
                                                      {{endfor estado}}
              																				</select>
                                                  </div>
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
