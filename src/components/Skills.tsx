import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, MessageCircle, Settings, CheckCircle, TrendingUp } from 'lucide-react';

const whyChooseMe = [
  {
    icon: <Clock className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Quick Turnaround Time ⏱️',
    description: 'I deliver high-quality work on time, respecting deadlines and ensuring your needs are met without delays.',
  },
  {
    icon: <Target className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Personalized Solutions 🎯',
    description: 'Every project gets a tailored solution that aligns perfectly with your business goals and vision.',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Transparent Communication 💬',
    description: 'I prioritize clear and constant communication, keeping you updated at every step and available for quick calls.',
  },
  {
    icon: <Settings className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Scalable Solutions 🔧',
    description: 'I design solutions that can grow with your business, from small websites to large, scalable systems.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Continuous Support 🔧',
    description: 'Even after the project is delivered, I offer ongoing support and maintenance to ensure everything runs smoothly.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary-dark dark:text-primary-light" />,
    title: 'Proven Results 📈',
    description: 'With a history of successful projects, I guarantee measurable results like increased conversions and improved user experience.',
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Me?</h2>
          <div className="w-20 h-1 bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-start space-x-4">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
