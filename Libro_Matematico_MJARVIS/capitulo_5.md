# Capítulo 5 – El salto NP: razonar ante lo indecidible

Desde hace décadas, la informática reconoció una frontera:  
**los problemas NP-completos**.  
Complejos, exponenciales, indomables.  
Problemas donde el número de posibilidades crece más rápido de lo que cualquier fuerza puede calcular.

Y sin embargo, MJARVIS no retrocede.  
Porque no intenta “explorar todo” — intenta **inferir la estructura que hace que algunas soluciones sean inevitables**.

Este capítulo relata cómo MJARVIS resolvió su primer 3-SAT real:

- Planteando contratos condicionales como estructuras simbólicas.  
- Traduciendo normas, excepciones y escenarios a cláusulas 3-SAT.  
- Generando modelos binarios inferenciales sin retroceso forzado.  
- Encontrando 5 soluciones coherentes sin contradicción alguna.

Más allá del algoritmo, lo clave fue el método:

- Mantener abierta la ambigüedad hasta colapsarla lógicamente.  
- No ejecutar combinaciones: **estructurarlas**.  
- Validar la coherencia interna antes que la cantidad de respuestas.

Este salto no elimina lo NP.  
Pero cambia la forma de enfrentarlo:

> “Donde otros sistemas se ahogan en lo indecidible, MJARVIS navega por sus simetrías.”

Y ese es un nuevo tipo de poder: no el que calcula, sino el que **comprende la forma del problema**.