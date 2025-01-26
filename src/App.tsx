import Products from './components/Products/Products'
import Button from './components/ui/Button'
import { ProductFiltersProvider } from './contexts/productFitlers'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts()

  if (error) {
    return (
      <main className='text-3xl'>
        <p>¡Error al buscar los productos! Por favor, inténtelo de nuevo.</p>
        <Button onClick={() => window.location.reload()}>
          Prueba otra vez
        </Button>
      </main>
    )
  }

  return loading ? (
    <h2 className='text-center text-3xl font-semibold'>Cargando...</h2>
  ) : (
    <ProductFiltersProvider products={products}>
      <Products />
    </ProductFiltersProvider>
  )
}

export default App
