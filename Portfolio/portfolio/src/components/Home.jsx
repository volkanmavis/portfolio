import React from 'react';
import { LiaArrowUpSolid } from "react-icons/lia";

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#1B3540]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF3131]'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Volkan Maviş</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm all about crafting awesome applications with the end-user in mind,
          embracing challenges that push me beyond my comfort zone and into new languages.
          Let's dive into projects that demand exploration!</p>
        <div>
          <a href="https://github.com/volkanmavis" target="_blank" rel="noopener noreferrer">
            <button className='text-[#cecece] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF3131] hover:border-[#FF3131]'>
              View My Work
              <span className='group-hover:rotate-90 duration-200'>
                <LiaArrowUpSolid className='ml-3' />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
