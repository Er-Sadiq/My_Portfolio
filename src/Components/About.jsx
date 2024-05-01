import React from 'react'
import TechStack from "./modules/TechStack";
import Experiance from './modules/Experiance';
import { GrContactInfo } from "react-icons/gr";

export default function About() {
    return (
        <div className="bg-[#0E1630] min-h-screen w-screen flex flex-col justify-center items-center py-10" name="about" >
            <div className='flex flex-row justify-center items-center  mx-5  '>
                <h2 className="SecHeading ">- Let's Talk About Who I am ? </h2>
                <span className='text-3xl animate-bounce ' >🪪</span>
            </div>
            <p className='MicroHeading'> - About Me - </p>
            <div className='bg-[#40465b] shadow-[#42485d] shadow-lg border-solid border-[#01d48c] border-t-[1px] border-b-[1px] my-10 '>

                <div className="flex flex-col md:flex-row justify-center items-center  my-10 w-full">

                    <div className="bg-gradient-to-br from-[#242a40] to-[#1a1e2a] w-10/12 h-80 rounded-md flex flex-col justify-center items-center overflow-hidden transform skew-x-[-12deg] shadow-lg shadow-slate-400 bd border-slate-700 ">
                        <div className="transform skew-x-[12deg] flex flex-col overflow-hidden">
                            <h2 className="text-4xl font-semibold text-[#01d48c] font-QS mr-auto mx-12 my-auto mb-4 justify-start  ">- Hey,</h2>
                            <p className="text-xl  text-gray-100 font-medium font-QS  mx-12 mb-10 my-auto justify-center items-center text-wrap overflow-hidden ">
                                My name is Sadiq Ahmed Killedar, and I have completed my Bachelor of Engineering in Electronics and Communication Engineering from BLDE College of Engineering and Technology. I am proficient in Java, C/C++, Python, Docker, and Linux, as well as the core technical aspects related to my field. Beyond academics, I have worked on multiple different projects and contributed to the field of technologies like IoT and VLSI as an intern at Seventh Sense Solutions Ltd.
                            </p>

                        </div>
                    </div>
                    
                </div>
                
               
            </div>
           
            <Experiance />
            <TechStack />
        </div>
    )
}
