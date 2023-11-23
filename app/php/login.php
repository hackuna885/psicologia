<?php 

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
session_start();

$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$pass = (isset($_POST['pass'])) ? $_POST['pass'] : '';

if($usuario === '' || $pass === ''){
    echo json_encode('error');
}else{

	$usuarioCript = md5($usuario);
	$passCript = md5($pass);

	$con = new SQLite3("../data/data.db");
	$cs = $con -> query("SELECT * FROM registroUsr WHERE correoMd5 = '$usuarioCript'");

	while ($resul = $cs -> fetchArray()) {
		$nombre = $resul['nombreCom'];
		$area = $resul['area'];
		$correo = $resul['correo'];
		$correoMd5 = $resul['correoMd5'];
		$passDecrypt = $resul['passDecrypt'];
		$tipoUsuario = $resul['tipoUsuario'];
		$usrActivo = $resul['usrActivo'];
	}

	$correoMd5 = (isset($correoMd5)) ?  $correoMd5 : '';
	$passDecrypt = (isset($passDecrypt)) ?  $passDecrypt : '';

	/*VALIDACIÓN DE CORREO*/

	if($correoMd5 === $usuarioCript){

		/*VALIDACIÓN DE PASSWORD*/

		if($passDecrypt === $passCript){

			/*VALIDACIÓN DE USUARIO ACTIVO*/
			
			if($usrActivo === '1'){

				$_SESSION['nombre'] = $nombre;
				$_SESSION['correo'] = $correo;
				$_SESSION['correoMd5'] = $correoMd5;
				$_SESSION['area'] = $area;
				$_SESSION['tipoUsuario'] = $tipoUsuario;

				echo json_encode('
				<meta http-equiv="REFRESH" content="0; url=home/inicio.app">
				');
			}else{
				echo json_encode('
				<div class="alert alert-danger" role="alert">
					Tu usuario esta bloqueado o inactivo
				</div>
				');
			}

		}else{
			echo json_encode('
			<div class="alert alert-danger" role="alert">
				Contraseña no valida
			</div>
			');
		}
	}else{
		echo json_encode('
		<div class="alert alert-danger" role="alert">
			Usuario no valido
		</div>
		');
	}
}

 ?>