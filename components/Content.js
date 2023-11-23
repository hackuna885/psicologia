app.component('contenido-web', {
    template: /*html*/ `
      <div class="container-fluid">
        <h1 class="h3 mb-4 text-gray-800">CÁLCULOS ANUALES</h1>
        <div class="card shadow mb-4 animate__animated animate__fadeIn">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">CÁLCULO DEL SALDO PROMEDIO ANUAL DE CRÉDITOS PARA 2019</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" width="100%" cellspacing="0" style="font-size: .8em;">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th>Banco Pesos</th>
                    <th>Banco Dlls</th>
                    <th>Clientes</th>
                    <th>Saldo a Favor</th>
                    <th>Deudores Dev.</th>
                    <th>IVA a Favor</th>
                    <th>Total</th>
                  </tr>
                </thead>                
                <tbody>
                  <tr v-for="liDatosCred of datosCred">
                    <th>{{liDatosCred.mes_c_cred}}</th>
                    <td>{{liDatosCred.banco_pesos_c_cred_m}}</td>
                    <td>{{liDatosCred.banco_dlls_c_cred_m}}</td>
                    <td>{{liDatosCred.clientes_c_cred_m}}</td>
                    <td>{{liDatosCred.saldo_a_favor_c_cred_m}}</td>
                    <td>{{liDatosCred.deudor_div_c_cred_m}}</td>
                    <td>{{liDatosCred.iva_a_favor_c_cred_m}}</td>
                    <td>{{liDatosCred.subtotal_c_cred_m}}</td>
                  </tr>
                </tbody>
                <tfoot>
                    <tr>
                      <th>SUMA</th>
                      <th>{{totalBancoPesosCred}}</th>
                      <th>{{totalBancoDllsCred}}</th>
                      <th>{{totalClientesCred}}</th>
                      <th>{{totalSaldoAFavorCred}}</th>
                      <th>{{totalDeudoresDevCred}}</th>
                      <th>{{totalIvaAFavorCred}}</th>
                      <th>{{totalSubTotalesCred}}</th>
                    </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div class="card shadow mb-4 animate__animated animate__fadeIn">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">CÁLCULO DEL SALDO PROMEDIO ANUAL DE DEUDAS PARA 2019</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" width="100%" cellspacing="0" style="font-size: .8em;">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th>Proveedores ($)</th>
                    <th>Proveedores (Dlls)</th>
                    <th>Acreedores</th>
                    <th>Imp. por Pagar</th>
                    <th>Doc. por Pagar</th>
                    <th>Otras Deudas</th>
                    <th>Total</th>
                  </tr>
                </thead>                
                <tbody>
                  <tr v-for="liDatosDeu of datosDeu">
                    <th>{{liDatosDeu.mes_c_deu}}</th>
                    <td>{{liDatosDeu.banco_pesos_c_deu_m}}</td>
                    <td>{{liDatosDeu.banco_dlls_c_deu_m}}</td>
                    <td>{{liDatosDeu.acreedores_c_deu_m}}</td>
                    <td>{{liDatosDeu.imp_por_pagar_c_deu_m}}</td>
                    <td>{{liDatosDeu.doc_por_pagar_c_deu_m}}</td>
                    <td>{{liDatosDeu.otras_deudas_c_deu_m}}</td>
                    <td>{{liDatosDeu.subtotal_c_deu_m}}</td>
                  </tr>
                </tbody>
                <tfoot>
                    <tr>
                      <th>SUMA</th>
                      <th>{{totalBancoPesosDeu}}</th>
                      <th>{{totalBancoDllsDeu}}</th>
                      <th>{{totalAcreedoresDeu}}</th>
                      <th>{{totalImpPorPagarDeu}}</th>
                      <th>{{totalDocPorPagarDeu}}</th>
                      <th>{{totalOtrasDeudasDeu}}</th>
                      <th>{{totalSubTotalesDeu}}</th>
                    </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
    data () {
      return {
        datosCred: [],
        totalBancoPesosCred: 0,
        totalBancoDllsCred: 0,
        totalClientesCred: 0,
        totalSaldoAFavorCred: 0,
        totalDeudoresDevCred: 0,
        totalIvaAFavorCred: 0,
        totalSubTotalesCred: 0,
        datosDeu: [],
        totalBancoPesosDeu: 0,
        totalBancoDllsDeu: 0,
        totalAcreedoresDeu: 0,
        totalImpPorPagarDeu: 0,
        totalDocPorPagarDeu: 0,
        totalOtrasDeudasDeu: 0,
        totalSubTotalesDeu: 0,
      }
    },
    methods: {
      leerDatosCredito () {
          axios.post('../vendor/system/cSaldoPromAnuCredito/lista.app')
            .then(response => {
                this.datosCred = response.data
                // console.log(response.data)
                
                // SUMA Banco Pesos
                var tot_banco_pesos_c_cred = 0
                var tot_banco_dlls_c_cred = 0
                var tot_clientes_c_cred = 0
                var tot_saldo_a_favor_c_cred = 0
                var tot_deudor_div_c_cred = 0
                var tot_iva_a_favor_c_cred = 0
                var tot_subtotal_c_cred = 0

                for (let x = 0; x < response.data.length; x++) {
                  tot_banco_pesos_c_cred += response.data[x].banco_pesos_c_cred
                  tot_banco_dlls_c_cred += response.data[x].banco_dlls_c_cred
                  tot_clientes_c_cred += response.data[x].clientes_c_cred
                  tot_saldo_a_favor_c_cred += response.data[x].saldo_a_favor_c_cred
                  tot_deudor_div_c_cred += response.data[x].deudor_div_c_cred
                  tot_iva_a_favor_c_cred += response.data[x].iva_a_favor_c_cred
                  tot_subtotal_c_cred += response.data[x].subtotal_c_cred
                }
                // Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(monto)

                // this.totalBancoPesosCred = tot_banco_pesos_c_cred.toFixed(2)
                this.totalBancoPesosCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_pesos_c_cred.toFixed(2))
                this.totalBancoDllsCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_dlls_c_cred.toFixed(2))
                this.totalClientesCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_clientes_c_cred.toFixed(2))
                this.totalSaldoAFavorCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_saldo_a_favor_c_cred.toFixed(2))
                this.totalDeudoresDevCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_deudor_div_c_cred.toFixed(2))
                this.totalIvaAFavorCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_iva_a_favor_c_cred.toFixed(2))
                this.totalSubTotalesCred = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_subtotal_c_cred.toFixed(2))

                // console.log(tot_banco_pesos_c_cred)
            })
      },

      leerDatosDeuda () {
          axios.post('../vendor/system/cSaldoPromAnuDeuda/lista.app')
            .then(response => {
                this.datosDeu = response.data
                // console.log(response.data)
                
                // SUMA Banco Pesos
                var tot_banco_pesos_c_deu = 0
                var tot_banco_dlls_c_deu = 0
                var tot_acreedores_c_deu = 0
                var tot_imp_por_pagar_c_deu = 0
                var tot_doc_por_pagar_c_deu = 0
                var tot_otras_deudas_c_deu = 0
                var tot_subtotal_c_deu = 0
                

                for (let x = 0; x < response.data.length; x++) {
                  tot_banco_pesos_c_deu += response.data[x].banco_pesos_c_deu
                  tot_banco_dlls_c_deu += response.data[x].banco_dlls_c_deu
                  tot_acreedores_c_deu += response.data[x].acreedores_c_deu
                  tot_imp_por_pagar_c_deu += response.data[x].imp_por_pagar_c_deu
                  tot_doc_por_pagar_c_deu += response.data[x].doc_por_pagar_c_deu
                  tot_otras_deudas_c_deu += response.data[x].otras_deudas_c_deu
                  tot_subtotal_c_deu += response.data[x].subtotal_c_deu
                }
                
                this.totalBancoPesosDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_pesos_c_deu.toFixed(2))
                this.totalBancoDllsDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_banco_dlls_c_deu.toFixed(2))
                this.totalAcreedoresDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_acreedores_c_deu.toFixed(2))
                this.totalImpPorPagarDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_imp_por_pagar_c_deu.toFixed(2))
                this.totalDocPorPagarDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_doc_por_pagar_c_deu.toFixed(2))
                this.totalOtrasDeudasDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_otras_deudas_c_deu.toFixed(2))
                this.totalSubTotalesDeu = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(tot_subtotal_c_deu.toFixed(2))

                // console.log(tot_banco_pesos_c_cred)
            })
      },
    },
    created() {
        this.leerDatosCredito()
        this.leerDatosDeuda()
    },
    
})