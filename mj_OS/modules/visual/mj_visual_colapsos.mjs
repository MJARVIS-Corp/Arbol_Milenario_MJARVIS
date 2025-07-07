// mj_visual_colapsos.mjs

import { readFileSync, writeFileSync, existsSync } from 'fs';

const COLAPSOS_PATH = './colapsos_logicos.json';

function registrarColapso(token, causa, variables) {
    const nuevo = {
        token,
        causa,
        variables,
        timestamp: new Date().toISOString()
    };

    let db = [];
    if (existsSync(COLAPSOS_PATH)) {
        db = JSON.parse(readFileSync(COLAPSOS_PATH));
    }

    db.push(nuevo);
    writeFileSync(COLAPSOS_PATH, JSON.stringify(db, null, 2));
    console.log('[☯] Colapso registrado:', token);
}

function visualizarColapsos() {
    if (!existsSync(COLAPSOS_PATH)) {
        console.warn('[!] No hay colapsos registrados aún.');
        return;
    }

    const registros = JSON.parse(readFileSync(COLAPSOS_PATH));
    console.log('\n📘 Árbol de decisiones ambiguas:\n');
    registros.forEach((r, i) => {
        console.log(`#${i + 1} — Token: ${r.token}`);
        console.log(`   Causa: ${r.causa}`);
        console.log(`   Variables: ${r.variables.join(', ')}`);
        console.log(`   Fecha: ${r.timestamp}\n`);
    });
}

// Modo CLI básico
const modo = process.argv[2];
if (modo === 'registrar') {
    registrarColapso('mj_sig_Q7', 'Ambigüedad en inferencia hash', ['hash_A', 'hash_B']);
} else {
    visualizarColapsos();
}