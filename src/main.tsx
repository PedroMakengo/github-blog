import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Para traduzir o moment
// import moment from 'moment'
// import 'moment/dist/locale/pt-br'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
