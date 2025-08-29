import React from "react";
import "../index.css"; // make sure this path is correct

export default function Welcome({ onContinue }) {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 animate-gradient"></div>

      {/* Semi-transparent cityscape overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      ></div>

      {/* Tiny floating glowing lights */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating buildings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-building left-10 animate-float"></div>
        <div className="floating-building left-32 animate-float"></div>
        <div className="floating-building left-56 animate-float"></div>
        <div className="floating-building left-80 animate-float"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center animate-fadeIn">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tenant App</h1>
        <p className="mb-8 text-lg">Manage your tenants and payments easily.</p>
        <button
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded shadow-lg transform hover:scale-105 animate-bounce animate-glow"
          onClick={onContinue}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
