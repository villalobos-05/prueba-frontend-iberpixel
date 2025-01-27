import Header from './components/Header/Header'
import Products from './components/Products/Products'
import ErrorMessage from './components/ui/ErrorMessage'
import { CartProvider } from './contexts/cart'
import { ProductFiltersProvider } from './contexts/productFitlers'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, loading, error, fetchProducts } = useProducts()

  return (
    <CartProvider>
      <Header />

      {error ? (
        <ErrorMessage onClickButton={fetchProducts}>
          ¡Error al buscar los productos! Por favor, inténtelo de nuevo.
        </ErrorMessage>
      ) : loading ? (
        <h2 className='text-center text-3xl font-semibold'>Cargando...</h2>
      ) : (
        <ProductFiltersProvider products={products}>
          <Products />
        </ProductFiltersProvider>
      )}
    </CartProvider>
  )
}

export default App
