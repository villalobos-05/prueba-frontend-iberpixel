import ProductsGrid from './components/ProductsGrid'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products } = useProducts()

  return (
    <main>
      <ProductsGrid products={products} />
    </main>
  )
}

export default App
