import React, { createContext, useReducer } from 'react'
import { CartProduct, cartReducer } from '../reducers/cartReducer'
import { Product } from '../types/product'

type CartContextType = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, [])

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: { id: productId } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
