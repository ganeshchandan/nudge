/**
 * Animation and timing constants
 */
export const ANIMATION_DELAYS = {
  /** Delay between levels in seconds */
  LEVEL_DELAY: 5,
  /** Delay between nodes within the same level in seconds */
  NODE_DELAY: 0.3,
  /** Animation duration in seconds */
  ANIMATION_DURATION: 0.8,
} as const;

/**
 * UI timing constants
 */
export const UI_TIMING = {
  /** Resize event debounce delay in milliseconds */
  RESIZE_DEBOUNCE: 150,
} as const;

/**
 * Default node size in pixels (used as fallback)
 */
export const DEFAULT_NODE_SIZE = 40;
