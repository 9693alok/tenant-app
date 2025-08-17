import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"; // icons

const Auth = () => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Particle circles positions
  const particles = Array.from({ length: 12 });

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
      
      {/* Floating particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white rounded-full opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background animated shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 rounded-full -top-20 -left-20 opacity-30"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-purple-500 rounded-full -bottom-20 -right-10 opacity-30"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-purple-700 to-pink-600 p-8 rounded-3xl shadow-2xl w-96 text-white z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Tenant Portal</h2>

        {!user ? (
          <>
            {/* Tabs */}
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-full font-semibold ${
                  tab === "login"
                    ? "bg-white text-purple-700 shadow-lg shadow-purple-300/50"
                    : "bg-purple-500 text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-full font-semibold ${
                  tab === "signup"
                    ? "bg-white text-purple-700 shadow-lg shadow-purple-300/50"
                    : "bg-purple-500 text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <motion.div
              key={tab}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Email */}
              <div className="relative mb-4">
                <HiOutlineMail className="absolute top-2.5 left-3 text-purple-700" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-purple-900 font-medium"
                />
              </div>

              {/* Password */}
              <div className="relative mb-6">
                <HiOutlineLockClosed className="absolute top-2.5 left-3 text-purple-700" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-purple-900 font-medium"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                onClick={tab === "login" ? handleLogin : handleSignup}
                className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-colors"
              >
                {tab === "login" ? "Login" : "Sign Up"}
              </motion.button>
            </motion.div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              🎉 Welcome, <span className="font-bold">{user.email}</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,0,0,0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Auth;
