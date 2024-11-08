import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
          <span className='mx-4 w-10 text-2xl font-bold '>Ct</span>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/chaitanya-tiwari-0ba3881b1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Chaitanya393" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/chaitanyatwri/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:chaitanyatiwai2468@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
