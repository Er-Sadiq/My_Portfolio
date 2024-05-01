import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaMailBulk } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { SiHackthebox } from "react-icons/si";

export default function Footer() {
    return (
        <>



            <div className='bg-[#0E1630] min-h-[80vh] w-screen flex flex-col lg:flex-row justify-center items-center p-10  ' name='contact'>
               
                <div className='lg:w-1/2 flex flex-col lg:flex-row'>
                    <div className='text-gray-200 text-xl flex flex-col gap-6 mx-auto my-auto    '>
                        <p className='text-white text-4xl animate-bounce '>Get in touch 📲</p>
                        <p className='flex flex-row gap-3 justify-start items-center '><IoLocationOutline className='text-[#01d48c]' />Planet Earth 🌍</p>
                        <p className='flex flex-row gap-3 justify-start items-center'><FaMailBulk className='text-[#01d48c]' /> sadiqkhan.2503@gmail.com 📬</p>
                        <p className='flex flex-row gap-3 justify-start items-center'><SiHackthebox className='text-[#01d48c]' />@ErSadiq25 🤫</p>
                    </div>
                    <form className="flex flex-col space-y-4 w-full lg:w-80 mx-auto my-auto lg:ml-6 mt-14 mb-10  " action="#">
                        <h5 className="text-[#01d48c] text-3xl my-2"> - Contact me</h5>
                        <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white bd border-white" type="text" name="name" placeholder="Your Full Name" required="" autoComplete="off" />
                        <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white bd border-white" type="email" name="email" placeholder="Your Email" required="" autoComplete="off" />
                        <textarea className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white bd border-white" name="message" placeholder="Your Message" required="" rows="4" autoComplete="off"></textarea>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                    </form>
                </div>
            </div>
            <footer className="relative bg-[#0d142c] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold text-[#01d48c]">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-50">
                                Find me on any of these platforms; I usually respond within 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex gap-3">
                                <a href="#" className="text-gray-200 text-3xl"><FaGithub /></a>
                                <a href="#" className="text-gray-200 text-3xl"><FaLinkedin /></a>
                                <a href="#" className="text-gray-200 text-3xl"><FaTelegram /></a>
                                <a href="#" className="text-gray-200 text-3xl"><FaTwitterSquare /></a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.creative-tim.com/presentation?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
                                        </li>
                                        <li>
                                            <a href="https://blog.creative-tim.com?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://www.github.com/creativetimofficial?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Github</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://creative-tim.com/terms?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="https://creative-tim.com/privacy?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="https://creative-tim.com/contact-us?ref=njs-profile" className="text-gray-50 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-400 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span>
                                <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Developed by <span className="text-[#01d48c] hover:text-blue-800">Sadiq Ahmed Killedar</span></a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
