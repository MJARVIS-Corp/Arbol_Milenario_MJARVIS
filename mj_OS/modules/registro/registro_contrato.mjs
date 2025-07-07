// registro_contrato.mjs

export const bitacora = []

/**
 * Registra la ejecución de un contrato simbiótico dentro de MJARVIS.
 * @param {Object} contrato - El contrato ejecutado
 * @param {String} resultado - Resultado de la evaluación ('true' o 'false')
 */
export function registrarEjecucion(contrato, resultado) {
  const entrada = {
    id: contrato.id,
    emisor: contrato.emisor,
    receptor: contrato.receptor,
    acción: contrato.condición_ejecución?.acción || "indefinida",
    resultado: resultado,
    hora: new Date().toISOString(),
    recompensa: resultado === "true" ? contrato.recompensa : null,
    penalización: resultado !== "true" ? contrato.penalización : null
  }

  bitacora.push(entrada)

  // 🧠 Visor simbólico (opcional para auditoría inmediata)
  console.log("📝 Contrato registrado en bitácora:")
  console.log(JSON.stringify(entrada, null, 2))
}