import { useEffect, useState } from 'react'
import { Product } from '../types/product'
import { filterProducts } from '../utils/filterProducts'

export const useProductFilters = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState([...products])

  const [productName, setProductName] = useState('')
  const [productCategories, setProductCategories] = useState<string[]>([])

  useEffect(() => {
    const newFilteredProducts = filterProducts({
      products,
      name: productName,
      categories: productCategories,
    })

    setFilteredProducts(newFilteredProducts)
  }, [productName, productCategories, products])

  return {
    setProductName,
    setProductCategories,
    filteredProducts,
  }
}
