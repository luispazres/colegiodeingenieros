<!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
            <!--<meta charset="utf-8" />-->
            <title>{{prueba}}</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <!--  <link href="public/css/bootstrap.min.css" rel="stylesheet">

            <link href="public/css/font-awesome.min.css" rel="stylesheet">

            <link href="public/css/nprogress.css" rel="stylesheet">-->


            <link href="vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Font Awesome -->
            <link href="vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
            <!-- NProgress -->
            <link href="vendors/nprogress/nprogress.css" rel="stylesheet">

            <link href="vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Font Awesome -->
            <link href="vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
            <!-- NProgress -->
            <link href="vendors/nprogress/nprogress.css" rel="stylesheet">
            <!-- iCheck -->
            <link href="vendors/iCheck/skins/flat/green.css" rel="stylesheet">
            <!-- bootstrap-wysiwyg -->
            <link href="vendors/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
            <!-- Select2 -->
            <link href="vendors/select2/dist/css/select2.min.css" rel="stylesheet">
            <!-- Switchery -->
            <link href="./vendors/switchery/dist/switchery.min.css" rel="stylesheet">
            <!-- starrr -->
            <link href="vendors/starrr/dist/starrr.css" rel="stylesheet">
            <!-- bootstrap-daterangepicker -->
            <link href="vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

            <link href="vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
            <link href="vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
            <link href="vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
            <link href="vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
            <link href="vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">

            <link href="vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
            <!-- PNotify -->
            <link href="vendors/pnotify/dist/pnotify.css" rel="stylesheet">
            <link href="vendors/pnotify/dist/pnotify.buttons.css" rel="stylesheet">
            <link href="vendors/pnotify/dist/pnotify.nonblock.css" rel="stylesheet">

            <link href="vendors/iCheck/skins/flat/green.css" rel="stylesheet">

            <!-- bootstrap-progressbar -->
            <link href="vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
            <!-- JQVMap -->
            <link href="vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
            <!-- bootstrap-daterangepicker -->
            <link href="vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

            <link rel="stylesheet" href="public/dist/css/bootstrapValidator.min.css"/>

            <link rel="stylesheet" href="public/css/bootstrap-formhelpers-min.css" media="screen">

            <!-- Custom Theme Style -->
            <link href="public/css/custom.min.css" rel="stylesheet">
              <script src="public/js/jquery.min.js"></script>
              <script src="public/js/bootstrap-formhelpers-min.js"></script>
              <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
              <script type="text/javascript">
              $(document).ready(function() {
                  $('#payment-form').bootstrapValidator({
                      message: 'This value is not valid',
                      feedbackIcons: {
                          valid: 'glyphicon glyphicon-ok',
                          invalid: 'glyphicon glyphicon-remove',
                          validating: 'glyphicon glyphicon-refresh'
                      },
              		submitHandler: function(validator, form, submitButton) {
                                  Stripe.card.createToken({
                                      number: $('#cardnumber').val(),
                                      cvc: $('#cvc').val(),
                                      exp_month: $('#card-expiry-month').val(),
                                      exp_year: $('#card-expiry-year').val(),
              			name: $('#card-holder-name').val(),
              			address_line1: $('#address').val(),
              			address_city: $('#city').val(),
              			address_zip: $('#zip').val(),
              			address_state: $('#state').val(),
              			address_country: $('#country').val()
                                  }, stripeResponseHandler);
                                  return false;
                      },
                      fields: {
                          street: {
                              validators: {
                                  notEmpty: {
                                      message: 'The street is required and cannot be empty'
                                  },
              					stringLength: {
                                      min: 6,
                                      max: 96,
                                      message: 'The street must be more than 6 and less than 96 characters long'
                                  }
                              }
                          },
                          city: {
                              validators: {
                                  notEmpty: {
                                      message: 'The city is required and cannot be empty'
                                  }
                              }
                          },
              			zip: {
                              validators: {
                                  notEmpty: {
                                      message: 'The zip is required and cannot be empty'
                                  },
              					stringLength: {
                                      min: 3,
                                      max: 9,
                                      message: 'The zip must be more than 3 and less than 9 characters long'
                                  }
                              }
                          },
                          email: {
                              validators: {
                                  notEmpty: {
                                      message: 'The email address is required and can\'t be empty'
                                  },
                                  emailAddress: {
                                      message: 'The input is not a valid email address'
                                  },
              					stringLength: {
                                      min: 6,
                                      max: 65,
                                      message: 'The email must be more than 6 and less than 65 characters long'
                                  }
                              }
                          },
              			cardholdername: {
                              validators: {
                                  notEmpty: {
                                      message: 'The card holder name is required and can\'t be empty'
                                  },
              					stringLength: {
                                      min: 6,
                                      max: 70,
                                      message: 'The card holder name must be more than 6 and less than 70 characters long'
                                  }
                              }
                          },
              			cardnumber: {
              		selector: '#cardnumber',
                              validators: {
                                  notEmpty: {
                                      message: 'The credit card number is required and can\'t be empty'
                                  },
              					creditCard: {
              						message: 'The credit card number is invalid'
              					},
                              }
                          },
              			expMonth: {
                              selector: '[data-stripe="exp-month"]',
                              validators: {
                                  notEmpty: {
                                      message: 'The expiration month is required'
                                  },
                                  digits: {
                                      message: 'The expiration month can contain digits only'
                                  },
                                  callback: {
                                      message: 'Expired',
                                      callback: function(value, validator) {
                                          value = parseInt(value, 10);
                                          var year         = validator.getFieldElements('expYear').val(),
                                              currentMonth = new Date().getMonth() + 1,
                                              currentYear  = new Date().getFullYear();
                                          if (value < 0 || value > 12) {
                                              return false;
                                          }
                                          if (year == '') {
                                              return true;
                                          }
                                          year = parseInt(year, 10);
                                          if (year > currentYear || (year == currentYear && value > currentMonth)) {
                                              validator.updateStatus('expYear', 'VALID');
                                              return true;
                                          } else {
                                              return false;
                                          }
                                      }
                                  }
                              }
                          },
                          expYear: {
                              selector: '[data-stripe="exp-year"]',
                              validators: {
                                  notEmpty: {
                                      message: 'The expiration year is required'
                                  },
                                  digits: {
                                      message: 'The expiration year can contain digits only'
                                  },
                                  callback: {
                                      message: 'Expired',
                                      callback: function(value, validator) {
                                          value = parseInt(value, 10);
                                          var month        = validator.getFieldElements('expMonth').val(),
                                              currentMonth = new Date().getMonth() + 1,
                                              currentYear  = new Date().getFullYear();
                                          if (value < currentYear || value > currentYear + 100) {
                                              return false;
                                          }
                                          if (month == '') {
                                              return false;
                                          }
                                          month = parseInt(month, 10);
                                          if (value > currentYear || (value == currentYear && month > currentMonth)) {
                                              validator.updateStatus('expMonth', 'VALID');
                                              return true;
                                          } else {
                                              return false;
                                          }
                                      }
                                  }
                              }
                          },
              			cvv: {
              		selector: '#cvv',
                              validators: {
                                  notEmpty: {
                                      message: 'The cvv is required and can\'t be empty'
                                  },
              					cvv: {
                                      message: 'The value is not a valid CVV',
                                      creditCardField: 'cardnumber'
                                  }
                              }
                          },
                      }
                  });
              });
              </script>
              <script type="text/javascript">
                          // this identifies your website in the createToken call below
                          Stripe.setPublishableKey('pk_test_pNSNeMvq6cUCWFj7BcJUYltG');
                          function stripeResponseHandler(status, response) {
                              if (response.error) {
                                  // re-enable the submit button
                                  $('.submit-button').removeAttr("disabled");
              					// show hidden div
              					document.getElementById('a_x200').style.display = 'block';
                                  // show the errors on the form
                                  $(".payment-errors").html(response.error.message);
                              } else {
                                  var form$ = $("#payment-form");
                                  // token contains id, last4, and card type
                                  var token = response['id'];
                                  // insert the token into the form so it gets submitted to the server
                                  form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
                                  // and submit
                                  form$.get(0).submit();
                              }
                          }
              </script>
        </head>
        <body class="nav-md">

          <div class="container body">
            <div class="main_container">
              <div class="col-md-3 left_col">
                <div class="left_col scroll-view">
                  <div class="navbar nav_title" style="border: 0;">

                    <a href="index.php?page=home"><img src="files/cimeqh_.jpg"  class="img-circle profile_img" alt="CIMEQH"></a>

                  </div>

                  <div class="clearfix"></div>

                  <!-- menu profile quick info -->
                  <div class="profile clearfix">
                    <div class="profile_info">
                      <span>Bienvenido,</span>
                      <h2 align="center">{{nombre}} {{apellido}}</h2>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <!-- /menu profile quick info -->

                  <br />

                  <!-- sidebar menu -->
                  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                    <div class="menu_section">
                      <h3>General</h3>
                      <ul class="nav side-menu">
                        <li><a><i class="fa fa-briefcase"></i>Proyectos <span class="fa fa-chevron-down"></span></a>
                          <ul class="nav child_menu">
                            <li><a href="index.php?page=registroProyectos">Agregar Proyectos</a></li>
                            <li><a href="index.php?page=verProyectos">Ver Proyectos Registrados</a></li>
                          </ul>
                        </li>
                        <li><a><i class="fa fa-list-alt"></i> Solicitud de Factibilidad de Proyectos <span class="fa fa-chevron-down"></span></a>
                          <ul class="nav child_menu">
                            <li><a href="index.php?page=transicionFactibilidad">Realizar Solicitud de Factibilidad</a></li>
                            <li><a href="index.php?page=verMisSolicitudesDeFactibilidad">Ver Mis Solicitudes de Factibilidad</a></li>
                          </ul>
                        </li>
                        <li><a><i class="fa fa-check"></i> Solicitudes de Aprobación de Proyectos <span class="fa fa-chevron-down"></span></a>
                          <ul class="nav child_menu">
                            <li><a href="index.php?page=transicionAprobacion">Realizar Solicitud de Aprobación de Proyectos</a></li>
                            <li><a href="index.php?page=verMisSolicitudesDeAprobacion">Ver Mis Solicitudes de Aprobación</a></li>
                          </ul>
                        </li>
                        <li><a><i class="fa fa-cloud-upload"></i>Solicitudes de Recepción de Proyectos <span class="fa fa-chevron-down"></span></a>
                          <ul class="nav child_menu">
                            <li><a href="index.php?page=verMisSolicitudesDeAprobacion">Realizar Solicitud de Recepción de Proyectos</a></li>
                            <li><a href="index.php?page=verMisSolicitudesDeRecepcion">Ver Mis Soliciutdes de Recepción</a></li>
                          </ul>
                        </li>
                        <li><a><i class="fa fa-flash"></i> Solicitudes de Despeje de Energia <span class="fa fa-chevron-down"></span></a>
                          <ul class="nav child_menu">
                            <li><a href="index.php?page=verMisSolicitudesDeAprobacion">Realizar Solicitud de Despeje de Energia</a></li>
                            <li><a href="index.php?page=verMisSolicitudesDeDespeje">Ver Solicitudes de Despeje</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- /sidebar menu -->

                  <!-- /menu footer buttons -->
                  <div class="sidebar-footer hidden-small">

                  </div>
                  <!-- /menu footer buttons -->
                </div>
              </div>

              <!-- top navigation -->
              <div class="top_nav">
                <div class="nav_menu">
                  <nav>
                    <div class="nav toggle">
                      <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                    </div>

                    <ul class="nav navbar-nav navbar-right">
                      <li class="">
                        <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <!--  <img src="" alt="">--><span class="glyphicon glyphicon-user"> </span>{{nombre}} {{apellido}}
                          <span class=" fa fa-angle-down"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-usermenu pull-right">
                          <li><a href="javascript:;"> Profile</a></li>
                          <li>
                            <a href="javascript:;">
                              <span class="badge bg-red pull-right">50%</span>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li><a href="javascript:;">Help</a></li>
                          <li><a href="index.php?page=cerrarSesion"><i class="fa fa-sign-out pull-right"></i> Cerrar Sesión</a></li>
                        </ul>
                      </li>

                      <li role="presentation" class="dropdown">

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!-- /top navigation -->

              <!-- page content -->

            <div class="contenido">
                {{{page_content}}}
            </div>

            <footer>
              <div class="pull-right">
                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
              </div>
              <div class="clearfix"></div>
            </footer>
            <!-- /footer content -->
          </div>
        </div>

          <!-- jQuery -->


          <script type="text/javascript" src="public/dist/js/bootstrapValidator.js"></script>

          <!-- Bootstrap -->
          <script src="public/js/bootstrap.min.js"></script>
          <!-- FastClick -->
          <script src="public/js/fastclick.js"></script>
          <!-- NProgress -->
          <script src="public/js/nprogress.js"></script>

          <script src="vendors/Chart.js/dist/Chart.min.js"></script>
          <!-- gauge.js -->
          <script src="vendors/gauge.js/dist/gauge.min.js"></script>
          <!-- bootstrap-progressbar -->
          <script src="vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
          <!-- iCheck -->
          <script src="vendors/iCheck/icheck.min.js"></script>
          <!-- Skycons -->
          <script src="vendors/skycons/skycons.js"></script>
          <!-- Flot -->
          <script src="vendors/Flot/jquery.flot.js"></script>
          <script src="vendors/Flot/jquery.flot.pie.js"></script>
          <script src="vendors/Flot/jquery.flot.time.js"></script>
          <script src="vendors/Flot/jquery.flot.stack.js"></script>
          <script src="vendors/Flot/jquery.flot.resize.js"></script>
          <!-- Flot plugins -->
          <script src="vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
          <script src="vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
          <script src="vendors/flot.curvedlines/curvedLines.js"></script>
          <!-- DateJS -->
          <script src="vendors/DateJS/build/date.js"></script>
          <!-- JQVMap -->
          <script src="vendors/jqvmap/dist/jquery.vmap.js"></script>
          <script src="vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
          <script src="vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
          <!-- bootstrap-daterangepicker -->
          <script src="vendors/moment/min/moment.min.js"></script>
          <script src="vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

          <script src="vendors/datatables.net/js/jquery.dataTables.min.js"></script>
          <script src="vendors/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
          <script src="vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
          <script src="vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js"></script>
          <script src="vendors/datatables.net-buttons/js/buttons.flash.min.js"></script>
          <script src="vendors/datatables.net-buttons/js/buttons.html5.min.js"></script>
          <script src="vendors/datatables.net-buttons/js/buttons.print.min.js"></script>
          <script src="vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js"></script>
          <script src="vendors/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
          <script src="vendors/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
          <script src="vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js"></script>
          <script src="vendors/datatables.net-scroller/js/dataTables.scroller.min.js"></script>
          <script src="vendors/jszip/dist/jszip.min.js"></script>
          <script src="vendors/pdfmake/build/pdfmake.min.js"></script>
          <script src="vendors/pdfmake/build/vfs_fonts.js"></script>

          <script src="vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>

          <script src="vendors/iCheck/icheck.min.js"></script>

          <script src="public/js/custom.min.js"></script>

        </body>
    </html>
