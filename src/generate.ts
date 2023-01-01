import webpackDep from "./index.js";
import stringifyDepMap from "./stringifyDepMap.js";
import { IOptions } from "./types.js";

export default async function generate({ entry }: { entry?: string }) {
  const depMap = await webpackDep({
    webpackConfig(config) {
      if (entry) {
        config.entry = entry;
      }
      return config;
    },
  });
  const depJson = stringifyDepMap(depMap);

  process.stdout.write(depJson);
}
