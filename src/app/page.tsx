'use client';
import Expertise from "../component/Expertise";
import Work from "../component/Work";
import Contact from "../component/Contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const words = ["FRONTEND DEVELOPER", "FULLSTACK DEVELOPER", "SOFTWARE ENGINEER"];

const ProfileCard: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
   <div
  className="flex items-center bg-gray-800 justify-center min-h-screen text-white p-6"

>
    <div className="flex flex-col md:flex-row items-center gap-10">
       
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold">
            HI, 
            <br />
            I&apos;M NILAKSHIE!<br />
            <br />
            <span className="text-green-400">{words[index]}</span>
          </h1>
          <p className="text-gray-400 mt-4">
  I&apos;m a passionate Frontend Developer, Full Stack Developer, and Software Engineer with a mission to build efficient, scalable, and user-friendly applications. With expertise in modern web technologies, intuitive UI/UX design, and robust backend development, I specialize in creating seamless digital experiences that engage and inspire.
</p>

          
        </div>

     
<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
  <motion.div
    className="absolute w-[110%] h-[110%] border-[14px] border-green-400"
    animate={{ y: [-10, 10, -10] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    style={{
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  ></motion.div>
  
  <motion.div whileHover={{ scale: 1.1 }}>
    <Image
      src="/baba.jpg" 
      alt="Profile"
      width={200}
      height={200}
      className="w-full h-full object-cover"
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    />
  </motion.div>
</div>

      </div>
    </div>
          
          <div >
        <Expertise />
        <Work />
        <Contact />
      </div>
    </div>
    
  );
};

export default ProfileCard;
