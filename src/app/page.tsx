import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 md:px-20" style={{ fontFamily: 'Courier New, Courier, monospace' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-40"
          z-index ="-1"
        />
      </div>

      {/* Right Section - Profile Photo with Circular Background */}
      <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 mt-8 md:mt-0">
        <div className="absolute inset-0 bg-yellow-500 rounded-full -z-10 w-60 h-60 md:w-80 md:h-80"></div>
        <Image
          src="/logo.jpg"
          alt="Profile Photo"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Left Section - Text Content */}
      <div className="relative z-10 flex flex-col text-center md:text-left max-w-lg">
        <span className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm self-center md:self-start">
          SOFTWARE ENGINEER
        </span>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-4 leading-tight">
          NILAKSHIE SAMARASEKARA
        </h1>
        <p className="text-gray-300 text-sm md:text-lg mt-4">
          Front-End & Mobile App Developer, passionate about crafting elegant user experiences.
        </p>

        
      </div>
    </main>
  );
}
