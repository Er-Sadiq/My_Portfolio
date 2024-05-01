import React from 'react';
import { TbHandRock } from "react-icons/tb";
import cld from './img/cloud.jpg';


export default function Services() {
    return (
        <div className=' flex flex-col p-10 PrimaryBg justify-center items-center' id='services'>
            <div className='flex flex-row justify-center items-center gap-1 mx-10 '>
                <h2 className="SecHeading text-wrap">- Some awesome Services I provide</h2>
                <span className='text-3xl animate-bounce'>🛠️</span>
            </div>

            <p className='MicroHeading mb-10 my-auto'>- Services -</p>

            <div class=" p-2 mx-10 my-auto">
                <div class="flex flex-col w-full mb-10 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Software Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600"> Proficient in C++, Java, Python, and Rust, I deliver scalable and efficient software solutions to address complex challenges across various domains.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600"> Leveraging Java, Spring Boot, React.js, Flask, and Chart.js to craft dynamic and responsive web applications that meet your business needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-5 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Computer Vision Solutions</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Utilizing OpenCV to develop robust computer vision solutions, ranging from object detection to image processing, tailored to enhance your systems and processes..</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Rest Api Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Building robust and secure APIs using Spring framework in Java. Enabling seamless communication between different software systems and facilitating integration with third-party services.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Specializing in bot and script development using Python and Bash, automating tasks and workflows to streamline operations and improve productivity.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div class="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-28 gap-2 w-full md:w-9/12 max-w-screen-lg mx-auto border border-slate-500 rounded-xl overflow-hidden bg-gradient-to-br from-[#2c3046] to-[#0E1630] text-white ">
    <p class="text-2xl md:text-3xl font-bold font-serif mx-4 md:mx-8  text-center md:text-left text-[#DCFE50] mb-2 md:mb-4">Start a project?</p>
    <p class="text-base md:text-lg font-mono mx-4 md:mx-12 my-2 md:my-4 text-center md:text-left">Interested in working together? We should queue up a time to chat. I’ll buy the coffee..!</p>
    <a href="https://t.me/BloodHawk_053" target="_blank" class="flex items-center justify-center mx-10 md:mx-6 w-full md:w-auto px-1 py-1 md:px-4 md:py-2 text-lg font-semibold bg-clip-text text-transparent border border-[#DCFE50] rounded-md transition-all duration-600 text-white font-QS my-5">
        <TbHandRock class="text-3xl mx-1" /> Let's do this
    </a>
</div>


        </div>
    );
}
