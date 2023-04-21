/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/3805b5b3-afbe-49cf-a6d9-793c036fdf70' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff8000] text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300'>Send me a message below or shoot me an email: tieu.steven11@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ff8000] hover:border-[#ff8000] big-small px-4 py-3 my-8 mx-auto flex items-center'>Message Me</button>
        </form>
    </div>
  )
}

export default Contact