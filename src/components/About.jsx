import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        An Electronics Engineer is responsible for designing, developing, and testing electronic components, circuits, and systems for a variety of applications. I'have use a variety of tools and skills such as circuit design, micro-processing, and computer programming, also responsible for troubleshooting and repairing electronic systems.As an Electronics Engineers often work on projects that involve developing new products or improving existing products.
        </p>
        <br />
        <p className="text-xl">
        I specialize in developing and design of PA system, CCTV system, ALARM system. My journey has been a continuous learning process, and I'm excited to share my experiences and insights with the developing community.
        </p>
      </div>
    </div>
  );
};

export default About;
