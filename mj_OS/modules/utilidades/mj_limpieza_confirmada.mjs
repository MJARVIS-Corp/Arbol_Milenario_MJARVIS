import fs from 'fs'
import readline from 'readline'
import path from 'path'

const rutaLimpieza = path.resolve('./limpieza_sugerida.json')

if (!fs.existsSync(rutaLimpieza)) {
  console.log("❌ No se encontró 'limpieza_sugerida.json'. Ejecuta primero 'mj_limpieza_simbolica.mjs'.")
  process.exit(1)
}

const archivos = JSON.parse(fs.readFileSync(rutaLimpieza, 'utf-8'))
if (archivos.length === 0) {
  console.log("✅ No hay archivos sugeridos para limpieza. Sistema ordenado.")
  process.exit(0)
}

console.log("🧹 Archivos sugeridos para eliminar:\n")
archivos.forEach((item, i) => {
  console.log(`${i + 1}. ${item.archivo} ⟶ ${item.razon}`)
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("\n🧠 ¿Deseas eliminar estos archivos? (sí/no): ", (respuesta) => {
  if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
    for (const item of archivos) {
      try {
        fs.unlinkSync(item.archivo)
        console.log(`✅ Eliminado: ${item.archivo}`)
      } catch (err) {
        console.error(`⚠️ No se pudo eliminar ${item.archivo}: ${err.message}`)
      }
    }
    console.log("\n🧼 Limpieza completada con éxito.")
  } else {
    console.log("🛑 Limpieza cancelada. No se borró ningún archivo.")
  }
  rl.close()
})