'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, imageSrc }) => {
  return (
    <Link href={`/projects/${id}`} passHref>
      <div className="project-card">
        <div className="image-container">
          <Image 
            src={imageSrc} 
            alt={title} 
            width={400} 
            height={245} 
            className="project-image"
            priority
          />
          <div className="overlay">
            <div className="overlay-content">
              <span className="category-badge">{category}</span>
              <div className="view-more">
                View Details 
                <div className="icon-container">
             
                  <FaExternalLinkAlt className="external-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <div className="project-meta">
           
            <span className="project-link">View Details</span>
          </div>
        </div>
        <style jsx>{`
          .project-card {
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
            cursor: pointer;
            background: #111827;
            border: 1px solid #2d3748;
            position: relative;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-color: #4a5568;
          }
          
          .image-container {
            position: relative;
            width: 100%;
            height: 190px;
            overflow: hidden;
          }
          
          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          
          .project-card:hover .project-image {
            transform: scale(1.1);
          }
          
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(26, 32, 44, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            opacity: 0;
            transition: opacity 0.4s ease;
            padding: 24px;
          }
          
          .project-card:hover .overlay {
            opacity: 1;
          }
          
          .overlay-content {
            width: 100%;
          }
          
          .category-badge {
            display: inline-block;
            background: rgba(74, 85, 104, 0.7);
            color: #e2e8f0;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
            backdrop-filter: blur(4px);
          }
          
          .view-more {
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
            transition: transform 0.3s ease;
          }
          
          .icon-container {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          
          .arrow-icon {
            transition: all 0.3s ease;
          }
          
          .external-icon {
            opacity: 0;
            transform: translateX(-5px);
            transition: all 0.3s ease;
            font-size: 0.9rem;
          }
          
          .project-card:hover .arrow-icon {
            transform: translateX(5px);
          }
          
          .project-card:hover .external-icon {
            opacity: 1;
            transform: translateX(0);
          }
          
          .project-info {
            padding: 20px;
            background: #111827;
            position: relative;
            z-index: 2;
          }
          
          .project-info h3 {
            margin: 0 0 8px 0;
            font-size: 1.25rem;
            color: white;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          
          .project-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
          }
          
          .project-category {
            font-size: 0.85rem;
            color: #a0aec0;
            background: rgba(74, 85, 104, 0.3);
            padding: 4px 10px;
            border-radius: 12px;
          }
          
          .project-link {
            font-size: 0.85rem;
            color: #63b3ed;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          
          .project-card:hover .project-link {
            color: #90cdf4;
          }
          
          @media (max-width: 768px) {
            .project-card {
              border-radius: 10px;
            }
            
            .overlay {
              padding: 16px;
            }
            
            .project-info {
              padding: 16px;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

export default ProjectCard;