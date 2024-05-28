'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./Gradient";
import { GlobeDemo } from "./GridGlobe";
import Lootie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { FaRegCopy } from "react-icons/fa6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[8rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number
  img?: string
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {

  const [copied, setCopied] = useState(false);

  const handleEmailClick = ()=>{
    navigator.clipboard.writeText('harshraj.123.2003@gmail.com');
    setCopied(prev => !prev);
    
  }


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4  h-[200px] md:h-auto  ",
        className
      )}
    >

      <div className={` ${id == 6 ? ' flex justify-center ' : ''} h-full `}>

        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover', 'object-center')}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id == 5 ? 'w-full opacity-80' : ''} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full`}
            />
          )}
        </div>
        {/* 
        {id == 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )} */}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full  flex flex-col px-5 p-5 lg:p-10')}>

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className={` font-sans font-bold text-lg lg:text-2xl max-w-96 z-10`}>
            {title}
          </div>

          {id == 2 && (
            <GlobeDemo />
          )}

          {id == 3 && (
            <div className="flex gap-1 lg:gap-2 absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-5">
                {["React", "Next js", 'Typescript'].map(item => {
                  return (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]" >{item}</span>
                  )
                })}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

                {["Node js", "Express", 'MongoDB'].map(item => {
                  return (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]" >{item}</span>
                  )
                })}
              </div>

            </div>
          )}

          {id == 6 && (
            <div onClick={handleEmailClick} className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lootie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: { preserveAspectRatio: "xMidYMID slice" }
                }} />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<FaRegCopy />}
                handleClick={handleEmailClick}
              />


            </div>
          )}


        </div>
      </div>
    </div>

  );
};
