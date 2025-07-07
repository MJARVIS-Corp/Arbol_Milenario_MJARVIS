// agrupador_variable.mjs — Genera agrupaciones variables desde una línea de texto

export default async function run() {
  const linea = "AEACBIJLF"; // Puedes cambiar por cualquier línea del .raw.log
  const min = 2;
  const max = 8;

  console.log("🔤 Entrada:", linea);
  console.log(`🔎 Generando grupos de ${min} a ${max} letras...\n`);

  const grupos = generarGrupos(linea, min, max);
  grupos.forEach((g, i) => console.log(`🔹 ${i + 1}: ${g}`));

  const fs = await import('node:fs/promises');
  await fs.mkdir("mem/reconstruccion", { recursive: true });
  await fs.writeFile("mem/reconstruccion/grupos_linea1.json", JSON.stringify(grupos, null, 2), "utf8");

  console.log("\n✅ Resultado guardado en: mem/reconstruccion/grupos_linea1.json");
}

function generarGrupos(texto, min, max) {
  const res = [];
  const limpio = texto.replace(/[^A-Z]/gi, "").toUpperCase();

  for (let i = 0; i < limpio.length; i++) {
    for (let j = min; j <= max; j++) {
      const fragmento = limpio.slice(i, i + j);
      if (fragmento.length === j) res.push(fragmento);
    }
  }
  return res;
}