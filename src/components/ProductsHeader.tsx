import Cart from './Cart'
import ThemeSwitch from './ThemeSwitch'
import TextInput from './ui/TextInput'
import Button from './ui/Button'
import { sortValues } from '../types/productFilters.d'
import { useProductFilters } from '../hooks/useProductFilters'
import { useProductCategories } from '../hooks/useProductCategories'

export default function ProductsHeader() {
  const { categories } = useProductCategories()

  const {
    filterProductName,
    filterProductCategory,
    sortProductsByPrice,
    sortByPrice,
  } = useProductFilters()

  return (
    <header className='flex items-center justify-between gap-6 max-md:flex-col'>
      <div className='flex gap-6 max-md:flex-col'>
        <TextInput
          placeholder='Buscar producto'
          onChange={(event) => filterProductName(event.target.value)}
        />

        <div className='bg-secondary flex gap-6 rounded-lg p-2'>
          {categories.sort().map((category) => (
            <label
              key={category}
              className='flex cursor-pointer items-center gap-1 hover:opacity-75'
            >
              <input
                type='checkbox'
                value={category}
                onChange={(event) => {
                  filterProductCategory(
                    event.target.value,
                    event.target.checked
                  )
                }}
              />
              <span className='first-letter:uppercase'>{category}</span>
            </label>
          ))}
        </div>

        <div className='bg-secondary flex gap-2 rounded-lg'>
          {sortValues.map((sortingValue) => (
            <Button
              value={sortingValue}
              onClick={() => sortProductsByPrice(sortingValue)}
              className={
                sortByPrice === sortingValue ? 'text-accent' : 'text-counter-bg'
              }
            >
              {sortingValue}
            </Button>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-1.5'>
        <Cart />

        <ThemeSwitch />
      </div>
    </header>
  )
}
