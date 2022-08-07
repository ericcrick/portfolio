import React from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

export const HomePage = () => {
  return (
    <div name="home" className='w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center'>
        <p className='text-[#0077b5] sm:text-2xl'>Hi my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Eric Nana-Osei</h1>
        <h2 className='text-4xl sm:7xl font-bold text-gray-700'>I am a FullStack developer</h2>
        <p className='text-gray-700 max-w-[700px] py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloremque vitae ipsam, molestias laudantium eligendi in cumque unde obcaecati officiis?</p>
        <div>
          <button className='text-white px-6 py-3 my-2 flex items-center hover:bg-black'> View Work <ArrowCircleRightIcon className='ml-2'/></button>
        </div>
      </div>
    </div>
  )
}
