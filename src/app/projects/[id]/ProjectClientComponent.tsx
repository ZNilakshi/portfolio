'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  timeframe?: string;
  technologies?: string[];
  imageSrc: string;
  link?: string;
  imageGallery?: string[];
  features?: string[];
  type?: "Individual" | "Group" | "Dual";
  githubRepo?: string;
  deploymentLink?: string;
  websiteLink?: string;
  videoUrl?: string;
}

interface ProjectClientComponentProps {
  project: Project;
  nextProject?: Project;
}

const ProjectClientComponent: React.FC<ProjectClientComponentProps> = ({ project, nextProject }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-purple-300 px-6 md:px-16 py-12 flex flex-col items-center font-mono">
      
      {/* Top Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="self-start text-gray-400 mb-10 w-full"
      >
        <a 
          href={`/projects/${project.id}`} 
          className="text-lg font-semibold text-white hover:text-purple-400 transition"
        >
          {project.title}
        </a>
      </motion.nav>

      {/* Project Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-8 rounded-2xl shadow-lg max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-lg text-gray-300">{project.description}</p>
      </motion.div>

      {/* Info Boxes */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 w-full max-w-5xl gap-6">
        {project.client && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-full md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Client</h3>
            <p className="text-gray-400">{project.client}</p>
          </motion.div>
        )}
        {project.timeframe && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-full md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Timeframe</h3>
            <p className="text-gray-400">{project.timeframe}</p>
          </motion.div>
        )}
        {project.technologies && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform w-full md:w-1/2"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
            <p className="text-gray-400">{project.technologies.join(', ')}</p>
          </motion.div>
        )}
      </div>

      {/* Features */}
      {project.features && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-6 rounded-2xl shadow-lg mt-8 w-full max-w-5xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">✨ Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Project Type */}
      {project.type && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800/70 backdrop-blur-lg border border-gray-700/50 p-6 rounded-2xl shadow-lg mt-6 w-full max-w-5xl text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-2">Project Type</h3>
          <p className="text-gray-400">{project.type}</p>
        </motion.div>
      )}

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {project.githubRepo && (
          <motion.a 
            href={project.githubRepo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-purple-500/50 transition"
          >
            GitHub Repository
          </motion.a>
        )}
        {project.deploymentLink && (
          <motion.a 
            href={project.deploymentLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-pink-500/50 transition"
          >
            View Deployment
          </motion.a>
        )}
        {project.websiteLink && (
          <motion.a 
            href={project.websiteLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-pink-400/50 transition"
          >
            Visit Website
          </motion.a>
        )}
      </div>

      {/* Main Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
      >
        <Image 
          src={project.imageSrc} 
          alt={project.title} 
          width={1200} 
          height={800} 
          className="rounded-2xl object-cover w-full"
        />
      </motion.div>

      {/* Gallery */}
      {project.imageGallery && project.imageGallery.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {project.imageGallery.map((imgSrc, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image 
                src={imgSrc} 
                alt={`Gallery Image ${index + 1}`} 
                width={400} 
                height={300} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      )}

      {/* Video */}
      {project.videoUrl && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg border border-purple-500/30"
        >
          {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('vimeo.com') ? (
            <iframe 
              src={project.videoUrl} 
              className="w-full h-96 rounded-2xl"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <video controls className="w-full rounded-2xl" src={project.videoUrl} />
          )}
        </motion.div>
      )}

      {/* Next Project */}
      {nextProject && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-right w-full max-w-5xl"
        >
          <a 
            href={`/projects/${nextProject.id}`} 
            className="text-xl font-semibold text-white hover:text-purple-400 transition flex justify-end items-center"
          >
            <span>Next Project:</span>
            <span className="ml-3 text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {nextProject.title}
            </span>
          </a>
        </motion.div>
      )}

    </div>
  );
};

export default ProjectClientComponent;
