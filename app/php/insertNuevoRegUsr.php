<?php

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');
include_once 'info.php';

// $_POST = json_decode(file_get_contents("php://input"), true);

$nombreUsr = (isset($_POST['nombreUsr'])) ? $_POST['nombreUsr'] : '';
$apellidoUsr = (isset($_POST['apellidoUsr'])) ? $_POST['apellidoUsr'] : '';
$correoUsr = (isset($_POST['correoUsr'])) ? $_POST['correoUsr'] : '';
$nPassUsr = (isset($_POST['nPassUsr'])) ? $_POST['nPassUsr'] : '';

$nombreComUsr = $nombreUsr.' '.$apellidoUsr;

$varNavega = $info["browser"];	
$varVersio = $info["version"];
$varSitemaO = $info["os"];
$fechaCap = date('d-m-Y');
$horaCap = date('g:i:s a');
$fechaHoraReg = $fechaCap . ' ' . $horaCap;

$usrCrypt = MD5($nombreComUsr);
$correoCrypt = MD5($correoUsr);
$pwCrypt = MD5($nPassUsr);

$con = new SQLite3("../data/data.db");
$busCorreo = $con->query("SELECT correoMd5 FROM registroUsr WHERE correoMd5 = '$correoCrypt'");

while ($correoUsrCrypt = $busCorreo->fetchArray()) {
	$resBus = $correoUsrCrypt['correoMd5'];
}

$resBus = (isset($resBus)) ? $resBus : '';

if($resBus === $correoCrypt){
	echo json_encode('error');
}else{

	if ($correoUsr != '' && $nPassUsr !='') {
		
		$cs = $con -> query("INSERT INTO registroUsr (nombre, apellido, nombreCom, userMd5, area, puesto, correo, correoMd5, password, passDecrypt, usrNavega, usrSO, usrVerSO, usrFechaHoraReg, tipoUsuario, usrActivo) VALUES ('$nombreUsr', '$apellidoUsr','$nombreComUsr', '$usrCrypt', '', '', '$correoUsr', '$correoCrypt','$nPassUsr', '$pwCrypt', '$varNavega', '$varVersio', '$varSitemaO', '$fechaHoraReg', '0', '1')");
	
		echo json_encode('Correcto');

	}else{
		echo json_encode('error');
	}
}

$con -> close();

?>