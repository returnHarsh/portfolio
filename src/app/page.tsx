"use client"

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { CiHome } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";
import { CiFileOn } from "react-icons/ci";
import { FaUsersCog } from "react-icons/fa";
import { useState , useRef } from "react";
import Certifications from "../components/Certifications";

export default function Home() {

  const[fool , setFool] = useState(false);
  const videoEndHandler = ()=>{
    setFool(false);
  }

  if(fool){
    return <>
     <div className='h-[100vh] w-[100vw] relative' >

<div className='absolute z-10 h-[100vh] w-[100vw] flex justify-center items-center bg-black opacity-50 '>
</div>

<div className=' absolute z-20 h-[100vh] w-[100vw] flex justify-center items-center'>
 <h1 className='text-[20px] sm:text-[40px] md:text-[80px] translate-y-20 font-sans '>Know your place <span className='text-red-500'> fool </span> </h1>
</div>


 <div className='h-[100vh] w-[100vw]' >
   <video  className='   object-cover absolute  h-[100vh] w-[100vw]'  onEnded={videoEndHandler} autoPlay src="front-page-video.mp4"></video>
 </div>

</div>
    </>
  }

  return (
    <main className="  relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 p-x">
      <div className=" w-[100vw] ">

        <FloatingNav navItems={[
          {name : "Home" , link : "/" , icon : <CiHome/>},
          {name : "Testimonials" , link : "#testimonials" , icon : <FaUsersCog/>},
          {name : "Recent Projects" , link : "#recent_projects" , icon : <CiFileOn/>},
          {name : "About" , link : "#about" , icon : <SiAboutdotme/>},
          {name : "Contact" , link : "#contact" , icon : <FaPhoneFlip/>}
        ]} />

        <Hero/>
        <Grid/>
        <Project/>
        <Clients/>
        <RecentProjects/>
        <Certifications/>
        <Approach/>
        <Footer setFool = {setFool} />

      </div>
    </main>
  );
}
