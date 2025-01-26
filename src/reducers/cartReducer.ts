import { CartProduct, Product } from '../types/product'
import { addToLocalStorage } from '../utils/addToLocalStorage'

type CartAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: { id: number } }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SUBSTRACT_PRODUCT_QUANTITY'
      payload: { id: number; substract: number }
    }

export const STORAGE_CART = 'cart'

export const cartReducer = (
  state: CartProduct[],
  action: CartAction
): CartProduct[] => {
  let newCart: CartProduct[]

  switch (action.type) {
    case 'ADD_PRODUCT': {
      const cartProductIndex = state.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      )

      if (cartProductIndex !== -1) {
        newCart = [...state]
        newCart[cartProductIndex].quantity += 1
      } else {
        newCart = [...state, { ...action.payload, quantity: 1 }]
      }
      break
    }

    case 'REMOVE_PRODUCT': {
      newCart = state.filter(
        (cartProduct) => cartProduct.id !== action.payload.id
      )
      break
    }

    case 'CLEAR_CART':
      return addToLocalStorage(STORAGE_CART, [])

    case 'SUBSTRACT_PRODUCT_QUANTITY': {
      const cartProductIndex = state.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      )

      if (cartProductIndex === -1) return state

      newCart = [...state]
      const newQuantity =
        newCart[cartProductIndex].quantity - action.payload.substract

      if (newQuantity > 0) {
        newCart[cartProductIndex].quantity = newQuantity
      } else {
        newCart.splice(cartProductIndex, 1)
      }
      break
    }

    default:
      return state
  }

  return addToLocalStorage(STORAGE_CART, newCart)
}
