import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './container/Home';
import PrivateRoutes from './utils/PrivateRoutes'


const App = () => {
  return (
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/*" element={<Home />} />  
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
  )
}

export default App