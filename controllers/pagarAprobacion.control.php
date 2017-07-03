<?php
/* Categorias Controller
 * 2015-03-05
 * Created By OJBA
 * Last Modification 2015-03-05 19:25:00
 */
  require_once("libs/template_engine.php");

  require_once("models/aprobacion.model.php");

    require 'vendor/stripe/stripe-php/lib/Stripe.php';

  function run(){



    $error = '';
    $success = '';

    if (isset($_POST["btnPagarAprobacion"])) {
      Stripe::setApiKey("sk_test_UDpydu1XVxuNRRRmOShf0iIl");

      try {
    	if (empty($_POST['street']) || empty($_POST['city']) || empty($_POST['zip']))
          throw new Exception("Fill out all required fields.");
        if (!isset($_POST['stripeToken']))
          throw new Exception("The Stripe Token was not generated correctly");
        Stripe_Charge::create(array("amount" => 3000,
                                    "currency" => "eur",
                                    "card" => $_POST['stripeToken'],
    								"description" => $_POST['email']));
        $success = '<div class="alert alert-success">
                    <strong>Success!</strong> Your payment was successful.
    				</div>';
      }
      catch (Exception $e) {
    	$error = '<div class="alert alert-danger">
    			  <strong>Error!</strong> '.$e->getMessage().'
    			  </div>';
      }
    }

    renderizar("pagarAprobacion", array());
  }



  run();
?>
