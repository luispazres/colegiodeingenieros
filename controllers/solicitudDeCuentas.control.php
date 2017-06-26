<?php
/* Home Controller
 * 2014-10-14
 * Created By OJBA
 * Last Modification 2014-10-14 20:04
 */
  require_once("libs/template_engine.php");
  require_once("models/usuarios.model.php");
  require_once("clases/PHPMailerAutoload.php");
  require_once("clases/class.phpmailer.php");
  require_once("clases/class.phpmaileroauth.php");
  require_once("clases/class.smtp.php");
  require_once("clases/class.pop3.php");
  require_once("clases/class.phpmaileroauthgoogle.php");

  function run(){

    if (mw_estaLogueado()) {
      if ($_SESSION["estado"]==1) {
        if ($_SESSION["rol"]==1) {
          $usuario = array();

          if(isset($_POST["btnRechazar"])){

            $numeroId="";
            $estadoCuenta=2;
            $numeroId=$_POST["usuarioIdentidad"];
            actualizarEstado($numeroId,$estadoCuenta);
            }

          if(isset($_POST["btnAceptar"])){
            $respuesta="";
            $numeroId="";
            $estadoCuenta=1;
            $numeroId=$_POST["usuarioIdentidad"];
            $respuesta=actualizarEstado($numeroId,$estadoCuenta);

        /*    $mail = new PHPMailer;
            $mail->SMTPDebug=2;
             $mail->Host = 'chimera.lunarpages.com';
             $mail->SMTPAuth = true;
             $mail->Username = 'cimeqh@conectahn.org';
             $mail->Password = 'conecta2017';
             $mail->SMTPSecure = 'ssl';
             $mail->Port = 465;
             $mail->setFrom('cimeqh@conectahn.org', 'CIMEQH');
             $mail->addAddress('luispazreyes@hotmail.com', 'Luis');
             //$mail->addAddress('ellen@example.com');
             $mail->addReplyTo('cimeqh@conectahn.org', 'Information');
             //$mail->addCC('cc@example.com');
             //$mail->addBCC('bcc@example.com');
             //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
             //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
             $mail->isHTML(true);                                  // Set email format to HTML
             $mail->Subject = 'Alerta de aprobación de cuenta.';
             $mail->Body    = "Su cuenta ha sido aprobada.";
             $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
             if(!$mail->send()) {
                 echo 'Message could not be sent.';
                 echo 'Mailer Error: ' . $mail->ErrorInfo;
             } else {
                 echo 'Message has been sent';
             }
            echo $respuesta;
          }*/
        }

        $usuario=obtenerUsuarios();
        renderizar("solicitudDeCuentas",array('usuario'=>$usuario),"layoutCimeqh.view.tpl");
        }else {
          redirectWithMessage("No cuenta con los privilegios de usuario adecuado para ver esta páagina.","?page=login");
        }
      }else {
      redirectWithMessage("Su cuenta todavia no ha sido verificada por el CIMEQH.","?page=login");
      }
    }else {
      mw_redirectToLogin("page=login");
    }
}



  run();
?>
