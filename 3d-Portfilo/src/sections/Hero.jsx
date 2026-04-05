import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/Hero Models/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimateCounter from '../components/AnimateCounter'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      {
        y: 0,
        stagger: 0.2,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }
    )
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='Main' />
      </div>

      <div className='hero-layout'>
        {/* left-side Hero content */}
        <header className='flex flex-col justify-between md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shapping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img
                          src={word.images}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-xl'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Projects</h1>
              <h1>That deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hi! I am Mern Stack developer with a passion for creating innovation and delivering value.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Work"
            />
          </div>
        </header>

        {/* right-side 3d model */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimateCounter />
    </section>
  )
}

export default Hero