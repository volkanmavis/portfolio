import React from 'react'
import Todo from '../assets/todo.png';
import Scramble from '../assets/scramble.png';
import Weather from '../assets/weather.png';
import Informapption from '../assets/informapption.png';
import Recipe from '../assets/recipe.png'


function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-[#cecece] bg-[#1B3540]'>
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 text-[#cecece] border-[#FF3131]'>Works</p>
                <p className='py-6'>Here, you can explore some of my recent projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Informapption})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-[#cecece] tracking-wider text-center'>
                            Trivia Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://informapption-1.onrender.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>See</button>
                            </a>
                            <a href="https://github.com/volkanmavis/InformApption" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>Github</button>
                            </a> 
                        </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Recipe})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-[#cecece] tracking-wider text-center'>
                            Recipe App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://recipe-app-1-8uxq.onrender.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>See</button>
                            </a>
                            <a href="https://github.com/volkanmavis/Recipe-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>Github</button>
                            </a> 
                        </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Todo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-[#cecece] tracking-wider text-center'>
                            Todo App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://todolist-fullstack-1.onrender.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>See</button>
                            </a>
                            <a href="https://github.com/volkanmavis/todolist-fullstack" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>Github</button>
                            </a> 
                        </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Scramble})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-[#cecece] tracking-wider text-center'>
                            Word-Scramble Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://word-scramble-game-vm.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>See</button>
                            </a>
                            <a href="https://github.com/volkanmavis/Word-Scramble-Game" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>Github</button>
                            </a> 
                        </div>
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Weather})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-[#cecece] tracking-wider text-center'>
                            Weather App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://web-app-vm.netlify.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>See</button>
                            </a>
                            <a href="https://github.com/volkanmavis/Weather-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[white] text-[#cecece] font-bold text-lg'>Github</button>
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