// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter} from 'react-router-dom';
import {Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  } from './components';
  import { StarsCanvas} from "./components/canvas"

function App() {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        yo
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
