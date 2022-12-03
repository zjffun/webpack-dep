import { fileURLToPath } from "node:url";

export default async function (name) {
  if (typeof require?.resolve === "function") {
    return require.resolve(name);
  }

  // @ts-ignore
  let url = await import.meta.resolve(name);

  if (!url) {
    return "";
  }

  return fileURLToPath(url);
}
