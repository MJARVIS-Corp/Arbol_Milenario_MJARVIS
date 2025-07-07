import fs from 'fs'
import path from 'path'

const rutaWallet = path.resolve('./mj_wallet_simbolica.json')

if (!fs.existsSync(rutaWallet)) {
  console.log('❌ No se encontró el archivo de wallet simbólica.')
  process.exit(1)
}

const wallet = JSON.parse(fs.readFileSync(rutaWallet, 'utf-8'))
const nodo = Object.keys(wallet)[0] || 'NodoDesconocido'
const tokens = wallet[nodo]?.tokens || 0

const tasaBase = 0.10  // USD por token
const dificultad = 1.5
const multiplicadorNodo = 1.0

const valorEstimado = (tokens * tasaBase * dificultad * multiplicadorNodo).toFixed(2)
const retiroDisponible = tokens >= 10 ? '✅ Retiro disponible' : '⏳ Aún no alcanza el umbral'

console.log(`\n🔹 Nodo: ${nodo}`)
console.log(`   - Tokens acumulados: ${tokens}`)
console.log(`   - Valor estimado: $${valorEstimado} USD`)
console.log(`   - Estado: ${retiroDisponible}`)

if (tokens >= 25) {
  console.log('   - 🟢 Reputación simbólica: Operador activo 🔥')
} else if (tokens >= 10) {
  console.log('   - 🟡 Reputación simbólica: Nodo emergente 🌱')
} else {
  console.log('   - ⚪ Reputación simbólica: Explorador simbiótico 🧪')
}