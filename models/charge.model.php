<?php
  require_once('models/config.model.php');

  $token  = $_POST['stripeToken'];

  $customer = \Stripe\Customer::create(array(
      'email' => 'luispazreyes@hotmail.com',
      'source'  => $token
  ));

  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => 5000,
      'currency' => 'hnl'
  ));

  echo '<h1>Successfully charged $50.00!</h1>';
?>
