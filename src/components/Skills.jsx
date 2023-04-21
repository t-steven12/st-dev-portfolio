/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React from 'react'
import HTML from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Python from '../assets/python-logo-trans.png'
import Flask from '../assets/Flask logo.png'
import Node from '../assets/node.png'
import ReactIcon from '../assets/react.png'


const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name='skills'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF8000]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt='Javascript icon' />
                    <p className='my-4'>JavaScript</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt='React icon' />
                    <p className='my-4'>React</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Node icon' />
                    <p className='my-4'>Node.js</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python icon' />
                    <p className='my-4'>Python</p> 
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Flask} alt='Flask icon' />
                    <p className='my-4'>Flask</p> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills