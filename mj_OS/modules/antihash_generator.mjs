// antihash_generator.mjs

export function generar_antihash(bloque) {
  const base = bloque.slice(0, 3)
  const firma = `⟡XΩ${base.charCodeAt(0)}-δ`
  return {
    antihash: firma,
    original: bloque,
    activador: 'lector_atomico'
  }
}