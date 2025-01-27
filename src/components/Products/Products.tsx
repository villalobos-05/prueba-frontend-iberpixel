import { useProductFilters } from '../../hooks/useProductFilters'
import ErrorMessage from '../ui/ErrorMessage'
import ProductCard from './ProductCard'
import ProductsFilters from './ProductsFilters'

export default function Products() {
  const { filteredProducts } = useProductFilters()

  return (
    <div className='flex flex-col gap-10'>
      <ProductsFilters />

      {filteredProducts.length === 0 ? (
        <ErrorMessage>Ningún producto encontrado.</ErrorMessage>
      ) : (
        <main className='grid grid-cols-1 place-items-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      )}
    </div>
  )
}
