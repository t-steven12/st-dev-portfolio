/* The following code is derived from the following YouTube tutorial by Clint Briley of the channel "Code Commerce": https://www.youtube.com/watch?v=2kg0z1qNrkw&t=664s */


import React from 'react'
import AnimalMatch from '../assets/projects/AnimalMatch.png'
import TwoDPuzzle from '../assets/projects/2d-puzzle-img.png'
import ChatRoom from '../assets/projects/chatroom-project.png'
import AnimeFansUnite from '../assets/projects/AnimeFansUnite.png'
import BoatsAndLoad from '../assets/projects/boats-and-loads-portfolio-project.JPG'
import ContinuousIntegration from '../assets/projects/CI-2.png'
import LiftMasterPhoto from '../assets/projects/LiftMasterPortfolioPhoto.jpg'

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff8000]'>Projects</p>
            </div>

            {/* Project item container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div style={{backgroundImage: `url(${LiftMasterPhoto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weightlifting Exercise Tracker Mobile App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/t-steven12/LiftMaster-Project">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code/Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TwoDPuzzle})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python 2-D Puzzle Solver
                        </span>
                        <div className='content-center pt-8 text-center'>
                            <a href="https://github.com/t-steven12/2D-Puzzle-Traversal">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code/Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ChatRoom})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python Sockets Chat Room
                        </span>
                        <div className='content-center pt-8 text-center'>
                            <a href="https://github.com/t-steven12/Python-Chat-Room">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code/Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${AnimalMatch})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Animal Adoption Web App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.youtube.com/watch?v=WUAvGRKC_6M">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${AnimeFansUnite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Animes Database CRUD Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/1yxqWsMwXWLVwMUfkWcOSJU5e60oJBpuB/view?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Summary</button>
                            </a>
                            <a href="https://github.com/t-steven12/AnimeFansUnite-public-repo">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${BoatsAndLoad})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Boats and Loads API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://boat-load-api-stieu.wl.r.appspot.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>API Website</button>
                            </a>
                            <a href="https://github.com/t-steven12/boats-and-loads-api">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://drive.google.com/file/d/10Nk4mXQq1iTY5ZrgQPo7Ej5-JlH2t8fl/view?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>API Spec</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ContinuousIntegration})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}
                    <div className='invisible text-center group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Continuous Integration Project Report
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/1fNBEllwbMDC-uFUdXQpIVu58wrug9EZZ/view?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Report</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work