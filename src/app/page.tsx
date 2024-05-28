import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { CiHome } from "react-icons/ci";

export default function Home() {
  return (
    <main className="  relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 p-x">
      <div className=" w-[100vw] ">

        <FloatingNav navItems={[
          {name : "Home" , link : "/" , icon : <CiHome/>},
          {name : "Testimonials" , link : "#testimonials" , icon : <CiHome/>},
          {name : "Recent Projects" , link : "#recent_projects" , icon : <CiHome/>},
          {name : "About" , link : "#about" , icon : <CiHome/>},
          {name : "Contact" , link : "#contact" , icon : <CiHome/>}
        ]} />

        <Hero/>
        <Grid/>
        <Project/>
        <Clients/>
        <RecentProjects/>
        <Approach/>
        <Footer/>

      </div>
    </main>
  );
}
