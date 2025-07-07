import fs from 'fs'
import path from 'path'
import { bitacora } from '../registro/registro_contrato.mjs'

export function actualizar_wallet() {
  const wallet = {}

  for (const entrada of bitacora) {
    if (entrada.resultado === "true" && entrada.recompensa?.tokens_simbolicos) {
      const nodo = entrada.emisor
      const tokens = entrada.recompensa.tokens_simbolicos

      if (!wallet[nodo]) wallet[nodo] = { tokens: 0 }

      wallet[nodo].tokens += tokens
    }
  }

  const ruta_wallet = path.resolve('./mj_wallet_simbolica.json')
  fs.writeFileSync(ruta_wallet, JSON.stringify(wallet, null, 2))

  console.log("💰 Wallet simbólica actualizada:")
  console.log(wallet)
}
{
  "MJARVIS_NODO_A": {
    "tokens": 0
  }
}