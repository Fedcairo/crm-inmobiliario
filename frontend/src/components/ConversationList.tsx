import { useEffect, useState } from 'react'
import { getConversations } from '../api'
import { useAppStore } from '../store'

export default function ConversationList() {
  const { conversations, setConversations, selectConversation, selected } = useAppStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getConversations()
      setConversations(res.data.data)
      setError('')
    } catch (e) {
      setError('Error loading conversations')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 10000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>
  if (conversations.length === 0) return <div className="p-4">No conversations</div>

  return (
    <div className="overflow-y-auto divide-y" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      {conversations.map((c) => (
        <ConversationItem
          key={c.id}
          conversation={c}
          selected={selected?.id === c.id}
          onSelect={() => selectConversation(c)}
        />
      ))}
    </div>
  )
}

import ConversationItem from './ConversationItem'
