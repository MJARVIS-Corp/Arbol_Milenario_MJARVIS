# 📘 MJARVIS_Epistemologia_Dinamica.py
# 🧠 Módulo de registro de trayectorias lógicas como actos computacionales con significado
# 🛡️ Validación ética computacional mediante CIAR
# 📎 Registrado por: Leonardo Ygnacio
# 🧬 Versión 1.0 – Estructura funcional inicial

import json
import os
from CIAR import validar_conformidad

# 🧠 Trayectorias simbólicas simuladas
trayectorias = [
    {
        "id": "EPI001",
        "accion": "Reconstrucción de clave inferencial",
        "origen": "MJARVIS_Entrelazamiento_CriptoContextual.py",
        "impacto": "Acceso legítimo a entorno cifrado sin fuerza bruta"
    },
    {
        "id": "EPI002",
        "accion": "Diagnóstico evolutivo del sistema",
        "origen": "MJARVIS_Diagnostico_Evolutivo.py",
        "impacto": "Sugerencias estructurales para mejorar coherencia lógica"
    }
]

# 🧬 Registro epistemológico
def registrar_trayectoria(trayectoria):
    razonamiento = []
    razonamiento.append(f"Acción: {trayectoria['accion']}")
    razonamiento.append(f"Origen: {trayectoria['origen']}")
    razonamiento.append(f"Impacto computacional: {trayectoria['impacto']}")
    return {
        "id": trayectoria["id"],
        "trayectoria": razonamiento,
        "valido_por_ciar": validar_conformidad(razonamiento)
    }

# 📄 Resultado final
resultado_total = []
for t in trayectorias:
    registro = registrar_trayectoria(t)
    resultado_total.append(registro)

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_epistemologia_dinamica.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado_total, f, indent=4, ensure_ascii=False)

print("✅ Registro epistemológico ejecutado y validado por CIAR.")