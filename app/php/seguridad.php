<?php 

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');

session_start();

$nombre = (isset($_SESSION['nombre'])) ? $_SESSION['nombre'] : '';
$correo = (isset($_SESSION['correo'])) ? $_SESSION['correo'] : '';
$correoMd5 = (isset($_SESSION['correoMd5'])) ? $_SESSION['correoMd5'] : '';
$area = (isset($_SESSION['area'])) ? $_SESSION['area'] : '';
$tipoUsuario = (isset($_SESSION['tipoUsuario'])) ? $_SESSION['tipoUsuario'] : '';



if (isset($correoMd5) && !empty($correoMd5)) {
	
	$ocultar = '';

}else{
	$ocultar = 'style="display: none;"'; // --> recuerda agregar esto en "container"
	echo "<script> window.location='../vendor/system/error/alerta.app?error=404';</script>";
}



 ?>

