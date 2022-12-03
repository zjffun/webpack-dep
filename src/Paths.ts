import fs from "fs";
import path from "path";
import os from "os";

export const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
  "vue",
];

export const appBuild = path.join(os.tmpdir(), "vscode-dep-app-build");

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

  get appIndexJs() {
    return this.resolveModule("src/index");
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

  resolveModule(filePath) {
    const extension = moduleFileExtensions.find((extension) =>
      fs.existsSync(this.resolveApp(`${filePath}.${extension}`))
    );

    if (extension) {
      return this.resolveApp(`${filePath}.${extension}`);
    }
  }
}
