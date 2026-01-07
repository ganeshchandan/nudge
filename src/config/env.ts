/**
 * Environment variables configuration
 * Access via import.meta.env in Vite
 * Type definitions are provided by vite/client types
 */

export const getApiBaseUrl = (): string => {
  return import.meta.env.VITE_API_BASE_URL || '';
};

export const getAppName = (): string => {
  return import.meta.env.VITE_APP_NAME || 'Nudge';
};

