"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:subramanyampurni.ai@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919393711413";
  };

  return (
<section id="contact" className="py-20 bg-gray-900/30 backdrop-blur-sm text-white relative z-10">
      <div className="container mx-auto px-10">
        <motion.div
          className="text-center  p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            LET&apos;S CONNECT
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Ready to collaborate on  projects? Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Email Button */}
          <motion.button
            onClick={handleEmailClick}
            className="group relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">SEND EMAIL</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Call Button - Paused for later */}
          <motion.button
            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CALL ME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Prefer other methods?</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:22bq1a42d0@vvit.net"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              MS Outlook
            </a>
            <a
              href="https://linkedin.com/in/purni-subramanyam-619a59269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
