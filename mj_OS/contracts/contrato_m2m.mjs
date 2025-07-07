export const contrato = {
  id: "M2M-CJM-X203R1",
  emisor: "MJARVIS_NODO_A",
  receptor: "MJARVIS_NODO_B",
  sintagma_objetivo: "⟁Ωδ72",  // ✅ válido confirmado
  condición_ejecución: {
    lector: "lector_atomico.mjs",
    acción: "validar_sintagma",
    resultado: "true"
  },
  recompensa: {
    prioridad_ejecucion: 9,
    acceso_ampliado: true,
    tokens_simbolicos: 7
  },
  penalización: {
    mensaje: "bloqueo_temporal",
    duración: "3 ciclos simbólicos"
  },
  antihash_de_contrato: "⟡Σ-RA72",
  ejecutable: true,
  justificación: "Ejecución positiva para activar la ruta de recompensa simbólica"
}