import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App