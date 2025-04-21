import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-12 bg-gray-800 text-white  shadow-lg w-full" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
     
      <div className="flex-1 min-w-[300px] text-left pr-10">
        <h1 className="text-6xl font-bold uppercase leading-tight">
          Let&apos;s <br />
          <span className="text-green-400">Create</span> Something <br /> Amazing!
        </h1>
        <p className="mt-6 text-xl text-white">
        <span className="text-green-400"> Ready to bring your ideas to life? </span>
          <br /> <br />Whether you want to collaborate on a project or just chat, I&apos;d love to hear from you!
        </p>
      </div>

    
     <div className="flex-1 min-w-[400px] text-center p-8 bg-black rounded-xl shadow-md">
       
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-green-400 uppercase tracking-wide">Get In Touch</h3>
          <a href="mailto:nilakshisamarasekara0@gmail.com" className="block mt-2 text-lg font-medium text-white border-b-2 border-teal-400 hover:text-teal-400 transition-colors">
            nilakshisamarasekara0@gmail.com
          </a>
        </div>

        
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6 uppercase tracking-wide">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/znilakshi" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ZNilakshi" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaGithub />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100081272980560" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+94702610614" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
