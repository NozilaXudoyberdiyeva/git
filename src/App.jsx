import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
      
    </div>
  )
}

export default App
