import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#1B3540] text-[#cecece]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FF3131]'>About</p>
                </div>
                <div>

                </div>
                
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold'>
                    <p>Welcome! I'm passionate about blending technology and creativity to make a difference.</p>
                </div>
                <div>
                    <p>Passionate about crafting user-centric applications, I thrive on challenges that stretch my skills and knowledge. Embracing projects requiring exploration of new languages and techniques fuels my growth as a full-stack web developer.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About