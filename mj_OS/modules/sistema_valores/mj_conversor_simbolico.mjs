import fs from 'fs'
import path from 'path'

const rutaWallet = path.resolve('./mj_wallet_simbolica.json')
const rutaTasa = path.resolve('./mj_tasa_simbolica.json')

if (!fs.existsSync(rutaWallet) || !fs.existsSync(rutaTasa)) {
  console.log('❌ Faltan archivos necesarios: wallet o tasa simbólica.')
  process.exit(1)
}

const wallet = JSON.parse(fs.readFileSync(rutaWallet, 'utf-8'))
const tasas = JSON.parse(fs.readFileSync(rutaTasa, 'utf-8'))

const nodo = Object.keys(wallet)[0]
const tokens = wallet[nodo]?.tokens || 0

const { tasa_usd, dificultad, equivalente_btc, equivalente_eth } = tasas

const valorUSD = (tokens * tasa_usd * dificultad).toFixed(2)
const valorBTC = (tokens * equivalente_btc).toFixed(8)
const valorETH = (tokens * equivalente_eth).toFixed(6)

console.log(`\n🔁 Conversión simbólica para ${nodo}`)
console.log(`   • Tokens actuales: ${tokens}`)
console.log(`   • Valor estimado USD: $${valorUSD}`)
console.log(`   • Equivalente BTC: ₿${valorBTC}`)
console.log(`   • Equivalente ETH: Ξ${valorETH}`)

const minutosRazonamiento = (tokens * 3.2).toFixed(1)
console.log(`   • Tiempo simbiótico estimado: ${minutosRazonamiento} min\n`)