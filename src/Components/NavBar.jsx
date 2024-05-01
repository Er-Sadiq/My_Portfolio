import React, { useState } from 'react';
import { GiWolfHowl } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';


export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      
        <nav className="bg-[#181c33]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">{isMobileMenuOpen ? 'Close' : 'Open'} main menu</span>

                            <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className={`hidden h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className="text-white text-2xl flex flex-row  "><span className="text-[#01d48c] text-3xl">𝕾</span>𝖆𝖉𝖎𝖖  <span className="text-[#01d48c] text-3xl ml-4">𝕬</span>𝖍𝖒𝖊𝖉  <GiWolfHowl className='text-4xl text-white mx-4 ' /></h1>
                        </div>
                        <div className="hidden sm:block ml-auto ">
                            <div className="flex space-x-4 ">
                            <NavLink to="home">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="services">Services</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                </div>
            </div>
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
        </nav>
    );
}

function NavLink({ to, children }) {
    return (
        <ScrollLink
            to={to}
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="font-poppins text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
            {children}
        </ScrollLink>
    );
}

function MobileMenu({ isMobileMenuOpen }) {
    return (
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 flex justify-center items-center">
            <NavLink to="home">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="services">Services</NavLink>
            </div>
        </div>
    );
}
