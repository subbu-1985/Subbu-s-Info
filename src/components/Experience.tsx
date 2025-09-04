"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "ML Virtual Intern",
      company: "Internshipstudio",
      duration: "1month",
      description: "learns about machine learning by working on real projects and gaining practical skills",
    },
    {
      role: "Ai & ML Virtual intern",
      company: "Andhra Pradesh State Skill Development Corporation",
      duration: "6weeks(may-june 2024)",
      description: "Assisted in AI  project   gained hands-on experience in artificial intelligence and machine learning using the IBM SkillsBuild platform.",
    },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-10 bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-16"
    >
      <h2 className="text-5xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-md text-white"
          >
            <h3 className="text-2xl font-semibold text-green-400">{exp.role}</h3>
            <p className="italic text-blue-400">{exp.company}</p>
            <p className="text-yellow-400">{exp.duration}</p>
            <p className="text-orange-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
