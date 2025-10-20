import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
