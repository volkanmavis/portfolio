import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#1B3540] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/raeqrwxa" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#cecece]  border-[#FF3131]'>Contact</p>
                <p className='py-6 text-[#cecece] '>Hit that submit button like it's the last slice of pizza,<br />
                 or if you're feeling old school, feel free to dispatch an email - <a href="mailto:volkanmav@gmail.com">volkanmav@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='E-mail' name='e-mail'/>
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Your Message' name="message" id="" rows="10"></textarea>
            <button className='text-[#cecece] border-2 hover:bg-[#FF3131] hover:border-[#FF3131] px-4 py-3 my-8 mx-auto flex items-center'>Let's Contact</button>
        </form>
    </div>
  )
}

export default Contact