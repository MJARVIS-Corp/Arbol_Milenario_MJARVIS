import { validar_sintagma } from '../modules/lector_atomico.mjs'
import { bitacora } from '../modules/registro/registro_contrato.mjs'
import { actualizar_wallet } from '../modules/sistema_valores/mj_wallet_simbolica.mjs'

// 🧬 Capturar sintagma desde consola
const sintagma_dinamico = process.argv[2]

if (!sintagma_dinamico) {
  console.error("❌ Debes ingresar un sintagma como argumento.")
  console.error("Ejemplo: node mj_diagnostico_simbolico.js ⟁Z9F7")
  process.exit(1)
}

// 📄 Contrato generado dinámicamente
const contrato = {
  id: `TX-${Date.now()}`,
  emisor: "MJARVIS_NODO_A",
  receptor: "MJARVIS_NODO_B",
  sintagma_objetivo: sintagma_dinamico,
  condición_ejecución: {
    lector: "lector_atomico.mjs",
    acción: "validar_sintagma",
    resultado: "true"
  },
  recompensa: {
    prioridad_ejecucion: 7,
    acceso_ampliado: true,
    tokens_simbolicos: 5
  },
  penalización: {
    mensaje: "bloqueo_temporal",
    duración: "2 ciclos simbólicos"
  },
  ejecutable: true,
  justificación: "Prueba dinámica de sintagma simbiótico"
}

// 🔍 Validar sintagma
const resultado = validar_sintagma(contrato.sintagma_objetivo)
console.log(`\n🔍 Resultado de validar_sintagma(): ${resultado}`)

// 🧠 Evaluar contrato
if (resultado === true) {
  contrato.resultado = "true"
  contrato.recompensa_aplicada = contrato.recompensa
  contrato.penalización = null
} else {
  contrato.resultado = "false"
  contrato.recompensa_aplicada = null
}

// 📝 Registrar en bitácora
bitacora.push({
  id: contrato.id,
  emisor: contrato.emisor,
  receptor: contrato.receptor,
  acción: contrato.condición_ejecución.acción,
  resultado: contrato.resultado,
  recompensa: contrato.recompensa_aplicada,
  penalización: contrato.penalización,
  hora: new Date().toISOString()
})

// 🧾 Mostrar resultado simbólico
console.log(`\n🧠 Resultado simbólico del contrato:`)
console.log(contrato.resultado === "true" ? contrato.recompensa : contrato.penalización)

console.log(`\n📜 Bitácora simbiótica:`)
console.log(bitacora)

// 💰 Consolidar tokens simbólicos
actualizar_wallet()