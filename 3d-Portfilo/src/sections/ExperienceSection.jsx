import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
   <div className='w-full h-full md:px-20 px-5'>
    <TitleHeader title = "Professional Work Exxperience" sub = "My Carrer Overview" />
    
    <div className='mt-32 relative'>
<div className='relative z-50 xl:space-y-2 space-y-10'></div>
    {expCards.map((card) => (
       <div key={card.title} className='exp-card-wrapper'>
        {card.title}
        <div className='xl:w-2/6'>
          <GlowCard card = {card} />
        </div>
        <img src={card.imgPath} alt= {card.title} />
       </div>
    ))}
    </div>
   </div>
    </section>
  )
}

export default ExperienceSection
