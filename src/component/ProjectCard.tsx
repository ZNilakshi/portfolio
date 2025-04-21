'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, imageSrc }) => {
  return (
    <div className="project-card-wrapper">
      <Link href={`/projects/${id}`} passHref>
        <div className="project-card">
          <div className="card-image-container">
            <Image 
              src={imageSrc} 
              alt={title} 
              width={400} 
              height={245} 
              className="card-image"
              priority
            />
            <div className="card-overlay">
              <span className="card-badge">{category}</span>
              <div className="card-action">
                View Project
                <FaExternalLinkAlt className="action-icon" />
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="card-footer">
              <span className="card-link">See details →</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .project-card-wrapper {
          transition: transform 0.3s ease;
        }
        
        .project-card-wrapper:hover {
          transform: translateY(-5px);
        }
        
        .project-card {
          border-radius: 0.75rem;
          overflow: hidden;
          background: #1e293b;
          border: 1px solid #334155;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .project-card:hover {
          border-color: #4ade80; 
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
        }
        
        .card-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .card-overlay {
          opacity: 1;
        }
        
        .card-badge {
          align-self: flex-start;
          background: rgba(99, 241, 196, 0.9);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .card-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        .action-icon {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover .action-icon {
          transform: translateX(3px);
        }
        
        .card-content {
          padding: 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .card-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }
        
        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-link {
          color: #4ade80; 
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .project-card:hover .card-link {
          color: #4ade80; 
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;