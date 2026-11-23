// cdpanel (cd.com.py) publica la raíz del repositorio en public_html,
// pero `next build` deja el sitio estático en `out/`. En el servidor de
// despliegue copiamos `out/` a la raíz para que cnid.com.py lo sirva.
// En cualquier otro entorno (por ejemplo tu PC) no hace nada.
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const onDeployServer = root.includes(".cd-deploy") || process.env.PUBLISH_STATIC_TO_ROOT === "1";

if (!onDeployServer) {
  console.log("publish-static: entorno local, no se copia nada.");
  process.exit(0);
}

const out = resolve(root, "out");
if (!existsSync(out)) {
  console.error("publish-static: no existe out/; ¿falló next build?");
  process.exit(1);
}

cpSync(out, root, { recursive: true, force: true });
console.log("publish-static: out/ copiado a la raíz del sitio.");
