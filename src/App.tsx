import { useEffect, useState } from 'react'
import { getProducts } from './services/products'
import { Product } from './types/product'
import ProductsGrid from './components/ProductsGrid'

function App() {
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

  return (
    <main>
      <ProductsGrid products={products} />
    </main>
  )
}

export default App
