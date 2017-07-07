<body class="nav-md">

  <div class="contenido">
    <div class="container body">
      <div class="main_container">
<div class="right_col" role="main">
    <div class="">
      <div class="page-title">
        <div class="title_right">
          <h3>Restablecer Contraseña</h3>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                  <h2>Ingrese su nueva Contraseña</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <br>

                    <form id="defaultForm" action="index.php?page=restablecerPass" class="form-horizontal form-label-left" method="post">
                        <div class="row">
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_name">Contraseña *</label>
                                                      <input id="txtContrasena" type="password" name="txtContrasena" class="form-control" placeholder="Escriba una contraseña con 8 caracteres o mas con mayusculas y minusculas *">
                                                      <input type="hidden" id="txtid" name="txtid" value="{{usuarioIdentidad}}">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label for="form_lastname">Confirme Contraseña *</label>
                                                      <input id="txtContrasenaConfirmacion" type="password" name="txtContrasenaConfirmacion" class="form-control" placeholder="Escriba una contraseña con 8 caracteres o mas con mayusculas y minusculas">
                                                  </div>
                                              </div>
                                            </div>
                          <div class="ln_solid"></div>

              <div class="form-group">
                <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                  <button name="btnRestablecer" id="btnRestablecer" type="submit" class="btn btn-primary btn-lg">Registrar</button>
                </div>
              </div>
                    </form>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</div>
</div>
<script type="text/javascript">

$(document).ready(function() {
  $('#defaultForm').bootstrapValidator({
    message: 'This value is not valid',
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {

          txtContrasena: {
              validators: {
                  notEmpty: {
                      message: 'Contraseña obligatoria no puede estar vacia.'
                  },
                  identical: {
                      field: 'txtContrasenaConfirmacion',
                      message: 'La contraseña y su confirmación no son los mismos'
                  }
              }
          },
          txtContrasenaConfirmacion: {
              validators: {
                  notEmpty: {
                      message: 'La contraseña de confirmación es obligatoria y no puede estar vacía'
                  },
                  identical: {
                      field: 'txtContrasena',
                      message: 'La contraseña y su confirmación no son los mismos'
                  }
              }
          },
      }
  });
});

</script>
