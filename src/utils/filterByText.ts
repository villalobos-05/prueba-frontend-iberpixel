/**
 * Filters text by checking if one string includes another, case-insensitively.
 *
 * @param text1 - The main text to be searched.
 * @param text2 - The text to search for within the main text.
 * @example
 * ```typescript
 * const result = filterByText('Hello World', 'world');
 * console.log(result); // Output: true
 * ```
 */
export const filterByText = (text1: string, text2: string) => {
  return text1.trim().toLowerCase().includes(text2.trim().toLowerCase())
}
