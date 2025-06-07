import React from 'react';

const Profile = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="w-70 h-70 rounded-full overflow-hidden shadow-lg">
          <img
            src="/mypicc.jpg" 
            alt="Denny"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hey, I’m <span className="font-semibold text-blue-600">Deni</span>, a passionate Full Stack Developer in the making — with a deep love for building impactful web applications.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I blend the power of Python Django and React to solve real-world problems. With a background in English Literature 📖 and a mind trained for logic and design, I bring creativity and structure together.
          </p>
          <p className="text-lg text-gray-700"> 
            Let’s build something innovative, efficient, and beautiful — together. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
