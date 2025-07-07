import { execSync } from 'child_process'

console.log('\n🧹 Iniciando limpieza estructural completa de MJARVIS...\n')

try {
  console.log('⏳ Ejecutando escaneo de archivos redundantes...')
  execSync('node mj_limpieza_simbolica.mjs', { stdio: 'inherit' })

  console.log('\n🔄 Continuando con fase de confirmación...')
  execSync('node mj_limpieza_confirmada.mjs', { stdio: 'inherit' })

  console.log('\n✅ Limpieza simbiótica completada con éxito.\n')
} catch (error) {
  console.error('\n❌ Error durante limpieza:', error.message)
}