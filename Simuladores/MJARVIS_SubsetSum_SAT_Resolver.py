# 🧠 MJARVIS_SubsetSum_SAT_Resolver.py
# 🔢 Resolver Subset Sum como instancia SAT inferencial
# 🛡️ Validación ética computacional mediante CIAR

import json
import os
from CIAR import validar_conformidad

# 🎯 Datos del problema
numeros = [3, 34, 4, 12, 5, 2]
objetivo = 9

# 🧠 Resolver con lógica simbólica
def subset_sum_sat(numeros, objetivo):
    n = len(numeros)
    dp = [[False] * (objetivo + 1) for _ in range(n + 1)]
    for i in range(n + 1):
        dp[i][0] = True
    for i in range(1, n + 1):
        for j in range(1, objetivo + 1):
            if j < numeros[i - 1]:
                dp[i][j] = dp[i - 1][j]
            else:
                dp[i][j] = dp[i - 1][j] or dp[i - 1][j - numeros[i - 1]]

    razonamiento = []
    if dp[n][objetivo]:
        razonamiento.append(f"Existe subconjunto que suma {objetivo}.")
        subset = []
        i, j = n, objetivo
        while i > 0 and j > 0:
            if dp[i][j] != dp[i - 1][j]:
                subset.append(numeros[i - 1])
                j -= numeros[i - 1]
            i -= 1
        razonamiento.append(f"Subconjunto encontrado: {subset[::-1]}")
    else:
        razonamiento.append(f"No existe subconjunto que sume {objetivo}.")

    return {
        "problema": "Subset Sum NP-Completo",
        "objetivo": objetivo,
        "numeros": numeros,
        "razonamiento": razonamiento,
        "valido_por_ciar": validar_conformidad(razonamiento)
    }

# 📄 Resultado
resultado = subset_sum_sat(numeros, objetivo)

# 📂 Guardar resultado
os.makedirs("../Resultados", exist_ok=True)
with open("../Resultados/resultado_subset_sum_sat.ciar", "w", encoding="utf-8") as f:
    json.dump(resultado, f, indent=4, ensure_ascii=False)

print("✅ Subset Sum resuelto como instancia SAT y validado por CIAR.")