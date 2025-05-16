// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Router from './routes'

createRoot(document.getElementById('root')!).render(
  //! 타입단언
  <>
    {/* <App /> */}
    <Router />
  </> //Fragment
)
