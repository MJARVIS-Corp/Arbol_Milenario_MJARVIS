// reconstructor_levasseur.mjs — Combina bloques validados en frases inferidas

export default async function run() {
  const fs = await import('node:fs/promises');

  const coincidencias = JSON.parse(
    await fs.readFile("mem/reconstruccion/coincidencias_fr.json", "utf8")
  );

  if (coincidencias.length === 0) {
    console.log("❌ No hay coincidencias para recomponer.");
    return;
  }

  console.log("🧩 Frases inferidas:\n");

  const bloques = coincidencias.map(c => c.bloque);
  const frases = coincidencias.map(c => c.frase);

  // Recombinaciones tentativas
  const posibles = [];

  if (bloques.includes("AEA") && bloques.includes("CBI") && bloques.includes("JLF")) {
    posibles.push({
      original: ["AEA", "CBI", "JLF"],
      frase: "a été achevé / compris / juillet flotte",
      esp: "fue concluido / comprendido / julio flota"
    });
  }

  if (bloques.includes("AEACB") && bloques.includes("CBIJL") && bloques.includes("LF")) {
    posibles.push({
      original: ["AEACB", "CBIJL", "LF"],
      frase: "a été accompli / compagnie juillet / la flotte",
      esp: "ha sido cumplido / compañía julio / la flota"
    });
  }

  if (bloques.includes("IJ") && bloques.includes("JLF")) {
    posibles.push({
      original: ["IJ", "JLF"],
      frase: "île juillet / juillet flotte",
      esp: "isla julio / julio flota"
    });
  }

  if (posibles.length === 0) {
    console.log("⚠️ Aún no hay combinaciones robustas. Expande el corpus o ajusta los criterios.");
    return;
  }

  posibles.forEach((p, i) => {
    console.log(`🔹 Propuesta ${i + 1}:`);
    console.log(`   🧱 Bloques: ${p.original.join(" + ")}`);
    console.log(`   🗣️ Francés: ${p.frase}`);
    console.log(`   🇪🇸 Español: ${p.esp}\n`);
  });

  await fs.writeFile(
    "mem/reconstruccion/frases_reconstruidas.json",
    JSON.stringify(posibles, null, 2),
    "utf8"
  );

  console.log("✅ Resultado guardado en: mem/reconstruccion/frases_reconstruidas.json");
}