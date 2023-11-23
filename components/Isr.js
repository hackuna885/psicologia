app.component('isr', {
    template: /*html*/ `
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">ISR</h1>
        <div class="col-md-8 mx-auto">
          <div class="card shadow mb-4 animate__animated animate__fadeIn">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">PERSONAS FÍSICAS</h6>
            </div>
            <div class="card-body">
              <form class="user" @submit.prevent="leerDatosCredito">
                <div class="">
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Ingresos del Periodo:</label>
                    <input type="month" class="form-control form-control-user col-lg-4 col-sm-12" v-model="mesAno" placeholder="..." id="autoFocus" required>
                  </div>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Suma de Ingresos de meses anteriores del ejercicio:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="sumIngreAnte" placeholder="...">
                  </div>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2 font-weight-bold">Ingresos del Periodo:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="inPer" placeholder="..." required>
                  </div>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Total Ingresos:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="totalIngre"  placeholder="..." disabled>
                  </div>
                  <hr>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Suma de Deducciones Autorizadas de meses anteriores:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="sumaDeducAnte" placeholder="...">
                  </div>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2 font-weight-bold">Deducciones Autorizadas:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="deAu" placeholder="..." required>
                  </div>
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Total Deducciones:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="totDeduc" placeholder="..." disabled>
                  </div>
                  <hr>
                  <h6 class="m-0 font-weight-bold text-primary col-12 text-center" data-toggle="collapse" data-target="#perdidasFiscales" aria-expanded="false" aria-controls="perdidasFiscales" style="cursor: pointer;">Perdidas Fiscales</h6>
                  <hr>
  
                  <div class="collapse" id="perdidasFiscales">
  
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Base Gravable del PP:</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="baseGravable" placeholder="..." disabled>
                    </div>
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Limite Inferior:</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="limInferior" placeholder="..." disabled>
                    </div>
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">=</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="restaBaseGravaLimInferior" placeholder="..." disabled>
                    </div>
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Tasa (%):</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="tasaData" placeholder="..." disabled>
                    </div>
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Cuota Fija:</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="cuotaFijaData" placeholder="..." disabled>
                    </div>
  
                  </div>
  
                  <div class="form-group mb-3 row">                  
                    <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2 font-weight-bold">ISR Determinado:</label>
                    <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="isrDeterminadoCalc" placeholder="..." disabled>
                  </div>
                  
                  <hr>
                  <h6 class="m-0 font-weight-bold text-primary col-12 text-center" data-toggle="collapse" data-target="#pagosProvAnte" aria-expanded="false" aria-controls="pagosProvAnte" style="cursor: pointer;">Pagos provisionales anteriores</h6>
                  <hr>
  
                  <div class="collapse" id="pagosProvAnte">
                    <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2">Impuesto retenido:</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="impRetenido" placeholder="...">
                    </div>
                  </div>
  
                  <div class="form-group mb-3 row">                  
                      <label class="col-form-label col-lg-8 col-sm-12 text-lg-right text-sm-left mt-lg-2 font-weight-bold">Impuesto a Cargo:</label>
                      <input type="number" class="form-control form-control-user col-lg-4 col-sm-12" min="0.0" step="0.5" value="0.0" v-model="totalImpCargo" placeholder="..." disabled>
                    </div>
                  
                  <div class="form-group mb-3 row">                  
                    <div class="col-lg-8 d-none d-sm-block"></div>
                    <div class="form-group col-lg-4">
                      <button class="btn btn-primary btn-user btn-block" type="submit">Calcular</button>
                    </div>
                  </div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    `,
    data () {
      return {
        sumIngreAnte: 0,
        inPer: 0,
        sumaDeducAnte: 0,
        deAu: 0,
        limInferior: '',
        restaBaseGravaLimInferior: '',
        tasaData: '',
        cuotaFijaData: '',
        isrDeterminadoCalc: 0,
        impRetenido: 0,
        mesAno: ''
      }
    },
    computed: {
      totalIngre () {
        return parseFloat(this.sumIngreAnte) + parseFloat(this.inPer)
      },
      totDeduc () {
        return parseFloat(this.sumaDeducAnte) + parseFloat(this.deAu)
      },

      baseGravable () {
        return parseFloat(this.totalIngre) - parseFloat(this.totDeduc)
      },
      totalImpCargo () {
        return parseFloat(this.isrDeterminadoCalc) - parseFloat(this.impRetenido)
      },
    },
    methods: {
      leerDatosCredito () {
          axios.post('../vendor/system/limitesISR/lista.app', {
            opcion: 4,
            mesAno: this.mesAno
          })
            .then(response => {
                // this.baGravablePP = response.data
                // console.log(response.data)
                
                // Limites
                var limiteInferior = 0
                var limiteSuperior = 0
                var cuotaFija = 0
                var tasa = 0
                var restaBaseGravLimInfe = 0
                var isrDeterminado = 0

                for (let x = 0; x < response.data.length; x++) {
                  if (this.baseGravable <= response.data[x].limSuper_Isr) {
                    limiteInferior = parseFloat(response.data[x].limInfe_Isr)
                    limiteSuperior = parseFloat(response.data[x].limSuper_Isr)
                    cuotaFija = parseFloat(response.data[x].cuataFija_Isr)
                    tasa = parseFloat(response.data[x].tasa_Isr)

                    restaBaseGravLimInfe = parseFloat((this.baseGravable - limiteInferior).toFixed(2))
                    isrDeterminado = parseFloat((cuotaFija+(this.baseGravable - limiteInferior)*(tasa/100)).toFixed(0))

                    this.limInferior = limiteInferior
                    this.restaBaseGravaLimInferior = restaBaseGravLimInfe
                    this.tasaData = tasa
                    this.cuotaFijaData = cuotaFija
                    this.isrDeterminadoCalc = isrDeterminado

                    // console.log(limiteInferior)
                    // console.log(limiteSuperior)
                    // console.log(cuotaFija)
                    // console.log(tasa)
                    // console.log(restaBaseGravLimInfe)
                    // console.log(isrDeterminado)
                    break
                  }
                }
                // Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(monto)

                // this.totalBancoPesosCred = tot_banco_pesos_c_cred.toFixed(2)
                // this.totalBancoPesosCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_pesos_c_cred.toFixed(2))
                // this.totalBancoDllsCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_dlls_c_cred.toFixed(2))
                // this.totalClientesCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_clientes_c_cred.toFixed(2))
                // this.totalSaldoAFavorCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_saldo_a_favor_c_cred.toFixed(2))
                // this.totalDeudoresDevCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_deudor_div_c_cred.toFixed(2))
                // this.totalIvaAFavorCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_iva_a_favor_c_cred.toFixed(2))
                // this.totalSubTotalesCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_subtotal_c_cred.toFixed(2))

                // console.log(tot_banco_pesos_c_cred)
            })
      },
      
      // Autofocus
      autoFocus() {
        document.getElementById('autoFocus').focus()
      }

      
    },
    created() {
        // this.leerDatosCredito()        
    },
    mounted() {
      this.autoFocus();
    },
    
})