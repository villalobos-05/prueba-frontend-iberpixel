import { Product } from '../types/product'
import { filterByText } from './filterByText'

interface Params {
  products: Product[]
  name: string
  categories: string[]
}

export const filterProducts = ({
  products,
  name,
  categories,
}: Params): Product[] => {
  return products.filter((product) => {
    // Filter by name
    if (name && !filterByText(product.title, name)) {
      return false
    }

    // Filter by category
    if (
      categories.length > 0 &&
      !categories.some((category) => category === product.category)
    ) {
      return false
    }

    // All filters passed
    return true
  })
}
