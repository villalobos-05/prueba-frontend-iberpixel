import { Product } from '../types/product.d'
import ProductCard from './ProductCard'

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}
