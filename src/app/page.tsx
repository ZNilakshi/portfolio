'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaLaptopCode, 
  FaPalette, 
  FaMobileAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFacebook, 
  FaWhatsapp, 
  FaEnvelope, 
  FaArrowUp,
  FaBlog,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
  FaImages,
  FaAward,
  FaCertificate
} from "react-icons/fa";
import { 
  SiFlutter, 
  SiFigma, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb,
  SiMysql,
  SiSpringboot
} from "react-icons/si";

// Project type and data
type Project = {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  technologies?: string[];
};

const projects: Project[] = [
  {
    id: 'drivex',
    title: 'DriveX',
    category: 'Web Development',
    imageSrc: '/drivex.png',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'novacare',
    title: 'NOVA CARE',
    category: 'Web Development',
    imageSrc: '/novacare.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'e-library',
    title: 'E - Library',
    category: 'Web Development',
    imageSrc: '/elibrary.png',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'n_and_b',
    title: 'N & B Taxi Services',
    category: 'Web Development',
    imageSrc: '/nb.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'crop-care-app',
    title: 'Crop Care App',
    category: 'App Development',
    imageSrc: '/cropcare.png',
    technologies: ['Flutter', 'Java kotlin', 'Python', 'MongoDB'],
  },
  {
    id: 'lylu',
    title: 'LYLU',
    category: 'Web Development',
    imageSrc: '/lylu.png',  
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'teacher',
    title: 'Mutual Transfer Portal',
    category: 'Web Development',
    imageSrc: '/teacher.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'silva',
    title: 'De Silva Bar',
    category: 'Web Development',
    imageSrc: '/bar.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
];

// Blog post type and data
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
  image?: string; 

};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'MERN App එකක් Dockerizing කරන ආකාරය',
    excerpt: 'Step-by-step guide on how to containerize a MERN application using Docker for easier deployment and scalability.',
    date: 'Aug 15, 2023',
    readTime: '7 min read',
    category: 'DevOps',
    image: '/devops.webp',
  
    link: 'https://medium.com/@nilakshisamarasekara0/mern-app-එකක්-dockerizing-කරන-ආකාරය-e56c3fc2efdc'
  },
  {
    id: '2',
    title: 'DevOps කියන්නේ මොකක්ද?',
    excerpt: 'An introduction to DevOps, its core principles, and why it is essential for modern software development teams.',
    date: 'Sep 05, 2023',
    readTime: '6 min read',
    category: 'DevOps',
    image: '/docker.webp',
  
    link: 'https://medium.com/@nilakshisamarasekara0/devops-කියන්නේ-මොකක්ද-c6b156365415'
  }
];

// Academic and Professional data
const academicData = [
  {
    id: 1,
    institution: "Sabaragamuwa University of Sri Lanka",
    degree: "Bachelor of Science in Software Engineering ",
    period: "2022 - 2026",
    description: "Specialized in Software Engineering and Web Technologies. ",
    icon: <FaGraduationCap className="text-purple-400 text-xl" />
  },
  
];



// Gallery images
const galleryImages = [
  { id: 1, src: "/gallery1.jpeg", title: "INSL Provincial Competition 2024", description: "Winners" },
  { id: 2, src: "/gallery2.png", title: "Team Collaboration",  },
  { id: 3, src: "/gallery3.png", title: "PYHACK 2023",},
  { id: 4, src: "/gallery4.jpeg", title: "Team Collaboration",  },
  { id: 5, src: "/gallery5.jpeg", title: "Team Collaboration",  },
  { id: 6, src: "/gallery6.png", title: "INSL Provincial Competition 2023", description: "TOP 10" },
];

