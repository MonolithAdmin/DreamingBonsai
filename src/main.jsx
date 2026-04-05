import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

if (!globalThis.__B44_DB__) {
  globalThis.__B44_DB__ = { 
    auth: { isAuthenticated: async () => false, me: async () => null },
    entities: new Proxy({}, { get: () => ({ filter: async () => [], get: async () => null }) }),
    integrations: { Core: { UploadFile: async () => ({ file_url: '' }) } }
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
