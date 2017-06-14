<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Registro de Usuarios</h3>
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
                  <h2>Ingrese sus Datos Personales</h2>
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

                    <form id="demo-form2" action="index.php?page=registroUsuarios" class="form-horizontal form-label-left" method="post">

                      <div class="form-group">

                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Numero Identidad *</label>
                                                      <input id="txtNumeroId" type="text" name="txtNumeroId" class="form-control" placeholder="Ej. 0801-XXXX-XXXXX *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Numero de Colegiacion *</label>
                                                      <input id="txtNumeroColegiacion" type="text" name="txtNumeroColegiacion" class="form-control" placeholder="Ej. XXXX-XXXX *">
                                                  </div>
                                              </div>
                                          </div>

                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Primer Nombre *</label>
                                                      <input id="txtPrimerNombre" type="text" name="txtPrimerNombre" class="form-control" placeholder="Ej. Juan *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Segundo Nombre *</label>
                                                      <input id="txtSegundoNombre" type="text" name="txtSegundoNombre" class="form-control" placeholder="Ej. Luis *">
                                                  </div>
                                              </div>
                                          </div>

                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Primer Apellido *</label>
                                                      <input id="txtPrimerApellido" type="text" name="txtPrimerApellido" class="form-control" placeholder="Ej. Lopez *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Segundo Apellido *</label>
                                                      <input id="txtSegundoApellido" type="text" name="txtSegundoApellido" class="form-control" placeholder="Ej. Paz *">
                                                  </div>
                                              </div>
                                          </div>

                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Numero de Celular *</label>
                                                      <input id="txtNumeroCelular" type="text" name="txtNumeroCelular" class="form-control" placeholder="Ej. 99XX-XXXX *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Numero de Telefono Fijo *</label>
                                                      <input id="txtNumeroFijo" type="text" name="txtNumeroFijo" class="form-control" placeholder="Ej. 22XX-XXXX *">
                                                  </div>
                                              </div>
                                          </div>

                        <div class="row">
                                              <div class="col-md-12">
                                                  <div class="form-group">
                                                      <label for="form_message">Dirección de residencia *</label>
                                                      <textarea id="txtDireccion" name="txtDireccion" class="form-control" placeholder="Ej. Colonia X bloque X casa numero xxx *" rows="4"></textarea>
                                                  </div>
                                              </div>
                                          </div>

                        <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Contraseña *</label>
                                                      <input id="txtContrasena" type="password" name="txtContrasena" class="form-control" placeholder="Escriba una contraseña con 8 caracteres o mas con mayusculas y minusculas *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Confirme Contraseña *</label>
                                                      <input id="txtContrasenaConfirmacion" type="password" name="txtContrasenaConfirmacion" class="form-control" placeholder="Escriba una contraseña con 8 caracteres o mas con mayusculas y minusculas">
                                                  </div>
                                              </div>
                                          </div>


                      </div>
                      <button type="submit" class="btn btn-default" name="btnRegistroUsuarios" id="btnRegistroUsuarios">
                        Registrarme
                      </button>

                    </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
