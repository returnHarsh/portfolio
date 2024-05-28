export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-1 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking for a job opportunity",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pizzeria",
    des: `
    An online food/pizza ordering and managing system
 Designed and built a comprehensive web application facilitating pizza ordering for customers and alos provided an Admin Sections
    `,
    img: "/Pizzeria.png",
    iconLists: [ "/html.svg" , "/css.svg" , "/re.svg", "/tail.svg" , "/mongodb-icon.svg" , "/node-js.svg" , "/javascript.svg"],
    link: "https://github.com/returnHarsh/pizzeria_realtime_pizza_app",
  },
  {
    id: 2,
    title: "Code Sync",
    des: `
    Developed a real-time code editor application for collaborative coding.
Enabled simultaneous editing and synchronization of code among multiple users.
Emplemented WebSockets technology for real-time communication.
    `,
    img: "/Code-sync.png",
    iconLists: ["/html.svg" , "/css.svg" , "/re.svg" , "/tail.svg" , "/socket-io.svg" , "/javascript.svg"],
    link: "https://github.com/returnHarsh/realtimeCodeEditor",
  },
  {
    id: 3,
    title: "Threads Clone",
    des:`
    Developed a custom social media platform featuring user account creation, posting functionality,
    following/unfollowing users, and interactive post interactions such as liking and replying
    Demonstrated proficiency in full-stack development
    `,
    img: "/Threads-clone.png",
    iconLists: ["/html.svg" , "/css.svg" , "/re.svg", "/tail.svg", "/mongodb-icon.svg" , "/socket-io.svg" , "/node-js.svg" , "/javascript.svg"],
    link: "https://github.com/returnHarsh/thread_clone",
  },
  {
    id: 4,
    title: "E-commerce",
    des: "Created a simple E-commerce frontend website",
    img: "/E-commerce.png",
    iconLists: ["/html.svg" , "/css.svg" , "/re.svg", "/javascript.svg" , "/css.svg"],
    link: "https://github.com/returnHarsh/E-commerce",
  },
  {
    id: 5,
    title: "Study Buddy",
    des: `
    Created Study Buddy, an internet-based platform designed to foster connections among individuals with similar interests, promoting collaborative learning and networking opportunities.
    `,
    img: "/Study-Buddy.png",
    iconLists: ["/html.svg" , "/css.svg" , "/re.svg", "/tail.svg", "/javascript.svg"],
    link: "",
  },
  {
    id: 6,
    title: "Whatsapp Clone",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/Whatsapp-clone.png",
    iconLists: ["/html.svg" , "/css.svg" , "/re.svg", "/tail.svg", "/javascript.svg" , "socket-io.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Harsh is hands down one of the best web developers I've had the pleasure of working with. His passion for web development is contagious, and his creativity knows no bounds. I collaborated with him on a website project, and I was blown away by his attention to detail and his ability to bring my vision to life. Harsh is not only a talented developer but also an excellent communicator who keeps his clients informed every step of the way. I wouldn't hesitate to recommend Harsh to anyone looking for a top-tier web developer",
    name: "Kartik",
    title: "Project Partner",
  },
  {
    quote:
      "Harsh is a remarkable web developer and an even better friend. His ability to transform ideas into visually stunning and highly functional websites is simply incredible. I had the pleasure of collaborating with him on a website project, and the results were beyond impressive. Harsh's attention to detail and commitment to excellence are evident in every aspect of his work. I wholeheartedly endorse Harsh to anyone in need of a top-notch web developer",
    name: "Sameer",
    title: "Hackathon Partner",
  },
  {
    quote:
      "I can't say enough good things about Harsh and his web development skills. Working with him was an absolute delight from start to finish. Not only is he incredibly talented, but he's also one of the most reliable and trustworthy people I know. The website he created for me exceeded all my expectations, and I've received numerous compliments on its design and functionality. If you're looking for a web developer who is both skilled and reliable, look no further than Harsh",
    name: "Nitesh",
    title: "Hackathon Partner",
  },
  {
    quote:
      "Harsh is hands down one of the best web developers I've had the pleasure of working with. His passion for web development is contagious, and his creativity knows no bounds. I collaborated with him on a website project, and I was blown away by his attention to detail and his ability to bring my vision to life. Harsh is not only a talented developer but also an excellent communicator who keeps his clients informed every step of the way. I wouldn't hesitate to recommend Harsh to anyone looking for a top-tier web developer",
    name: "Abhay",
    title: "Friend",
  },
  {
    quote:
      "Working with Harsh on my website was an absolute breeze. He took the time to understand my needs and preferences and delivered a website that exceeded my expectations. Harsh's technical expertise and creative flair are second to none, and his professionalism throughout the project was truly commendable. The website he created for me has helped elevate my online presence and has received rave reviews from everyone who's visited it. I can't thank Harsh enough for his hard work and dedication",
    name: "Vishal",
    title: "Friend",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link : "https://github.com/returnHarsh"
  },
  {
    id: 2,
    img: "/twit.svg",
    link : ""
  },
  {
    id: 3,
    img: "/link.svg",
    link : "https://www.linkedin.com/in/harsh-raj-166778225/"
  },
];
