import React from "react";

import alarm from '../assets/alarm.png'
import cctv from '../assets/cctv1.png'
import embedded from '../assets/embeded.png'
import iot from '../assets/iot.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: embedded,
      title: "EMBEDDED SYSTEM",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: iot,
      title: "IOT",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: alarm,
      title: "SECURITY SYSTEM",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: cctv,
      title: "CCTV",
      style: "shadow-blue-600",
    },
   
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b pt-11 from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto pt-14 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-28">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I'have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
