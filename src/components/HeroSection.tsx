"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    // Dynamically load Typed.js
    import("typed.js").then(({ default: Typed }) => {
      const typed = new Typed(typedRef.current!, {
        strings: ["AI & Cloud Enthusiast", "Problem Solver"],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|", // Explicit cursor character
        smartBackspace: true,
      });

      return () => {
        typed.destroy();
      };
    });
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="about"
      className="relative flex flex-col h-screen text-white overflow-hidden"
      style={{
        background: "linear-gradient(270deg, rgba(123,44,191,0.65) 20%, rgba(44,62,80,0.65) 100%)"
      }}
    >
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
             
              <div className="text-3xl md:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                Purni Subramanyam
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks
                .filter((link) => link.name !== "Contact")
                .map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                ))}
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center pt-20">
        {/* Neural network background is now handled globally */}

  <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between w-full z-10">
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-start w-full md:w-1/2 p-4 md:p-8 rounded-lg z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 object-cover shadow-lg mx-auto md:mx-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            />

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 text-center md:text-left w-full"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Purni Subramanyam
            </motion.h1>

            <div className="w-full text-center md:text-left mb-4">
              <span
                ref={typedRef}
                className="text-lg md:text-xl text-blue-300 font-medium"
              />
            </div>

            <motion.p
              className="text-base md:text-lg text-left mt-4 text-gray-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              As a final year CSE (AI & ML) student, I am passionate about applying AI to solve real-world challenges and eager to develop impactful solutions through hands-on experience in machine learning, cloud computing, and full-stack development. 2026 Graduate.
            </motion.p>
          </motion.div>

          {/* Right Contact Section */}
          <motion.div
            className="flex flex-col items-start w-full md:w-5/12 p-6 md:p-8 rounded-lg  bg-opacity-50 shadow-lg mt-8 md:mt-0 md:ml-8 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Contact
            </motion.h2>

            <motion.div
              className="space-y-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="text-gray-200">subramanyampurni.ai@gmail.com</p>
              <p className="text-gray-200">+91 9393711413</p>
              <p className="text-gray-200">Guntur, India</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <a
                href="https://github.com/subbu-1985"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/purni-subramanyam-619a59269/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V20h-4v-5.5c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V20h-4V8z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>LeetCode</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
