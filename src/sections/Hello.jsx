import React from "react";

const Hello = () => {
  return (
    <main id="hello" className="w-full h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <img
          src="/deni_logo.png"
          alt="Denny profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Hi, I'm <span className="text-blue-600">Maria Deniston</span> 👋
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6">
          Aspiring Full Stack Developer
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          I build modern web apps using Django & React. Let's create something
          amazing together!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hello;