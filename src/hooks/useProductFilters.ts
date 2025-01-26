import { useContext } from 'react'
import { ProductFiltersContext } from '../contexts/productFitlers'

export const useProductFilters = () => {
  const productFiltersContext = useContext(ProductFiltersContext)
  if (productFiltersContext === undefined) {
    throw new Error(
      'Products filters context is undefined. Not using useProductFilters within a CartProvider.'
    )
  }
  return productFiltersContext
}
