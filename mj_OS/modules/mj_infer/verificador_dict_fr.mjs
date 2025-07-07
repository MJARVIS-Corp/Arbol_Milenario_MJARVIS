// verificador_dict_fr.mjs — Verifica bloques contra diccionario francés

export default async function run() {
  const fs = await import('node:fs/promises');

  const grupos = JSON.parse(
    await fs.readFile("mem/reconstruccion/grupos_linea1.json", "utf8")
  );

  const diccionario = JSON.parse(
    await fs.readFile("mem/diccionarios/corpus_fr.json", "utf8")
  );

  const coincidencias = grupos
    .filter(g => diccionario[g])
    .map(g => ({
      bloque: g,
      frase: diccionario[g]
    }));

  if (coincidencias.length === 0) {
    console.log("❌ No se encontraron coincidencias.");
  } else {
    console.log("📘 Coincidencias encontradas:\n");
    coincidencias.forEach((c, i) =>
      console.log(`🔹 ${i + 1}: ${c.bloque} → ${c.frase}`)
    );

    await fs.writeFile(
      "mem/reconstruccion/coincidencias_fr.json",
      JSON.stringify(coincidencias, null, 2),
      "utf8"
    );

    console.log("\n✅ Resultado guardado en: mem/reconstruccion/coincidencias_fr.json");
  }
}