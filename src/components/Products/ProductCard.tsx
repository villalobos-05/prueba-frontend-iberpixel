import { useCart } from '../../hooks/useCart'
import { Product } from '../../types/product.d'
import { currencyFormatter } from '../../utils/currencyFormatter'
import Button from '../ui/Button'
import { BsCartPlus, BsCartX } from 'react-icons/bs'

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <div
      key={product.id}
      className='bg-secondary shadow-counter-bg/20 hover:shadow-counter-bg/40 relative flex h-[352px] w-[210px] flex-col rounded-lg shadow-md duration-300 hover:-translate-y-1.5 dark:shadow-sm'
    >
      <span className='bg-secondary shadow-counter-bg/20 hover:shadow-counter-bg/40 absolute -top-4 -left-4 rounded-full p-4 text-lg font-semibold shadow-md'>
        {currencyFormatter.format(product.price)}
      </span>
      <img
        src={product.image}
        alt={product.title}
        className='min-h-48 rounded-t-lg object-cover'
      />
      <div className='flex h-full flex-col justify-between p-2'>
        <h3 className='text-lg font-bold' title={product.title}>
          {product.title
            .slice(0, 38)
            .concat(product.title.length > 38 ? '...' : '')}
        </h3>
        <div className='flex items-center justify-between text-zinc-900'>
          {cart.some((cartProduct) => cartProduct.id === product.id) ? (
            <Button
              className='w-fit bg-red-400'
              onClick={() => removeFromCart(product.id)}
            >
              <BsCartX size={26} strokeWidth={0.1} />
            </Button>
          ) : (
            <Button
              className='bg-accent w-fit'
              onClick={() => addToCart(product)}
            >
              <BsCartPlus size={26} strokeWidth={0.1} />
            </Button>
          )}
          <span className='text-counter-bg/45'>{product.category}</span>
        </div>
      </div>
    </div>
  )
}
