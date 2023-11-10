/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */

import React, {useState, useRef} from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Steven_Tieu_mclaren_logo_1_trans.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const firstBar = useRef(null)
    const secondBar = useRef(null)
    const thirdBar = useRef(null)

    const [nav, setNav] = useState(false)

    // handleClick based on code seen here: https://codepen.io/MikuLukaL0v3r/details/wvYJBXr
    /* 
    Copyright (c) 2023 by Steve (https://codepen.io/MikuLukaL0v3r/pen/wvYJBXr)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    const handleClick = () => {
        if (!nav === true) {
            firstBar.current.style.animation = "firstBarToX 0.1s linear forwards";
            secondBar.current.style.animation = "secondBarToX 0.1s linear forwards";
            thirdBar.current.style.animation = "thirdBarToX 0.1s linear forwards";
        } else {
            firstBar.current.style.animation = "firstXToBar 0.1s linear forwards";
            secondBar.current.style.animation = "secondXToBar 0.1s linear forwards";
            thirdBar.current.style.animation = "thirdXToBar 0.1s linear forwards";
        }
        setNav(!nav)
    }

    // Code for changing background of navbar derived from code shown in the following YouTube tutorial by Brian Design: https://www.youtube.com/watch?v=JMsNslI8KoY 
    const [navBgBlack, setNavBg] = useState(false)
    const changeNavBg = () => {
        if (window.scrollY >= 150) {
            setNavBg(true);
        }
        else {
            setNavBg(false);
        }
    }

    window.addEventListener("scroll", changeNavBg)

  return (
    <div className={navBgBlack ? 'fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#0a192f] border-b-2 border-b-[#ff8000] text-gray-300 border-trans' : 'fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#0a192f] border-b-2 border-b-[#0a192f] text-gray-300 border-trans'}>
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

        {/* Hamburger Menu */ /* Based on code seen here: https://codepen.io/MikuLukaL0v3r/details/wvYJBXr 
    
        Copyright (c) 2023 by Steve (https://codepen.io/MikuLukaL0v3r/pen/wvYJBXr)

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        */}
        <div onClick={handleClick} className='md:hidden absolute top-[45px] right-[30px] z-10 hover:cursor-pointer'>
            <div className='bars' ref={firstBar}></div>
            <div className='bars' ref={secondBar}></div>
            <div className='bars' ref={thirdBar}></div>
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
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/10pCRcxPyW5TBieR991psCIZiXk9I0nwa/view?usp=sharing'>Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar