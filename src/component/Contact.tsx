"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/94702610614?text=Hi%20Nilakshi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect...", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:nilakshisamarasekara0@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Nilakshi,%0A%0AI%20found%20your%20portfolio%20and...";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-12 bg-gray-800 text-white w-full" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
      <div className="flex flex-wrap items-center justify-center w-full max-w-6xl">
        <div className="flex-1 min-w-[300px] text-left pr-0 sm:pr-10 mb-10 sm:mb-0">
          <h1 className="text-4xl sm:text-6xl font-bold uppercase leading-tight">
            Let&apos;s <br />
            <span className="text-green-400">Create</span> Something <br /> Amazing!
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white">
            <span className="text-green-400"> Ready to bring your ideas to life? </span>
            <br /> <br />Whether you want to collaborate on a project or just chat, I&apos;d love to hear from you!
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 space-y-4 max-w-md">
            <button 
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
            >
              <FaEnvelope className="text-2xl" />
              Send me an Email
            </button>
            
            
          </div>
        </div>

        <div className="flex-1 min-w-[300px] sm:min-w-[400px] text-center mt-6 p-6 sm:p-8 bg-black rounded-xl shadow-md">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400 uppercase tracking-wide">Get In Touch</h3>
            <a 
              href="mailto:nilakshisamarasekara0@gmail.com" 
              className="block mt-2 text-base sm:text-lg font-medium text-white border-b-2 border-teal-400 hover:text-teal-400 transition-colors"
            >
              nilakshisamarasekara0@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-6 uppercase tracking-wide">Connect With Me</h3>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a href="https://www.linkedin.com/in/znilakshi" className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ZNilakshi" className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
                <FaGithub />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100081272980560" className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
                <FaFacebook />
              </a>
              <a href="https://wa.me/94702610614?text=Hi%20Nilakshi" className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default Contact;