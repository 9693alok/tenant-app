import React, { useEffect, useState } from "react";
import "../index.css"; // Correct relative path to index.css

export default function LoadingScreen() {
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center relative overflow-hidden">
      {/* Welcome Text */}
      <h1 className="absolute top-20 text-4xl md:text-6xl font-bold text-gray-800 animate-fadeIn">
        Welcome to TenantApp
      </h1>

      {/* Perspective Container for 3D door */}
      <div className="perspective w-64 h-96 relative">
        <div
          className={`door bg-yellow-400 w-full h-full rounded-md shadow-lg transform transition-transform duration-[1800ms] ${
            doorOpen ? "door-open" : ""
          }`}
        >
          {/* Door handle */}
          <div className="door-handle w-4 h-4 bg-gray-700 rounded-full absolute right-4 top-1/2 -translate-y-1/2 shadow-md"></div>
        </div>
      </div>

      {/* Room / Furniture Elements */}
      <div
        className={`room absolute bottom-10 flex justify-center space-x-4 w-full max-w-lg ${
          doorOpen ? "animate-roomFade" : ""
        }`}
      >
        <div className="floor w-12 h-2 bg-gray-800 animate-floorRise"></div>
        <div className="wall w-12 h-24 bg-gray-500 animate-wallRise"></div>
        <div className="chair w-8 h-8 bg-red-400 rounded-md animate-chairRise"></div>
        <div className="bed w-16 h-8 bg-blue-400 rounded-md animate-bedRise"></div>
        <div className="sofa w-12 h-6 bg-green-400 rounded-md animate-sofaRise"></div>
        <div className="table w-10 h-4 bg-orange-400 rounded-md animate-tableRise"></div>
      </div>

      {/* Loading Text */}
      <p className="absolute bottom-4 text-gray-700 text-lg animate-bounce">
        Loading your dream home...
      </p>
    </div>
  );
}
