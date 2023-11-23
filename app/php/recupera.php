<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../vendor/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
  <link rel="stylesheet" href="../css/sb-admin-2.css">
  <link rel="stylesheet" href="../css/sweetalert2.min.css">
  <script src="../js/vue.js"></script>

  <title>Restablecer la contraseña</title>
  
</head>
<body class="bg-gradient-primary">
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100" id="app">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">

            <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-2">¿Olvidaste tu contraseña?</h1>
                      <p class="my-4 text-left">Simplemente ingrese su dirección de correo electrónico a continuación y le enviaremos un enlace para restablecer su contraseña.</p>
                    </div>
                    <form class="user" id="formulario">
                      <div class="form-group">
                        <input type="email" class="form-control form-control-user" name="rCorreo" v-model="rCorreo" autofocus="autofocus" placeholder="Ingresa tu Correo electrónico..." required>
                      </div>
                      <div class="form-group" id="resultado"></div>
                      <div v-if="rCorreo != ''">
                        <button class="btn btn-primary btn-user btn-block">Restablecer la contraseña</button>
                      </div>
                      <div v-else>
                        <button class="btn btn-primary btn-user btn-block" disabled>Restablecer la contraseña</button>
                      </div>
                    </form>
                    <hr>
                    <div class="text-center">
                      <a class="small" href="..">¿Ya tienes una cuenta? ¡Inicia sesión!</a>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>  
    </div>
  </div>

  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="../js/sb-admin-2.min.js"></script>
  <script src="../js/sweetalert2.js"></script>
  <script src="../js/recuperaPws.js"></script>
  <script>
    const mountedApp = app.mount('#app')

    // Inicia JAVASCRIPT

    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', function(e){
      e.preventDefault()

      let resultado = document.querySelector('#resultado')
      let datos = new FormData(formulario)

      fetch('../vendor/system/restablecer/password.app', {
        method: 'POST',
        body: datos
      })
      .then(res => res.json())
      .then(data => {

        if(data == 'error'){
          resultado.innerHTML = `
            <div class="alert alert-danger">
              ¡La dirección de correo electrónico no es válida, revisa tus datos!
            </div>
          `

        }else{
          Swal.fire({
            icon: 'success',
            title: '¡Gracias!',
            html: 'Te enviaremos un enlace por correo electrónico para que puedas restablecer tu contraseña<br><br>',
            showConfirmButton: false,
            timer: 2000,

            onClose: () => {  
              window.location="..";
            }

          })

        }

      })
    })

  </script>
</body>
</html>