"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "SQL", "Java"],
    "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    "Web Development": ["React", "Node.js", "MongoDB","PostgreSql"],
    "Cloud Technologies": ["GCP", "Vercel", "Netlify", "Render"],
    "Tools & Technologies": ["Git", "VS Code", "Jupyter"]
  };

  return (
<section id="skills" className="py-20 bg-gray-900/60 backdrop-blur-sm text-white">
      <div className="container mx-auto px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 border-b border-gray-600 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400">
            Always learning and exploring new technologies to stay at the forefront of innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
