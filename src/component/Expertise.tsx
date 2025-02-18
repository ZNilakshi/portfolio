'use client';

import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export default function Expertise() {
  return (
    <main
      className="bg-gray-800 text-white min-h-screen py-20"
      
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MY EXPERTISE
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full-Stack Development */}
          <motion.div
            className="border border-gray-700 p-8 rounded-2xl text-center bg-black shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaLaptopCode className="text-green-400 text-6xl mb-4" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2">
              <span className="underline decoration-green-500">
                Full-Stack Dev
              </span>{" "}
              React.js, Next.js, MongoDB, Express, Node.js
            </h3>
            <p className="text-gray-400 mt-4">
              Experienced in building end-to-end web applications using the MERN
              stack, with a focus on server-side development, database
              management, and scalable architecture.
            </p>
          </motion.div>

          {/* Flutter Development */}
          <motion.div
            className="border border-gray-700 p-8 rounded-2xl text-center bg-black shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SiFlutter className="text-blue-400 text-6xl mb-4" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2">
              <span className="underline decoration-orange-500">
                Flutter Dev
              </span>{" "}
              Android, iOS
            </h3>
            <p className="text-gray-400 mt-4">
              Skilled in developing hybrid mobile apps and cross-platform
              solutions using the Flutter framework.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
