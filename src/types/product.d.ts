export interface CartProduct extends Product {
  quantity: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}

// '& {}' ensures that default categories don't overlap with string,
// so Category is either one of productCategories or any other category (string)
type Category = (typeof productCategories)[number] | (string & {})

export const productCategories = [
  "women's clothing",
  "men's clothing",
  'electronics',
  'jewelery',
] as const
