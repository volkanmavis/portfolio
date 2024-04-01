import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Js from '../assets/javascript.png';
import Reactjs from '../assets/react.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import Tail from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#1B3540] text-[#cecece]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl text-[#cecece] font-bold inline border-b-4 border-[#FF3131]'>Skills</p>
                <p className='py-4'>These are the technologies I have mostly worked with:</p>
            </div>     
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Js} alt="Js" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactjs} alt="React" />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="Git" />
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tail} alt="Tail" />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Skills