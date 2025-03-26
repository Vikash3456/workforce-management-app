import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth_Provider from './context/Auth_Provider.jsx'

createRoot(document.getElementById('root')).render(

  <Auth_Provider>
   <App/>
  </Auth_Provider>

)
