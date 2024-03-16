import React from 'react'
import './Hero.css'
import women from '../Assets/women.png'
import hello from '../Assets/hello.png'
import arrow from '../Assets/arrow-right.png'
export const Hero = () => {
  return (
    <div className="hero">
     <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
   <div>
   <div className="hero-hand-icon">
      <p>new</p>
      <img src={hello} alt="" />
     </div>
     <p>collections</p>
     <p>for everyone</p>
   </div>
   <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow} alt="" width="50px"/>
     </div>
   </div>
   <div className="hero-right">
    <img src={women} alt="" />
   </div>
    </div>
  )
}
