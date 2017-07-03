<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_UDpydu1XVxuNRRRmOShf0iIl",
  "publishable_key" => "pk_test_pNSNeMvq6cUCWFj7BcJUYltG"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>
