import { parseJSON } from "./base";

/**
 * Wrapper for console.<method> to prevent eslint announcement
 * Use it as least as possible because it just use to yell for
 * some of the specific cases
 */
export const ceryneian = { ...console };

/**
 * Reload current browser tab
 */
export const reload = () => {
  window.location.reload();
};

/**
 * Get value from Session Storage by key
 * @param key to get value from Session Storage
 * @returns JSON data
 */
export const getFromSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

/**
 * Get value from Local Storage by key
 * @param key to get value from Local Storage
 * @returns JSON data
 */
export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};