// Project Card Component
const ProjectCard: React.FC<Project> = ({ 
  id, 
  title, 
  category, 
  imageSrc,
  technologies = [] 
}) => {
  return (
    <div className="project-card-wrapper">
      <Link href={`/projects/${id}`} passHref>
        <div className="project-card cursor-pointer">
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
            {technologies.length > 0 && (
              <div className="tech-badges">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
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
          border-color: #a78bfa;
          box-shadow: 0 10px 25px rgba(167, 139, 250, 0.2);
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
          background: rgba(167, 139, 250, 0.9);
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

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .tech-badge {
          background: rgba(148, 163, 184, 0.2);
          color: #94a3b8;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-link {
          color: #a78bfa;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .project-card:hover .card-link {
          color: #a78bfa;
        }
      `}</style>
    </div>
  );
};

// Blog Card Component

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, date, readTime, category, link, image }) => {
  const cardContent = (
    <>
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      <span className="text-purple-400 text-sm font-medium">{category}</span>
      <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{readTime}</span>
        <span>{readTime}</span>
      </div>
      
      {link && (
        <div className="mt-4 flex items-center text-purple-400 text-sm">
          <span>Read on Medium</span>
          <FaExternalLinkAlt className="ml-2 text-xs" />
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <motion.a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 h-full cursor-pointer"
        whileHover={{ y: -5 }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 h-full cursor-pointer"
      whileHover={{ y: -5 }}
    >
      {cardContent}
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<{item: any, isLast: boolean}> = ({ item, isLast }) => {
  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-12 h-12 border-2 border-purple-500 rounded-full bg-gray-800">
          {item.icon}
        </div>
        {!isLast && <div className="w-1 h-full bg-purple-500 opacity-50 mt-2"></div>}
      </div>
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-bold text-white">{item.institution || item.company}</h3>
        <p className="text-purple-400 font-medium">{item.degree || item.position}</p>
        <p className="text-gray-400 text-sm mb-2">{item.period}</p>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </div>
  );
};

// Gallery Item Component
const GalleryItem: React.FC<{image: any}> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image 
        src={image.src} 
        alt={image.title} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-white font-bold">{image.title}</h4>
        <p className="text-gray-300 text-sm">{image.description}</p>
      </motion.div>
    </motion.div>
  );
};

const PortfolioPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const words = ["UI/UX DESIGNER", "FRONTEND DEVELOPER", "FULLSTACK DEVELOPER", "SOFTWARE ENGINEER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Section detection for active nav link
      const sections = ['home', 'foundations', 'expertise', 'work', 'gallery', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleEmailClick = () => {
    window.location.href =
      "mailto:nilakshisamarasekara0@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Nilakshi,%0A%0AI%20found%20your%20portfolio%20and...";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white" style={{ fontFamily: "Courier New, Courier, monospace" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-purple-400">Nilakshie</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'foundations', 'expertise', 'work', 'gallery', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md transition-all ${
                    activeSection === section 
                      ? 'text-purple-400 font-bold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home/Profile Section */}
      <section id="home" className="min-h-screen flex items-center justify-center p-6 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-5xl font-bold">
              HI, 
              <br />
              I&apos;M NILAKSHIE!<br />
              <br />
              <span className="text-purple-400">{words[index]}</span>
            </h1>
            <p className="text-gray-400 mt-4">
              I&apos;m a passionate Frontend Developer, Full Stack Developer, and Software Engineer with a mission to build efficient, scalable, and user-friendly applications. With expertise in modern web technologies, intuitive UI/UX design, and robust backend development, I specialize in creating seamless digital experiences that engage and inspire.
            </p>
            <div className="mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all duration-300 mr-4"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold rounded-full transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <motion.div
              className="absolute w-[110%] h-[110%] border-2 border-purple-400/30"
              animate={{ 
                rotate: 360,
                y: [-8, 8, -8],
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></motion.div>
            
            <motion.div 
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/babaa.jpg" 
                alt="Profile"
                fill
                className="object-cover"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </motion.div>
          </motion.div>
          </div>
        </div>
      </section>

     

      {/* Expertise Section */}
      <section id="expertise" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h1
            className="text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MY EXPERTISE
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full-Stack Development */}
            <motion.div
              className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              whileHover={{ scale: 1.03, borderColor: "#4ade80" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FaLaptopCode className="text-green-400 text-7xl" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-center text-green-400">
                Full-Stack Development
              </h3>
              <div className="flex justify-center gap-3 flex-wrap mb-6">
                <SiReact className="text-3xl text-blue-400" />
                <SiNextdotjs className="text-3xl text-white" />
                <SiNodedotjs className="text-3xl text-green-500" />
                <SiMongodb className="text-3xl text-green-600" />
                <SiMysql className="text-3xl text-blue-500" />
                <SiSpringboot className="text-3xl text-green-400" />
              </div>
              <p className="text-gray-300 flex-grow">
                Building complete web applications from frontend to backend. Specialized in React, Next.js, Node.js, Spring Boot, and databases like MongoDB & MySQL. 
                Focus on performance, security, and scalable architecture.
              </p>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              whileHover={{ scale: 1.03, borderColor: "#60a5fa" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
              >
                <FaMobileAlt className="text-blue-400 text-7xl" />
                <SiFlutter className="text-blue-400 text-7xl ml-2" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
                Mobile Development
              </h3>
              <div className="flex justify-center gap-3 mb-6">
                <SiFlutter className="text-3xl text-blue-500" />
                <span className="text-xl">Android</span>
                <span className="text-xl">iOS</span>
              </div>
              <p className="text-gray-300 flex-grow">
                Creating beautiful, high-performance cross-platform mobile applications with Flutter. Focus on smooth animations, native functionality, and excellent user experiences.
              </p>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              className="border border-gray-700 p-8 rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              whileHover={{ scale: 1.03, borderColor: "#a78bfa" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
              >
                <FaPalette className="text-purple-400 text-7xl" />
                <SiFigma className="text-purple-400 text-7xl ml-2" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
                UI/UX Design
              </h3>
              <div className="flex justify-center gap-3 mb-6">
                <SiFigma className="text-3xl text-purple-500" />
                <span className="text-xl">Prototyping</span>
              </div>
              <p className="text-gray-300 flex-grow">
                Crafting intuitive and visually appealing interfaces. User research, wireframing, prototyping, and creating design systems that enhance usability and engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center p-4 sm:p-12 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-purple-400 text-5xl md:text-5xl font-bold text-center mb-2">
            MY PROJECTS
          </h1>
          <p className="text-gray-400 text-xl text-center mb-12">
            A collection of my recent work
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-12">
            {['All', 'Web Development', 'App Development'].map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full border transition-all ${
                  selectedCategory === category 
                    ? 'bg-purple-400 border-white text-white' 
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>

{/* Gallery Section with Consistent Photo Sizing */}
<section id="gallery" className="min-h-screen flex items-center justify-center py-20 px-4">
  <div className="max-w-6xl mx-auto w-full">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MY</span> GALLERY
    </motion.h2>
    <p className="text-gray-400 text-xl text-center mb-12 max-w-3xl mx-auto">
      A visual journey through my professional experiences, events, and accomplishments
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image) => (
        <motion.div 
          key={image.id}
          className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-500 flex flex-col"
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-72 overflow-hidden">
            <Image 
              src={image.src} 
              alt={image.title} 
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
           
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-3">{image.title}</h3>
           
          
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center p-4 sm:p-12 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center mb-12">
            <FaBlog className="text-purple-400 text-4xl mr-4" />
            <h1 className="text-purple-400 text-5xl font-bold text-center">
              MY BLOGS
            </h1>
          </div>
          <p className="text-gray-400 text-xl text-center mb-12 max-w-2xl mx-auto">
            Sharing my knowledge and experiences through writing about technology, design, and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {blogPosts.map((post) => (
    <BlogCard
      key={post.id}
      id={post.id}
      title={post.title}
      excerpt={post.excerpt}
      date={post.date}
      readTime={post.readTime}
      category={post.category}
      link={post.link}        // Add this line
      image={post.image}      // Add this line
    />
  ))}
</div>

       
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-12 py-20">
        <div className="flex flex-wrap items-center justify-center w-full max-w-6xl">
          {/* Left Section */}
          <div className="flex-1 min-w-[300px] text-left pr-0 sm:pr-10 mb-10 sm:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold uppercase leading-tight">
              Let&apos;s <br />
              <span className="text-purple-400">Create</span> Something <br />{" "}
              Amazing!
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white">
              <span className="text-purple-400">
                Ready to bring your ideas to life?
              </span>
              <br /> <br />
              Whether you want to collaborate on a project or just chat, I&apos;d
              love to hear from you!
            </p>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4 max-w-md">
              <button
                onClick={handleEmailClick}
                className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                <FaEnvelope className="text-2xl" />
                Send me an Email
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 min-w-[300px] sm:min-w-[400px] text-center mt-6 p-6 sm:p-8 bg-black rounded-xl shadow-lg border border-purple-500">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 uppercase tracking-wide">
                Get In Touch
              </h3>
              <a
                href="mailto:nilakshisamarasekara0@gmail.com"
                className="block mt-2 text-base sm:text-lg font-medium text-white border-b-2 border-purple-400 hover:text-purple-400 transition-colors"
              >
                nilakshisamarasekara0@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 uppercase tracking-wide">
                Connect With Me
              </h3>
              <div className="flex justify-center space-x-6 sm:space-x-8">
                <a
                  href="https://www.linkedin.com/in/znilakshi"
                  className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-purple-400 hover:scale-125"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ZNilakshi"
                  className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-purple-400 hover:scale-125"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100081272980560"
                  className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-purple-400 hover:scale-125"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://wa.me/94702610614?text=Hi%20Nilakshi"
                  className="text-white text-3xl sm:text-4xl transition-transform duration-300 hover:text-purple-400 hover:scale-125"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Nilakshi Samarasekara. All rights reserved.
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default PortfolioPage;