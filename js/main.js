const store = new Vuex.Store({
    state: {
        // Inicia Datos de Usuario
        nombreCompleto: '',
        idUsuario: '',
        imgLoginUsr: '',
        // Inicia Datos de Usuario
    },
    mutations: {
        datosUsuario (state) {
            fetch('../vendor/system/datosUsuario/usuario.app')
            .then(res => res.json())
            .then(data => {
              state.nombreCompleto = data.nombre
              state.idUsuario = data.correoMd5
              state.imgLoginUsr = '../img/usr/'+data.imgLoginUsr
            })
        },
    }
})

// Inicia Router
const Inicio = { template: '<contenido-web></contenido-web>' }
const Perfil_Usr = { template: '<editar-perfil></editar-perfil>' }
const Clientes_alta = { template: '<clientes-alta></clientes-alta>' }
const Clientes_filtro = { template: '<clientes-filtro></clientes-filtro>' }
const Isr = { template: '<isr></isr>' }

const routes = [
  { path: '/', component: Inicio },
  { path: '/perfil-usr', component: Perfil_Usr },
  { path: '/clientes-alta', component: Clientes_alta },
  { path: '/clientes-filtro', component: Clientes_filtro },
  { path: '/isr', component: Isr },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
// Termina Router 

const app = Vue.createApp({
    data() {
        return {
            
        }
    },
    methods: {
        
    }
})