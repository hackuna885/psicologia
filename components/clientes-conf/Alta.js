app.component('clientes-alta', {
    template: /*html*/ `
      <div class="container-fluid">

        <h1 class="h3 mb-4 text-gray-800">Alta de Usuarios</h1>
        <div class="card shadow mb-4 animate__animated animate__fadeIn">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Datos del Usuario</h6>
          </div>
          <div class="card-body">
            <form class="user" @submit.prevent="alta">
              <div class="row">
                <div class="form-group col-lg-4 col-md-6 mb-3">
                  <label>Nombre:</label>
                  <input type="text" class="form-control form-control-user" v-model="nomComer" id="autoFocus" placeholder="..." required>
                </div>
                <div class="form-group col-lg-4 col-md-6 mb-3">
                  <label>RFC:</label>
                  <input type="text" class="form-control form-control-user" v-model="rfc" placeholder="...">
                </div>
                <div class="form-group col-lg-4 col-md-12 mb-3">
                  <label>Nombre del representante:</label>
                  <input type="text" class="form-control form-control-user" v-model="nomRep" placeholder="...">
                </div>
                <div class="form-group col-lg-8"></div>
                <div class="form-group col-lg-4">
                  <button class="btn btn-primary btn-user btn-block" type="submit">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="card shadow mb-4 animate__animated animate__fadeIn">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Clientes</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" width="100%" cellspacing="0" style="font-size: .8em;">
                <thead>
                  <tr>
                    <th>Num</th>
                    <th>Nombre</th>
                    <th>RFC</th>
                    <th>Nombre del representante</th>
                    <th></th>
                  </tr>
                </thead>                
                <tbody>
                  <tr v-for="(liDatos, index) of datos">
                    <th>{{index+1}}</th>
                    <td>{{liDatos.nom_comer_alt_clie}}</td>
                    <td>{{liDatos.rfc_alt_clie}}</td>
                    <td>{{liDatos.nom_repre_alt_clie}}</td>
                    <td>
                    <div class="btn-group">
                      <button class="btn btn-primary btn-sm"
                        @click="btnEditar(liDatos.id,liDatos.nom_comer_alt_clie,liDatos.rfc_alt_clie,liDatos.nom_repre_alt_clie)">
                        <i class="fas fa-pen text-light"></i>
                      </button>
                      <button class="btn btn-danger btn-sm" @click="btnEliminar(liDatos.id, liDatos.nom_comer_alt_clie)">
                        <i class="fas fa-trash-alt text-light"></i>
                      </button>
                    </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
    data () {
      return {
        datos: [],
        nomComer: '',
        rfc: '',
        nomRep: ''
      }
    },
    methods: {
      // BOTONES
        
        // Boton Alta
        alta () {
          axios.post('../vendor/system/altaClientes/alta.app', {
              opcion: 1,
              nomComer: this.nomComer,
              rfc: this.rfc,
              nomRep: this.nomRep
            })
            .then(response => {
              // Se Actualiza la lista
              this.listaDatos()

              // Llamamos el SweetAlert
              Swal.fire({
                  icon: 'success',
                  title: 'Se agrego un Cliente',
                  showConfirmButton: true
              })

            })
          
          // Limpiamos los campos del form
          this.nomComer = '',
          this.rfc = '',
          this.nomRep = ''
      },

      // Boton de Actualizar
      btnEditar (id,nomComer,rfc,nomRep) {
          Swal.fire({
              title: 'Editar',
              html: /*html*/ `
              <div class="row">
                  <div class="form-group mb-3 col-md-12">
                      <input type="text" class="form-control" placeholder="Nombre Comercial..." value="${nomComer}" id="nomComer" required />
                  </div>
                  <div class="form-group mb-3 col-md-12">
                      <input type="text" class="form-control" placeholder="RFC..." value="${rfc}" id="rfc" required />
                  </div>
                  <div class="form-group mb-3 col-md-12">
                      <input type="text" class="form-control" placeholder="Nombre del representante..." value="${nomRep}" id="nomRep" required />
                  </div>
              </div>
              `,
              showCancelButton: true,
              confirmButtonText: 'Guardar',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33'
          })
          .then((result) => {
              if (result.value) {
                  nomComer = document.getElementById('nomComer').value,
                  rfc = document.getElementById('rfc').value,
                  nomRep = document.getElementById('nomRep').value,

                  this.editar(id,nomComer,rfc,nomRep)
                  Swal.fire(
                      '¡Actualizado!',
                      'El registro ha sido actualizado.',
                      'success'
                  )
              }
          })
      },

      // Boton de Eliminar
      btnEliminar (id,nomComer) {
          Swal.fire({
              title: '¿Estás seguro de eliminar ' +  nomComer + '?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Borrar'
          })
          .then(result => {
              if (result.value) {
                  this.eliminar(id)

                  Swal.fire(
                      '¡Eliminado!',
                      'El registro ha sido eliminado.',
                      'success'
                  )
              }
          })
      },

      // PROCESOS

      // Proceso Editar
      editar (id,nomComer,rfc,nomRep) {
          axios.post('../vendor/system/altaClientes/alta.app', {
              opcion: 2,
              id: id,
              nomComer: nomComer,
              rfc: rfc,
              nomRep: nomRep
          })
          .then(response => {
              this.listaDatos()
          })
      },

      // Proceso Eliminar
      eliminar(id){
          axios.post('../vendor/system/altaClientes/alta.app', {
              opcion: 3,
              id: id
          })
          .then(response => {
              this.listaDatos()
          })
      },

      // Lista de datos
      listaDatos () {
          axios.post('../vendor/system/altaClientes/alta.app', {
              opcion: 4
          })
          .then(response => {
              this.datos = response.data
              // console.log(response.data)
          })
      },

      // Autofocus
      autoFocus() {
        document.getElementById('autoFocus').focus()
      }
    },
    created () {
      this.listaDatos()
    },
    mounted() {
      this.autoFocus();
    },
})