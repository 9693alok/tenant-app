import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email });
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Floating lights */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-float"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded hover:scale-105 transform transition-all shadow-lg hover:shadow-xl animate-glow"
        >
          Login
        </button>
      </form>
    </div>
  );
}
