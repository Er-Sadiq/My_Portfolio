import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLink } from "react-icons/fa6";

// Import your images
import P1 from './img/P1.png';
import P2 from './img/P2.png';
import P3 from './img/P3.png';
import P4 from './img/P4.png';
import P5 from './img/P5.jpg';

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      name: `Intrusion Detection System For IOT`,
      image: P1,
      review: `Developed a detection system for unauthorized access in a wireless network utilizing NS2, C, Linux, and Tool command language...`
    },
    {
      name: `Fullstack AI-Powered Chatbot`,
      image: P2,
      review: `Explore my Full Stack AI-enabled chatbot, designed to seamlessly respond to user queries and recognize emotions...`
    },
    {
      name: `Data Visualization Dashboard`,
      image: P3,
      review: `This project is a comprehensive data visualization dashboard built using Python, Flask, MongoDB, React.js, Chart.js, and Tailwind CSS. It offers powerful tools for visualizing data and gaining insights into various metrics...`
    },
    {
      name: `multi-threaded Proxy server`,
      image: P4,
      review: `This project implements a multi-threaded Proxy server in Java using socket programming...`
    },
    {
      name: `Real-time Hand Gesture Recognition System`,
      image: P5,
      review: `This project is aimed at developing a hand gesture recognition system that can be utilized over a web browser using WebRTC technology...`
    }
  ];

  return (
    <div className='w-screen h-5/6 PrimaryBg flex flex-col justify-center items-center text-white overflow-hidden p-2' id='projects'>
      <div className='w-10/12 h-[1px] bg-[#01d48c]'></div>
      <div className='flex flex-row justify-center items-center gap-1 mt-20 '>
            <h2 className="SecHeading ">- Things I've built so far ! </h2>
            <span className='text-3xl mb-4 animate-bounce' >🧑‍💻</span>
            </div>
     <p className='MicroHeading mb-16 '> - My Projects - </p>
      <div className='w-3/4 m-auto'>
        <Slider {...settings} >
          {data.map((d) => (
            <div key={d.name} className="bg-[#2c3046] w-80 h-[480px] my-10 mx-10 overflow-hidden  rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  border-slate-500 bd ">
            <div className="flex flex-col items-center justify-center gap-3 p-4 ">
              <div className="w-full h-48  rounded-tl-3xl rounded-tr-3xl overflow-hidden bd border-slate-400 shadow-md shadow-gray-500">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover  " />
              </div>
              <p className="text-lg font-semibold font-QS bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent ">{d.name}</p>
              <p className=" MicroHeading stext-wrap">{d.review}</p>

              <button className="text-white bg-[#6a58f0] text-sm px-3 my-1 py-1 rounded-md flex justify-center items-center gap-1 transition duration-300 ease-in-out transform hover:scale-105">
                <FaLink />
                <span>Read more</span>
              </button>

            </div>
          </div>
          
          
          ))}
        </Slider>
      </div>
    </div>
  );
}
