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
  technologies?: string[];
  imageSrc: string;
  link?: string;
  imageGallery?: string[];
  features?: string[];
  type?: "Individual" | "Group";
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
    <div className="min-h-screen bg-gray-900 text-green-400 px-6 md:px-16 py-12 flex flex-col items-center">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="self-start text-gray-400 mb-8 w-full"
      >
        <div className="flex items-center space-x-3">
          {/* Back Button */}
          <a href="/work" className="text-sm font-medium text-gray-400 hover:text-white transition">
            Back
          </a>

          {/* Separator */}
          <span className="text-sm text-gray-500">/</span>

          {/* Project Title */}
          <a href={`/projects/${project.id}`} className="text-lg font-semibold text-white hover:text-gray-300 transition">
            {project.title}
          </a>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-gray-300">{project.description}</p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 w-full max-w-5xl gap-6">
      {project.client && (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2"
  >
    <h3 className="text-xl font-semibold mb-2">Client</h3>
    <p className="text-gray-400">{project.client}</p>
  </motion.div>
)}


        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2"
        >
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <p className="text-gray-400">{project.technologies?.join(', ')}</p>
        </motion.div>
      </div>

      {project.features && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full max-w-5xl"
        >
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.type && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full max-w-5xl"
        >
          <h3 className="text-xl font-semibold mb-2">Project Type</h3>
          <p className="text-gray-400">{project.type}</p>
        </motion.div>
      )}

<div className="mt-8 flex gap-2 justify-center">
  {project.githubRepo && (
    <motion.a 
      href={project.githubRepo} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-5 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium shadow-md hover:bg-gray-700 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      GitHub Repository
    </motion.a>
  )}

  {project.deploymentLink && (
    <motion.a 
      href={project.deploymentLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-5 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium shadow-md hover:bg-gray-700 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      View Deployment
    </motion.a>
  )}

  {project.websiteLink && (
    <motion.a 
      href={project.websiteLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-5 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium shadow-md hover:bg-gray-700 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Visit Website
    </motion.a>
  )}
</div>



      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 w-full max-w-5xl rounded-lg overflow-hidden shadow-lg"
      >
        <Image 
          src={project.imageSrc} 
          alt={project.title} 
          width={1200} 
          height={800} 
          className="rounded-lg object-cover w-full"
        />
      </motion.div>

      {project.imageGallery && project.imageGallery.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {project.imageGallery.map((imgSrc, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
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
   { /*    
{project.videoUrl && (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-10 w-full max-w-5xl rounded-lg overflow-hidden shadow-lg"
  >
    {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('vimeo.com') ? (
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src={project.videoUrl} 
          className="w-full h-96 rounded-lg"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <video 
        controls 
        className="w-full rounded-lg"
        src={project.videoUrl}
      />
    )}
  </motion.div>
)}
  */}
      {nextProject && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-right w-full max-w-5xl"
        >
          <a href={`/projects/${nextProject.id}`} className="text-xl font-semibold text-white hover:text-gray-300 transition flex justify-end items-center">
            <span>Next Project:</span>
            <span className="ml-3 text-2xl">{nextProject.title}</span>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectClientComponent;
