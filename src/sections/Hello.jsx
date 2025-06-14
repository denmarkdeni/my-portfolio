import React from "react";

const Hello = () => {
  return (
    <main id="hello" className="w-full h-screen relative flex items-center justify-center px-4">
      <div className="text-center max-w-3xl z-10 bg-transparent p-6 sm:p-8 rounded-2xl">
        <img
          src="/deni_logo.png"
          alt="Denny profile"
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 object-cover border-4 border-[#22D3EE]"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#F5F5F5]">
          Hi, I'm <span className="text-[#22D3EE]">Maria Deniston</span> 👋
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F5F5F5] mb-6">
          Aspiring Full Stack Developer
        </h2>
        <p className="text-[#F5F5F5] text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          I craft modern web apps with Django & React. Let's build something extraordinary!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-[#22D3EE] text-[#1E3A8A] px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-[#F5F5F5] transition duration-300 text-sm sm:text-base font-semibold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#22D3EE] text-[#22D3EE] px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#22D3EE] hover:text-[#1E3A8A] transition duration-300 text-sm sm:text-base font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hello;