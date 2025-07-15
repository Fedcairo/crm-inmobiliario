import axios from 'axios'

const CHATWOOT_CONFIG = {
  baseURL: 'https://devchatwoot.aivence.com/api/v1',
  apiKey: 'nZhTYqBV3E5TUnmRcddoEnSU',
  accountId: '1',
  headers: {
    api_access_token: 'nZhTYqBV3E5TUnmRcddoEnSU',
    'Content-Type': 'application/json',
  },
}

export const api = axios.create({
  baseURL: CHATWOOT_CONFIG.baseURL,
  headers: CHATWOOT_CONFIG.headers,
})

export const getConversations = () =>
  api.get(`/accounts/${CHATWOOT_CONFIG.accountId}/conversations`)

export const getMessages = (id: number) =>
  api.get(`/accounts/${CHATWOOT_CONFIG.accountId}/conversations/${id}/messages`)

export const sendMessage = (id: number, content: string) =>
  api.post(`/accounts/${CHATWOOT_CONFIG.accountId}/conversations/${id}/messages`, {
    content,
  })

export const pauseAgent = (conversationId: number) =>
  fetch('/api/webhook/pause', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversation_id: conversationId }),
  })

export const resumeAgent = (conversationId: number) =>
  fetch('/api/webhook/resume', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversation_id: conversationId }),
  })
