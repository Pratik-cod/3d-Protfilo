import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const ShowSectionRef = useRef(null)
  const Project1Ref = useRef(null)
  const Project2Ref = useRef(null)
  const Project3Ref = useRef(null)

  useGSAP(() => {
    const projects = [Project1Ref.current, Project2Ref.current, Project3Ref.current]

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      )
    })

    gsap.fromTo(ShowSectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, [])

  return (
    <section id='work' ref={ShowSectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          <div className='first-project-wrapper' ref={Project1Ref}>
            <div className='image-wrapper'>
              <img src='/images/project1.png' alt='Ride' />
            </div>
            <div className='text-content'>
              <h2>The project is based on routing content to navigate the vehicle</h2>
              <p>It’s created for navigating vehicles and dropping the user.</p>
            </div>
          </div>

          <div className='project-list-wrapper overflow-hidden' ref={Project2Ref}>
            <div className='project'>
              <div>
                <img src='/images/project2.png' alt='Library Management' />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className='project' ref={Project3Ref}>
              <div>
                <img src='/images/project3.png' alt='E-Commerce' />
              </div>
              <h2>E-Commerce</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection