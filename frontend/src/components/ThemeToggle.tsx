import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '../store'

export default function ThemeToggle() {
  const { theme, setTheme } = useAppStore()
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <button onClick={toggle} className="semi-neon-btn p-2 rounded">
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
