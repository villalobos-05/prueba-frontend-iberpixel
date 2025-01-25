import { useEffect, useState } from 'react'
import { getProducts } from '../services/products'
import { Product } from '../types/product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFetched = await getProducts()
        setProducts(productsFetched)
      } catch (e) {
        console.error(e)
      }
    }

    fetchProducts()
  }, [])

  return { products }
}
