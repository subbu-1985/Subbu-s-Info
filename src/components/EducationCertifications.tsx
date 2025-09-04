"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EducationCertifications() {
  const certifications = [
    {
      title: "Google Cloud Associate Engineer",
      description: "Cloud services",
    },
    {
      title: "NPTEL Java Programming",
      description: "Java Concepts",
    },
    {
      title: "Applied AI Lab: Deep Learning for Computer Vision",
      description: "Computer Vision",
    },
    {
      title: "Nptel Cloud Computing",
      description: "Cloud Basics",
    },
  ];

  return (
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-16 bg-black/30 backdrop-blur-sm rounded-xl p-8">
        <motion.section
          id="education"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">Education</h2>
          <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-md text-white space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">
              Vasireddy Venkatadri Institute of Technology
            </h3>
            <p className="italic text-green-400">
              B.Tech, CSE-Artificial Intelligence & Machine Learning
            </p>
            <p className="text-orange-400">2022 – 2026</p>
            <p className="text-purple-400">Deep Learning, Cloud Computing, Data Structures & Algorithms</p>
          </div>
        </motion.section>

        <motion.section
          id="certificates"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-purple-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    );
}
