// test_bitacora_local.js

const bitacora = []

function registrarEjecucion(contrato, resultado) {
  const entrada = {
    id: contrato.id,
    emisor: contrato.emisor,
    receptor: contrato.receptor,
    acción: contrato.condición_ejecución?.acción || "indefinida",
    resultado: resultado,
    hora: new Date().toISOString(),
    recompensa: resultado === "true" ? contrato.recompensa : null,
    penalización: resultado !== "true" ? contrato.penalización : null
  }

  bitacora.push(entrada)
  console.log("📝 Bitácora actualizada:")
  console.log(JSON.stringify(bitacora, null, 2))
}

// ⚙️ Creamos un contrato simulado:
const contrato = {
  id: "TEST-001",
  emisor: "Nodo_A",
  receptor: "Nodo_B",
  condición_ejecución: { acción: "simulado" },
  recompensa: { prioridad: 5 },
  penalización: { mensaje: "denegado" }
}

// 🧪 Ejecutamos manualmente:
registrarEjecucion(contrato, "true")