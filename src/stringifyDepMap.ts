import { DepMap } from "./types.js";

export default function stringifyDepMap(depMap: DepMap) {
  const depMapString = JSON.stringify(
    depMap,
    (key, value) => {
      if (value instanceof Map) {
        return Object.fromEntries(value.entries());
      }

      if (value instanceof Set) {
        return [...value];
      }
      return value;
    },
    2
  );

  return depMapString;
}
