import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Dash } from './Dash'
import { Home } from './Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dash' element={<Dash/>}/>
    </Routes>
  
  </BrowserRouter>
)
