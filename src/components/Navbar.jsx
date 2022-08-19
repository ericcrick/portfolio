import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../assets/logo.png'
import { links, socialIcons} from '../icons';


export const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false);
  const handleNavbar = () => setShowNavbar(!showNavbar);

  return (
    <div className='w-full h-[80px] fixed px-4 flex items-center justify-between text-gray-100'>
      {/* logo */}
      <div>
        <img src={logo} alt="logo" className='w-[50px]' />
      </div>
      {/* navbar items */}
      {
        links.map((link)=>(
          <ul key={link.id} className='hidden md:flex'>
            <li>{link.name}</li>
          </ul>
        ))
      }
      {/* hamburger menu icon */}
      <div onClick={handleNavbar} className='md:hidden z-10'>
        {!showNavbar? <MenuIcon className='w-[40px]'/>: <XIcon className='w-[40px]'/>}
      </div>
      {/* mobile menu */}
        { links.map( (link)=> (
          <ul key={link.id} className={!showNavbar ? "hidden": "absolute top-0 left-0 w-full h-screen flex flex-col justify-center"}>
            <li className='px-6 text-3xl'>{link.name}</li>
          </ul>
        ))}

      {/* social icons */}
      <div className='hidden fixed md:flex flex-col top-[35%] left-0'>
      {
        socialIcons.map((data)=>(
          <ul key={data.id}>
            <li className={`w-[160px] h-[50px] flex items-center justify-between ml-[-100px] hover:ml-[10px] duration-300 ${data.bgColor}`}>
              <a className='w-full items-center flex justify-between' href={data.url}>
                {data.name} < data.icon  width={30}/>
              </a>
            </li>
        </ul>
        ))
      }
      </div>
    </div>
  )
}
