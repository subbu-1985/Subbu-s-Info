"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Student Attendance Alert System",
      description: "A secure, foolproof attendance tracking system for educational institutions that uses multiple verification methods and AI-driven analysis to improve student attendance.",
      technologies: ["Python", "Javascript", "Flask", "React"],
      github: "https://github.com/subbu-1985/AI-Powered-Student-Attendance-Alert-System",
      demo: "https://github.com/subbu-1985/AI-Powered-Student-Attendance-Alert-System"
    },
    {
      title: "QuickDeliver",
      description: "A modern Streamlit application for food delivery customer service with AI chatbot integration",
      technologies: ["Streamlit", "Python", "Openrouter-Api", "Postgresql", ],
      github: "https://github.com/subbu-1985/talentfarm_project",
      demo: "https://github.com/subbu-1985/talentfarm_project"
    },
    {
      title: "Voice Chatbot Application",
      description: "This is a Python-based voice chatbot application that supports voice recording, speech-to-text transcription, AI text generation using Google Gemini API, and text-to-speech playback.",
      technologies: ["Python", "Flask", "Cython", "Fortran", "Html"],
      github: "https://github.com/subbu-1985/chatbot",
      demo: "https://chatbot-1-1y18.onrender.com/"
    },
    {
      title: "Library GenAI",
      description: "A modern library management system with AI-powered book recommendations,  Google's Gemini LLM for intelligent book suggestions",
      technologies: ["Flask", "Flask", "python script", "Google Gemini LLM"],
      github: "https://github.com/subbu-1985/Library-GenAI",
      demo: "https://github.com/subbu-1985/Library-GenAI"
    }
  ];

  return (
<section id="projects" className="py-20 bg-gray-800/30 backdrop-blur-sm text-white">
      <div className="container mx-auto px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in AI, cloud computing, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
