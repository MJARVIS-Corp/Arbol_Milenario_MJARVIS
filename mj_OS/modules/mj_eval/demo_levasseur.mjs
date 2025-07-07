// demo_levasseur.mjs — Decodificador Pigpen con almacenamiento completo

export default async function run() {
  console.log("🏴‍☠️ Iniciando demo Levasseur...");
  console.log("🔐 Decodificando símbolos Pigpen...\n");

  const raw = `
    🞐🞓🞔 🞕🞖🞗
    🞘🞙🞚 🞛🞜🞝
    🞐🞖🞐 🞔🞓🞚
    🞛🞝🞗 🞘🞙🞐
    (fragmento simbólico simulado)
  `;

  const table = {
    "🞐": "A", "🞓": "B", "🞔": "C", "🞕": "D",
    "🞖": "E", "🞗": "F", "🞘": "G", "🞙": "H",
    "🞚": "I", "🞛": "J", "🞜": "K", "🞝": "L"
  };

  const decoded = raw
    .split("")
    .map(c => table[c] || c)
    .join("");

  console.log("📜 Texto decodificado:\n");
  console.log(decoded.trim());

  console.log("\n🌍 Detección de idioma por línea:");
  const lines = decoded
    .split("\n")
    .filter(line => line.trim() !== "");

  lines.forEach((line, i) => {
    const lang = detectLanguage(line);
    console.log(`🧭 Línea ${i + 1}: [${lang}] → ${line.trim()}`);
  });

  const reconstructed = decoded
    .replace(/\.+/g, ".")
    .replace(/\s+/g, " ")
    .replace(/([A-Z]{3,})/g, "$1.")
    .trim();

  const fs = await import('node:fs/promises');
  await fs.mkdir("mem/cryptograms", { recursive: true });

  await fs.writeFile(
    "mem/cryptograms/levasseur_decoded.raw.log",
    decoded.trim(),
    "utf8"
  );

  await fs.writeFile(
    "mem/cryptograms/levasseur_decoded.log",
    reconstructed,
    "utf8"
  );

  console.log("\n✅ Archivos generados:");
  console.log("  - mem/cryptograms/levasseur_decoded.raw.log");
  console.log("  - mem/cryptograms/levasseur_decoded.log");
}

function detectLanguage(text) {
  const lower = text.toLowerCase();
  if (lower.match(/\b(le|de|est|avec|puis|nous)\b/)) return "francés";
  if (lower.match(/\b(el|por|con|una|esta|nosotros)\b/)) return "español";
  return "incierto";
}