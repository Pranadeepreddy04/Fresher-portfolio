import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Users, Brain, Cloud, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Full Stack Development",
    icon: <Layout className="w-8 h-8" />,
    skills: ["ReactJS", "JavaScript", "Bootstrap", "HTML & CSS", "Next.js", "Express", "RESTful API", "Authentication", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-8 h-8" />,
    skills: ["Java", "JavaScript", "Python", "SQL", "TypeScript", "MySQL"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    skills: ["Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow", "PyTorch", "OpenCV", "NLTK", "Streamlit", "Flask", "FastAPI"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Tools & Frameworks",
    icon: <Wrench className="w-8 h-8" />,
    skills: ["Azure", "Git", "Selenium", "Visual Studio Code", "Agile / Scrum", "Docker", "Postman"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Cloud & Miscellaneous",
    icon: <Cloud className="w-8 h-8" />,
    skills: ["Amazon AWS", "Artificial Intelligence", "Machine Learning", "Cloud"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-8 h-8" />,
    skills: ["Team Player", "Bias for action", "Problem Solving", "Communication", "Adaptability"],
    color: "from-yellow-500 to-amber-500"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 group"
            >
              <motion.div
                className={`bg-gradient-to-r ${category.color} p-3 rounded-xl inline-block mb-4`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  {category.icon}
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(139, 92, 246, 0.2)"
                    }}
                    className="bg-gray-700 rounded-lg p-3 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  >
                    <motion.span 
                      className="text-gray-200 font-medium"
                      whileHover={{ color: "#a855f7" }}
                    >
                      {skill}
                    </motion.span>
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-2`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}