"use client";
import { useState } from 'react';
import ProjectCard from '../component/ProjectCard';

type Project = {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
};

const projects: Project[] = [
  {
    id: 'drivex',
    title: 'DriveX',
    category: 'Web Development',
    imageSrc: '/drivex.png',
  },
  {
    id: 'novacare',
    title: 'NOVA CARE',
    category: 'Web Development',
    imageSrc: '/novacare.png',
  },
  {
    id: 'e-library',
    title: 'E- Library',
    category: 'Web Development',
    imageSrc: '/elibrary.png',
  },
  {
    id: 'n_and_b',
    title: 'N & B Taxi Services',
    category: 'Web Development',
    imageSrc: '/nb.png',
  },
  {
    id: 'crop-care-app',
    title: 'Crop Care App',
    category: 'App Development',
    imageSrc: '/cropcare.png',
  },
  {
    id: 'lylu',
    title: 'LYLU',
    category: 'Web Development',
    imageSrc: '/lylu.png',  
  },
  {
    id: 'teacher',
    title: 'Mutual Transfer Portal',
    category: 'Web Development',
    imageSrc: '/teacher.png',
  },
  {
    id: 'silva',
    title: 'De Silva Bar',
    category: 'Web Development',
    imageSrc: '/bar.png',
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
          MY PROJECTS
        </h1>
        <p className="text-slate-400 text-xl text-center mb-12">
          A collection of my recent work
        </p>

       
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          {['All', 'Web Development', 'App Development'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full border transition-all ${
                selectedCategory === category 
                  ? 'bg-green-400 border-green-400 text-white' 
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}