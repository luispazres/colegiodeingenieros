<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_HWvW0uMAaDA8FpRqNIFFsYu8",
  "publishable_key" => "pk_test_ySRacvcf4UEqlgvekTQGOlJN"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>
