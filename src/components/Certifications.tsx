import { achievements } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Certifications = () => {
  return (
    <div className='py-20' id='testimonials'>

    <h1 className='heading'>
        My
        <span className='text-purple'> Achievements/Certifications</span>
    </h1>

    <div className=' px-4 w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>

      {achievements.map((card)=>{
        return <>
        <Button
        duration={Math.floor(Math.random() * 10000 + 10000)}
        key={card.id}
        borderRadius='1.75rem'
        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
        >
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />

            <div className='lg:ms-5'>
              <h1 className='text-start text-slate-50 md:text-2xl font-bold'> {card.title} </h1>
              <p className='text-start mt-3 font-semibold text-shite-100'> {card.desc} </p>
            </div>

          </div>
        </Button>
        </>
      })}

    </div>
    </div>
  )
}

export default Certifications
