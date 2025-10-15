import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'

function App() {

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Landing/>} />
           <Route path='/play' element={<Board/>} />
       </Routes>
    </BrowserRouter>

    </div>

  )
}

export default App
