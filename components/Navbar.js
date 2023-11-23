app.component('barra-superior', {
    template: /*html*/ `
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Boton Menu hamburguesa -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <ul class="navbar-nav ml-auto">

      <div class="topbar-divider d-none d-sm-block"></div>

      <li class="nav-item dropdown no-arrow">
        <!-- Inicia Información usuario -->
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{nombreCompleto}}</span>
          <img class="img-profile rounded-circle" :src="imgLoginUsr">
        </a>
        <!-- Termina Información usuario -->

        <!-- Inicia Menú Usuario -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          
          <router-link class="dropdown-item" to="/perfil-usr">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Perfil          
          </router-link>
          
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Ajustes
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Salir
          </a>
        </div>
        <!-- Termina Menú Usuario -->

      </li>

    </ul>

    </nav>
    `,
    data () {
      return {
        
      }
    },

    computed: {
      ...Vuex.mapState(['nombreCompleto','idUsuario','imgLoginUsr'])
    },

    methods: {
      datosUsuario () {
        this.$store.commit("datosUsuario")
      }
    },

    created() {
      this.datosUsuario();
    }
})