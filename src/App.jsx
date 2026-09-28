import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Game from './Pages/Game'
import GameSelection from './Pages/GameSelection'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game/3' element={<Game />} />
          <Route path='/select-game' element={<GameSelection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
