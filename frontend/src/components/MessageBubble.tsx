import type { Message } from '../store'
import { Bot, User } from 'lucide-react'

interface Props {
  message: Message
  isWebhook: boolean
}

export default function MessageBubble({ message, isWebhook }: Props) {
  const incoming = message.message_type === 'incoming'
  return (
    <div className={`flex ${incoming ? 'justify-start' : 'justify-end'} my-1`}>
      {incoming && (
        <img src={message.sender.avatar_url} className="w-6 h-6 rounded-full mr-2" />
      )}
      <div className="relative max-w-xs bg-slate-200 dark:bg-slate-700 p-2 rounded">
        <p>{message.content}</p>
        {!incoming && (
          <span className={isWebhook ? 'robot-indicator' : 'human-indicator'}>
            {isWebhook ? <Bot size={12} /> : <User size={12} />}
          </span>
        )}
      </div>
    </div>
  )
}
