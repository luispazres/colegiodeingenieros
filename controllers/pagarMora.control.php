<?php
/* Categorias Controller
 * 2015-03-05
 * Created By OJBA
 * Last Modification 2015-03-05 19:25:00
 */
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");


  function run(){


  require 'pagar/lib/Stripe.php';
  $htmlDatos = array();
  $htmlDatos=obtenerUsuariosPorId($_SESSION["userName"]);

  if ($_POST) {
        Stripe::setApiKey("sk_test_UDpydu1XVxuNRRRmOShf0iIl");

        try {
        if (empty($_POST['street']) || empty($_POST['city']) || empty($_POST['zip']))
            throw new Exception("Fill out all required fields.");
          if (!isset($_POST['stripeToken']))
            throw new Exception("The Stripe Token was not generated correctly");
          Stripe_Charge::create(array("amount" => ($htmlDatos["usuarioMora"]*100),
                                      "currency" => "hnl",
                                      "card" => $_POST['stripeToken'],
                      "description" => $_POST['email']));
                      $htmlDatos["respuesta"]=actualizarMora(1,0,$_SESSION["userName"]);
            $htmlDatos["success"]  = '<div class="alert alert-success">
                      <strong>Success!</strong> Your payment was successful.
              </div>';
        }
        catch (Exception $e) {
          borrarAprobacion($_POST["respuesta"]);
          $htmlDatos["error"]  = '<div class="alert alert-danger">
              <strong>Error!</strong> '.$e->getMessage().'
              </div>';
        }


  }


    renderizar("pagarMora",  $htmlDatos,"layoutStripe.view.tpl");
  }



  run();
?>
