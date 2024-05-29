"use client"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '../data/index' 

const Grid = () => {
  return (
    <div className='mt-4'>
        <section>
            <BentoGrid>
               {
               gridItems.map(({id , title , description , className , img , imgClassName , titleClassName , spareImg})=>{
                    return(
                        <BentoGridItem
                        id = {id}
                        key = {id}
                        title = {title}
                        description = {description}
                        className = {className}
                        img = {img}
                        imgClassName = {imgClassName}
                        titleClassName = {titleClassName}
                        spareImg = {spareImg}
                        />
                    )
                })
               }
            </BentoGrid>
        </section>
    </div>
  )
}

export default Grid
