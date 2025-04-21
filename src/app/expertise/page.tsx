'use client';

import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaMobileAlt } from "react-icons/fa";
import { SiFlutter, SiFigma, SiAdobexd, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function Expertise() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h1
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MY EXPERTISE
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full-Stack Deve
          lopment */}
          <motion.div
            className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            whileHover={{ scale: 1.03, borderColor: "#4ade80" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaLaptopCode className="text-green-400 text-7xl" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-center text-green-400">
              Full-Stack Development
            </h3>
            <div className="flex justify-center gap-3 mb-6">
              <SiReact className="text-3xl text-blue-400" />
              <SiNextdotjs className="text-3xl text-white" />
              <SiNodedotjs className="text-3xl text-green-500" />
              <SiMongodb className="text-3xl text-green-600" />
            </div>
            <p className="text-gray-300 flex-grow">
              Building complete web applications from frontend to backend. Specialized in React, Next.js, and Node.js with MongoDB. Focus on performance, security, and scalable architecture.
            </p>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            whileHover={{ scale: 1.03, borderColor: "#60a5fa" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
            >
              <FaMobileAlt className="text-blue-400 text-7xl" />
              <SiFlutter className="text-blue-400 text-7xl ml-2" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
              Mobile Development
            </h3>
            <div className="flex justify-center gap-3 mb-6">
              <SiFlutter className="text-3xl text-blue-500" />
              <span className="text-xl">Android</span>
              <span className="text-xl">iOS</span>
            </div>
            <p className="text-gray-300 flex-grow">
              Creating beautiful, high-performance cross-platform mobile applications with Flutter. Focus on smooth animations, native functionality, and excellent user experiences.
            </p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            whileHover={{ scale: 1.03, borderColor: "#a78bfa" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
            >
              <FaPalette className="text-purple-400 text-7xl" />
              <SiFigma className="text-purple-400 text-7xl ml-2" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
              UI/UX Design
            </h3>
            <div className="flex justify-center gap-3 mb-6">
              <SiFigma className="text-3xl text-purple-500" />
              <SiAdobexd className="text-3xl text-pink-500" />
              <span className="text-xl">Prototyping</span>
            </div>
            <p className="text-gray-300 flex-grow">
              Crafting intuitive and visually appealing interfaces. User research, wireframing, prototyping, and creating design systems that enhance usability and engagement.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}