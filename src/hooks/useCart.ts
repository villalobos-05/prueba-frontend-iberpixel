import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const useCart = () => {
  const cartContext = useContext(CartContext)

  // Check if it can receive the context
  if (cartContext === undefined) {
    throw new Error(
      'Cart context is undefined. Not using useCart within a CartProvider.'
    )
  }

  return cartContext
}
