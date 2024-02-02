import React from "react";
import alarmsystem from "../assets/portfolio/alarmsystem.jpg";
import cctysystem from "../assets/portfolio/cctvsystem.png";
import mech from "../assets/portfolio/machinesystem.jpeg";
import pasystem from "../assets/portfolio/pasystem.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: alarmsystem,
      title:'Alarm System'
    },
    {
      id: 2,
      src: pasystem,
      title:'PA System'
    },
    {
      id: 3,
      src: mech,
      title:'MECHINE Learning'
    },
    {
      id: 4,
      src: cctysystem,
      title:'CCTY System'
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b relative from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md hover:scale-105" />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
