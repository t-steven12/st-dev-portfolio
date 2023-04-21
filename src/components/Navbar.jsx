/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Steven_Tieu_mclaren_logo_1_trans.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='absolute top-[-20px] left-[-20px]'>
            <img src={Logo} alt='ST Logo' style={{ width: '200px' }} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex text-[20px] absolute p-6 top-[35px] right-0 pulse-text'>
            <li>
                <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
            </li>
            <li>
                <Link to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
                <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden absolute p-7 top-[35px] right-0 z-10 hover:cursor-pointer'>
            {!nav ? <FaBars size={30} /> : <FaTimes size={30}/>}
        </div>

        {/* Mobile menu */}
        <div className={!nav ? 'invisible' : 'visible'}>
            <ul className={!nav ? 'invisible' : 'visible absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center pulse-text'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/steven-tieu-85925826a/'>LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/t-steven12'>GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto: tieu.steven11@gmail.com'>Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF8000]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1S6ILTJ6VWzoUMZbHqc0e8N2ENt2iq1sK/view?usp=sharing'>Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar