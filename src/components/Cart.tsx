import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../hooks/useCart'
import ProductCard from './ProductCard'
import { currencyFormatter } from '../utils/currencyFormatter'

export default function Cart() {
  const { cart } = useCart()

  const totalPrice = cart.reduce(
    (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
    0
  )

  return (
    <details className='relative'>
      <summary className='flex cursor-pointer list-none items-center text-lg font-semibold hover:opacity-75'>
        <IoCartOutline size={32} />
        <span>({cart.length})</span>
      </summary>

      <div className='bg-secondary shadow-counter-bg/50 absolute right-0 z-10 mt-2 w-96 rounded-lg p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-bold'>Productos en el carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul className='flex flex-col items-center gap-4'>
            {cart.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
        <div className='border-t-counter-bg/50 mt-6 border-t pt-4'>
          <h3 className='text-xl font-bold'>
            Total: {currencyFormatter.format(totalPrice)}
          </h3>
        </div>
      </div>
    </details>
  )
}
