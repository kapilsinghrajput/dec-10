import React from 'react'
import Login from './comp/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home_com/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App