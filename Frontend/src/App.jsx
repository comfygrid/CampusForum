import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
