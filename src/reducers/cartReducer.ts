import { Product } from '../types/product'

export interface CartProduct extends Product {
  quantity: number
}

type CartAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: { id: number } }
  | { type: 'CLEAR_CART' }

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

    case 'REMOVE_PRODUCT':
      return state.filter((cartProduct) => cartProduct.id !== action.payload.id)

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}
