import Cart from '../Cart'
import ThemeSwitch from '../ThemeSwitch'

export default function Header() {
  return (
    <header className='mb-8 flex justify-around'>
      <h1 className='bg-secondary/90 rounded-lg p-4 text-3xl font-bold'>
        Productos <span className='text-accent'>Iberpixel</span>
      </h1>
      <div className='flex items-center gap-1.5'>
        <Cart />

        <ThemeSwitch />
      </div>
    </header>
  )
}
