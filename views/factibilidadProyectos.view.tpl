<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Factibilidad de Proyectos</h3>
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
                                                      <label for="form_name">Nombre del proyecto *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Ej. 0801-XXXX-XXXXX *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Departamento *</label>
                                                      <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
              					<option value="">Seleccione...</option>
              					<optgroup label="Subgerencia Regional Tegucigalpa">
              						<option value="T1">Francisco Morazán</option>
              						<option value="T2">Comayagua</option>
              						<option value="T3">El Paraíso</option>
              						<option value="T4">Choluteca</option>
              						<option value="T5">Valle</option>
              						<option value="T6">La Paz</option>
              						<option value="T7">Olancho</option>
              						<option value="T8">Intibucá</option>
              					</optgroup>
              					<optgroup label="Subgerencia Regional San Pedro Sula">
              						<option value="S1">Colón</option>
              						<option value="S2">Atlántida</option>
              						<option value="S3">Cortes</option>
              						<option value="S4">Yoro</option>
              						<option value="S5">Ocotepeque</option>
              						<option value="S6">Copan</option>
              						<option value="S7">Santa Bárbara</option>
              						<option value="S8">Lempira</option>
              					</optgroup>
              				</select>
                                                  </div>
                                              </div>
                                          </div>
              					 <h4>Datos Propietario</h4></br>
              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Propietario del proyecto *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Numero de Identidad del Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="N° de identidad del propietario *">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Telefono Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Telefono Propietario *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Celular Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Celular Propietario *">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Email Propietario *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Email Propietario *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Dirección Propietario *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Dirección Propietario *">
                                                  </div>
                                              </div>
                                          </div>

              		<h4>Datos Ingeniero</h4></br>
              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Ingeniero Responsable del Proyecto *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Ingeniero Responsable del Proyecto *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">N° de Colegiación del CIMEQH *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="N° de Colegiación del CIMEQH *">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">N° de Identidad del Ingeniero *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="N° de Identidad del Ingeniero *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Telefono Ingeniero *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Telefono Ingeniero *">
                                                  </div>
                                              </div>
                                          </div>

              					 <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Celular Ingeniero *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Celular Ingeniero *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">E-mail Ingeniero *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Dirección Propietario *">
                                                  </div>
                                              </div>
                                          </div>


              													<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Dirección Ingeniero *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Dirección Ingeniero *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">KVA a Instalar *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="KVA a Instalar *">
                                                  </div>
                                              </div>
                                          </div>



              													<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Voltaje *</label>
              																				<select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
              																				<option value="">Seleccione...</option>
              																				<option value="T1">13.4 KV</option>
              																				<option value="T2">34.5 KV</option>
              																				</select>
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Tipo de Conexión *</label>
                                                      <select ng-model="datos.departamento" name="departamento" id="departamento" class="form-control margin ng-pristine ng-valid ui-corner-all formularios ng-touched">
              																				<option value="">Seleccione...</option>
              																				<option value="T1">Monofásico</option>
              																				<option value="T2">Trifasico</option>
              																				</select>
                                                  </div>
                                              </div>
              													</div>

              		<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Dirección Exacta del Proyecto *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Dirección Exacta del Proyecto *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Cuanto da multiplicar 3X2 *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Cuanto da multiplicar 3X2 *">
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

              		<h4>Coordenadas</h4>

              		<div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Latitud *</label>
                                                      <input id="form_name" type="text" name="name" class="form-control" placeholder="Latitud *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Longitud *</label>
                                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Longitud *">
                                                  </div>
                                              </div>
              		</div>


              			<div class="row">
              									                 <div class="col-md-12">
                                                  <div class="form-group">
                                                      <label for="form_message">Descripcion del Proyecto *</label>
                                                      <textarea id="form_message" name="message" class="form-control" placeholder="Descripcion del Proyecto *" rows="4"></textarea>
                                                  </div>
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
