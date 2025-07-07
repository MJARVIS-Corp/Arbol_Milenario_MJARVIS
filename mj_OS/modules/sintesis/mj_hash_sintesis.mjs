// mj_hash_sintesis.mjs

import { readFileSync, writeFileSync } from 'fs';
import { compararHashes } from './comparador_hashes.mjs';

const FRAGMENTOS_PATH = './fragmentos_hash.json';
const OUTPUT_PATH = './hash_sintetizado.sig';
const PESO_MINIMO = 0.15;

function aplicarPeso(hash, peso) {
    return hash.split('').map((bit, i) => {
        return Math.random() < peso ? bit : bit === '1' ? '0' : '1';
    }).join('');
}

function colapsarFragmentos(listaHash) {
    const longitud = listaHash[0].length;
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
        const votos = listaHash.map(h => h[i]);
        const bitFinal = votos.filter(b => b === '1').length >= votos.length / 2 ? '1' : '0';
        resultado += bitFinal;
    }
    return resultado;
}

function sintetizar() {
    const fragmentos = JSON.parse(readFileSync(FRAGMENTOS_PATH, 'utf-8'));
    const activos = fragmentos.filter(f => f.confianza >= PESO_MINIMO);
    const ponderados = activos.map(f => aplicarPeso(f.hash, f.confianza));
    const hashFinal = colapsarFragmentos(ponderados);
    writeFileSync(OUTPUT_PATH, hashFinal);
    console.log('[✓] Hash sintetizado generado:', hashFinal);
    return hashFinal;
}

// Ejecutar
const hash = sintetizar();
compararHashes(hash, './hash_esperado.ref');