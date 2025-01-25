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
    <div className='flex flex-col gap-10'>
      <ProductsHeader
        onTextInputChange={(event) => setProductName(event.target.value)}
        onCheckboxInputChange={handleCheckbox}
      />

      <main className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </main>
    </div>
  )
}
