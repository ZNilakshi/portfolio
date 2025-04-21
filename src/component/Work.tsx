
"use client";
import { useState } from 'react';
import ProjectCard from '../component/ProjectCard';

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
    }
    ,
  ];

  export default function Work() {
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    const filteredProjects = selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
  
    return (
      <section className="work-section">
        <div className="work-container">
          <h1 className="work-title">My Projects</h1>
          <p className="work-subtitle">A collection of my recent work</p>
          
          <div className="category-filter">
            {['All', 'Web Development', 'App Development'].map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
  
          <div className="projects-grid">
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
  
        <style jsx>{`
          .work-section {
            padding: 4rem 1rem;
            background: linear-gradient(to bottom, #0f172a, #1e293b);
            min-height: 100vh;
          }
          
          .work-container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .work-title {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(to right, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
            text-align: center;
          }
          
          .work-subtitle {
            color: #94a3b8;
            font-size: 1.1rem;
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .category-filter {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 3rem;
          }
          
          .filter-button {
            padding: 0.5rem 1.25rem;
            border-radius: 9999px;
            border: 1px solid #334155;
            background: #1e293b;
            color: #e2e8f0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .filter-button:hover {
            background: #334155;
          }
          
          .filter-button.active {
            background: #4ade80 ;
            border-color: #4ade80;
            color: white;
          }
          
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
          }
          
          @media (max-width: 768px) {
            .work-section {
              padding: 2rem 1rem;
            }
            
            .work-title {
              font-size: 2rem;
            }
            
            .projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    );
  }
