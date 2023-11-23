<?php
error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');
session_start();

// Codifica el formato json
$_POST = json_decode(file_get_contents("php://input"), true);

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

// Intradas del form
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$nomComer = (isset($_POST['nomComer'])) ? $_POST['nomComer'] : '';
$rfc = (isset($_POST['rfc'])) ? $_POST['rfc'] : '';
$nomRep = (isset($_POST['nomRep'])) ? $_POST['nomRep'] : '';

$nombre = (isset($_SESSION['nombre'])) ? $_SESSION['nombre'] : '';
$correoMd5 = (isset($_SESSION['correoMd5'])) ? $_SESSION['correoMd5'] : '';
// Enciptar entrada
$nomComerCrip = (isset($_POST['nomComer'])) ? md5($_POST['nomComer']) : '';

// Fecha y Hora
$fechaCap = date('d-m-Y');
$horaCap = date('g:i:s a');
$fechaHoraReg = $fechaCap . ' ' . $horaCap;

// Conexion a DB
$con = new SQLite3("../data/data.db") or die("Problemas para conectar");

// Opciones del CRUD
switch ($opcion) {
    // Insertar
    case 1 :
        $cs = $con -> query("INSERT INTO alta_clientes (nom_comer_alt_clie,nomMd5_alt_clie,rfc_alt_clie,nom_repre_alt_clie,usr_alt_clie,id_usr_alt_clie,fecha_hora_alt_clie) VALUES('$nomComer','$nomComerCrip','$rfc','$nomRep','$nombre','$correoMd5','$fechaHoraReg')");
        break;
    // Actualizar
    case 2 :
        $cs = $con -> query("UPDATE alta_clientes SET nom_comer_alt_clie = '$nomComer', nomMd5_alt_clie = '$nomComerCrip', rfc_alt_clie = '$rfc', nom_repre_alt_clie = '$nomRep', usr_alt_clie = '$nombre', id_usr_alt_clie = '$correoMd5', fecha_hora_alt_clie = '$fechaHoraReg' WHERE id = '$id'");
        break;
    // Eliminar
    case 3 :
        $cs = $con -> query("DELETE FROM alta_clientes WHERE id = '$id'");
        break;
    // Leer
    case 4 :
        $cs = $con -> query("SELECT * FROM alta_clientes");
        $datos = array();
        $i = 0;

        while ($resul = $cs -> fetchArray()) {
            $datos[$i]['id'] = $resul['id'];
            $datos[$i]['nom_comer_alt_clie'] = $resul['nom_comer_alt_clie'];
            $datos[$i]['rfc_alt_clie'] = $resul['rfc_alt_clie'];
            $datos[$i]['nom_repre_alt_clie'] = $resul['nom_repre_alt_clie'];
            $i++;
        }

        break;
}
$datos = (isset($datos) ? $datos : '');
echo json_encode($datos);

$con -> close();


?>