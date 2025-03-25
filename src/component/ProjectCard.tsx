'use client'; 
import Image from 'next/image';
import Link from 'next/link';

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
        <Image src={imageSrc} alt={title} width={400} height={225} />
        <h3>{title}</h3>
        <p>{category}</p>
        <style jsx>{`
          .project-card {
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.2s;
            text-decoration: none;
            color: inherit;
          }
          .project-card:hover {
            transform: scale(1.05);
          }
          .project-card h3 {
            margin: 10px;
            font-size: 1.2em;
          }
          .project-card p {
            margin: 0 10px 10px;
            color: #668;
          }
        `}</style>
      </div>
    </Link>
  );
};

export default ProjectCard;
