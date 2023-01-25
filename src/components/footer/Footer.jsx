import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
      <a href="#about" className='footer__logo'>--- S H U F I ---</a>
      
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://instagram.com/nmshufi"><FiInstagram/></a>
          <a href="https://github.com/NurMuhammadShufi"><FaGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Nur Muhammad Shufi. All rights reserved.</small>
      </div>

   </footer>
  )
}

export default Footer