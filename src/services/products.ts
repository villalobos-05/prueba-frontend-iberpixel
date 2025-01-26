import { Product } from '../types/product'
import { mapProduct } from '../utils/mapProduct'

const FAKESTORE_API_URL = 'https://fakestoreapi.com'

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${FAKESTORE_API_URL}/products`)

  if (!response.ok) {
    throw new Error(`Could not fetch products! Status: ${response.status}`)
  }

  const apiProducts = await response.json()

  // Return mapped product so if fakestoreapi changes its response object, it would
  // only be needed to change mapProduct(), not the whole app
  return apiProducts.map(mapProduct)
}

export const getProductCategories = async (): Promise<string[]> => {
  const response = await fetch(`${FAKESTORE_API_URL}/products/categories`)

  if (!response.ok) {
    throw new Error(`Could not fetch categories! Status: ${response.status}`)
  }

  return await response.json()
}
