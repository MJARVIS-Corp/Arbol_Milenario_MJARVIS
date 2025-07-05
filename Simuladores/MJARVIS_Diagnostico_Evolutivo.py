# 🧠 MJARVIS_Diagnostico_Evolutivo.py
# 🔍 Módulo de evaluación estructural y sugerencias de mejora
# 🛡️ Validación ética computacional mediante CIAR
# 📘 Registrado por: Leonardo Ygnacio
# 🧬 Versión 1.0 – Estructura funcional inicial

import os
import json
from CIAR import validar_conformidad

# 📂 Directorio a diagnosticar
directorio_objetivo = "../Simuladores"

# 🧠 Diagnóstico de archivos y estructura
def diagnosticar_entorno(ruta):
    razonamiento = []
    sugerencias = []
    archivos = os.listdir(ruta)

    if not archivos:
        razonamiento.append("El entorno no contiene módulos activos.")
        sugerencias.append("Agregar al menos un módulo funcional para iniciar operaciones.")
    else:
        razonamiento.append(f"Se detectaron {len(archivos)} archivos en el entorno.")
        if "CIAR.py" not in archivos:
            sugerencias.append("Falta CIAR.py: sin validación ética computacional.")
        if "MJARVIS_SAT_Inferencial.py" not in archivos:
            sugerencias.append("Falta módulo SAT: sin razonamiento lógico estructural.")
        if any(" " in nombre or "á" in nombre or "ó" in nombre for nombre in archivos):
            sugerencias.append("Detectados nombres con espacios o tildes: posible conflicto de codificación.")

    return {
        "archivos_detectados": archivos,
        "razonamiento": razonamiento,
        "sugerencias": sugerencias
    }

# 📄 Resultado y validación CIAR
resultado = diagnosticar_entorno(directorio_objetivo)
resultado["valido_por_ciar"] = validar_conformidad(resultado["razonamiento"] + resultado["sugerencias"])

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_diagnostico_evolutivo.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado, f, indent=4, ensure_ascii=False)

print("✅ Diagnóstico evolutivo ejecutado y validado por CIAR.")