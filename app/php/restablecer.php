<?php

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';


// $_POST = json_decode(file_get_contents("php://input"), true);

$rCorreo = (isset($_POST['rCorreo'])) ? $_POST['rCorreo'] : '';

$correoCrypt = MD5($rCorreo);

$con = new SQLite3("../data/data.db");
$busCorreo = $con->query("SELECT nombre,correo,correoMd5 FROM registroUsr WHERE correoMd5 = '$correoCrypt'");

while ($correoUsrCrypt = $busCorreo->fetchArray()) {
	$nombre = $correoUsrCrypt['nombre'];
	$correo = $correoUsrCrypt['correo'];
	$resBus = $correoUsrCrypt['correoMd5'];
}

$resBus = (isset($resBus)) ? $resBus : '';

if($resBus === $correoCrypt){

	$mail = new PHPMailer(true);

try {
        //Server settings
        // $mail->SMTPDebug = 2;    //Sirve como guía para detectar errores de envió
        $mail->CharSet = 'UTF-8';

        $mail->isSMTP();

        $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'noresponder2@utfvejecutivas.org';                     // SMTP username
        $mail->Password   = '123Sistemas2024';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //PARA PHP 5.6 Y POSTERIOR
        $mail->SMTPOptions = array( 'ssl' => array( 'verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true ) );

        //Recipients
        $mail->setFrom('noresponder2@utfvejecutivas.org', 'Info Correo');
        $mail->addAddress($correo);     //Correo de Salida
        // $mail->addBCC('oliver.velazquez@corsec.com.mx');
        // $mail->addAttachment('logoCorsec.png');  //Archivo Adjunto

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        // $mail->msgHTML(file_get_contents('ejemplo.html'), __DIR__);     //Se envio archivo en HTML pero $mail->Body debe estar desactivado
        $mail->Subject = 'Restablece tu contraseña';
		$mail->Body    = '
		<h1>¡Hola '.$nombre.'!</h1>
		<br>
		<p>Para restablecer tu contraseña da click <a href="http://localhost/psicologia/cambioContra/cuenta.app?rCorreo='.$resBus.'">aquí</a></p>
		';

    $mail->send();
    echo json_encode('Mensaje enviado!');
} catch (Exception $e) {
	$errorMSg = "No se pudo enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
	echo json_encode($errorMSg);
}

	

	// echo json_encode('Correcto: '.$correoCrypt);
}else{

	echo json_encode('error');
}

$con -> close();

?>