app.component('menu-lateral', {
    template: /*html*/`
    
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  
            <!-- Inicia Título Logo barra -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center my-3" href="#">
              <div class="sidebar-brand-icon">
                <img src="../img/logoMenu.svg" alt="Logo Menú" class="img-fluid">
              </div>
              <!-- <div class="sidebar-brand-text mx-3">Conta <sup>1.0</sup></div> -->
            </a>
            <!-- Termina Título Logo barra -->
  
            <!-- Lina -->
            <hr class="sidebar-divider my-0">
      
            <!-- Título Tablero -->
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Tablero</span>
              </router-link>
            </li>
      
            <!-- Lina -->
            <hr class="sidebar-divider">
      
            <!-- Título Sección -->
            <div class="sidebar-heading">
                Interfaz
            </div>
      
            <!-- Inicia Elemento Menú -->
            <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-users-cog"></i>
                <span>Clientes</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Configuración:</h6>
                  <router-link class="collapse-item" to="/clientes-alta">Alta</router-link>
                  <router-link class="collapse-item" to="/clientes-filtro">Filtro</router-link>
                </div>
              </div>
            </li>
            <!-- Termina Elemento Menú -->
      
            <!-- Inicia Elemento Menú -->
            <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Utilidades</span>
              </a>
              <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Personalizadas:</h6>
                  <a class="collapse-item" href="#">Colores</a>
                  <a class="collapse-item" href="#">Bordes</a>
                  <a class="collapse-item" href="#">Animaciones</a>
                  <a class="collapse-item" href="#">Otros</a>
                </div>
              </div>
            </li>
            <!-- Termina Elemento Menú -->
      
            <!-- Lina -->
            <hr class="sidebar-divider">
      
            <!-- Título Sección -->
            <div class="sidebar-heading">
                Menú
            </div>
      
            <!-- Inicia Elemento Menú -->
            <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Paginas</span>
              </a>
              <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Pantalla Inicio:</h6>
                  <a class="collapse-item" href="#">Inicio</a>
                  <router-link class="collapse-item" to="/isr">ISR</router-link>
                  <a class="collapse-item" href="#">Olvido Contraseña</a>
                  <div class="collapse-divider"></div>
                  <h6 class="collapse-header">Otras Paginas:</h6>
                  <a class="collapse-item" href="#">404 Error</a>
                  <a class="collapse-item" href="#">Pagina Blanco</a>
                </div>
              </div>
            </li>
            <!-- Termina Elemento Menú -->
      
            <!-- Inicia Elemento Botón Menú -->
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Graficas</span></a>
            </li>
            <!-- Termina Elemento Botón Menú -->
      
            <!-- Inicia Elemento Botón Menú -->
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-fw fa-table"></i>
                <span>Tablas</span></a>
            </li>
            <!-- Termina Elemento Botón Menú -->
      
            <!-- Lina -->
            <hr class="sidebar-divider d-none d-md-block">
      
            <!-- Inicia Botón Ocultar-->
            <div class="text-center d-none d-md-inline">
              <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            <!-- Termina Botón Ocultar-->
      
        </ul>
        
    `,
    data () {
        return {
            
        }
    },
    

})