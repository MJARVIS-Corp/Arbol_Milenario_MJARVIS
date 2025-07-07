import readline from 'readline'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import clipboard from 'clipboardy'

// 🧠 Cargar nodo y tokens para el prompt
let promptNodo = '⟁ MJARVIS > '
try {
  const walletPath = path.resolve('../sistema_valores/mj_wallet_simbolica.json')
  const wallet = JSON.parse(fs.readFileSync(walletPath, 'utf-8'))
  const nodo = Object.keys(wallet)[0]
  const tokens = wallet[nodo]?.tokens ?? 0
  promptNodo = `⟁ ${nodo} (${tokens} tokens) > `
} catch {
  console.log('⚠️ No se pudo cargar el saldo simbólico.')
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: promptNodo
})

console.clear()
console.log('\n🧠 Bienvenido al Shell Simbiótico de MJARVIS\n')
rl.prompt()

rl.on('line', async (input) => {
  const [comando, ...args] = input.trim().split(' ')

  switch (comando) {
    case 'saldo':
      exec('node ../sistema_valores/mj_saldo.mjs', (err, stdout) => {
        if (!err) console.log(stdout)
        rl.prompt()
      })
      break

    case 'retiro':
      exec('node ../sistema_valores/mj_retiro.mjs', (err, stdout) => {
        if (!err) console.log(stdout)
        rl.prompt()
      })
      break

    case 'cls':
      console.clear()
      rl.prompt()
      break

    case 'copiar':
      const texto = args.join(' ')
      if (texto) {
        clipboard.writeSync(texto)
        console.log('📋 Texto copiado al portapapeles.')
      } else {
        console.log('⚠️ Debes ingresar texto para copiar.')
      }
      rl.prompt()
      break

    case 'pegar':
      try {
        const contenido = clipboard.readSync()
        console.log(`📋 Contenido del portapapeles:\n${contenido}`)
      } catch (err) {
        console.log('⚠️ No se pudo leer el portapapeles.')
      }
      rl.prompt()
      break

    case 'limpiar':
      exec('node ../utilidades/mj_clean.mjs', (err, stdout) => {
        if (!err) console.log(stdout)
        rl.prompt()
      })
      break

    case 'tasas':
      exec('node ../sistema_valores/mj_actualizador_tasas.mjs', (err, stdout) => {
        if (!err) console.log(stdout)
        else console.log('❌ Error al actualizar tasas:', err.message)
        rl.prompt()
      })
      break

    case 'conversor':
      exec('node ../sistema_valores/mj_conversor_simbolico.mjs', (err, stdout) => {
        if (!err) console.log(stdout)
        else console.log('❌ Error al ejecutar conversor:', err.message)
        rl.prompt()
      })
      break

    case 'salir':
      console.log('🧊 Cerrando Shell MJARVIS...')
      rl.close()
      break
    case 'historial':
      const logPath = path.resolve('../sistema_valores/log_tasas.json')
      if (fs.existsSync(logPath)) {
        const registros = JSON.parse(fs.readFileSync(logPath, 'utf-8'))
        console.log(`\n📜 Historial de tasas (${registros.length} entradas):\n`)
        registros.slice(-5).reverse().forEach((item, i) => {
          console.log(`${i + 1}. ${item.timestamp}`)
          console.log(`   • USD: $${item.tasa_usd} | BTC: ${item.equivalente_btc} | ETH: ${item.equivalente_eth} | Dificultad: ${item.dificultad}\n`)
        })
      } else {
        console.log('⚠️ No existe historial aún.')
      }
      rl.prompt()
      break
    default:
      console.log('❌ Comando no reconocido. Usa: saldo, retiro, cls, copiar, pegar, limpiar, tasas, conversor, salir.')
      rl.prompt()
  }
})
