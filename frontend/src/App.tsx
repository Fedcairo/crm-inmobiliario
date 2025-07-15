import ConversationList from './components/ConversationList'
import ChatHeader from './components/ChatHeader'
import MessageArea from './components/MessageArea'
import MessageInput from './components/MessageInput'
import { useAppStore } from './store'
import ChannelTabs from './components/ChannelTabs'
import { useState } from 'react'

function App() {
  const { theme } = useAppStore()
  const [channel, setChannel] = useState<string | null>(null)
  return (
    <div data-theme={theme} className="h-screen flex text-sm">
      <div className="w-1/3 border-r flex flex-col" style={{ minWidth: 250 }}>
        <ChannelTabs selected={channel} onSelect={setChannel} />
        <ConversationList />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <MessageArea />
        <MessageInput />
      </div>
    </div>
  )
}
export default App
