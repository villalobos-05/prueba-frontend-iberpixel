import { Product } from '../types/product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className='bg-secondary flex w-[210px] flex-col'>
      <img
        src={product.image}
        alt={product.title}
        className='min-h-48 rounded-t-lg object-cover'
      />
      <div className='flex h-full flex-col justify-between p-2'>
        <h3 className='text-lg font-bold' title={product.title}>
          {product.title}
        </h3>
        <div className='flex justify-between'>
          <span>{product.price}$</span>
          <span className='text-counter-bg/45'>{product.category}</span>
        </div>
      </div>
    </div>
  )
}
