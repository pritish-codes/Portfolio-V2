import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; // Removed Github import since it's no longer needed

const projects = [
  {
    title: "InstaChat",
    description: "Real-time chat app with authentication using React and Firebase.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Firebase", "TailwindCSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Clima",
    description: "Weather app built with Dart, using asynchronous programming and live location tracking.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    tech: ["Dart", "Flutter", "APIs"],
    github: "#",
    demo: "#"
  },
  {
    title: "E-commerce Store",
    description: "Full-stack project with React, Node.js, and MongoDB, featuring secure login and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A showcase of my skills, using Framer Motion for smooth animations.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "#",
    demo: "#"
  },
  {
    title: "Sudoku Solver",
    description: "Python-based web app implementing backtracking to solve Sudoku puzzles.",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Flask", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Data visualization tool using Chart.js and APIs to display real-time weather statistics.",
    image: "https://images.unsplash.com/photo-1590634332992-e636c365c0e6?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Chart.js", "APIs"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
