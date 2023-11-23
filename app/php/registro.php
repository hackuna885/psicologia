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

  <title>Registro</title>
  
</head>
<body class="bg-gradient-primary">
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100" id="app">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">¡Crea una cuenta!</h1>
                    </div>
                    <form class="user" id="formulario">
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" class="form-control form-control-user" id="nombreUsr" name="nombreUsr" v-model="nUsr" autofocus="autofocus" required placeholder="Nombre">
                        </div>
                        <div class="col-sm-6">
                          <input type="text" class="form-control form-control-user" id="apellidoUsr" name="apellidoUsr" v-model="aUsr" placeholder="Apellido(s)" required>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control form-control-user" id="correoUsr" v-model="nCorreo" name="correoUsr" placeholder="Correo electrónico" required >
                      </div>
                      <div class="form-group" id="resultado"></div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" class="form-control form-control-user" id="nPassUsr" name="nPassUsr"
                          v-model="passUsr" placeholder="Contraseña" required>
                        </div>
                        <div class="col-sm-6">
                          <input type="password" class="form-control form-control-user" id="passUsrDos" v-model="passUsrDos"
                          placeholder="Repetir contraseña" :disabled="estadoPass">
                        </div>
                      </div>

                      <div :class="notificaEstadoPass" role="alert">
                        {{validaContrasena}}
                      </div>
                      
                      <div  v-if="nUsr != '' && aUsr != '' && nCorreo != '' && passUsr != '' && passUsrDos != '' && this.validaBtn === true">
                        <button class="btn btn-primary btn-user btn-block" type="submit">
                          Registrar cuenta
                        </button>
                      </div>
                      <div v-else>
                        <button class="btn btn-primary btn-user btn-block" disabled>
                          Registrar cuenta
                        </button>
                      </div>
                      
                    </form>
                    
                    <hr>

                    <div class="text-center">
                      <a class="small" href="../recupera/password.app">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="..">¿Ya tienes una cuenta? ¡Iniciar sesión!</a>
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
  <script src="../js/registroUsr.js"></script>
  <script>
    const mountedApp = app.mount('#app')

    // Inicia JAVASCRIPT

    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', function(e){
      e.preventDefault()

      let resultado = document.querySelector('#resultado')
      let datos = new FormData(formulario)

      fetch('../vendor/system/nuevoRegistroUsr/agregar.app', {
        method: 'POST',
        body: datos
      })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          if (data === 'error') {
            // console.log(data)
            resultado.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                      "La dirección de correo electrónico que ha ingresado ya está registrada"
                    </div>
                    `
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Usuario creado exitosamente',
              showConfirmButton: false,
              timer: 2000,
              onClose: () => {  
                window.location="login.html";
              }
            })

       }

      })
    })

  </script>
</body>
</html>