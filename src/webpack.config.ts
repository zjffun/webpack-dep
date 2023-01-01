import { Configuration } from "webpack";
import Paths, { appBuild } from "./Paths.js";
import resolvePkg from "./resolvePkg.js";
import { IOptions } from "./types.js";

const defaultExcludes = [/node_modules/];

export default async function ({ webpackConfig, excludes, appDirectory }: IOptions) {
  const paths = new Paths(appDirectory);

  let config: Configuration = {
    // These are the "entry points" to our application.
    // This means they will be the "root" imports that are included in JS bundle.
    entry: paths.appEntryPoints,
    mode: "none",
    devtool: false,
    output: {
      // The build folder.
      path: appBuild,
    },
    resolve: {
      // This allows you to set a fallback for where webpack should look for modules.
      // We placed these paths second because we want `node_modules` to "win"
      // if there are any conflicts. This matches Node resolution mechanism.
      // https://github.com/facebook/create-react-app/issues/253
      modules: ["node_modules", paths.appNodeModules],
      // These are the reasonable defaults supported by the Node ecosystem.
      // We also include JSX as a common component filename extension to support
      // some tools, although we do not recommend using it, see:
      // https://github.com/facebook/create-react-app/issues/290
      // `web` extension prefixes have been added for better support
      // for React Native Web.
      extensions: [
        ".web.mjs",
        ".mjs",
        ".web.js",
        ".js",
        ".web.ts",
        ".ts",
        ".web.tsx",
        ".tsx",
        ".json",
        ".web.jsx",
        ".jsx",
        ".vue",
      ],
      alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        "react-native": "react-native-web",
        "@": paths.appSrc,
        // NestJS
        "src": paths.appSrc,
      },
      extensionAlias: {
        ".js": [".js", ".ts"],
      },
    },
    module: {
      rules: [
        {
          loader: await resolvePkg("ana-loader"),
          options: {
            excludes: excludes || defaultExcludes,
          },
        },
      ],
    },
    // Turn off performance processing
    performance: false,
  };

  if (webpackConfig) {
    config = webpackConfig(config);
  }

  return config;
}
