<?php

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
session_start();

 $nombre = (isset($_SESSION['nombre'])) ? $_SESSION['nombre'] : '';
 $correo = (isset($_SESSION['correo'])) ? $_SESSION['correo'] : '';
 $correoMd5 = (isset($_SESSION['correoMd5'])) ? $_SESSION['correoMd5'] : '';
 $area = (isset($_SESSION['area'])) ? $_SESSION['area'] : '';
 $tipoUsuario = (isset($_SESSION['tipoUsuario'])) ? $_SESSION['tipoUsuario'] : '';

//  $nombreCom = array('hackuna','matata','ok');
//  echo json_encode($nombreCom, JSON_UNESCAPED_UNICODE);

// Valida IMG User
$ruta='../../img/usr';
$nomImgUsr = $correoMd5.'.jpg';
$directorio = opendir($ruta);
while ($archivo = readdir($directorio))
{
    $archivo;
    if( $archivo === $nomImgUsr){
        $varImgUsr = 1;
    }
}
$varImgUsr = (isset($varImgUsr)) ? $varImgUsr : '';

if($varImgUsr === 1){
	$imgLoginUsr = $nomImgUsr;
}else{
	$imgLoginUsr = 'usr.svg';
}
// Valida IMG User


$datosUsr = new stdClass();
$datosUsr->nombre = $nombre;
$datosUsr->correo = $correo;
$datosUsr->correoMd5 = $correoMd5;
$datosUsr->area = $area;
$datosUsr->tipoUsuario = $tipoUsuario;
$datosUsr->imgLoginUsr = $imgLoginUsr;

echo json_encode($datosUsr, JSON_UNESCAPED_UNICODE);

?>