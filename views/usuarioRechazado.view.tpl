<body class="nav-md">
  <div class="contenido">
    <div class="container body">
      <div class="main_container">
<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_right">
          <h3>Usuario Rechazado</h3>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                  <h2>Ingrese Motivo por el cual el Usuario es Rechazado</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <br>

                    <form id="defaultForm" action="index.php?page=solicitudDeCuentas" class="form-horizontal form-label-left" method="post">

                      <div class="form-group">

                         <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <input type="radio" name="ynRadio" id="ynRadio" class="radioBtn" value="yes" checked="checked" />Agregar un comentario
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                <input type="radio" name="ynRadio" id="ynRadio" class="radioBtn" value="no" /> Usuario esta en Mora
                                                <input type="hidden" name="usuarioIdentidad" id="usuarioIdentidad" value="{{usuarioIdentidad}}">
                                                <input type="hidden" name="usuarioCorreo" id="usuarioCorreo" value="{{usuarioCorreo}}">
                                                  <div class="form-group">
                                                  </div>
                                              </div>
                                          </div>

                         <div class="row">
                                              <div class="col-md-6 comentario">
                                                  <div class="form-group">
                                                      <label for="form_name">Agregar Comentario*</label>
                                                      <textarea id="comentario" name="comentario" class="form-control" rows="4" disabled></textarea>
                                                  </div>
                                              </div>
                                              <div class="col-md-6 mora">
                                                  <div class="form-group">

                                                      <label for="form_lastname">Monto que el Usuario debe *</label>
                                                      <input type="text" id="monto" name="monto" class="form-control" disabled/>
                                                  </div>
                                              </div>
                                          </div>
                                        </div>
                                        <div class="ln_solid"></div>

                                <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <button name="btnEnviar" id="btnEnviar" type="submit" class="btn btn-primary btn-lg">Enviar</button>
                </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</div>
</div>

<script>
$(document).ready(function() {
         $(".radioBtn").click(function() {
           $("#comentario").attr("disabled", true);
           $("#comentario").val("");
           $("#monto").attr("disabled", true);
           $("#monto").val("");
           if ($("input[name=ynRadio]:checked").val() == "yes") {
             $("#comentario").attr("disabled", false);

               $('#defaultForm').bootstrapValidator({
                 message: 'This value is not valid',
                   feedbackIcons: {
                       valid: 'glyphicon glyphicon-ok',
                       invalid: 'glyphicon glyphicon-remove',
                       validating: 'glyphicon glyphicon-refresh'
                   },
                   fields: {
                       comentario: {
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
                   }
               });

       }else {
         $("#monto").attr("disabled", false);

           $('#defaultForm').bootstrapValidator({
             message: 'This value is not valid',
               feedbackIcons: {
                   valid: 'glyphicon glyphicon-ok',
                   invalid: 'glyphicon glyphicon-remove',
                   validating: 'glyphicon glyphicon-refresh'
               },
               fields: {
                   monto: {
                     validators: {
                         notEmpty: {
                             message: 'Campo obligatorio, no puede estar vacio.'
                         },
                         stringLength: {
                             min: 1,
                             max: 4,
                             message: 'Debe tener al menos un dígito y no más de 4.'
                         },
                         regexp: {
                             regexp: /\d+(\.\d{1,2})?/,
                             message: 'Solo se aceptan números.'
                         }
                     }
                   },
               }
           });

       }
     });
      });
         </script>
