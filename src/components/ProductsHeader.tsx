import { productCategories } from '../types/product.d'
import ThemeSwitch from './ThemeSwitch'
import TextInput from './ui/TextInput'

type Props = {
  onTextInputChange: React.ChangeEventHandler<HTMLInputElement>
  onCheckboxInputChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function ProductsHeader({
  onTextInputChange,
  onCheckboxInputChange,
}: Props) {
  return (
    <header className='flex items-center justify-between gap-6 max-md:flex-col'>
      <div className='flex gap-6 max-md:flex-col'>
        <TextInput placeholder='Buscar producto' onChange={onTextInputChange} />

        <div className='bg-secondary flex gap-6 rounded-lg p-2'>
          {productCategories.map((category) => (
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

      <ThemeSwitch />
    </header>
  )
}
