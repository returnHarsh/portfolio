import React from 'react'
import Image from 'next/image';
import { StickyScroll } from "./ui/StickyScroll";


const content = [
  {
    title: "Pizzeria",
    description:
      `An online food/pizza ordering and managing system
 Designed and built a comprehensive web application facilitating pizza ordering for customers and menu
        GitHub Link
        management for admins
Implemented features for customers to browse and customize pizzas, place orders, and track delivery status
Admin functionalities included menu management and order tracking
Demonstrated proficiency in full-stack development, frontend and backend integration, and user authentication
        and authorization
Tech Stack: React js, Node js, Express js, Chakra ui, MongoDB, CSS, Javascript`,

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Pizzeria.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Thread Clone",
    description:
      `
        Developed a custom social media platform featuring user account creation, posting functionality,
following/unfollowing users, and interactive post interactions such as liking and replying
Demonstrated proficiency in full-stack development, including frontend, backend, and database integration
Tech Stack: React js, Node js, Express js, Chakra ui, MongoDB, CSS, Javascript

        `,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Threads-clone.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Study Buddy",
    description:
      `
        Created Study Buddy, an internet-based platform designed to foster connections among individuals with similar interests, promoting collaborative learning and networking opportunities.
Enriched the platform with functionalities enabling users to explore and establish connections with peers who share common interests, facilitating collaborative study sessions and the exchange of knowledge.
 Successfully developed Study Buddy during a 24-hour hackathon, showcasing the ability to deliver a functional and innovative project within a limited timeframe.
 Tech Stack: React js, Node js, Express js, Tailwind css, MongoDB, SCSS, Javascript, Zegocloud(web-rtc wrapper)

        `,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Study-Buddy.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real Time Code Editor",
    description:
      `
        Developed a real-time code editor application for collaborative coding.
Enabled simultaneous editing and synchronization of code among multiple users.
Emplemented WebSockets technology for real-time communication.
Tech Stack: React js, Node js, Express js, Material ui, MongoDB, SCSS, Javascript, Socket.io
        `,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Code-sync.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Whatsapp Clone",
    description:
      `
        Developed a real-time code editor application for collaborative coding.
Enabled simultaneous editing and synchronization of code among multiple users.
Emplemented WebSockets technology for real-time communication.
Tech Stack: React js, Node js, Express js, Material ui, MongoDB, SCSS, Javascript, Socket.io
        `,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Whatsapp-clone.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const Project = () => {



  return (
    <div className="p-10" id='projects'>
      <StickyScroll content={content} />
    </div>
  )
}

export default Project
