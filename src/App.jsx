
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

import Home from './pages/Home'

import Location from './pages/Location'



const App = () => {
  return (
    <div>

      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}></Route>
      </Routes>

    <Routes>
      <Route path='/' element={<Layout />}>

        <Route path='/home' element={<Home />} />

      <Route path='location' element={<Location />}/>

      </Route>
    </Routes>

    </div>
  );
};

export default App;
