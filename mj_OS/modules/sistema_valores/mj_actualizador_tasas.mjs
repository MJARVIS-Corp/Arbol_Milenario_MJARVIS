import fs from 'fs'
import path from 'path'
import axios from 'axios'

const rutaTasa = path.resolve('./mj_tasa_simbolica.json')
const rutaLog = path.resolve('./log_tasas.json')

// Tasa simbólica interna
const tasaBaseUSD = 0.15
const dificultad = 1.5

const logPrevio = fs.existsSync(rutaLog)
  ? JSON.parse(fs.readFileSync(rutaLog, 'utf-8'))
  : []

let dataNueva = {
  tasa_usd: tasaBaseUSD,
  dificultad,
  equivalente_btc: null,
  equivalente_eth: null,
  estado: 'offline'
}

try {
  const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
  const btcUSD = res.data.bitcoin.usd
  const ethUSD = res.data.ethereum.usd

  const equivalenteBTC = (tasaBaseUSD * dificultad / btcUSD).toFixed(8)
  const equivalenteETH = (tasaBaseUSD * dificultad / ethUSD).toFixed(6)

  dataNueva = {
    tasa_usd: tasaBaseUSD,
    dificultad,
    equivalente_btc: parseFloat(equivalenteBTC),
    equivalente_eth: parseFloat(equivalenteETH),
    estado: 'online'
  }

  fs.writeFileSync(rutaTasa, JSON.stringify(dataNueva, null, 2))
  console.log('\n🔄 Tasas actualizadas correctamente en mj_tasa_simbolica.json\n')
  console.log(dataNueva)
} catch (error) {
  console.log('\n⚠️ Sin conexión. Se conserva la tasa previa.\n')

  if (fs.existsSync(rutaTasa)) {
    const previa = JSON.parse(fs.readFileSync(rutaTasa, 'utf-8'))
    dataNueva = { ...previa, estado: 'offline' }
    console.log(dataNueva)
  } else {
    console.log('❌ No hay tasa previa disponible.')
  }
}

// 🔁 Registro en historial
logPrevio.push({
  ...dataNueva,
  timestamp: new Date().toISOString()
})
fs.writeFileSync(rutaLog, JSON.stringify(logPrevio, null, 2))