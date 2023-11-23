<?php
error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
session_start();

// Codifica el formato json
$_POST = json_decode(file_get_contents("php://input"), true);



// Conexion a DB
$con = new SQLite3("../data/data.db") or die("Problemas para conectar");

$cs = $con -> query("SELECT * FROM v_c_deudas");
$datos = array();
$i = 0;

while ($resul = $cs -> fetchArray()) {
    // Estos datos para operaciones
    $datos[$i]['mes_c_deu'] = $resul['mes_c_deu'];
    $datos[$i]['banco_pesos_c_deu'] = floatval($resul['v_banco_pesos_c_deu']);
    $datos[$i]['banco_dlls_c_deu'] = floatval($resul['v_banco_dlls_c_deu']);
    $datos[$i]['acreedores_c_deu'] = floatval($resul['v_acreedores_c_deu']);
    $datos[$i]['imp_por_pagar_c_deu'] = floatval($resul['v_imp_por_pagar_c_deu']);
    $datos[$i]['doc_por_pagar_c_deu'] = floatval($resul['v_doc_por_pagar_c_deu']);
    $datos[$i]['otras_deudas_c_deu'] = floatval($resul['v_otras_deudas_c_deu']);
    $datos[$i]['subtotal_c_deu'] = floatval($resul['v_total_c_deu']);
    
    // Estos datos formato de moneda
    $datos[$i]['banco_pesos_c_deu_m'] = '$'.number_format($resul['v_banco_pesos_c_deu'],2);
    $datos[$i]['banco_dlls_c_deu_m'] = '$'.number_format($resul['v_banco_dlls_c_deu'],2);
    $datos[$i]['acreedores_c_deu_m'] = '$'.number_format($resul['v_acreedores_c_deu'],2);
    $datos[$i]['imp_por_pagar_c_deu_m'] = '$'.number_format($resul['v_imp_por_pagar_c_deu'],2);
    $datos[$i]['doc_por_pagar_c_deu_m'] = '$'.number_format($resul['v_doc_por_pagar_c_deu'],2);
    $datos[$i]['otras_deudas_c_deu_m'] = '$'.number_format($resul['v_otras_deudas_c_deu'],2);
    $datos[$i]['subtotal_c_deu_m'] = '$'.number_format($resul['v_total_c_deu'],2);
    $i++;
}
$datos = (isset($datos) ? $datos : '');
echo json_encode($datos);
$con -> close();


?>