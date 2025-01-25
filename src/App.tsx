import ProductsGrid from './components/ProductsGrid'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error } = useProducts()

  if (error) {
    return (
      <main className='text-3xl'>
        <p>¡Error al buscar los productos! Por favor, inténtelo de nuevo.</p>
        <button onClick={() => window.location.reload()}>
          Prueba otra vez
        </button>
      </main>
    )
  }

  return (
    <main>
      {loading ? (
        <h2 className='text-center text-3xl font-semibold'>Cargando...</h2>
      ) : (
        <ProductsGrid products={products} />
      )}
    </main>
  )
}

export default App
