/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FF8000]'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Nice to meet you! Thank you for taking a look at my portfolio.</p>
                </div>
                <div>
                    <p className='text-xl'>I am a computer science graduate of Oregon State University and a psychology graduate of San Diego State University that specializes in building applications in Python and JavaScript. Using both my knowledge in computer science and psychology, I strive to create intuitive and user-friendly software. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About