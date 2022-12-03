import webpackDep from "./index.js";
import stringifyDepMap from "./stringifyDepMap.js";
import { IOptions } from "./types.js";

export default async function generate({ entry }: IOptions) {
  const depMap = await webpackDep({ entry });
  const depJson = stringifyDepMap(depMap);

  process.stdout.write(depJson);
}
