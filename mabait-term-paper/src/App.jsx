import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Topics/>
    </>
  )
}

export default App
