import { Product } from '../types/product'

export interface CartProduct extends Product {
  quantity: number
}

type CartAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: { id: number } }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SUBSTRACT_PRODUCT_QUANTITY'
      payload: { id: number; substract: number }
    }

export const cartReducer = (
  state: CartProduct[],
  action: CartAction
): CartProduct[] => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const cartProductIndex = state.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      )

      if (cartProductIndex !== -1) {
        const newCart = [...state]
        newCart[cartProductIndex].quantity += 1

        return newCart
      }

      return [...state, { ...action.payload, quantity: 1 }]
    }

    case 'SUBSTRACT_PRODUCT_QUANTITY': {
      const cartProductIndex = state.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      )

      if (cartProductIndex === -1) return state

      const newCart = [...state]
      const newQuantity =
        newCart[cartProductIndex].quantity - action.payload.substract

      if (newQuantity > 0) {
        newCart[cartProductIndex].quantity = newQuantity
        return newCart
      }

      newCart.splice(cartProductIndex, 1)
      return newCart
    }

    case 'REMOVE_PRODUCT':
      return state.filter((cartProduct) => cartProduct.id !== action.payload.id)

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}
