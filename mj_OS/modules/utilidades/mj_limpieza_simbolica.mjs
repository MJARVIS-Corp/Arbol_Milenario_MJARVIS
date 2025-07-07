import fs from 'fs'
import path from 'path'

const rutasObjetivo = [
  '../test',
  '../modules',
  '../modules/sistema_valores',
  '../modules/registro'
]

const patronesRedundantes = [
  /temp/i,
  /prueba/i,
  /backup/i,
  /_copia/i,
  /\(1\)/,
  /\.old$/,
  /\.bkp$/,
  /^old_/i
]

const reportes = []

for (const rutaRelativa of rutasObjetivo) {
  const rutaAbsoluta = path.resolve(rutaRelativa)

  if (!fs.existsSync(rutaAbsoluta)) continue

  const archivos = fs.readdirSync(rutaAbsoluta)

  for (const archivo of archivos) {
    const rutaCompleta = path.join(rutaAbsoluta, archivo)
    const stats = fs.statSync(rutaCompleta)

    if (stats.isFile()) {
      for (const patron of patronesRedundantes) {
        if (patron.test(archivo)) {
          reportes.push({
            archivo: rutaCompleta,
            razon: `Coincide con patrón: ${patron}`
          })
          break
        }
      }
    }
  }
}

const salida = path.resolve('./limpieza_sugerida.json')
fs.writeFileSync(salida, JSON.stringify(reportes, null, 2))

console.log(`🧹 Limpieza simbólica ejecutada.`)
console.log(`📦 Archivos sugeridos: ${reportes.length}`)
console.log(`📄 Revisa: limpieza_sugerida.json`)