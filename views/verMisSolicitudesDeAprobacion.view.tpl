<div class="right_col" role="main">
  <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h2>Mis Solicitudes de Aprobación<small></small></h2>
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
                <th>Código de la  Solicitud</th>
                <th>Nombre del Proyecto</th>
                <th>Nombre del Propietario</th>
                <th>Identidad del Propietario</th>
                <th>Estado e la Solicitud</th>
                <th>Acciones</th>
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
                  <td>
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal-lg-{{solicitudAprobacionId}}">Ver</button>
                    <a href="index.php?page=verMisDocumentosDeAprobacion&aprobacionId={{solicitudAprobacionId}}"><button type="button" class="btn btn-success btn-xs">Ver Documentos</button></a>
                    <div class="modal fade bs-example-modal-lg-{{solicitudAprobacionId}}" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">

                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Dictamen</h4>
                          </div>
                          <div class="modal-body">
                            <h4>Dictamen</h4>
                            {{comentarioAprobacion}}
                          </div>

                          <div class="modal-footer">
                            {{if reintentar}}
                                  <a href="index.php?page=aprobacionProyectos&proyectoId={{proyectoId}}&aprobacionId={{solicitudAprobacionId}}&accion=UPD"><button type="button" class="btn btn-success">Modificar Solicitud de Aprobacion</button></a>
                            {{endif reintentar}}
                            {{ifnot reintentar}}
                              {{ifnot recepcion}}
                                <a href="index.php?page=recepcionProyectos&proyectoId={{proyectoId}}&accion=INS"><button type="button" class="btn btn-success">Solicitar Recepción del Proyecto</button></a>
                              {{endifnot recepcion}}
                              {{ifnot despeje}}
                                <a href="index.php?page=solicitudDespeje&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success">Solicitar Despeje de energia</button></a>
                              {{endifnot despeje}}
                              {{if recepcion}}
                                <a href="index.php?page=recepcionProyectos&proyectoId={{proyectoId}}&accion=INS"><button type="button" class="btn btn-success" disabled>Ya ha Realizado uan Solicitud de Recepción del Proyecto</button></a>
                              {{end recepcion}}
                              {{if despeje}}
                                <a href="index.php?page=solicitudDespeje&proyectoId={{proyectoId}}"><button type="button" class="btn btn-success" disabled>Ya ha Realizado uan Solicitud Despeje de energia</button></a>
                              {{endi despeje}}
                            {{endifnot reintentar}}
                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr>
              {{endfor solicitudes}}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
