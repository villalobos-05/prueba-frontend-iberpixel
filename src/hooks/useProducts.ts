import { useEffect, useState } from 'react'
import { getProducts } from '../services/products'
import { Product } from '../types/product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)
    setError(false)

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

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, fetchProducts }
}
