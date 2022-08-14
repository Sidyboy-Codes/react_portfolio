import React from 'react'
import hero_img from '../../assets/laptop.svg'
import Cbtns from './Cbtns'
import './hero.css'

const Hero = () => {
  return (
    <header id='home' className='container header_container'>
      <div className='hero_info'>
        <h4>Hello World!</h4>
        <h1>I'm Siddhant Patel</h1>
        <h3>Junior Web Developer</h3>
        <Cbtns/>
      </div>
      <img src={hero_img} />
    </header>
  )
}

export default Hero