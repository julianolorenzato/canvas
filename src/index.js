import React from 'react'
import ReactDOM from 'react-dom'

import { NotesProvider } from './contexts/NotesContext'

import App from './components/App/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)