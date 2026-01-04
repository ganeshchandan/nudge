/**
 * Type for CSS properties with custom CSS variables support
 * Allows type-safe usage of CSS custom properties (--variable-name)
 */
export type CSSPropertiesWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};
