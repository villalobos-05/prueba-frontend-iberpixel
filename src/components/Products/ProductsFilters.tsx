import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
import { SortEnum, sortValues } from '../../types/productFilters.d'
import { useProductFilters } from '../../hooks/useProductFilters'
import { useProductCategories } from '../../hooks/useProductCategories'

export default function ProductsFilters() {
  const { categories } = useProductCategories()

  const {
    filterProductName,
    filterProductCategory,
    sortProductsByPrice,
    sortByPrice,
  } = useProductFilters()

  return (
    <section className='flex items-center justify-between gap-6 max-lg:flex-col'>
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
                filterProductCategory(event.target.value, event.target.checked)
              }}
            />
            <span className='first-letter:uppercase'>{category}</span>
          </label>
        ))}
      </div>

      <div className='bg-secondary flex gap-2 rounded-lg'>
        {sortValues.map((sortingValue) => (
          <Button
            key={sortingValue}
            value={sortingValue}
            onClick={() => sortProductsByPrice(sortingValue)}
            className={
              sortByPrice === sortingValue ? 'text-accent' : 'text-counter-bg'
            }
          >
            {SortEnum[sortingValue]}
          </Button>
        ))}
      </div>
    </section>
  )
}
