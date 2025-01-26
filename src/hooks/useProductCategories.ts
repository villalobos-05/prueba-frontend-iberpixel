import { useEffect, useState } from 'react'
import { productCategories } from '../types/product.d'
import { getProductCategories } from '../services/products'

export const useProductCategories = () => {
  const [categories, setCategories] = useState<string[]>([...productCategories]) // Default categories if problem fetching

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesFetched = await getProductCategories()
      setCategories(categoriesFetched)
    }

    fetchCategories()
  }, [])

  return { categories }
}
