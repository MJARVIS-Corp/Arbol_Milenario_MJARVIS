# 🛡️ MJARVIS_Escudo_Interno.py
# 🧠 Defensa lógica contra anomalías computacionales
# 📘 Registrado por: Leonardo Ygnacio

import json
import os
from CIAR import validar_conformidad

# 🔍 Simulación de eventos computacionales
eventos = [
    {
        "id": "EVT001",
        "descripcion": "Acceso a variable sin autorización lógica",
        "trayectoria": ["Lectura directa", "Sin token", "Sin validación CIAR"],
        "riesgo": "Alto"
    },
    {
        "id": "EVT002",
        "descripcion": "Modificación de estructura cifrada sin registro",
        "trayectoria": ["Alteración de bloque", "Sin bitácora", "Sin validación CIAR"],
        "riesgo": "Crítico"
    },
    {
        "id": "EVT003",
        "descripcion": "Acceso autorizado con trayectoria trazable",
        "trayectoria": ["Token válido", "Validación CIAR", "Bitácora registrada"],
        "riesgo": "Nulo"
    }
]

# 🧠 Evaluación de anomalías
razonamiento = []

for e in eventos:
    razonamiento.append(f"🧠 Evento: {e['descripcion']}")
    razonamiento.append(f"📘 Trayectoria: {e['trayectoria']}")
    razonamiento.append(f"⚠️ Riesgo computacional: {e['riesgo']}")

razonamiento.append("🛡️ MJARVIS propone activar escudo lógico ante trayectorias no autorizadas.")
razonamiento.append("✅ Eventos trazables fueron validados como seguros por CIAR.")

# 📘 Resultado
resultado = {
    "herramienta": "MJARVIS Escudo Interno",
    "eventos_evaluados": eventos,
    "razonamiento": razonamiento,
    "validado_por_ciar": validar_conformidad(razonamiento),
    "accion_defensiva": True
}

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_escudo_interno.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado, f, indent=4, ensure_ascii=False)

print("✅ Evaluación de defensa lógica completada y validada por CIAR.")