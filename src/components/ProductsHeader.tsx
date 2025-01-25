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
    <div className='flex items-center justify-between gap-6'>
      <TextInput placeholder='Buscar producto' onChange={onTextInputChange} />

      <div className='flex gap-6'>
        {productCategories.map((category) => (
          <label key={category}>
            <input
              type='checkbox'
              value={category}
              onChange={onCheckboxInputChange}
            />
            {category}
          </label>
        ))}
      </div>

      <ThemeSwitch />
    </div>
  )
}
