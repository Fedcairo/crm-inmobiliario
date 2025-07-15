import { pauseAgent, resumeAgent } from '../api'
import { useAppStore } from '../store'

export default function AgentControls() {
  const { selected } = useAppStore()
  if (!selected) return null

  return (
    <div className="p-2 flex space-x-2">
      <button onClick={() => pauseAgent(selected.id)} className="semi-neon-btn rounded px-2">
        Pause Agent
      </button>
      <button onClick={() => resumeAgent(selected.id)} className="semi-neon-btn rounded px-2">
        Resume Agent
      </button>
    </div>
  )
}
