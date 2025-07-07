// nano_compressor.mjs
export function comprimir(sintagma) {
  const compresion = {
    input_original: sintagma,
    núcleo: generar_nucleo(sintagma),
    índice: generar_indice(),
    antihash: firmar_nucleo(sintagma)
  }
  return compresion
}

function generar_nucleo(texto) {
  // Simplifica y fusiona símbolos semánticamente
  return texto.slice(0, 2) + '⟁' + texto.length
}

function generar_indice() {
  return Math.floor(Math.random() * 9999)
}

function firmar_nucleo(texto) {
  return `⟡${texto.length}Ω${texto.charCodeAt(0)}`
}