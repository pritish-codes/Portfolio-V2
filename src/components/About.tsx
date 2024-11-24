import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "JavaScript", "TailwindCSS"],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    category: "Backend",
    items: ["Node.js", "Python"],
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: "Tools",
    items: ["Git", "Firebase", "Snowflake"],
    icon: <GitBranch className="w-6 h-6" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-dark mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate web developer with a keen eye for creating elegant solutions to complex problems. My journey in web development started with curiosity and has evolved into a professional pursuit of crafting exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With expertise in both frontend and backend technologies, I bring a holistic approach to web development. I love solving challenging problems on LeetCode and building impactful projects that make a difference.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-primary-dark dark:text-primary-light font-semibold">Fun fact:</span>
              <span className="text-gray-600 dark:text-gray-300">I love solving challenging problems on LeetCode!</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-primary-dark dark:text-primary-light">
                    {skillGroup.icon}
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}