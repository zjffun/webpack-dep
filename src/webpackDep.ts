import webpack from "webpack";
import getDependencyMap from "./getDependencyMap.js";
import { DepMap, IOptions } from "./types.js";
import configFactory from "./webpack.config.js";

export default async function generate(
  options: IOptions = {}
): Promise<DepMap> {
  const config = await configFactory(options);

  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      if (!stats) {
        return reject(Error("No stats"));
      }

      const statsModules = stats.toJson({
        assets: false,
        chunks: false,
        errors: false,
        warnings: false,
        modules: true,
      }).modules;

      const dependencyMap = getDependencyMap(statsModules);

      resolve(dependencyMap);
    });
  });
}
