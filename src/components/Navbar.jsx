import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaGithub, FaTwitter, FaTwitch,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

import logo from '../assets/logo.png'

export const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false);
  const handleNavbar = () => setShowNavbar(!showNavbar);
  return (
    <div className='w-full h-[80px] fixed bg-blue-400 px-4 flex items-center justify-between text-gray-50'>
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className='w-[50px]' />
      </div>
      {/* end */}
      {/* navbar items */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      {/* end */}
      {/* hamburger menu icon */}
      <div onClick={handleNavbar} className='md:hidden z-10'>
        {!showNavbar? <MenuIcon className='w-[40px]'/>: <XIcon className='w-[40px]'/>}
      </div>
      {/* end */}
      {/* mobile menu */}
      <ul className={!showNavbar ? "hidden": "absolute top-0 left-0 bg-blue-400 w-full h-screen flex flex-col justify-center items-center"}>
        <li className='px-6 text-4xl'>Home</li>
        <li className='px-6 text-4xl'>About</li>
        <li className='px-6 text-4xl'>Work</li>
        <li className='px-6 text-4xl'>Skills</li>
        <li className='px-6 text-4xl'>Contact</li>
      </ul>
      {/* end */}
      {/* social icons */}
      <div className='fixed flex flex-col top-[35%] left-0 bg-green-800'>
        <ul>
          <a href="">Github<FaGithub/></a>
          <a href="">Twitter<FaTwitter/></a>
          <a href="">LinkedIn <FaLinkedin/></a>
          <a href="">Twitch<FaTwitch/></a> 
        </ul>
      </div>
      {/* end */}
    </div>
  )
}
