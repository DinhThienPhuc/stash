import { IObject } from "../definations/interfaces";

/**
 * Creates an array of elements split into groups the length of size.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 * @param arr: <T>[]
 * @param chunkSize: number
 * @returns: <T>[][]
 */
export const chunk = <T>(arr: T[], chunkSize = 1): T[][] => {
  const tmp = [...arr];
  if (chunkSize <= 0) {
    return [];
  }
  const cache = [];
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
};

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param arr: <T>[]
 * @returns: <T>[]
 */
export const compact = <T>(arr: T[]): T[] => {
  return arr.filter((x: T) => !!x);
};

/**
 * Creates an array of array values not included in the other given arrays.
 * @param arr1: <T>[]
 * @param arr2: <T>[]
 * @returns: <T>[]
 */
export const difference = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((x: T) => !arr2.includes(x));
};

/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and
 * values to generate the criterion by which they’re compared.
 * The order and references of result values are determined by the first array.
 * @param arr1: T[]
 * @param arr2: T[]
 * @param iteratee: (value: T, index?: number, array?: T[]) => unknown
 * @returns: T[]
 */
export const differenceBy = <T>(
  arr1: T[],
  arr2: T[],
  iteratee: (value: T, index?: number, array?: T[]) => unknown
): T[] => {
  if (typeof iteratee === "string") {
    const prop = iteratee;
    iteratee = (item: T, index?: number, array?: T[]) => item?.[prop];
  }
  return arr1.filter((c) => !arr2.map(iteratee).includes(iteratee(c)));
};

/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param arr: T[]
 * @param n: number
 * @returns: T[]
 */
export const drop = <T>(arr: T[], n = 1): T[] => {
  return arr.slice(n);
};

/**
 * Creates a slice of array with n elements dropped from the end
 * @param arr: T[]
 * @param n: number
 * @returns: T[]
 */
export const dropRight = <T>(arr: T[], n = 1): T[] => {
  return arr.slice(0, -n || arr.length);
};

/**
 * This method is like _.findIndex except that it iterates over elements of collection from right to left.
 * @param arr: T[]
 * @param func: (item: T) => boolean
 * @returns: number
 */
export const findLastIndex = <T>(
  arr: T[],
  func: (item: T) => boolean
): number => {
  const reverseIdx = [...arr].reverse().findIndex(func);
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx + 1);
};

/**
 * Recursively flattens array.
 * @param arr: unknown[]
 * @returns: unknown[]
 */
export const flattenDeep = (arr: unknown[]) => {
  return arr.flat(Infinity);
};

/**
 * This method returns an object composed from key-value pairs.
 * @param arr: T[]
 * @returns: Object
 */
export const fromPairs = <T>(arr: T[][]): IObject<T> => {
  return Object.fromEntries(arr);
};

/**
 * Parse a data of object string and return object data
 * @param jsonString data object string
 * @returns
 */
export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === "undefined" ? null : JSON.parse(jsonString ?? "");
  } catch (error) {
    return null;
  }
};

/**
 * A function that DO NOTHING
 */
export const doNothing = () => {
  return undefined;
};
