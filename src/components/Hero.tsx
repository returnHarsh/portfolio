"use client"
import React, { useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { IoIosSend } from "react-icons/io";
import { BackgroundGradientAnimation } from "./ui/Gradient"


const Hero = () => {

  const [dark, setDark] = useState<boolean>(true);

  const toggleMode = () =>{
    setDark(!dark);
  }

  return (
    <>
      <BackgroundGradientAnimation>
        <div className='pb-20 pt-36 border '>

          {/* act as a wrapper for the components coming from acertinity */}
          <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white' />
            <Spotlight className='top-10 left-full h-[80vh]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw' fill='blue' />
          </div>

          {/* for the background grid */}
          {dark && (
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute left-0 top-0">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
          )}

          <div className='flex justify-center'>
            <div className='max-w-[80vw] my-20 z-10 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web</h2>

              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Transforming concepts into Seamless Experiences'
              />

              <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Hi , This is Harsh , A full Mern Stack developer
              </p>

              <a>
                <MagicButton title={"See my work"} icon={<IoIosSend size={"20px"} />} />
              </a>

              <div className='mt-2 flex justify-center items-center'>
              <button onClick={toggleMode} className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
                <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative font-bold text-sm">
                  {dark ? 'Light' : 'Dark'} mode
                </span>
              </button>
              </div>


            </div>
          </div>


        </div>
      </BackgroundGradientAnimation>
    </>

  )
}

export default Hero
