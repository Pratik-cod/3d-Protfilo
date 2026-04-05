import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
const App = () => {
  return (
    <>
    <Navbar />
     <Hero />
    <ShowcaseSection />
    <LogoSection />
    </>
  )
}

export default App
