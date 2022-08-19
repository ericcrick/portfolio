import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../assets/logo.png'
import { links, socialIcons} from '../icons';


export const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false);
  const handleNavbar = () => setShowNavbar(!showNavbar);

  return (
    <div className='w-full h-[80px] fixed px-4 flex items-center justify-between text-gray-100'>
      <div>
        <img src={logo} alt="logo" className='w-[50px]' />
      </div>
      <ul className='flex'>
        {
          links.map((link) => (
            <li className='curson-pointer px-4 hover: scale-105 duration-200 font-medium md:text-2xl' key={link.id}>{link.name}</li>
          ))
        }
      </ul>

      <div onClick={handleNavbar} className='md:hidden z-10'>
        {!showNavbar? <MenuIcon className='w-[40px]'/>: <XIcon className='w-[40px]'/>}
      </div>
      <ul className={!showNavbar ? "hidden": "absolute top-0 left-0 w-full h-screen flex flex-col justify-center"}>
        {
          links.map((link)=> (
            <li key={link.id} className='px-4 text-2xl'>{link.name}</li>
          ))
        }
      </ul>

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
