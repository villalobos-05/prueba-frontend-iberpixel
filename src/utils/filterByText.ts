export const filterByText = (text1: string, text2: string) => {
  return text1.trim().toLowerCase().includes(text2.trim().toLowerCase())
}
