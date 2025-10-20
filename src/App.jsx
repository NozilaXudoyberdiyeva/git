import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Contacts from './pages/Contacts'

const App = () => {
  return (
    <div>
    <Routes>
    
      <Route path='/' element={<Layout />}>
      <Route path='contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
      
    </div>
  )
}

export default App
