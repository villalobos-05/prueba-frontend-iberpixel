import { useProductFilters } from '../hooks/useProductFilters'
import { Product } from '../types/product.d'
import ProductCard from './ProductCard'

export default function ProductsGrid({ products }: { products: Product[] }) {
  const { filteredProducts, setProductName } = useProductFilters(products)

  return (
    <>
      <div className='flex items-center justify-between gap-6'>
        <input
          type='text'
          placeholder='Buscar producto'
          onChange={(event) => setProductName(event.target.value)}
        />
      </div>
      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  )
}
