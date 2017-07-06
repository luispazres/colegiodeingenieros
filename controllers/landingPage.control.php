<?php
/* althome Controller
 * 2015-10-28
 * Created By OJBA
 * Last Modification 2015-10-28 19:27
 */
  require_once("libs/template_engine.php");
  function run(){
    //http_response_code(200);


    renderizar("landingPage", array(),"layoutLandingPage");
  }


  run();
?>
