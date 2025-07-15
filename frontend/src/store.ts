import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Message {
  id: number
  content: string
  message_type: string
  created_at: string
  sender: { name: string; avatar_url: string }
  attachments: any[]
}

export interface Contact {
  id: number
  name: string
  email: string
  phone_number: string
  avatar_url: string
}

export interface Inbox {
  id: number
  name: string
  channel_type: string
}

export interface Conversation {
  id: number
  account_id: number
  inbox_id: number
  status: string
  unread_count: number
  contact: Contact
  inbox: Inbox
  messages?: Message[]
}

interface AppState {
  theme: 'light' | 'dark'
  conversations: Conversation[]
  selected?: Conversation
  messages: Message[]
  setTheme: (t: 'light' | 'dark') => void
  setConversations: (c: Conversation[]) => void
  selectConversation: (c: Conversation) => void
  setMessages: (m: Message[]) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      conversations: [],
      selected: undefined,
      messages: [],
      setTheme: (t) => set({ theme: t }),
      setConversations: (c) => set({ conversations: c }),
      selectConversation: (c) => set({ selected: c, messages: [] }),
      setMessages: (m) => set({ messages: m }),
    }),
    { name: 'crm-store' }
  )
)
