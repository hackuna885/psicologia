<?php
error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");
session_start();

// Codifica el formato json
$_POST = json_decode(file_get_contents("php://input"), true);



// Conexion a DB
$con = new SQLite3("../data/data.db") or die("Problemas para conectar");

$cs = $con -> query("SELECT * FROM v_c_creditos");
$datos = array();
$i = 0;

while ($resul = $cs -> fetchArray()) {
    // Estos datos para operaciones
    $datos[$i]['mes_c_cred'] = $resul['mes_c_cred'];
    $datos[$i]['banco_pesos_c_cred'] = floatval($resul['v_banco_pesos_c_cred']);
    $datos[$i]['banco_dlls_c_cred'] = floatval($resul['v_banco_dlls_c_cred']);
    $datos[$i]['clientes_c_cred'] = floatval($resul['v_clientes_c_cred']);
    $datos[$i]['saldo_a_favor_c_cred'] = floatval($resul['v_saldo_a_favor_c_cred']);
    $datos[$i]['deudor_div_c_cred'] = floatval($resul['v_deudor_div_c_cred']);
    $datos[$i]['iva_a_favor_c_cred'] = floatval($resul['v_iva_a_favor_c_cred']);
    $datos[$i]['subtotal_c_cred'] = floatval($resul['v_total_c_cred']);
    
    // Estos datos formato de moneda
    $datos[$i]['banco_pesos_c_cred_m'] = '$'.number_format($resul['v_banco_pesos_c_cred'],2);
    $datos[$i]['banco_dlls_c_cred_m'] = '$'.number_format($resul['v_banco_dlls_c_cred'],2);
    $datos[$i]['clientes_c_cred_m'] = '$'.number_format($resul['v_clientes_c_cred'],2);
    $datos[$i]['saldo_a_favor_c_cred_m'] = '$'.number_format($resul['v_saldo_a_favor_c_cred'],2);
    $datos[$i]['deudor_div_c_cred_m'] = '$'.number_format($resul['v_deudor_div_c_cred'],2);
    $datos[$i]['iva_a_favor_c_cred_m'] = '$'.number_format($resul['v_iva_a_favor_c_cred'],2);
    $datos[$i]['subtotal_c_cred_m'] = '$'.number_format($resul['v_total_c_cred'],2);
    $i++;
}
$datos = (isset($datos) ? $datos : '');
echo json_encode($datos);
$con -> close();


?>