import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Report from './pages/Report.jsx'
import HomePage from './pages/home.jsx'
import {BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Report" element={<Report/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
