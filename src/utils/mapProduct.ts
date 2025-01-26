import notFoundImagePath from '../assets/image-not-found.jpg'
import { Product } from '../types/product'

export const mapProduct = (apiProduct: Product): Product => {
  return {
    id: apiProduct.id,
    title: apiProduct?.title || 'No title',
    price: apiProduct?.price || NaN,
    description: apiProduct?.description || '',
    category: apiProduct?.category || '',
    image: apiProduct?.image || notFoundImagePath,
    rating: {
      rate: apiProduct.rating?.rate || 0,
      count: apiProduct.rating?.count || 0,
    },
  }
}
