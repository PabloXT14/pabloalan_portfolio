import { useState, useEffect } from 'react'
import { IoDesktopOutline, IoMoon, IoSunny } from 'react-icons/io5'
import { clsx } from 'clsx'
import { IconType } from 'react-icons'

const ThemeSwitch = () => {
  const themeKeyLocalStorage = '@pabloalan-portfolio:theme'
  const [theme, setTheme] = useState('')
  let htmlElement: HTMLElement
  let darkQuery: MediaQueryList | undefined

  if (typeof window !== 'undefined') {
    htmlElement = document.documentElement
    darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  }

  const themeOptions = [
    {
      title: 'light',
      icon: <IoSunny />,
      handlerSwitch: () => {
        setTheme('light')
        htmlElement.classList.remove('dark')
        localStorage.setItem(themeKeyLocalStorage, 'light')
      },
    },
    {
      title: 'dark',
      icon: <IoMoon />,
      handlerSwitch: () => {
        setTheme('dark')
        htmlElement.classList.add('dark')
        localStorage.setItem(themeKeyLocalStorage, 'dark')
      },
    },
    {
      title: 'system',
      icon: <IoDesktopOutline />,
      handlerSwitch: () => {
        setTheme('system')
        localStorage.removeItem(themeKeyLocalStorage)
        onWindowMatch()
      },
    },
  ]

  function onWindowMatch() {
    const themeStorage = localStorage.getItem(themeKeyLocalStorage)

    if (
      themeStorage === 'dark' ||
      (!(themeKeyLocalStorage in localStorage) && darkQuery?.matches)
    ) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    setTheme(localStorage.getItem(themeKeyLocalStorage) || 'system')
    onWindowMatch()
  }, [])

  useEffect(() => {
    const themeOption = themeOptions.find((option) => option.title === theme)
    themeOption?.handlerSwitch()
  }, [theme])

  darkQuery?.addEventListener('change', (event) => {
    if (!(themeKeyLocalStorage in localStorage)) {
      if (event.matches) {
        htmlElement.classList.add('dark')
      } else {
        htmlElement.classList.remove('dark')
      }
    }
  })

  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded bg-zinc-200 p-2 text-white',
        'dark:bg-zinc-800 dark:text-zinc-100',
      )}
    >
      {themeOptions.map((option) => {
        const Icon: IconType = () => option.icon

        return (
          <button
            key={option.title}
            onClick={() => setTheme(option.title)}
            className={clsx(
              theme === option.title
                ? 'text-secondary'
                : 'text-zinc-800 dark:text-zinc-100',
            )}
          >
            <Icon />
          </button>
        )
      })}
    </div>
  )
}

export { ThemeSwitch }
