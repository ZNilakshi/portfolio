import Image from "next/image";
import Expertise from "../component/Expertise";
import Work from "../component/Work";
import Contact from "../component/Contact";

export default function Home() {
  return (
    <main>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 md:px-20 gap-16"
      style={{ fontFamily: "Courier New, Courier, monospace" }}>

      
      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center md:flex-row gap-10">
        <div className="relative flex items-center justify-center w-64 h-64">
          <div className="absolute bg-yellow-500 rounded-full w-72 h-72 -z-10"></div>
          <Image
            src="/my.png"
            alt="Profile Photo"
            width={180}
            height={180}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <span className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm">
            SOFTWARE ENGINEER
          </span>
          <h1 className="text-white text-5xl font-bold mt-2 leading-tight">
            NILAKSHIE SAMARASEKARA
          </h1>
          <p className="text-gray-300 text-lg mt-2">
            Front-End & Mobile App Developer, passionate about crafting elegant user experiences.
          </p>
        </div>
      </div>
      </div>
      {/* Sections Below Home */}
      <div >
        <Expertise />
        <Work />
        <Contact />
      </div>

    </main>
  );
}
