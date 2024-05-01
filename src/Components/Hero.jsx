import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

import myImage from './img/profilepic.jpg';

export default function Hero() {
    return (
        <div className="bg-[#0E1630] min-h-screen flex flex-col md:flex-row justify-center items-center" id='home'>
            {/* Content for mobile view */}
            <div className="w-full md:hidden flex flex-col justify-center items-center text-center mb-10">
               
                <img
                    src={myImage}
                    alt="My Image"
                    className="h-60 w-60 rounded-full p-1 transition-transform transform hover:scale-105 hover:opacity-9 "
                />
                <div className="flex flex-row justify-center items-center over-hidden gap-2 mt-8">
                    <SocialLink href="https://github.com/Er-Sadiq" target='_blank'>
                        <FaGithub />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/ersadiqahmedxcii " target='_blank'>
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://t.me/BloodHawk_053" >
                        <FaTelegram />
                    </SocialLink>
                </div>
            </div>

            {/* Content for desktop view */}
            <div className="flex w-full md:w-auto flex-col justify-center items-center md:items-start text-center md:text-left md:ml-10 mb-10 mr-24 md:mt-0 mx-auto">
                <p className="bg-transparent text-5xl text-[#01d48c] font-bold font-QS mb-auto">~ Hi There !</p>
                <h1 className="bg-transparent text-3xl text-gray-50 font-extrabold font-QS my-2 tracking-wide leading-tight ">
                    My Name is <span className="text-[#01d48c] text-4xl tracking-wide leading-tight">Sadiq Ahmed Killedar</span>
                </h1>
                <p className="text-2xl font-bold text-white font-QS mb-6">
                    <Typewriter
                        options={{
                            strings: [
                                "I'm A Multifaceted Tech Enthusiast.",
                                "An Electronics and Communication Engineer.",
                                "A Philomath.",
                                "A FullStack WebDev.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <div className="flex flex-row items-center">
                    <div className="bg-white h-12 w-1 mr-3"></div>
                    <div className="flex flex-col">
                        <p className="text-white font-QS text-lg font-bold">Turning ideas into impactful solutions</p>
                        <p className="text-white font-QS text-lg font-bold">with Java, C++, Python & Linux. ✨</p>
                    </div>
                </div>
                <div className=' flex gap-4 my-2'>
                <button className="font-QS text-[#01d48c] text-lg font-normal border-solid border-2 rounded-md  border-[#02aab0] bg-gradient-to-br from-[#02aab0] to-[#00cdac] bg-clip-text text-transparent transition-all duration-600 inline-block relative px-3 py-1 my-5">
                    Contact Me
                </button>

                <a className="font-QS text-[#01d48c] text-lg font-normal border-solid border-2 rounded-md border-[#02aab0] bg-gradient-to-br from-[#02aab0] to-[#00cdac] bg-clip-text text-transparent transition-all duration-600 inline-block relative px-3 py-1 my-5" href='https://drive.google.com/file/d/1yt4muieh_ST2h5-KA2x64EHynm_ssUSZ/view?usp=drive_linkhttps://drive.google.com/drive/folders/1BOAyJsre3P3JDsdyZoMRxUYgblzAslfd?usp=sharing' target='_blank'>
                    View Resume
                </a>
                
                </div>
            </div>

            {/* Image and social links for desktop view */}
            <div className="hidden md:flex w-full md:w-auto flex-col justify-center items-center md:items-end mx-auto ml-40 mb-16 md:mt-0 md:mr-10">
                <img
                    src={myImage}
                    alt="My Image"
                    className="h-96 w-96 rounded-full md:order-2  transition-transform transform hover:scale-105 hover:opacity-90 p-1 "
                />
                <div className="flex flex-row justify-center items-center over-hidden gap-2 md:order-2 mt-6 mx-auto">
                    <SocialLink href="https://github.com/Er-Sadiq" target='_blank' > 
                        <FaGithub />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/ersadiqahmedxcii" target='_blank'>
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://t.me/BloodHawk_053" target='_blank'>
                        <FaTelegram />
                    </SocialLink>
                </div>
            </div>
        </div>
    );
}

function SocialLink({ href, children }) {
    return (
        <a
            className="text-[#01d48c] text-4xl rounded-full w-12 h-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
