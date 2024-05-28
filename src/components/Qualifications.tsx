import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const Tenth = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl'> <span className='text-purple'> Galgotias University </span>  </h1>
            <p className='text-sm'> <i> Btech (Computer Science) </i> </p>
            <p className='text-sm'> <i className='font-light'> 8.5 CGPA </i> </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl'> <span className='text-purple'> Heera Public School </span>  </h1>
            <p className='text-sm'> <i>  12th (PCM) </i> </p>
            <p className='text-sm'> <i className='font-light'>  86% </i> </p>
        </div>


        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl'> <span className='text-purple'> Heera Public School </span>  </h1>
            <p className='text-sm'> <i>  10th </i> </p>
            <p className='text-sm'> <i className='font-light'>  78.5% </i> </p>
        </div>


    



    </div>
  )
}

const TechStack = ()=>{
    return(
        <div className='flex flex-wrap gap-10 justify-center items-center'>

            <div className='flex flex-col w-full'>
            <h1 className='text-purple text-xl lg:text-2xl  text-left'>Programming Languages </h1>
            <div className='flex gap-4 font-light mt-4 text-sm '>
                <span className='flex flex-col justify-center items-center' > <SiCplusplus size={35}/> C++</span>
                <span className='flex flex-col justify-center items-center' > <IoLogoJavascript size={35} /> Javascript</span>
                <span className='flex flex-col justify-center items-center' > <SiTypescript size={35} /> Typescript</span>
                <span className='flex flex-col justify-center items-center' > <FaHtml5 size={35} /> HTML</span>
                <span className='flex flex-col justify-center items-center' > <SiMongodb size={35} /> Mongoose</span>
            </div>
            </div>

            <div className='flex flex-col w-full'>
            <h1 className='text-purple text-xl lg:text-2xl  text-left'>Framework </h1>
            <div className='flex gap-2 flex-wrap  font-light text-sm '>
               <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <RiReactjsFill size={35} />  React Js</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <SiNextdotjs size={35} /> Next Js</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <SiExpress size={35} /> Express Js</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <FaNodeJs size={35}/> Node Js</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <SiMongodb size={35} /> MongoDB</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <SiChakraui size={35} /> Chakra Ui</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <FaCss3Alt size={35}/> CSS</span>
                <span className=' p-2 rounded-md flex flex-col justify-center items-center'> <RiTailwindCssFill size={35} /> Tailwind CSS</span>
            </div>
            </div>


           

        </div>
    );
}

const Achievements = ()=>{
    return (
        <div className='flex flex-col gap-10 justify-center items-center'>
            <div>
                <h1> <span className='text-purple'>Edu Versity</span> MERN Stack Course Certificate </h1>
            </div>

            <div className='flex flex-col w-full'>
            <h1 className='text-purple text-xl lg:text-2xl'>Coding Skills </h1>
            <div className='flex flex-wrap gap-2  text-sm'>
              <span>Leetcode : <i className='font-extralight'>Solved over 250+ questions</i> </span>
              <span>Leetcode Rank : <i className='font-extralight'>1431</i> </span>
              <span>Coding Ninjs : <i className='font-extralight'>10000+ points on Coding Ninja</i> </span>
            </div>
            </div>

        </div>
    );
}


export {Tenth , TechStack , Achievements}
