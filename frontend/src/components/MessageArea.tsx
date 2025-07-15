import { useEffect, useRef, useState } from 'react'
import { getMessages } from '../api'
import { useAppStore } from '../store'
import MessageBubble from './MessageBubble'

export default function MessageArea() {
  const { selected, messages, setMessages } = useAppStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  const fetchMessages = async () => {
    if (!selected) return
    try {
      setLoading(true)
      const res = await getMessages(selected.id)
      setMessages(res.data.data)
      setError('')
    } catch (e) {
      setError('Error loading messages')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
    const interval = setInterval(fetchMessages, 10000)
    return () => clearInterval(interval)
  }, [selected])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!selected) return <div className="p-4">Select conversation</div>
  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>

  return (
    <div className="flex-1 overflow-y-auto p-2" style={{ height: 'calc(100vh - 200px)' }}>
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} isWebhook={false} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
