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
            Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table.
          </p>

          <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th>Código del Poyecto</th>
                <th>Nombre del Proyecto</th>
                <th>Departamento del Proyecto</th>
                <th>Nombre del Propietario</th>
                <th>Identidad del Propietario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {{foreach proyectos}}
                <tr>
                  <td>{{proyectoId}}</td>
                  <td>{{proyectoNombre}}</td>
                  <td>{{departamentoDescripcion}}</td>
                  <td>{{proyectoNombrePropietario}}</td>
                  <td>{{proyectoIdentidadPropietario}}</td>
                  <td>
                    <a href="index.php?page=factibilidadProyectos&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success">Solicitar Factibilidad</button></a>
                    <a href="index.php?page=aprobacionProyectos&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success">Solicitar Aprobación</button></a>
                    <a href="index.php?page=recepcionProyectos&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success">Solicitar Recepción</button></a>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg-{{proyectoId}}">Ver</button>

                    <div class="modal fade bs-example-modal-lg-{{proyectoId}}" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Datos del Proyecto</h4>
                          </div>
                          <div class="modal-body">

                          </div>
                          <div class="modal-footer">
                              <form method="post" action="index.php?page=solicitudDeCuentas">
                              <input id="usuarioIdentidad" type="hidden" name="usuarioIdentidad" value={{usuarioIdentidad}}>
                              <input type="submit" name="btnRechazar" id="btnRechazar" class="btn btn-danger" value="Rechazar Usuario">
                              <input type="submit" name="btnAceptar" id="btnAceptar" class="btn btn-success" value="Aceptar Usuario">
                              </form>
                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr>
              {{endfor proyectos}}
            </tbody>
          </table>
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
</div>
