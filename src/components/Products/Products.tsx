import { useProductFilters } from '../../hooks/useProductFilters'
import ProductCard from './ProductCard'
import ProductsFilters from './ProductsFilters'

export default function Products() {
  const { filteredProducts } = useProductFilters()

  return (
    <div className='flex flex-col gap-10'>
      <ProductsFilters />

      <main className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </main>
    </div>
  )
}
