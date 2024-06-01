import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = ({setFool}) => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='flex flex-col items-center' >
        <h1 className='heading lg:max-w-[45vw]' >Ready To take <span className='text-purple'> your </span> digital presence to the next level? </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center '>Reach out to me today and let's discuss how I can help you achieve your goals</p>
        <a onClick={()=> setFool(true)} >
          <MagicButton title={"Lets get in touch"} icon={<FaLocationArrow/>} />
        </a>
      </div>

      <div className='w-[80%] mx-auto flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Harsh 💙</p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile , index)=>{
            return <>
            <a key={index} className='mt-2' href={profile.link}>
            <div key={profile.id} className='w-10 h-10 flex cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg '>
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
            </a>
            </>
          })}
        </div>

      </div>

    </footer>
  )
}

export default Footer
