import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-12 bg-gray-900 text-white rounded-2xl shadow-lg w-full" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
      {/* Left Section */}
      <div className="flex-1 min-w-[300px] text-left pr-10">
        <h1 className="text-6xl font-bold uppercase leading-tight">
          Let&apos;s <br />
          <span className="text-teal-300">Create</span> Something <br /> Amazing!
        </h1>
        <p className="mt-6 text-2xl text-gray-500">
        <span className="text-teal-300"> Ready to bring your ideas to life? </span>
          <br /> <br />Whether you want to collaborate on a project or just chat, I&apos;d love to hear from you!
        </p>
      </div>

     {/* Right Section */}
     <div className="flex-1 min-w-[400px] text-center p-8 bg-gray-800 rounded-xl shadow-md">
        {/* Contact Details */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-teal-400 uppercase tracking-wide">Get In Touch</h3>
          <a href="mailto:nilakshisamarasekara0@gmail.com" className="block mt-2 text-lg font-medium text-white border-b-2 border-teal-400 hover:text-teal-400 transition-colors">
            nilakshisamarasekara0@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-400 mb-6 uppercase tracking-wide">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaFacebook />
            </a>
            <a href="https://wa.me/1234567890" className="text-white text-4xl transition-transform duration-300 hover:text-teal-400 hover:scale-125">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
