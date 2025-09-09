'use client'
import { useTheme } from 'next-themes'
import { MoonStar, Sun } from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  const changeTheme = (theme: string) => {
    let metaTag = document.querySelector('meta[name="theme-color"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'theme-color')
      document.head.appendChild(metaTag)
    }
    const color = theme === 'dark' ? 'oklch(0.269 0 0)' : 'oklch(1 0 0)'
    metaTag.setAttribute('content', color)
    setTheme(theme)
  }
  return <div className='flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] h-full px-4 border-l-1 bprder-r-1 border-dashed cursor-pointer'>{isDarkTheme ? <Sun onClick={() => changeTheme('light')} size={18} /> : <MoonStar onClick={() => changeTheme('dark')} size={18} />}</div>
}

export default ThemeToggle
