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
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <br>

                  <form action="index.php?page=posponerDespeje" id="defaultForm" data-parsley-validate class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                      <input type="hidden" name="solicitudDespejeId" id="solicitudDespejeId" value="{{solicitudDespejeId}}">
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
                                                   <input type="text" id="txtproyectoDepartamento"class="form-control" name="txtproyectoDepartamento" value="{{departamentoDescripcion}}" disabled="disabled">
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
                                            <div class='col-md-12'>
                                             <div class='form-group'>
                                                 <label for='form_message'>Comentarios *</label>
                                                 <textarea id='txtComentario' placeholder='Describa la razón por la que el proyecto ha sido pospuesto.' name='txtComentario' class='form-control' rows='4'></textarea>
                                             </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="txtCostoDespeje">Costo del Despeje de Energía</label>
                                                    <input id="txtCostoDespeje" type="text" name="txtCostoDespeje" class="form-control" placeholder="Costo del Despeje">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                            <div class="input-group date">
                                              <label for="txtFecha">Fecha Nueva del Despeje</label>
                                              <input type="text" id="txtFecha" name="txtFecha" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            </div>
                                          </div>
                                             </div>
                                           </div>
                        <input type="submit" id="btnPosponerDespeje" name="btnPosponerDespeje" class="btn btn-default" value="Solicitar Despeje">

                    </form>
        </div>
      </div>
    </div>
</div>
</div>
<script type="text/javascript">
var date = new Date();
date.setDate(date.getDate());
$('#txtFecha').datepicker({
    startDate: date,
    todayBtn: "linked",
    language: "es",
    autoclose: true,
    todayHighlight: true,
    format: "yy/mm/dd"
});

$(document).ready(function() {


  $('#defaultForm').bootstrapValidator({
    message: 'This value is not valid',
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          txtFecha: {
            validators: {
                notEmpty: {
                    message: 'Campo obligatorio, no puede estar vacio.'
                }
            }
          },
          txtComentario: {
              validators: {
                  notEmpty: {
                      message: 'Campo obligatorio, no puede estar vacio.'
                  },
                  stringLength: {
                      min: 2,
                      max: 600,
                      message: 'El comentario debe de tener minimo 2 dígitos.'
                  },
              }
          },
          txtCostoDespeje: {
            validators: {
                notEmpty: {
                    message: 'Campo obligatorio, no puede estar vacio.'
                },
                stringLength: {
                    min: 1,
                    max: 10000000000000,
                    message: 'Debe tener al menos un dígito.'
                },
                regexp: {
                    regexp: /^[0-9]*\.?[0-9]*$/,
                    message: 'Solo se aceptan números.'
                }
            }
          },
      }
  });
});

</script>
