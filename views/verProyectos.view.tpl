  <div class="right_col" role="main">
    <div class="">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Responsive example<small>Users</small></h2>
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
                    <td></td>
                  </tr>
                {{endfor proyectos}}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
