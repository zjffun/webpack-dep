import { Configuration, StatsError } from "webpack";

export type DepMap = Map<string, Set<string>>;

export interface IOptions {
  excludes?: string[];
  appDirectory?: string;
  webpackConfig?: (config: Configuration) => Configuration;
  errorCb?: (errors: StatsError[]) => void;
}
