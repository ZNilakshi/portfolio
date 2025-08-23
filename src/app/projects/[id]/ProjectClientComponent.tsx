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
    <div className="min-h-screen bg-gray-900 text-purple-300 px-4 md:px-8 lg:px-16 py-8 flex flex-col items-center" style={{ fontFamily: "Courier New, Courier, monospace" }}>
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="self-start mb-8 w-full flex justify-between items-center"
      >
        <a href="/" className="text-purple-400 hover:text-white transition-colors flex items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </a>
        
        <div className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-purple-900/50">
          {project.category}
        </div>
      </motion.nav>

      {/* Hero Section - Fixed layout */}
      <div className="w-full max-w-6xl mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-xl overflow-hidden mb-6"
        >
          <Image 
            src={project.imageSrc} 
            alt={project.title} 
            width={1200} 
            height={600} 
            className="w-full h-64 md:h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent z-10"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto">{project.description}</p>
        </motion.div>
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
        {/* Project Info Cards */}
        {project.client && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-purple-900/30"
          >
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <h3 className="text-lg font-semibold text-white">Client</h3>
            </div>
            <p className="text-gray-300 pl-5">{project.client}</p>
          </motion.div>
        )}
        
        {project.timeframe && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-purple-900/30"
          >
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <h3 className="text-lg font-semibold text-white">Timeframe</h3>
            </div>
            <p className="text-gray-300 pl-5">{project.timeframe}</p>
          </motion.div>
        )}
        
        {project.type && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-purple-900/30"
          >
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <h3 className="text-lg font-semibold text-white">Project Type</h3>
            </div>
            <p className="text-gray-300 pl-5">{project.type}</p>
          </motion.div>
        )}
      </div>

      {/* Technologies Section */}
      {project.technologies && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-6xl mb-12 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-800/50">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Features Section */}
      {project.features && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-6xl mb-12 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-900/30"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center mb-12"
      >
        {project.githubRepo && (
          <a 
            href={project.githubRepo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent text-purple-400 rounded-lg font-medium border-2 border-purple-500/50 flex items-center hover:bg-purple-900/30 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Repository
          </a>
        )}

        {project.deploymentLink && (
          <a 
            href={project.deploymentLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium border-2 border-purple-600 flex items-center hover:bg-purple-700 hover:border-purple-700 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Deployment
          </a>
        )}

        {project.websiteLink && (
          <a 
            href={project.websiteLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium border-2 border-gray-600 flex items-center hover:bg-gray-600 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Visit Website
          </a>
        )}
      </motion.div>

      {/* Video Section */}
      {project.videoUrl && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full max-w-4xl mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Project Demo</h3>
          <div className="rounded-xl overflow-hidden border border-purple-900/50 shadow-2xl">
            {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('vimeo.com') ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={project.videoUrl} 
                  className="w-full h-96"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <video 
                controls 
                className="w-full"
                src={project.videoUrl}
              />
            )}
          </div>
        </motion.div>
      )}

      {/* Image Gallery */}
      {project.imageGallery && project.imageGallery.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="w-full max-w-6xl mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.imageGallery.map((imgSrc, index) => (
              <motion.div 
                key={index} 
                className="rounded-xl overflow-hidden border border-purple-900/50 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <Image 
                  src={imgSrc} 
                  alt={`Gallery Image ${index + 1}`} 
                  width={400} 
                  height={300} 
                  className="object-cover w-full h-56 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Next Project */}
      {nextProject && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-6xl mt-8 mb-12 text-center"
        >
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">Continue Exploring</p>
            <a 
              href={`/projects/${nextProject.id}`} 
              className="group inline-flex items-center text-xl font-semibold text-white hover:text-purple-300 transition-colors"
            >
              <span>Next Project: {nextProject.title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectClientComponent;