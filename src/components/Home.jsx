/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF8000] w-[0px] overflow-hidden whitespace-nowrap reveal1'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] w-0 overflow-hidden whitespace-nowrap reveal2'>Steven Tieu</h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] pb-2 w-0 overflow-hidden whitespace-nowrap reveal3'>I am a Software Developer.</h2>
        <div>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF8000] hover:border-[#FF8000]'>
              View Projects
              <BsChevronRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home