import type { OrbitHierarchy, OrbitConfigLayout } from "../types";

export const getLevelAnimationOrderMap = (hierarchy: OrbitHierarchy) => {
  if (!hierarchy) return new Map<number, number>();
  const sortedLevels = [...hierarchy.levels].sort(
    (a, b) => b.radius - a.radius
  );
  const orderMap = new Map<number, number>();
  sortedLevels.forEach((level, index) => {
    orderMap.set(level.level, index);
  });
  return orderMap;
};

const getMaxRadius = (hierarchy: OrbitHierarchy) => {
  if (!hierarchy) return 0;
  return hierarchy.levels.reduce(
    (max, level) => Math.max(max, level.radius),
    0
  );
};

export const getResponsiveSize = (
  hierarchy: OrbitHierarchy,
  layout: OrbitConfigLayout,
  windowSize: {
    width: number;
    height: number;
  }
) => {
  const maxRadius = getMaxRadius(hierarchy);
  const { minContainerSize, maxContainerSize, responsive, padding } = layout;

  const containerSize = (maxRadius + padding) * 2;
  const minSize = responsive
    ? Math.min(windowSize.width, windowSize.height) - padding
    : minContainerSize;

  return Math.min(
    containerSize,
    Math.max(minSize, minContainerSize),
    maxContainerSize
  );
};

export * from "@components/common/orbit/utils/orbitUtils";
export * from "@components/common/orbit/utils/dataLoader";
