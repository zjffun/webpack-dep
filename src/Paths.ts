import fs from "fs";
import path from "path";
import os from "os";

export const appBuild = path.join(os.tmpdir(), "vscode-dep-app-build");

const entryPoints = [
  "src/index.ts",
  "src/index.js",
  "src/index.tsx",
  "src/index.jsx",
  "src/index.vue",
  "src/main.ts",
  "src/main.js",
  "src/main.tsx",
  "src/main.jsx",
  "src/main.vue",
];

export default class {
  appDirectory = fs.realpathSync(process.cwd());

  constructor(appDirectory?: string) {
    if (appDirectory) {
      this.appDirectory = appDirectory;
    }
  }

  get appPath() {
    return this.resolveApp(".");
  }

  get appEntryPoints() {
    return entryPoints.map((d) => this.resolveApp(d));
  }

  get appSrc() {
    return this.resolveApp("src");
  }

  get appNodeModules() {
    return this.resolveApp("node_modules");
  }

  resolveApp(relativePath) {
    return path.resolve(this.appDirectory, relativePath);
  }
}
