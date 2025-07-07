// demo_sat.mjs — Evaluación de fórmula booleana compatible con MJARVIS_OS

export default async function run() {
  console.log("🧠 Demo SAT — Fórmula booleana (A ∨ B) ∧ (¬A ∨ C)");

  const A = true;
  const B = false;
  const C = true;

  const clause1 = A || B;
  const clause2 = !A || C;
  const resultado = clause1 && clause2;

  console.log(`📘 A=${A}, B=${B}, C=${C}`);
  console.log(`📘 Evaluación: (${A} ∨ ${B}) ∧ (¬${A} ∨ ${C})`);
  console.log(`📊 Resultado: ${resultado ? "SATISFACIBLE ✅" : "INSATISFACIBLE ❌"}`);

  const fs = await import('node:fs/promises');
  await fs.mkdir("mem/sat_tests", { recursive: true });
  await fs.writeFile(
    "mem/sat_tests/demo_sat_result.log",
    `SAT result: ${resultado}`,
    "utf8"
  );

  console.log("📄 Resultado almacenado en mem/sat_tests/demo_sat_result.log");
}