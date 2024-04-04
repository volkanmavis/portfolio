import React, { useState } from 'react';
import '../navbar.css';
import Logo from '../assets/VOLKAN.png';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import {Link} from "react-scroll";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div id='container' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1B3540]'>
            <div>
                <img src={Logo} alt="logo-image" />
            </div>

            <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li>
            <Link to="work" smooth={true} duration={500}>
                Works
            </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FiMenu /> : <IoCloseSharp />}
            </div>

            <ul className={`md:hidden ${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#1B3540] flex flex-col justify-center items-center`}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
                Works
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[170px] h-[70px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0967c1]'>
                        <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/volkan-maviş-aa757a2a7' target='_blank'>
                         Linkedin <FaLinkedin size={(40)}/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[170px] h-[70px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full text-white' href='https://github.com/volkanmavis' target='_blank'>
                         Github <FaGithub size={(40)}/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[170px] h-[70px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#638351]'>
                        <a className='flex justify-between items-center w-full text-white' href="mailto:volkanmav@gmail.com" target='_blank'>
                         E-Mail <HiOutlineMail size={(40)}/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[170px] h-[70px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a1a1a4]'>
                        <a className='flex justify-between items-center w-full text-white' href='https://drive.google.com/file/d/183jpNL8aIgtVVrygTjl3OSkJmdf6eUfQ/view?usp=sharing' target='_blank'>
                         Resume <FiFileText size={(40)}/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;
