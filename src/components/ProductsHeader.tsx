import { useEffect, useState } from 'react'
import Cart from './Cart'
import ThemeSwitch from './ThemeSwitch'
import TextInput from './ui/TextInput'
import { getProductCategories } from '../services/products'
import { productCategories } from '../types/product.d'

type Props = {
  onTextInputChange: React.ChangeEventHandler<HTMLInputElement>
  onCheckboxInputChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function ProductsHeader({
  onTextInputChange,
  onCheckboxInputChange,
}: Props) {
  const [categories, setCategories] = useState<string[]>([...productCategories]) // Default categories if problem fetching

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesFetched = await getProductCategories()
      setCategories(categoriesFetched)
    }

    fetchCategories()
  }, [])

  return (
    <header className='flex items-center justify-between gap-6 max-md:flex-col'>
      <div className='flex gap-6 max-md:flex-col'>
        <TextInput placeholder='Buscar producto' onChange={onTextInputChange} />

        <div className='bg-secondary flex gap-6 rounded-lg p-2'>
          {categories.sort().map((category) => (
            <label
              key={category}
              className='flex cursor-pointer items-center gap-1 hover:opacity-75'
            >
              <input
                type='checkbox'
                value={category}
                onChange={onCheckboxInputChange}
              />
              <span className='first-letter:uppercase'>{category}</span>
            </label>
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
