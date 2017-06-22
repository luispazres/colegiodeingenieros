<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_left">
          <h3>Solicitud de Despeje</h3>
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

                  <form action="index.php?page=solicitudDespeje" id="demo-form2" data-parsley-validate class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                      <input type="hidden" name="solicitudAprobacionId" id="solicitudAprobacionId" value="{{solicitudAprobacionId}}">
                      <input type="hidden" name="accion" id="accion" value="{{accion}}">
                      <input type="hidden" name="despejeId" id="despejeId" value="{{despejeId}}">
                      <div class="form-group">

                         <div class="row">
                           <div class="col-md-6">
                               <div class="form-group">
                                   <label for="txtAprobacion">Código de Aprobación de la ENEE</label>
                                   <input id="txtAprobacion" type="text" name="txtAprobacion" class="form-control" placeholder="" value="{{codigoAprobacion}}" disabled="disabled">
                               </div>
                           </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="txtTiempo">Tiempo que ocupara tener la red sin energía *</label>
                                                      <input id="txtTiempo" type="text" name="txtTiempo" class="form-control" placeholder="Tiempo que ocupara tener la red sin energía *">
                                                  </div>
                                              </div>
                                          </div>
                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="txtCuadrillas">Cuadrillas *</label>
                                                      <input id="txtCuadrillas" type="text" name="txtCuadrillas" class="form-control" placeholder="Cuadrillas y cantidad de personal a laborar *">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="txtCantidadPersonal">Cantidad de Personal a laborar *</label>
                                                      <input id="txtCantidadPersonal" type="number" name="txtCantidadPersonal" class="form-control" placeholder="N° de identidad del propietario *">
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="row">
                                                               <div class="col-md-6">
                                                                   <div class="form-group">
                                                                       <label for="txtFecha">Fecha que requiere el despeje *</label>
                                                                       <input id="txtFecha" type="date" name="txtFecha" class="form-control" placeholder="N° de identidad del propietario *">
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <input type="submit" id="btnSolicitarDespeje" name="btnSolicitarDespeje" class="btn btn-default" value="Solicitar Despeje">

                    </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
