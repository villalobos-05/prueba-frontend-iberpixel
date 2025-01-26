import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../../hooks/useCart'
import ProductCard from '../Products/ProductCard'
import { currencyFormatter } from '../../utils/currencyFormatter'
import Button from '../ui/Button'

export default function Cart() {
  const { cart, clearCart, substractFromCart, addToCart } = useCart()

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

      <div className='bg-secondary shadow-counter-bg/50 absolute right-0 z-10 mt-2 flex w-96 flex-col items-center rounded-lg p-6 shadow-lg max-md:-right-52'>
        <h2 className='mb-4 text-2xl font-bold'>Productos en el carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <Button
              className='bg-accent text-background mb-6'
              onClick={clearCart}
            >
              Limpiar carrito
            </Button>

            <ul className='flex flex-col items-center gap-6'>
              {cart.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                  <div className='mt-4 flex items-center justify-center gap-2'>
                    Cantidad: {product.quantity}{' '}
                    <Button
                      className='h-8 w-8 border-[1px] text-sm'
                      onClick={() => addToCart(product)}
                    >
                      +
                    </Button>{' '}
                    <Button
                      className='h-8 w-8 border-[1px] text-sm'
                      onClick={() => substractFromCart(product.id, 1)}
                    >
                      -
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className='border-t-counter-bg/50 mt-6 border-t pt-4'>
              <h3 className='text-xl font-bold'>
                Total: {currencyFormatter.format(totalPrice)}
              </h3>
            </div>
          </>
        )}
      </div>
    </details>
  )
}
