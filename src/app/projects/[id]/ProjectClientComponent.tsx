'use client';

import React from 'react';
import Image from 'next/image';

// Define the type for a project
interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  technologies: string;
  imageSrc: string;
  link?: string;
  imageGallery?: string[];
}

interface ProjectClientComponentProps {
  project: Project;
  nextProject?: Project;
}

const ProjectClientComponent: React.FC<ProjectClientComponentProps> = ({ project, nextProject }) => {
  return (
    <div className="container">
      <nav className="breadcrumb">
        <a href="/work">Back</a> &gt; <a href={`/projects/${project.id}`}>{project.title}</a>
      </nav>
      <h1 className="title">{project.title}</h1>
      <p className="description">{project.description}</p>
      <div className="details">
        <div>
          <h3>Client</h3>
          <p>{project.client}</p>
        </div>
        <div>
          <h3>Technologies</h3>
          <p>{project.technologies}</p>
        </div>
        {project.link && (
          <div className="cta">
            <a href={project.link} target="_blank" className="open-project">Open Project</a>
          </div>
        )}
      </div>

      {/* Optimized image loading with Next.js Image */}
      <Image
        className="project-image"
        src={project.imageSrc}
        alt={project.title}
        width={1200}
        height={800}
      />

      

      {nextProject && (
        <div className="next-project">
          <a href={`/projects/${nextProject.id}`} className="next-project-link">
            <span>Next Project</span>
            <span className="next-project-title">{nextProject.title}</span>
          </a>
        </div>
      )}

      <style jsx>{`
        .container {
          padding: 50px;
          color: white;
          background-color: black;
          max-width: 1200px;
          margin: 0 auto;
        }
        .breadcrumb {
          color: grey;
          margin-bottom: 20px;
        }
        .breadcrumb a {
          color: grey;
          text-decoration: none;
        }
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        .title {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .description {
          font-size: 1.25rem;
          margin-bottom: 20px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .details div {
          width: 30%;
        }
        .details h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .cta {
          margin-top: 20px;
        }
        .open-project {
          background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
        }
        .open-project:hover {
          background-color: grey;
          color: white;
        }
        .project-image {
          width: 100%;
          max-width: 1200px;
          height: auto;
          border-radius: 8px;
          margin-top: 40px;
        }
        .next-project {
          margin-top: 50px;
          text-align: right;
        }
        .next-project-link {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          text-decoration: none;
          color: white;
        }
        .next-project-link span {
          margin-left: 10px;
        }
        .next-project-title {
          font-size: 1.25rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ProjectClientComponent;
