import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { Project } from './ProjectClientComponent';


const projects : Project[] = [
  {
    id: 'drivex',
    title: 'DriveX',
    category: 'Web Development',
    description: 'This MERN stack-based vehicle booking system provides a seamless experience for users looking to book rides for weddings, airport transfers, long-distance travel, and point-to-point trips. It includes a user-friendly interface, real-time route mapping, dynamic pricing, and an admin panel for management.',
    client: 'Mr Dilhan Perera',
    technologies: ['Next.js', 'MongoDB', 'Express.js', 'Node.js'],
    imageSrc: '/drivex.png',
    imageGallery: [
      
    ],
        githubRepo: 'https://github.com/ZNilakshi/TAXI-booking.git',  
    deploymentLink: 'https://ahasnabooking.vercel.app/',  
    websiteLink: 'https://www.drivex.lk/',  
    features: [
      "User Authentication – Secure login and registration via email & password or Google Sign-In.",
      "Ride Booking System – Users can enter pickup & drop-off locations, date, and time to book a ride.",
      "Interactive Map Integration – Displays route, distance, and estimated fare before booking.",
      "Vehicle Selection – Users choose a vehicle based on availability, pricing, and preferences.",
      "Booking Confirmation – Users receive automated email notifications after a successful booking.",
      "User Dashboard – Allows users to view booking history, send support messages, and add reviews.",
      "Admin Panel – Secure admin access to manage bookings, users, messages, and reviews.",
      "Dynamic Pricing System – Fare calculation based on distance and selected vehicle type.",
      "Customer Support & Feedback – Users can send inquiries to support and leave ratings & reviews.",
      "Mobile & Desktop Responsive Design – Ensures seamless user experience on all devices."
    ]
,        type: 'Individual',  
  },
  {
    id: 'novacare',
    title: 'NOVA CARE',
    category: 'Web Development',
    description: 'Nova Care is a group hospital with branches. The website allows users to book appointments, find hospital branches, and search for doctors. It also includes an option to buy medicine. The project is still in progress, with a payment feature yet to be implemented.',
    
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    imageSrc: '/novacare.png',
     githubRepo: 'https://github.com/ZNilakshi/Nova-Care.git',  // GitHub repository link
    deploymentLink: 'https://nova-care-ten.vercel.app/',  // Deployment link (if available)
        features: [
          "Appointment Booking",
          "Branch Locator",
          "Doctor Search",
          "Medicine Purchase",
          "Responsive Design",
          "Admin Panel ",
          "Payment Integration "
        ], 
    type: 'Individual',  
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
  }, 
  {
    id: 'e-library',
    title: 'E- Library',
    category: 'Web Development',
    
    description: 'A digital library platform where users can discover, download, and save books',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    imageSrc: '/elibrary.png',
    githubRepo: 'https://github.com/ZNilakshi/Library.git',  // GitHub repository link
    features: [ "User Authentication (Google sign-in & password)",
      "Admin Panel for Book Management (Upload, edit, delete books)",
      "Category Navigation (Browse books by categories)",
      "Favorites & Downloads (Track saved and downloaded books)",
      "Profile Management (View and manage saved books)",
      "Responsive Design (Optimized for desktop and mobile)"
    ],  
    type: 'Individual', 
  }, 
  {
    id: 'n_and_b',
    title: 'N & B Taxi Services',
    category: 'Web Development',
    client: 'Mr Devapriya',
    description: 'A convenient taxi booking platform where users can book rides with ease. The website features an interactive map for ride tracking and includes a responsive vehicle section for browsing available vehicles. It ensures a smooth and user-friendly experience for both desktop and mobile users. (Ongoing project)',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    imageSrc: '/nb.png',
     githubRepo: 'https://github.com/ZNilakshi/N-B.git',  
    deploymentLink: 'https://n-b.vercel.app/',  
        features: [  "Ride Booking (Select destination and vehicle)",
      "Interactive Map ",
      "Responsive Vehicle Section ",
      "User-Friendly Interface (Intuitive design)",
      "Mobile & Desktop Optimization (Fully responsive)"],  
  }, 
  {
    id: 'crop-care-app',
    title: 'Crop Care App',
    category: 'App Development',
   
    description: 'CropCare is an innovative crop disease detection app designed to help farmers and agricultural professionals identify plant diseases effectively',
    technologies: ['Flutter', 'Python', 'Java kotlin', 'MongoDB'],
    imageSrc: '/cropcare.png',
    imageGallery: [
      '/cropcare1.png', '/cropcare2.png',
    ],
    features: ["Disease Detection (Upload images to detect diseases)",
   "User-Friendly Interface (Intuitive design for easy navigation)",
  "Real-Time Analysis (Instant feedback after uploading images)",],  // Add project features
    type: 'Group',  
  }, 
  {
    id: 'lylu',
    title: 'LYLU',
    category: 'Web Development',
   
    description: 'LYLU is a modern, eco-friendly online marketplace for buying and selling second-hand or new goods. Designed to promote sustainability, it offers a seamless platform for users to give pre-loved items a new life while reducing waste.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    imageSrc: '/lylu.png',
    imageGallery: [
      
    ],
    features: [ "Google OAuth Login - Secure authentication via Google",
      "Dynamic Product Listings - Post, browse, and filter  items",
      "Image Uploads (Cloudinary) - High-quality image storage & optimization",],  
    type: 'Dual',  
  }, 
  {
    id: 'teacher',
    title: 'Teacher Mutual Transfer Portal',
    category: 'Web Development',
    description: 'Teacher Transfer Hub is an intuitive web platform designed to simplify the teacher transfer process across schools. It enables educators to submit their transfer requests, discover matching teachers based on preferences, and connect with them directly. This system promotes transparency and ease in managing mutual transfers between schools and regions',
    
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    imageSrc: '/teacher.png',
     githubRepo: 'https://github.com/ZNilakshi/Swap.git',  
    deploymentLink: 'https://swap-ayoh.vercel.app',  
    features: [
      "Transfer Request Submission",
      "Preferred Location Selection",
      "Subject and Grade Level Filtering",
      "Matching Transfer Search",
      "Direct WhatsApp Contact",
      "Request Visibility Management",
      "Step-by-Step Guided Process",
      "Responsive Design",
      "User Authentication (Upcoming)",
      "User Profile Management (Upcoming)",
      "Admin Panel for Transfer Management (Upcoming)",
      
    ],
    
    type: 'Individual',  
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
  }, 
  {
    id: 'silva',
    title: 'De Silva Bar',
    category: 'Web Development',
    
    description: 'De Silva Bar is a full-service liquor e-commerce platform designed to streamline the online purchase and management of alcoholic beverages. It features a dynamic user interface for customers to browse and order products, along with a powerful admin dashboard for real-time stock tracking, product management, and order fulfillment. Built with performance, security, and usability in mind, the platform ensures a seamless shopping experience and efficient backend operations.(ONGOING)',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    imageSrc: '/bar.png',
    githubRepo: 'https://github.com/ZNilakshi/Library.git',  
    features: [ "Real-time stock management ",
  "Secure online payment integration ",
  "User authentication with role-based access (Admin & Customer)",
  "Responsive and intuitive user interface for browsing and ordering",
  "Admin dashboard for product management and order tracking",
  "Cloud-based image storage with Cloudinary integration",
  "Email notifications for order confirmations and updates",
  "Search and filtering functionality for products",
  "Cart and checkout system with order history",
  "Mobile-friendly design for all screen sizes"
    ],  
    type: 'Group', 
  }, 
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectClientComponent = dynamic(() => import('./ProjectClientComponent'), { ssr: false });

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((project) => project.id === params.id);
  if (!project) {
    notFound();
  }

   const currentIndex = projects.findIndex((p) => p.id === params.id);
  const nextProject = projects[currentIndex + 1] || null;

    return <ProjectClientComponent project={project} nextProject={nextProject} />;
}
