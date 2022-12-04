[![npm version][fury-badge]][fury-link]
[![codecov][codecov-badge]][codecov-link]

# webpack-dep

Using webpack get dependencies.

## Installation

npm:

```sh
npm install webpack-dep
```

Yarn:

```sh
yarn add webpack-dep
```

## Usage

ESM:

```js
import webpackDep from "webpack-dep";

const dependencyMap = await webpackDep({
  /*
  entry: [
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
  ].map((relativePath) => path.resolve(fs.realpathSync(process.cwd(), relativePath)));,
  appDirectory: fs.realpathSync(process.cwd()),
  excludes: undefined // using ana-loader default excludes
  */
});

console.log(dependencyMap);
```

## API

### `webpackDep(options)`

The `webpackDep()` function is used to get dependency map.

#### Parameters

- `options` (`Object`) - The options object.
  - `entry` (`string | string[]`) - The entry points for get dependencies. Default:
    ```js
    [
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
    ].map((relativePath) =>
      path.resolve(fs.realpathSync(process.cwd(), relativePath))
    );
    ```
  - `appDirectory` (`string`) - The app directory path. Default: `fs.realpathSync(process.cwd())`.
  - `excludes` (`(string | RegExp)[]`) - Exclude finding dependencies in these conditions. Default: `undefined` using [ana-loader default `excludes`](https://github.com/zjffun/ana-loader#excludes).

## [Release Notes](./CHANGELOG.md)

<!-- Definitions -->

[fury-link]: https://badge.fury.io/js/webpack-dep
[fury-badge]: https://badge.fury.io/js/webpack-dep.svg
[codecov-badge]: https://codecov.io/gh/zjffun/webpack-dep/branch/main/graph/badge.svg
[codecov-link]: https://codecov.io/gh/zjffun/webpack-dep
