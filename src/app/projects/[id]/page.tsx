import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Array of project data
const projects = [
  {
    id: 'ahasna-car-services',
    title: 'Ahasna Car Services',
    category: 'Web Development',
    description: 'Flight Local is a rapidly growing Bangladesh-based company providing Ahasna Car Services.',
    client: 'Mr Dilan Perera',
    technologies: 'Next.js, MongoDB, Express.js, Node.js',
    imageSrc: '/taxi.png',
    imageGallery: [
      '/taxi.png',
      '/taxi2.png',
      '/taxi3.png'
    ]
  },
  {
    id: 'E-Library',
    title: 'E-Library',
    category: 'Web Development',
    description: 'AI Lab Granada develops integration solutions for e-library management systems.',
    client: 'University Project',
    technologies: 'Next.js, MongoDB, Express.js, Node.js',
    imageSrc: '/elibrary.png',
  },
  {
    id: 'khora',
    title: 'Khora – Urban Thinkers Conference',
    category: 'Web Development',
    description: 'Khora focuses on urban planning and development, addressing innovative solutions.',
    client: 'Urban Planning Conference',
    technologies: 'React, Node.js, Express.js, MongoDB',
    imageSrc: '/khora.png',
  },
];

// Function to generate static paths for each project
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Dynamically import ProjectClientComponent without server-side rendering
const ProjectClientComponent = dynamic(() => import('./ProjectClientComponent'), { ssr: false });

// Main ProjectPage component
export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find project by ID from the URL params
  const project = projects.find((project) => project.id === params.id);

  // If project not found, trigger 404 page
  if (!project) {
    notFound();
  }

  // Render the client-side project component with the project data
  return <ProjectClientComponent project={project} nextProject={undefined} />;
}
