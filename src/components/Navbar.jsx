import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaGithub, FaTwitter, FaTwitch,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

import logo from '../assets/logo.png'

const links = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About"
  },
  {
    id: 3,
    name: "Work"
  },
  {
    id: 4,
    name: "Skills"
  },
  {
    id: 5,
    name: "Contact"
  }
  
]
export const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false);
  const handleNavbar = () => setShowNavbar(!showNavbar);
  return (
    <div className='w-full h-[80px] fixed px-4 flex items-center justify-between text-gray-100'>
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
      <ul className={!showNavbar ? "hidden": "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"}>
        <li className='px-6 text-3xl'>Home</li>
        <li className='px-6 text-3xl'>About</li>
        <li className='px-6 text-3xl'>Work</li>
        <li className='px-6 text-3xl'>Skills</li>
        <li className='px-6 text-3xl'>Contact</li>
      </ul>
      {/* end */}
      {/* social icons */}
      <div className='hidden fixed md:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#333]'>
            <a className='w-full items-center flex justify-between' href="/">
              Github <FaGithub width={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#1DA1F2]'>
            <a className='w-full items-center flex justify-between' href="/">
              Twitter <FaTwitter width={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#0077b5]'>
            <a className='w-full items-center flex justify-between' href="/">
              LinkedIn <FaLinkedin width={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#6441a5]'>
            <a className='w-full items-center flex justify-between' href="/">
              Twitch <FaTwitch width={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#17E3E1]'>
            <a className='w-full items-center flex justify-between' href="/">
              Email <HiOutlineMail width={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#5b6473]'>
            <a className='w-full items-center flex justify-between' href="/">
              Resume <BsFillPersonLinesFill width={30}/>
            </a>
          </li>
        </ul>
      </div>
      {/* end */}
    </div>
  )
}
