  <div class="right_col" role="main">
    <div class="">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Proyectos Registrados<small></small></h2>
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
            <p class="text-muted font-13 m-b-30">
            </p>
            <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Código del Proyecto</th>
                  <th>Nombre del Proyecto</th>
                  <th>Departamento</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Nombre del Propietario</th>
                  <th>Número de Identidad del Propietario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {{foreach proyectos}}
                  <tr>
                    <td>{{proyectoId}}</td>
                    <td>{{proyectoNombre}}</td>
                    <td>{{departamentoDescripcion}}</td>
                    <td>{{proyectoLatitud}}</td>
                    <td>{{proyectoLongitud}}</td>
                    <td>{{proyectoNombrePropietario}}</td>
                    <td>{{proyectoIdentidadPropietario}}</td>
                    <td>  <button type="button" class="btn btn-primary glyphicon glyphicon-eye-open" data-toggle="modal" data-target=".bs-example-modal-lg-{{proyectoId}}"> Ver</button>
                              {{foreach direccion}}
                              <a href="index.php?page={{direccionARedireccionar}}&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success glyphicon glyphicon-eye-open" > Seleccionar</button></a>
                              {{endfor direccion}}
                      <div class="modal fade bs-example-modal-lg-{{proyectoId}}" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                              </button>
                              <h4 class="modal-title" id="myModalLabel">Detalle del Proyecto</h4>
                            </div>
                            <div class="modal-body">
                              <h4>Datos del Proyecto</h4>
                              Código del Proyecto: {{proyectoId}}
                              <br>
                              Nombre del Proyecto: {{proyectoNombre}}
                              <br>
                              Descripcion del Proyecto: {{proyectoDescrpcion}}
                              <br>
                              Departamento del Proyecto: {{departamentoDescripcion}}
                              <br>
                              Dirección del Proyecto: {{proyectoDireccion}}
                              <h4>Coordenadas Del Proyecto</h4>
                              Latitud: {{proyectoLatitud}}
                              <br>
                              Longitud: {{proyectoLongitud}}
                              <br>
                              <h4>Datos del Propietario</h4>
                              Nombre de Propietario: {{proyectoNombrePropietario}}
                              <br>
                              Identidad del Propietario: {{proyectoIdentidadPropietario}}
                              <br>
                              Teléfono del Propietario: {{proyectoTelefonoPropietario}}
                              <br>
                              Celular delPropietario: {{proyectoCelularPropietario}}
                              <br>
                              Dirección del Propietario: {{proyectoPropietarioDireccion}}
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </td>
                  </tr>
                {{endfor proyectos}}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
