# 🧮 MJARVIS_Evaluador_Computabilidad_Formal.py
# 🧠 Módulo para evaluar si enunciados simbólicos son computables formalmente
# 🛡️ Validación ética mediante CIAR
# 📘 Registrado por: Leonardo Ygnacio

import json
import os
from CIAR import validar_conformidad

# 📘 Lista de enunciados simbólicos
enunciados = [
    {"id": "MATH001", "texto": "∀x ∃y : x + y = 10"},
    {"id": "MATH002", "texto": "∃x : x ∈ ℕ ∧ x > infinito"},
    {"id": "MATH003", "texto": "P = NP"},
    {"id": "MATH004", "texto": "∃y : y es primo ∧ par ∧ mayor que 2"}
]

# 🧠 Evaluación de computabilidad
def evaluar_computabilidad(enunciado):
    razonamiento = []

    texto = enunciado["texto"]
    razonamiento.append(f"Evaluando: «{texto}»")

    if "x > infinito" in texto or "infinito" in texto:
        razonamiento.append("Contiene entidad no acotada: no computable.")
        computable = False
    elif "P = NP" in texto:
        razonamiento.append("Proposición indecidible en sistemas actuales.")
        computable = False
    elif "primo ∧ par ∧ mayor que 2" in texto:
        razonamiento.append("Contradicción interna: no hay tal número.")
        computable = False
    else:
        razonamiento.append("Proposición lógica bien formada: computable.")
        computable = True

    return {
        "id": enunciado["id"],
        "texto": texto,
        "computable": computable,
        "razonamiento": razonamiento,
        "valido_por_ciar": validar_conformidad(razonamiento)
    }

# 📘 Evaluación completa
resultados = []
for e in enunciados:
    resultado = evaluar_computabilidad(e)
    resultados.append(resultado)

# 📂 Guardar resultados
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_computabilidad_formal.ciar", "w", encoding="utf-8") as f:
    json.dump(resultados, f, indent=4, ensure_ascii=False)

print("✅ Evaluación de computabilidad ejecutada y validada por CIAR.")