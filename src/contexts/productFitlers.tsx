import { createContext, useEffect, useState } from 'react'
import { filterProducts } from '../utils/filterProducts'
import { Product } from '../types/product.d'
import { SortType } from '../types/productFilters.d'

// Just to have type notation when using the context
type ProductFiltersContextType = {
  filteredProducts: Product[]
  sortByPrice: SortType
  filterProductName: (productName: string) => void
  filterProductCategory: (category: string, add: boolean) => void
  sortProductsByPrice: (sortValue: SortType) => void
}

export const ProductFiltersContext = createContext<
  ProductFiltersContextType | undefined
>(undefined)

export const ProductFiltersProvider = ({
  children,
  products,
}: {
  children: React.ReactNode
  products: Product[]
}) => {
  const [filteredProducts, setFilteredProducts] = useState([...products])

  const [productName, setProductName] = useState('')
  const [productCategories, setProductCategories] = useState<string[]>([])

  const [sortByPrice, setSortByPrice] = useState<SortType>('none')

  const filterProductName = (productName: string) => {
    setProductName(productName.trim())
  }

  const filterProductCategory = (category: string, add: boolean) => {
    // Add category
    if (add) {
      return setProductCategories((prevState) => [...prevState, category])
    }

    // Remove category
    setProductCategories((prevState) =>
      [...prevState].filter((stateCategory) => stateCategory !== category)
    )
  }

  const sortProductsByPrice = (sortValue: typeof sortByPrice) => {
    setSortByPrice(sortValue)
  }

  useEffect(() => {
    // Filters
    const newFilteredProducts = filterProducts({
      products,
      name: productName,
      categories: productCategories,
    })

    // Sorting
    if (sortByPrice !== 'none') {
      newFilteredProducts.sort((a, b) => {
        return sortByPrice === 'asc' ? a.price - b.price : b.price - a.price
      })
    }

    setFilteredProducts(newFilteredProducts)
  }, [productName, productCategories, products, sortByPrice])

  return (
    <ProductFiltersContext.Provider
      value={{
        filteredProducts,
        filterProductName,
        filterProductCategory,
        sortProductsByPrice,
        sortByPrice,
      }}
    >
      {children}
    </ProductFiltersContext.Provider>
  )
}
