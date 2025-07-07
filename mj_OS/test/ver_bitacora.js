import { bitacora } from '../modules/registro/registro_contrato.mjs'

console.log("📜 BITÁCORA DE CONTRATOS EJECUTADOS:\n")
console.log(JSON.stringify(bitacora, null, 2))