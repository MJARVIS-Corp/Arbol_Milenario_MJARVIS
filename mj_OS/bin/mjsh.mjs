// mjsh.mjs – Consola interactiva MJARVIS_OS

import readline from 'node:readline';
import fs from 'node:fs/promises';

console.log("🧊 Bienvenido a MJARVIS_OS");
console.log("Escribe 'help' para empezar.\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'mj> '
});

rl.prompt();

rl.on('line', async (line) => {
  const cmd = line.trim();

  // Salida del sistema
  if (cmd === 'exit' || cmd === 'quit') {
    console.log("🛑 Cerrando MJARVIS_OS...\n");
    process.exit(0);
  }

  // Ayuda básica
  if (cmd === 'help') {
    console.log(`
🔹 Comandos disponibles:
  run [ruta]            → Ejecuta un módulo .mjs
  read [archivo]        → Muestra contenido de un archivo
  write [archivo]       → Escribe texto en un archivo
  list [carpeta]        → Lista archivos en una ruta
  exit / quit           → Cierra la consola
`);
    rl.prompt();
    return;
  }

  // Comando: run [ruta]
  if (cmd.startsWith('run ')) {
    const path = cmd.slice(4).trim();
    try {
      const modulePath = new URL(`file://${process.cwd()}/${path}`);
      const { default: run } = await import(modulePath);
      if (typeof run === 'function') {
        await run();
      } else {
        console.log(`❌ El módulo '${path}' no exporta una función por defecto.`);
      }
    } catch (err) {
      console.log(`❌ Error al ejecutar módulo: ${err.message}`);
    }
    rl.prompt();
    return;
  }

  // Comando: read [archivo]
  if (cmd.startsWith('read ')) {
    const file = cmd.slice(5).trim();
    try {
      const content = await fs.readFile(file, 'utf8');
      console.log(`📄 Contenido de ${file}:\n${content}`);
    } catch (err) {
      console.log(`❌ No se pudo leer ${file}: ${err.message}`);
    }
    rl.prompt();
    return;
  }

  // Comando: list [carpeta]
  if (cmd.startsWith('list ')) {
    const dir = cmd.slice(5).trim();
    try {
      const files = await fs.readdir(dir);
      console.log(`📁 Contenido de ${dir}:\n${files.join('\n')}`);
    } catch (err) {
      console.log(`❌ No se pudo listar ${dir}: ${err.message}`);
    }
    rl.prompt();
    return;
  }

  // Comando desconocido
  console.log(`🤖 Comando desconocido: '${cmd}'`);
  rl.prompt();
});