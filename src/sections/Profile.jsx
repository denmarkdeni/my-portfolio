import React from 'react';

const Profile = () => {
  return (
    <section className="text-[#F5F5F5] py-12 px-4" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="/mypicc.jpg"
            alt="Denny"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2 text-[#22D3EE]">About Me</h2>
          <p className="text-lg mb-4">
            Hey, I’m <span className="font-semibold text-[#22D3EE]">Deni</span>, a passionate Full Stack Developer in the making — with a deep love for building impactful web applications.
          </p>
          <p className="text-lg mb-4">
            I blend the power of Python Django and React to solve real-world problems. With a background in English Literature 📖 and a mind trained for logic and design, I bring creativity and structure together.
          </p>
          <p className="text-lg">
            Let’s build something innovative, efficient, and beautiful — together. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;