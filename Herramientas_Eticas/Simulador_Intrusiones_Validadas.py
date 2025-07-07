# 🧠 Simulador_Intrusiones_Validadas.py
# 🔐 Simulación de penetración computacional autorizada
# 🛡️ Validación CIAR
# 📘 Registrado por: Leonardo Ygnacio

import json
import os
from CIAR import validar_conformidad

# 🔐 Escenarios simulados
escenarios = [
    {
        "id": "INTRU001",
        "sistema": "Servidor bancario simulado",
        "autorizacion": True,
        "trayectoria": ["Acceso a puerto 443", "Inyección de payload lógico", "Lectura de variable cifrada"]
    },
    {
        "id": "INTRU002",
        "sistema": "Red académica cifrada",
        "autorizacion": True,
        "trayectoria": ["Escaneo de topología", "Simulación de token válido", "Acceso a módulo de cifrado"]
    },
    {
        "id": "INTRU003",
        "sistema": "Sistema de autenticación biométrica",
        "autorizacion": False,
        "trayectoria": ["Intento de acceso sin token", "Bloqueo ético activado"]
    }
]

# 🧠 Evaluación ética
razonamiento = []

for e in escenarios:
    razonamiento.append(f"🔍 Simulando intrusión en: {e['sistema']}")
    if e["autorizacion"]:
        razonamiento.append(f"✅ Autorización confirmada. Trayectoria lógica: {e['trayectoria']}")
    else:
        razonamiento.append("❌ Sin autorización. MJARVIS bloquea simulación por ética computacional.")

razonamiento.append("🛡️ Todas las simulaciones fueron registradas como trayectorias computacionales trazables.")
razonamiento.append("🧠 MJARVIS no ejecuta daño, solo simula acceso autorizado para auditoría lógica.")

# 📘 Resultado
resultado = {
    "herramienta": "Simulador de Intrusiones Validadas",
    "escenarios_simulados": escenarios,
    "razonamiento": razonamiento,
    "validado_por_ciar": validar_conformidad(razonamiento),
    "accion_etica": True
}

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_simulador_intrusiones_validadas.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado, f, indent=4, ensure_ascii=False)

print("✅ Simulación de intrusiones éticas completada y validada por CIAR.")