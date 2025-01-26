/**
 * Adds a value to the local storage under the specified name and return the value.
 * @description Created in the case it is needed to store and return, so it reduces code:
 * @example
 * ```typescript
 * // Before
 * const teams = ["Real Madrid", "Chelsea", "Liverpool"]
 * localStorage.setItem('teams', teams)
 * return teams
 *
 * // After
 * const teams = ["Real Madrid", "Chelsea", "Liverpool"]
 * return addToLocalStorage('teams', teams)
 * ```
 * @template T - The type of the value to be stored.
 * @param {string} name - The name under which the value will be stored.
 * @param {T} value - The value to be stored in local storage.
 * @returns {T} - The value that was stored.
 */
export const addToLocalStorage = <T>(name: string, value: T): T => {
  localStorage.setItem(name, JSON.stringify(value))
  return value
}
