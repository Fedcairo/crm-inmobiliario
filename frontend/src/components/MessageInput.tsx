import { useState, type FormEvent } from 'react'
import { pauseAgent, resumeAgent, sendMessage } from '../api'
import { useAppStore } from '../store'

export default function MessageInput() {
  const { selected } = useAppStore()
  const [text, setText] = useState('')
  const [paused, setPaused] = useState(false)

  if (!selected) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!text) return
    await sendMessage(selected.id, text)
    setText('')
  }

  const togglePause = async () => {
    if (!selected) return
    if (paused) {
      await resumeAgent(selected.id)
      setPaused(false)
    } else {
      await pauseAgent(selected.id)
      setPaused(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 flex space-x-2 border-t">
      <input
        className="flex-1 border rounded p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button type="button" onClick={togglePause} className="semi-neon-btn rounded px-2">
        {paused ? 'Resume' : 'Pause'}
      </button>
      <button type="submit" className="semi-neon-btn rounded px-4">
        Send
      </button>
    </form>
  )
}
