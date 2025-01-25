import { useProductFilters } from '../hooks/useProductFilters'
import { Product } from '../types/product.d'
import ProductCard from './ProductCard'
import ProductsHeader from './ProductsHeader'

export default function ProductsGrid({ products }: { products: Product[] }) {
  const { filteredProducts, setProductCategories, setProductName } =
    useProductFilters(products)

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    if (checked) {
      setProductCategories((prevProductCategories) => [
        ...prevProductCategories,
        value,
      ])
    } else {
      setProductCategories((prevProductCategories) =>
        [...prevProductCategories].filter((category) => category !== value)
      )
    }
  }

  return (
    <>
      <ProductsHeader
        onTextInputChange={(event) => setProductName(event.target.value)}
        onCheckboxInputChange={handleCheckbox}
      />

      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  )
}
