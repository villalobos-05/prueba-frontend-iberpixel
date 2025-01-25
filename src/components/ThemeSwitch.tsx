import { useState, useEffect } from 'react'
import Button from './ui/Button'

type ThemeTypes = 'light' | 'dark'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeTypes>('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Button
      onClick={toggleTheme}
      className='border-text bg-transparent duration-200 hover:opacity-75'
    >
      {theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    </Button>
  )
}
