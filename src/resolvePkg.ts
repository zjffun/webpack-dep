import { fileURLToPath } from "node:url";

export default async function (name) {
  let usingRequire = true;
  try {
    usingRequire = typeof require === "function";
  } catch {
    // ReferenceError: require is not defined in ES module scope, you can use import instead
    usingRequire = false;
  }

  // CJS
  if (usingRequire) {
    return require.resolve(name);
  }

  // ESM
  // @ts-ignore
  let url = await import.meta.resolve(name);

  if (!url) {
    return "";
  }

  return fileURLToPath(url);
}
