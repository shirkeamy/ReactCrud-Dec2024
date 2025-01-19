import React from 'react';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeMaster from './Pages/EmployeeMaster';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<Home />} />
          
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='employee-master' element={<EmployeeMaster />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
