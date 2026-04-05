import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {

    const Logoicon = ({icon}) => {
  return(
    <div className='flex-none flex-center marquee-item'>
    <img src= {icon.imgPath} alt= {icon.name} />
    </div>
  )
    }

  return (
      <div className='md:my-20 my-10 relative'>
  <div className='gradient-edge'/>
  <div className='gradient-edge'/>
  <div className='marquee h-52'>
 <div className='marquee-box md:gap-12 gap-5'>
 {logoIconsList.map((logo) => (
    <Logoicon key={logo.name} icon={logo} />
 ))}
 {logoIconsList.map((logo) => (
    <Logoicon key={logo.name} icon={logo} />
 ))}
 </div>
  </div>
      </div>
    
  )
}

export default LogoSection
