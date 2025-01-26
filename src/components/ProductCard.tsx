import { useCart } from '../hooks/useCart'
import { Product } from '../types/product.d'
import { currencyFormatter } from '../utils/currencyFormatter'
import Button from './ui/Button'

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <div
      key={product.id}
      className='bg-secondary shadow-counter-bg/20 hover:shadow-counter-bg/40 flex h-[340px] w-[210px] flex-col rounded-lg shadow-md duration-300 hover:-translate-y-1.5 dark:shadow-sm'
    >
      <img
        src={product.image}
        alt={product.title}
        className='min-h-48 rounded-t-lg object-cover'
      />
      <div className='flex h-full flex-col justify-between p-2'>
        <h3 className='text-lg font-bold' title={product.title}>
          {product.title
            .slice(0, 52)
            .concat(product.title.length > 52 ? '...' : '')}
        </h3>
        <div className='flex justify-between'>
          <span>{currencyFormatter.format(product.price)}</span>
          <span className='text-counter-bg/45'>{product.category}</span>
        </div>
      </div>

      {cart.some((cartProduct) => cartProduct.id === product.id) ? (
        <Button onClick={() => removeFromCart(product.id)}>-</Button>
      ) : (
        <Button onClick={() => addToCart(product)}>+</Button>
      )}
    </div>
  )
}
