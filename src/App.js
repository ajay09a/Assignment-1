import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';
import Investor from './pages/Investor';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/investor' element={<Investor />} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App