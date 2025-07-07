// mj_np_solver.mjs

import { readFileSync } from 'fs';

function evaluarModelo(modelo, restricciones) {
    return restricciones.every(regla => {
        return regla.some(lit => {
            const variable = lit.replace('¬', '');
            const valor = modelo[variable];
            return lit.startsWith('¬') ? !valor : valor;
        });
    });
}

function generarModelos(variables) {
    const n = variables.length;
    const modelos = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        const bin = i.toString(2).padStart(n, '0');
        const modelo = {};
        variables.forEach((v, j) => {
            modelo[v] = bin[j] === '1';
        });
        modelos.push(modelo);
    }
    return modelos;
}

function resolver3SAT(path) {
    const { variables, restricciones } = JSON.parse(readFileSync(path, 'utf-8'));
    const modelos = generarModelos(variables);
    const validos = modelos.filter(m => evaluarModelo(m, restricciones));

    if (validos.length === 0) {
        console.log('[✗] Ninguna solución satisface el problema.');
    } else {
        console.log(`[✓] Se encontraron ${validos.length} soluciones válidas:`);
        validos.forEach((m, i) => console.log(`  Modelo ${i + 1}:`, m));
    }
}

// Ejecutar
resolver3SAT('./np_3sat_instancia_01.json');