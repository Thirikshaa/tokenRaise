import { useState } from 'react'
 
import './App.css'
import TokenRaise from './Token/TokenRaise'
import { Dashboard } from './Token/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cashout from './Token/Cashout';
import LoginStudio from './Token/LoginStudio';

 
function App() {
 
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginStudio />}></Route>
        <Route path='/tokenRaise' element={<TokenRaise />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cashout' element={<Cashout />} />
      </Routes>
     </BrowserRouter>
     
    </>
  )
}
 
export default App