import { StatsError } from "webpack";

export type DepMap = Map<string, Set<string>>;

export interface IOptions {
  entry?: string | string[];
  excludes?: string[];
  appDirectory?: string;
  errorCb?: (errors: StatsError[]) => void;
}
