import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
