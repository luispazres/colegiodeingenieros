<body class="nav-md">
  <div class="contenido">
    <div class="container body">
      <div class="main_container">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Código de Aprobación de la Enee<small></small></h2>
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
                <br />
                <form action="" method="post" class="form-horizontal form-label-left input_mask">
                  <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" name="txtCodigo" name="txtCodigo" class="form-control" placeholder="Código de Aprobación">
                    </div>
                  </div>
                  <div class="ln_solid"></div>
                  <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                      <button type="submit" id="btnBuscar" name="btnBuscar" class="btn btn-success btn-lg">Buscar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Datos del Proyecto<small></small></h2>
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
                <table id="datatable" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>Código de la  Solicitud</th>
                      <th>Nombre del Proyecto</th>
                      <th>Nombre del Propietario</th>
                      <th>Identidad del Propietario</th>
                      <th>Estado e la Solicitud</th>
                    </tr>
                  </thead>
                  <tbody>
                    {{foreach solicitudes}}
                      <tr>
                        <td>{{solicitudAprobacionId}}</td>
                        <td>{{proyectoNombre}}</td>
                        <td>{{proyectoNombrePropietario}}</td>
                        <td>{{proyectoIdentidadPropietario}}</td>
                        <td>{{estadoAprobacionDescripcion}}</td>
                      </tr>
                    {{endfor solicitudes}}
                  </tbody>
                </table>

                <table id="datatable" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>Nombre del Documento</th>
                      <th>Descargar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {{foreach documentos}}
                      <tr>
                        <td>{{documentoNombre}}</td>
                        <td>
                          <div class="btn-toolbar" role="toolbar">
                            <a href="{{documentoDireccion}}" download>
                              <input type="button" name="btnDescargar" id="btnDescargar" class="btn btn-warning" value="Descargar" target="_blank">
                            </a>
                          </div>
                        </td>
                      </tr>
                    {{endfor documentos}}
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
