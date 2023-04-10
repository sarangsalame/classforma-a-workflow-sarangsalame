import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserState from './store/UserState'
ReactDOM.createRoot(document.getElementById('root')).render(

  <UserState>
    <App />
  </UserState>

)
