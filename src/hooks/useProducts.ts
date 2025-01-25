import { useEffect, useState } from 'react'
import { getProducts } from '../services/products'
import { Product } from '../types/product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const fetchProducts = async () => {
      try {
        const productsFetched = await getProducts()
        setProducts(productsFetched)
      } catch (e) {
        console.error(e)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
