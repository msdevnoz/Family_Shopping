import React from 'react'
import './Footer.css'
import insta from '../Assets/insta.png'
import facebook from '../Assets/facebook.png'
import youtube from '../Assets/youtube.png'
import logo from '../Assets/logo.png'
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>NOZAM</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Productes</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={facebook} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={youtube} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All right reserved.Created by Shahnoza</p>
        </div>
    </div>
  )
}
