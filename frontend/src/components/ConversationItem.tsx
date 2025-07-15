import type { Conversation } from '../store'

interface Props {
  conversation: Conversation
  selected: boolean
  onSelect: () => void
}

export default function ConversationItem({ conversation, selected, onSelect }: Props) {
  const lastMessage = conversation.messages?.[conversation.messages.length - 1]
  return (
    <div
      className={`p-2 cursor-pointer flex items-center space-x-2 border-b ${selected ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
      onClick={onSelect}
    >
      <div className="relative">
        <img src={conversation.contact.avatar_url} className="w-8 h-8 rounded-full" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{conversation.contact.name}</div>
        <div className="text-xs text-gray-500 truncate w-40">
          {lastMessage?.content}
        </div>
      </div>
    </div>
  )
}
