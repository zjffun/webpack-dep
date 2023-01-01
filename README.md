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
  appDirectory: fs.realpathSync(process.cwd()),
  excludes: undefined, // using ana-loader default excludes
  webpackConfig: undefined, // using default webpack config
  errorCb: undefined, // no error callback
  */
});

console.log(dependencyMap);
```

## API

### `webpackDep(options)`

The `webpackDep()` function is used to get dependency map.

#### Parameters

- `options` (`Object`) - The options object.
  - `appDirectory` (`string`) - The app directory path. Default: `fs.realpathSync(process.cwd())`.
  - `excludes` (`(string | RegExp)[]`) - Exclude finding dependencies in these conditions. Default: `undefined` using [ana-loader default `excludes`](https://github.com/zjffun/ana-loader#excludes).
  - `webpackConfig` (`(config: Configuration) => Configuration`) - A function receive the current webpack config and return the final webpack config. Default: `undefined`.
  - `errorCb` (`(errors: StatsError[]) => void`) - Error handler function. Default: `undefined`.

## [Release Notes](./CHANGELOG.md)

<!-- Definitions -->

[fury-link]: https://badge.fury.io/js/webpack-dep
[fury-badge]: https://badge.fury.io/js/webpack-dep.svg
[codecov-badge]: https://codecov.io/gh/zjffun/webpack-dep/branch/main/graph/badge.svg
[codecov-link]: https://codecov.io/gh/zjffun/webpack-dep
