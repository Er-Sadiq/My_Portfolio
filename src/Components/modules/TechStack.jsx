import React from 'react'
import { FaJava, FaCPlusPlus, FaPython, FaRust, FaReact, FaDatabase, FaCodeBranch, FaDocker, FaAws, FaCode, FaServer, FaChartLine, FaFlask, FaLinux } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";


export default function TechStack() {
  return (
   
    <div className=" PrimaryBg h-5/6 w-screen p-6 flex flex-col justify-center items-center overflow-hidden  mt-10">
      <div className='w-screen flex flex-col justify-center items-center my-auto mx-10 mb-20 '>
      <div className='flex flex-row justify-center items-center  '>
        <p className="SecHeading mx-5">- The Skills, I am proficient  at  </p>
        <span className='text-3xl  animate-bounce' >😎</span>
        </div>
        <p className='MicroHeading'> - Tech Stack - </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center  ">
        <TechIcon icon={<FaJava />} text="Java" />
        <TechIcon icon={<FaCode />} text="C++ / C" />
        <TechIcon icon={<FaPython />} text="Python" />
        <TechIcon icon={<FaCode />} text="Spring Boot" />
        <TechIcon icon={<FaReact />} text="React.js" />
        <TechIcon icon={<FaChartLine />} text="Chart.js" />
        <TechIcon icon={<FaFlask />} text="Flask" />
        <TechIcon icon={<FaDatabase />} text="MySQL" />
        <TechIcon icon={<SiMongodb />} text="MongoDB" />
        <TechIcon icon={<FaCodeBranch />} text="Git & GitHub" />
        <TechIcon icon={<FaDocker />} text="Docker" />
        <TechIcon icon={<FaAws />} text="AWS" />
        <TechIcon icon={<FaServer />} text="Agile" />
        <TechIcon icon={<FaCode />} text="OpenCV" />
        <TechIcon icon={<FaCode />} text="TCL" />
        <TechIcon icon={<FaLinux />} text="Linux" />
      </div>
      <div className='flex flex-row justify-center items-center gap-1  my-10 mt-40 mx-5'>
      <p className="SecHeading  ">- Currently Learning -</p>
      
      <span className='text-3xl animate-bounce mr-4' >📑</span>
      </div>
      <div className='flex flex-row items-center justify-center bg-[#2c3046] rounded-xl px-4 py-2 text-2xl font-QS font-bold ' >
      <TechIcon icon={<FaRust />} text="Rust" />
      </div>

    </div>
  );
}

function TechIcon({ icon, text, textColor }) {
  return (
    <div className={`flex flex-row items-center justify-center bg-[#2c3046] rounded-xl px-6 py-5 text-3xl font-QS font-bold   ${textColor = "text-[#01d48c]"}`}>
      {icon}
      <span className="ml-1 text-white">{text}</span>

    </div>
  );
}
