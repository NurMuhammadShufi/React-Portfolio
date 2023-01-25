import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://instagram.com/nmshufi" target="_blank"><FaInstagramSquare /></a>
        <a href="https://github.com/NurMuhammadShufi" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials