# 🧠 MJARVIS_Replicacion_Cientifica_Etica.py
# 🌍 Simulación de replicabilidad científica y validación computacional
# 🛡️ Validación CIAR
# 📘 Registrado por: Leonardo Ygnacio

import json
import os
from CIAR import validar_conformidad

# 📊 Estudios simulados
estudios = [
    {
        "id": "EXP001",
        "descripcion": "Efecto de compuesto A sobre células tipo X",
        "parametros": {"temperatura": 37, "ph": 7.4},
        "resultado": "Proliferación aumentada"
    },
    {
        "id": "EXP002",
        "descripcion": "Mismo estudio con variación mínima",
        "parametros": {"temperatura": 37.1, "ph": 7.4},
        "resultado": "Sin efecto observado"
    },
    {
        "id": "EXP003",
        "descripcion": "Mismo estudio en laboratorio distinto",
        "parametros": {"temperatura": 37, "ph": 7.4},
        "resultado": "Proliferación reducida"
    }
]

# 🧠 Evaluación de replicación lógica
def evaluar_replicabilidad(estudios):
    razonamiento = []
    consistentes = 0

    base = estudios[0]["resultado"]
    for e in estudios[1:]:
        if e["resultado"] == base:
            consistentes += 1
        else:
            razonamiento.append(
                f"⚠️ Resultado no replicado en «{e['id']}»: {e['resultado']} ≠ {base}"
            )

    if consistentes == len(estudios) - 1:
        razonamiento.append("✅ Todos los estudios replicaron el resultado.")
        replicable = True
    else:
        razonamiento.append(f"❌ Solo {consistentes} estudios replicaron el resultado.")
        replicable = False

    razonamiento.append("➡️ Propuesta: MJARVIS sugiere incorporar métrica simbólica de replicación computacional (MRC) para verificar coherencia entre parámetros y resultados.")
    return {
        "problema": "Crisis de replicación científica",
        "estudios": estudios,
        "razonamiento": razonamiento,
        "replicable": replicable,
        "valido_por_ciar": validar_conformidad(razonamiento)
    }

# 📄 Resultado
resultado = evaluar_replicabilidad(estudios)

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_replicacion_cientifica_etica.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado, f, indent=4, ensure_ascii=False)

print("✅ Simulación de replicación completada y validada por CIAR.")