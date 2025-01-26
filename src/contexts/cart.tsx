import React, { createContext, useReducer } from 'react'
import { cartReducer, STORAGE_CART } from '../reducers/cartReducer'
import { CartProduct, Product } from '../types/product'

type CartContextType = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  substractFromCart: (productId: number, quantity: number) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem(STORAGE_CART) || '[]')
  )

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: { id: productId } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const substractFromCart = (productId: number, quantity: number = 1) => {
    dispatch({
      type: 'SUBSTRACT_PRODUCT_QUANTITY',
      payload: { id: productId, substract: quantity },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        substractFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
