import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: "UNIVERSITY AT ALBANY",
      degree: "Masters in Computer Science",
      date: "Expected Dec 2025",
      location: "Albany, NY",
      courses: "Software Engineering; Operating Systems; Algorithms; Artificial Intelligence; Machine Learning; Computer Vision"
    },
    {
      school: "KL UNIVERSITY HYDERABAD",
      degree: "Bachelors of Technology in AI and ML",
      date: "Jul 2019 - May 2023",
      location: "Hyderabad, IND",
      gpa: "8.87/10",
      courses: "Algorithms and Data Structures, Software Engineering, Developing Android Apps, Deep Learning"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </motion.div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
              <p className="text-blue-400 text-lg mb-2">{edu.degree}</p>
              <p className="text-gray-400 mb-2">{edu.date} | {edu.location}</p>
              {edu.gpa && <p className="text-green-400 mb-2">GPA: {edu.gpa}</p>}
              <p className="text-gray-300">
                <span className="font-semibold">Relevant Coursework:</span> {edu.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}