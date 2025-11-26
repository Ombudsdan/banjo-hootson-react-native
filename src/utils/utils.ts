/**
 * Filters an object's entries to only those whose keys exist in the provided key list.
 *
 * @typeParam T - The type whose keys determine which properties are allowed.
 *
 * @param obj - The object to filter.
 * @param keys - An array of keys (from `T`) to keep.
 *
 * @returns An array of `[key, value]` pairs where the key matches one of the allowed keys.
 *
 * @example
 * ```ts
 * const buttonProps = filterKeys<ButtonProps>(props, ["onPress", "disabled"]);
 * ```
 */
export function filterKeys<T extends object>(
  obj: Record<string, unknown>,
  keys: (keyof T)[],
) {
  return Object.entries(obj).filter(([key]) => keys.includes(key as keyof T));
}
