import { useAppStore } from '../store'
import ThemeToggle from './ThemeToggle'

export default function ChatHeader() {
  const { selected } = useAppStore()
  if (!selected) return <div className="p-4 border-b">Select conversation</div>
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <img src={selected.contact.avatar_url} className="w-8 h-8 rounded-full" />
          <span className="green-dot"></span>
        </div>
        <div>
          <div className="font-medium">{selected.contact.name}</div>
          <div className="text-xs text-gray-500">{selected.inbox.name}</div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  )
}
