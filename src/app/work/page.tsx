// src/app/work/page.tsx
"use client";
import { useState } from 'react';
import ProjectCard from '../../component/ProjectCard';

const projects = [
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
      id: 'n and b',
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
    
    
    
  ];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container " >
      <h1 className='text-4xl font-bold text-center mb-12 mt-5'>MY WORK</h1>
      <div className="buttons mb-12">
        <button 
          className={`category-button ${selectedCategory === 'All' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button 
          className={`category-button ${selectedCategory === 'Web Development' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('Web Development')}
        >
          Web Development
        </button>
        <button 
          className={`category-button ${selectedCategory === 'App Development' ? 'active' : ''}`} 
          onClick={() => setSelectedCategory('App Development')}
        >
          App Development
        </button>
      </div>
      <div className="grid">
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
      <style jsx>{`
        .container {
          padding: 50px;
          background-color: #1F2937;
          color: white;
          max-width: 100%;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .buttons {
          display: flex;
          justify-content: flex-start;
          gap: 5px;
        }
        .category-button {
          padding: 5px 10px;
          border: none;
          cursor: pointer;
          background-color: white;
          color: black;
          font-weight: bold;
        }
        .category-button.active {
          background-color: grey;
          color: white;
        }
      `}</style>
    </div>
  );
}
