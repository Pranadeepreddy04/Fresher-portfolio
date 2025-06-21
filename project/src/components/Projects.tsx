import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #8b5cf6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #06b6d4 75%), linear-gradient(-45deg, transparent 75%, #ec4899 75%)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <Code2 className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-purple-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: -20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="bg-purple-600 p-2 rounded-full"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    className="bg-gray-700 p-2 rounded-full"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#8b5cf6"
                      }}
                      className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}