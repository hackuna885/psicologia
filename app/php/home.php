<?php
require_once "seguridad.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../vendor/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
    <link rel="stylesheet" href="../css/sb-admin-2.css">
    <link rel="stylesheet" href="../vendor/datatables/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="../css/animate.min.css">
    <link rel="stylesheet" href="../css/sweetalert2.min.css">
    <script src="../js/vue.js"></script>
    <script src="../js/vue-router.js"></script>
    <script src="../js/vuex.js"></script>

    <title>Inicio</title>
</head>
<body class="animate__animated animate__fadeIn" id="page-top" <?php echo $ocultar; ?>>
    <div id="app">
      <div id="wrapper">

        <menu-lateral></menu-lateral>
        
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <barra-superior></barra-superior>

            <router-view></router-view>

          </div>

          <pie-pagina></pie-pagina>

        </div>

      </div>

      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>

      <cerrar-sesion></cerrar-sesion>


    </div>

    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="../js/sweetalert2.js"></script>
    <script src="../js/axios.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="../components/Menu.js"></script>
    <script src="../components/Navbar.js"></script>
    <script src="../components/Content.js"></script>
    <script src="../components/Footer.js"></script>
    <script src="../components/Logout.js"></script>
    <script src="../components/Isr.js"></script>
    <script src="../components/perfil-usr/Perfil.js"></script>
    <script src="../components/clientes-conf/Alta.js"></script>
    <script src="../components/clientes-conf/Filtro.js"></script>
    <script>
        app.use(store)
        app.use(router)
        app.mount("#app")
    </script>
    <script src="../js/sb-admin-2.min.js"></script>
    <script src="../vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="../vendor/datatables/Spanish.json"></script>
    <script src="../vendor/datatables/dataTables.bootstrap4.min.js"></script>
    <script src="../js/demo/datatables-demo.js"></script>
</body>
</html>