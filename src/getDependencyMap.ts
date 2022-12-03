import type { StatsModule } from "webpack";

export default function (statsModules: StatsModule[]) {
  const identifierStatsModuleMap = new Map<string, StatsModule>();
  const dependencyMap = new Map<string, Set<string>>();

  for (const statsModule of statsModules) {
    if (statsModule.identifier) {
      identifierStatsModuleMap.set(statsModule.identifier, statsModule);
    }
  }

  for (const statsModule of statsModules) {
    const dependencyPath = statsModule.nameForCondition;
    if (!dependencyPath) {
      continue;
    }
    if (statsModule.reasons) {
      for (const reason of statsModule.reasons) {
        const identifier = reason.resolvedModuleIdentifier;

        if (identifier) {
          const dependentStatsModule = identifierStatsModuleMap.get(identifier);

          let dependentPath = dependentStatsModule?.nameForCondition;

          if (!dependentPath) {
            continue;
          }

          if (dependentPath === dependencyPath) {
            continue;
          }

          let dependency = dependencyMap.get(dependentPath);
          if (!dependency) {
            dependency = new Set();
            dependencyMap.set(dependentPath, dependency);
          }

          dependency.add(dependencyPath);
        }
      }
    }
  }

  return dependencyMap;
}
