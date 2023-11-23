<?php
error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
date_default_timezone_set('America/Mexico_City');

// Codifica el formato json
$_POST = json_decode(file_get_contents("php://input"), true);

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

// Entradas del form
$mesAno = (isset($_POST['mesAno'])) ? $_POST['mesAno'] : '';

// Conexion a DB
$con = new SQLite3("../data/data.db") or die("Problemas para conectar");

// Opciones del CRUD
switch ($opcion) {
    // Leer
    case 4 :
        $cs = $con -> query("SELECT * FROM calculosISR WHERE fecha_Isr = '$mesAno'");
        $datos = array();
        $i = 0;

        while ($resul = $cs -> fetchArray()) {
            $datos[$i]['id'] = $resul['id'];
            $datos[$i]['fecha_Isr'] = $resul['fecha_Isr'];
            $datos[$i]['limInfe_Isr'] = $resul['limInfe_Isr'];
            $datos[$i]['limSuper_Isr'] = $resul['limSuper_Isr'];
            $datos[$i]['cuataFija_Isr'] = $resul['cuataFija_Isr'];
            $datos[$i]['tasa_Isr'] = $resul['tasa_Isr'];
            $i++;
        }

        break;
}
$datos = (isset($datos) ? $datos : '');
echo json_encode($datos);

$con -> close();


?>