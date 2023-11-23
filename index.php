<?php 

error_reporting(E_ALL ^ E_DEPRECATED);
header("Content-Type: text/html; Charset=UTF-8");

session_start();
session_destroy();

 ?>
 
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
  <link rel="stylesheet" href="css/sb-admin-2.css">
  <script src="js/vue.js"></script>
  <title>Inicio de sesión</title>
  
</head>
<body class="bg-gradient-primary">
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100" id="app">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <img src="img/logoUTFV.svg" alt="logoUTFV" class="img-fluid mb-4">
                    <h1 class="h4 text-gray-900 mb-4">¡Bienvenide!</h1>
                  </div>

                  <form class="user" id="login">

                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" v-model="txtCorreo" name="usuario" placeholder="Correo Electrónico">
                    </div>

                    <div class="form-group">
                      <input type="password" class="form-control form-control-user" v-model="txtPws" name="pass" placeholder="Contraseña">
                    </div>
                    <div class="form-group" id="validaLogin">
                    </div>
                    <div v-if="txtCorreo != '' && txtPws.length >= 6">
                      <button class="btn btn-primary btn-user btn-block" type="submit">Inicio</button>
                  </div>
                  <div v-else>
                      <button class="btn btn-primary btn-user btn-block disabled">Inicio</button>
                  </div>

                  </form>

                  <hr>

                  <div class="text-center">
                    <a class="small" href="recupera/password.app">¿Olvidaste tu contraseña?</a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/sb-admin-2.min.js"></script>
  <!-- <script src="js/vue.js"></script> -->
  
  <script src="js/login.js"></script>
  <script>

    const mountedApp = app.mount('#app');
    
    // Inicia JAVASCRIPT

    let login = document.querySelector('#login')

    login.addEventListener('submit', function (e) {
    e.preventDefault()

    let validaLogin = document.querySelector('#validaLogin')
    let datos = new FormData(login)

    fetch('vendor/system/login/console/login.app', {
      method: 'POST',
      body: datos
      })
      .then(res => res.json())
      .then(data => {
      if (data === 'error') {
        validaLogin.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Llena todos los campos
        </div>
        `
        } else {
        validaLogin.innerHTML = `
        ${data}
        `
        }
      })
    })
  </script>
</body>
</html>