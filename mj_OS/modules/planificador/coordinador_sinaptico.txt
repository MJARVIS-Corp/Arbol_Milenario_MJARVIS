import { registrarEjecucion } from "../registro/registro_contrato.mjs"
import { validar_sintagma } from "../lector_atomico.mjs"

export function ejecutarContrato(contrato) {
  const validado = validar_sintagma(contrato.sintagma_objetivo)
  registrarEjecucion(contrato, validado.toString())
  return validado ? contrato.recompensa : contrato.penalización
}