const app = Vue.createApp({
    data() {
        return {
            passUsr: '',
            passUsrDos: '',
            msgAlert: '',
            estadoPass: true,
            notificaEstadoPass: '',
            validaBtn: false
        }
    },
    computed: {
        validaContrasena() {
            this.notificaEstadoPass = 'small alert alert-light text-muted'
  
            if (this.passUsr.length >= 6) {
  
              this.estadoPass = false
              this.msgAlert = 'La contraseña debe tener al menos 6 caracteres'
              this.validaBtn = false
  
              if (this.passUsrDos.length >= 6) {
  
                if (this.passUsr === this.passUsrDos) {
  
                  this.notificaEstadoPass = 'small alert alert-success'
                  this.msgAlert = 'Contraseña valida'
                  this.validaBtn = true
  
                } else {
                  this.notificaEstadoPass = 'small alert alert-danger'
                  this.msgAlert = '¡Error! Las contraseñas que escribió no coinciden'
                  this.validaBtn = false
                }
  
  
  
              } else {
                this.estadoPass = false
                this.validaBtn = false
              }
  
            } else {
              this.msgAlert = 'La contraseña debe tener al menos 6 caracteres'
  
              if (this.passUsrDos != '') {
                this.estadoPass = false
                this.validaBtn = false
              } else {
                this.estadoPass = true
                this.validaBtn = false
              }
  
            }
  
  
  
            return this.msgAlert
          }

    }
})