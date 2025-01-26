import { useEffect, useState } from 'react'
import { Product } from '../types/product'
import { filterProducts } from '../utils/filterProducts'

export const sortValues = ['none', 'asc', 'desc'] as const

export const useProductFilters = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState([...products])

  const [productName, setProductName] = useState('')
  const [productCategories, setProductCategories] = useState<string[]>([])

  const [sortByPrice, setSortByPrice] =
    useState<(typeof sortValues)[number]>('none')

  useEffect(() => {
    // Filters
    const newFilteredProducts = filterProducts({
      products,
      name: productName,
      categories: productCategories,
    })

    // Sorting
    if (sortByPrice !== 'none') {
      newFilteredProducts.sort((a, b) => {
        return sortByPrice === 'asc' ? a.price - b.price : b.price - a.price
      })
    }

    setFilteredProducts(newFilteredProducts)
  }, [productName, productCategories, products, sortByPrice])

  return {
    setProductName,
    setProductCategories,
    setSortByPrice,
    sortByPrice,
    filteredProducts,
  }
}
