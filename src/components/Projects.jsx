import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import video1 from "../assets/projects/project_1/video.mp4";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Projects = () => {
  const containerRef = useRef();
  const carouselRef = useRef();
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      name: "Bowquest",
      description:
        "A next-gen online learning platform where the students and instructors can interact with each other. The teachers can create courses and students can enroll in them",
      techStack: ["React", "JavaScript", "CSS"],
      date: "2025",
      live: "https://bow-quest.vercel.app/",
      github: "https://github.com/samandeep007/BowQuest",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164154.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164214.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164315.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164328.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164340.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164908.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164922.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164937.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164948.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165021.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165034.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165045.png?raw=true",
        },
      ],
    },
    {
      name: "Hermes",
      description:
        "A complete business website that allows users to book appointments, request quotes from the company, and much more",
      techStack: ["React", "Node.js", "Firebase"],
      date: "2024",
      live: '',
      github: "https://github.com/samandeep007/HermesCorporation",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011716.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011748.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011811.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011833.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011917.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011939.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012001.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012030.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012058.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012125.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012148.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012212.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012234.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012338.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012418.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011303.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011323.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011346.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011404.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011439.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011453.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011511.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011523.png?raw=true",
        },
      ],
    },
    {
      name: "LawnBuddy | Summer",
      description:
        "Another business website for a lawn mowing company with interactive UI and live chat features",
      techStack: ["React", "JavaScript", "CSS"],
      date: "2024",
      live: "https://lawner-ebwod5egw-samandeep007s-projects.vercel.app/",
      github: "https://github.com/samandeep007/LawnMowing",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002526.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002937.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002556.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002621.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002644.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002706.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002726.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002744.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002800.png?raw=true",
        },
      ],
    },
    {
      name: "OG Apparel Co.",
      description: "A full-fledged Ecommerce store application with inventory management system that allows the brand to handle in-store and online transactions in a synchronized manner",
      techStack: ["React", "JavaScript", "HTML"],
      date: "2025",
      live: "https://orphicgrace.ca/",
      github: "",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20165935.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170002.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170019.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170032.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170100.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170117.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170129.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170139.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170202.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170233.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170252.png?raw=true",
        },
      ],
    },
    {
      name: "Eleve Freightways",
      description: "Business website for a trucking company named Eleve Freightways",
      techStack: ["React", "Node.js", "MongoDB"],
      date: "2025",
      live: "https://www.elevefreightways.com/",
      github: "https://github.com/samandeep007/truckingproject",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171143.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171208.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171221.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171533.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171546.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171600.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171614.png?raw=true",
        },
      ],
    },
    {
      name: "CourseArena",
      description: "An online learning platform for courses and education.",
      techStack: ["React", "Node.js", "Express"],
      date: "2025",
      live: "https://course-arena.vercel.app/",
      github: "https://github.com/samandeep007/CourseApp2",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170827.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170848.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170903.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170918.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170927.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170939.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170951.png?raw=true",
        },
      ],
    },
    {
      name: "Shooting Game",
      description: "A gaming application with interactive features.",
      techStack: ["C++", "Unreal Engine"],
      date: "2023",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20022947.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023041.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023107.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023139.png?raw=true",
        },
      ],
    },
    {
      name: "LIF | Love Is Free",
      description: "A dating application with advanced features and real time chat. ",
      techStack: ["React Native", "Expo", "Node", "MongoDB", "Cloudinary", "Express"],
      date: "2023",
      live: "https://love-is-free--devja3c5ki.expo.app/",
      github: "https://github.com/samandeep007/lif-frontend",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(1).jpg?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original.jpg?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(6).jpg?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(7).jpg?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(8).jpg?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(9).jpg?raw=true",
        },
      ],
    },
    {
      name: "Music Academy",
      description: "A website for music academy",
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      date: "2025",
      live: "#",
      github: "#",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174417.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174433.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174449.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174501.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174516.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174531.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174540.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174809.png?raw=true",
        },
      ],
    },
    {
      name: "Kartar Constructions",
      description: "A project focused on karting or e-commerce features.",
      techStack: ["React", "JavaScript", "CSS"],
      date: "2025",
      live: "https://garage-app-updated.vercel.app/",
      github: "https://garage-app-updated.vercel.app/",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172105.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172152.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172203.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172216.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172228.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172239.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172302.png?raw=true",
        },
      ],
    },
    {
      name: "Bookhub",
      description: "A platform for book enthusiasts to browse or manage books.",
      techStack: ["React", "Node.js", "MongoDB"],
      date: "2024",
      github: "https://github.com/tarandeepk1212/BookHub",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154142.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154224.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154323.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154416.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154706.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154718.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154822.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20155137.png?raw=true",
        },
      ],
    },
    {
      name: "LawnBuddy | Snow",
      description: "A winter-themed or snow-related application.",
      techStack: ["React", "JavaScript", "CSS"],
      date: "2025",
      live: "https://lawner-ebwod5egw-samandeep007s-projects.vercel.app/",
      github: "https://github.com/samandeep007/LawnMowing",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20175001.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180630.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180642.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180652.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180707.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180719.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180734.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180745.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180753.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180803.png?raw=true",
        },
      ],
    },
    {
      name: "Ask Buddy",
      description: "A Q&A or inquiry-based platform.",
      techStack: ["React", "Node.js", "Express"],
      date: "2025",
      live: "https://askbuddy.vercel.app/",
      github: "https://github.com/samandeep007/askbuddy",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181654.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181540.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181556.png?raw=true",
        },
      ],
    },
    {
      name: "Hermes Aero Store",
      description: "An e-commerce platform for online shopping.",
      techStack: ["React", "JavaScript", "CSS"],
      date: "2023",
      github: "https://github.com/samandeep007/HermesCorporation",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/store/Screenshot%202023-03-14%20120709.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/store/Screenshot%202023-03-13%20135705.png?raw=true",
        },
      ],
    },
    {
      name: "Workbuddy",
      description:
        "A productivity or collaboration tool for work-related tasks.",
      techStack: ["React", "Node.js", "MongoDB"],
      date: "2025",
      live: "https://work-buddy-frontend-zeta.vercel.app/",
      github: "https://github.com/samandeep007/WorkBuddy_Frontend",
      media: [
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165449.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165630.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165643.png?raw=true",
        },
        {
          type: "image",
          url: "https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165659.png?raw=true",
        },
      ],
    },
  ];

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const totalWidth = cards.length * (cards[0]?.offsetWidth + 32);

      Draggable.create(carouselRef.current, {
        type: "x",
        bounds: { minX: -totalWidth + window.innerWidth, maxX: 0 },
        edgeResistance: 0.75,
        inertia: true,
        onDragEnd: () => snapCarousel(),
      });

      const snapCarousel = () => {
        const cardWidth = cards[0]?.offsetWidth + 32;
        gsap.to(carouselRef.current, {
          x:
            Math.round(gsap.getProperty(carouselRef.current, "x") / cardWidth) *
            cardWidth,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      cards.forEach((card) => {
        const media = card.querySelectorAll(".project-media");
        const timeline = gsap.timeline({
          repeat: -1,
          defaults: { duration: 3, ease: "power2.inOut" },
        });
        media.forEach((item, i) => {
          if (i < media.length - 1) {
            timeline.to(media[i], { opacity: 0 }, i * 3);
          }
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(carouselRef.current, { x: -self.progress * 200 });
        },
      });

      gsap.from(cards, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
    },
    { scope: containerRef }
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-32 bg-gradient-to-br from-black via-black to-indigo-950 min-h-screen overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      <div className="relative z-10 max-w-full mx-auto px-4 overflow-hidden">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-12 text-center">
          Projects
        </h2>
        <div
          ref={carouselRef}
          className="flex gap-8 cursor-grab active:cursor-grabbing"
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.name}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.15)] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 max-md:h-48 mb-6 overflow-hidden rounded-xl">
                {project.media
                  .filter((item) => item.type === "image")
                  .map((item, i) => (
                    <div
                      key={i}
                      className="project-media absolute inset-0 w-full h-full transition-opacity duration-1000"
                      style={{
                        zIndex:
                          project.media.filter((m) => m.type === "image")
                            .length - i,
                      }}
                    >
                      <img
                        src={item.url}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                {project.media.some((item) => item.type === "video") && (
                  <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    Video Demo
                  </div>
                )}
              </div>
              <h3 className="text-3xl max-md:text-2xl font-bold mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 max-md:text-sm">
                {project.description}
              </p>
              <p className="text-sm max-md:text-xs text-gray-500 mb-2">
                Tech Stack: {project.techStack.join(", ")}
              </p>
              <p className="text-sm max-md:text-xs text-gray-500 mb-4">
                Date: {project.date}
              </p>
              <div className="flex gap-4">
                 {project.live   &&  <a
                  href={project.live}
                  className="inline-block bg-indigo-600 py-2 px-4 max-md:py-1 max-md:px-3 rounded-md text-sm max-md:text-xs font-medium hover:bg-indigo-700 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>}
                {project.github && 
                <a
                  href={project.github}
                  className="inline-block bg-gray-800 py-2 px-4 max-md:py-1 max-md:px-3 rounded-md text-sm max-md:text-xs font-medium hover:bg-gray-700 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="max-w-5xl w-full mx-4 p-6 max-md:p-2 bg-black/90 rounded-2xl border border-indigo-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <Slider {...carouselSettings}>
                  {selectedProject.media.map((item, i) => (
                    <div key={i} className="px-2">
                      {item.type === "image" ? (
                        <img
                          src={item.url}
                          alt={`${selectedProject.name} media ${i + 1}`}
                          className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
                        />
                      ) : (
                        <video
                          src={item.url}
                          className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
                          controls
                          autoPlay
                          playsInline
                        />
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="md:w-1/3 text-white">
                <h3 className="text-2xl max-md:text-xl font-bold mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-300 mb-4 max-md:text-sm">
                  {selectedProject.description}
                </p>
                <p className="text-sm max-md:text-xs text-gray-400 mb-2">
                  Tech Stack: {selectedProject.techStack.join(", ")}
                </p>
                <p className="text-sm max-md:text-xs text-gray-400 mb-4">
                  Date: {selectedProject.date}
                </p>
                <div className="flex gap-4">
                  {selectedProject.live  && (
                    <a
                      href={selectedProject.live}
                      className="inline-block bg-indigo-600 py-2 px-4 max-md:py-1 max-md:px-3 rounded-md text-sm max-md:text-xs font-medium hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && 
                  <a
                    href={selectedProject.github}
                    className="inline-block bg-gray-800 py-2 px-4 max-md:py-1 max-md:px-3 rounded-md text-sm max-md:text-xs font-medium hover:bg-gray-700 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  }
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
