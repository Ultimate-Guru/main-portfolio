// MIT License

// Copyright (c) 2024 Oluwatosin

import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Navabar from './Navbar'
import Logo from '../assets/images/My_Logo-2 (2).png'

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

                <h1>
                    <a href="/" className="logo font-bold text-2xl md:text-3xl text-shadow">
                       <img 
                        src={Logo} 
                        alt="Logo"
                        className="md:w-32 lg:w-36 w-24"
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? <MdClose /> : <MdMenu />}
                        </span>
                    </button>

                    <Navabar navOpen={navOpen}/>
                </div>

                <a href="#contact"
                    className='btn btn-secondary max-md:hidden md:justify-self-end text-shadow'>
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header