"use client"

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-Pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {


    return (
        <div className='py-10' id='recent_projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-[70px]'>

                {projects.map(({ title, id, des, img, iconLists, link } , index) => {
                    return <>
                        <div key={index} className='lg:min-h-[32.5rem]  h-[25rem]  flex items-center justify-center  sm:w-[45vw] w-[80vw] '>

                            <PinContainer title={title} href={link}>
                                <div className='  border relative flex items-center justify-center sm:w-[38vw] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] '>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className='z-10 absolute bottom-0 ' />
                                </div>

                                <h1 className=' my-2 font-bold md:text-xl lg:text-2xl text-base line-clamp-1'>{title}</h1>
                                <p className='lg:font-normal font-extralight text-sm line-clamp-2'>{des}</p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {iconLists.map((icon, index) => {
                                            return <div key={index} className=' border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}  >
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        })}
                                    </div>

                                    <a href={link}>
                                        <div className='flex justify-center items-center p-2 '>
                                            <p className='flex lg:text-[18px] md:text-xs text-sm text-purple '>Check live site</p>
                                            <FaLocationArrow className='ms-3' color='#CBACF9' />
                                        </div>
                                    </a>

                                </div>



                            </PinContainer>

                        </div>
                    </>
                })}

            </div>

        </div>
    )
}

export default RecentProjects
