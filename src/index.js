import React from 'react'
import ReactDOM from 'react-dom'
import './sass/styles.scss'

import './assets/fonts/OpenSans-ExtraBold.ttf'
import './assets/fonts/OpenSans-Regular.ttf'


import App from './components/App/App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
