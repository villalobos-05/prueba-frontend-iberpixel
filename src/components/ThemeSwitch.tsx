import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { IoMoon, IoSunny } from 'react-icons/io5'

type ThemeTypes = 'light' | 'dark'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeTypes>(
    (localStorage.getItem('theme') as ThemeTypes) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  )

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Button
      onClick={toggleTheme}
      className='bg-transparent duration-200 hover:opacity-75'
    >
      {theme === 'light' ? (
        <IoSunny size={26} className='hover:animate-spin' />
      ) : (
        <IoMoon size={26} />
      )}
    </Button>
  )
}
