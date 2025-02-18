import { FaLaptopCode } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

export default function Expertise() {
  return (
    <main className="bg-black text-white min-h-screen py-20"  style={{ fontFamily: 'Courier New, Courier, monospace' }}>
      <div className="max-w-6xl mx-auto px-4" >
        <h1 className="text-4xl font-bold text-center mb-12">MY EXPERTISE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Full-Stack Development */}
          <div className="border border-gray-700 p-8 rounded-lg text-center">
            <FaLaptopCode className="mx-auto text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              <span className="underline decoration-green-500">Full-Stack Dev</span> React.js ,Next.js, MongoDB, Express, Node.js
            </h3>
            <p className="text-gray-400 mt-4">
              Experienced in building end-to-end web applications using the MERN stack, with a focus on server-side development, database management, and scalable architecture.
            </p>
          </div>

          {/* Flutter Development */}
          <div className="border border-gray-700 p-8 rounded-lg text-center">
            <SiFlutter className="mx-auto text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              <span className="underline decoration-orange-500">Flutter Dev</span> Android, iOS
            </h3>
            <p className="text-gray-400 mt-4">
              Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
