import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Location from './pages/Location'

const App = () => {
  return (
    <div>
    <Routes>
    
      <Route path='/' element={<Layout />}>
      <Route path='location' element={<Location />}/>
      </Route>
    </Routes>
      
    </div>
  )
}

export default App
