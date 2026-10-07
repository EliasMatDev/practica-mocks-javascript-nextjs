import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Limitamos el proyecto a esta carpeta, aunque haya lockfiles arriba.
export default {
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },
};
