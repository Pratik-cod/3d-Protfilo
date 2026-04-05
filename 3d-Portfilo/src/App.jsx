import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './components/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
const App = () => {
  return (
    <>
    <Navbar />
     <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    </>
  )
}

export default App
