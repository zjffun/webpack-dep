import path from "node:path";
import { fileURLToPath } from "node:url";

let dirname = __dirname;

if (!dirname) {
  // @ts-ignore
  dirname = path.dirname(fileURLToPath(import.meta.url));
}

export default dirname;
