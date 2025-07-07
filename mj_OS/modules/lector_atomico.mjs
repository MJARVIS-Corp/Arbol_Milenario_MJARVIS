// lector_atomico.mjs

export function validar_sintagma(nucleo) {
  const patrón = /^⟁[a-zA-Z0-9\-]{1,6}$/;
  return patrón.test(nucleo);
}

// 🧪 Bloque de prueba directa (puedes eliminarlo luego)
const ejemplos = [
  "⟁X7B1",   // ✅ válido
  "⟁ABC",    // ✅ válido
  "⟁123",    // ✅ válido
  "⟁Ωδ72",   // ❌ inválido
  "⟁",       // ❌ inválido
  "⟁Z9F7",   // ✅ válido
  "⟁A-B9",   // ✅ válido
  "⟁A7B9C1", // ✅ válido (6 caracteres)
  "⟁A7B9C1X" // ❌ inválido (7 caracteres)
];

console.log("🔍 Prueba directa de sintagmas:");
for (const sintagma of ejemplos) {
  console.log(`${sintagma} →`, validar_sintagma(sintagma));
}