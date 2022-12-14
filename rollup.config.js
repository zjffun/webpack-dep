import typescript from "@rollup/plugin-typescript";
import { readFile } from "fs/promises";

const { version } = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

const externals = [];

const configs = [
  {
    input: "src/index.ts",
    output: {
      banner: `/* webpack-dep version ${version} */`,
      file: "cjs/index.cjs",
      format: "cjs",
      exports: "named",
      // Inline sourcemap for jest
      // See: https://github.com/facebook/jest/issues/336#issuecomment-376228890
      sourcemap: "inline",
      globals: {},
    },
    plugins: [typescript({ compilerOptions: { declaration: false } })],
  },
];

const rollupConfig = configs.map((c) => ({
  plugins: [typescript()],
  external: (id) => {
    for (const external of externals) {
      if (external.test(id)) {
        return true;
      }
    }
    return false;
  },
  ...c,
}));

export default rollupConfig;
