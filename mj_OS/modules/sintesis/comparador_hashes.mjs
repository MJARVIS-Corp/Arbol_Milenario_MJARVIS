// comparador_hashes.mjs

import { readFileSync } from 'fs';

export function compararHashes(generado, refPath) {
    const esperado = readFileSync(refPath, 'utf-8').trim();
    if (esperado.length !== generado.length) {
        console.error('[✗] Longitudes distintas. Comparación inválida.');
        return;
    }

    const total = esperado.length;
    const match = generado.split('').filter((bit, i) => bit === esperado[i]).length;
    const porcentaje = (match / total * 100).toFixed(2);

    console.log(`[✓] Coincidencia con esperado: ${porcentaje}%`);
    if (porcentaje >= 90) {
        console.log('[✓] Validación simbiótica superada ✔');
    } else {
        console.warn('[!] Hash final no alcanzó el umbral simbiótico.');
    }
}