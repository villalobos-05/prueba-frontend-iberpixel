export const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`)

  if (!response.ok) {
    throw new Error(`Could not fetch products! Status: ${response.status}`)
  }

  return await response.json()
}
