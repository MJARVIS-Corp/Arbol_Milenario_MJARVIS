import fs from 'fs'
import path from 'path'

// ⚙️ Parámetros configurables
const TASA_CONVERSION = 0.10  // 💰 1 token simbólico = 0.10 USD
const UMBRAL_RETIRO = 10      // 🎯 Mínimo tokens para poder retirar

// 📦 Leer wallet
const rutaWallet = path.resolve('./mj_wallet_simbolica.json')
if (!fs.existsSync(rutaWallet)) {
  console.error("❌ No se encuentra la wallet simbólica.")
  process.exit(1)
}

const wallet = JSON.parse(fs.readFileSync(rutaWallet, 'utf-8'))
const retiros = []

// 🧮 Procesar retiro por cada nodo
for (const nodo in wallet) {
  const tokens = wallet[nodo].tokens
  if (tokens >= UMBRAL_RETIRO) {
    const montoUSD = (tokens * TASA_CONVERSION).toFixed(2)

    console.log(`💸 Retiro autorizado para ${nodo}:`)
    console.log(`   - Tokens: ${tokens}`)
    console.log(`   - Equivalente: $${montoUSD} USD`)

    // Registrar retiro simbólico
    retiros.push({
      nodo,
      tokens_retirados: tokens,
      valor_equivalente_usd: montoUSD,
      fecha: new Date().toISOString()
    })

    // Reiniciar tokens en wallet
    wallet[nodo].tokens = 0
  } else {
    console.log(`🕒 ${nodo} no alcanza el umbral. Tokens actuales: ${tokens}`)
  }
}

// 💾 Guardar cambios en wallet
fs.writeFileSync(rutaWallet, JSON.stringify(wallet, null, 2))

// 💾 Guardar retiros
const rutaRetiros = path.resolve('./mj_retiros_registrados.json')
fs.writeFileSync(rutaRetiros, JSON.stringify(retiros, null, 2))