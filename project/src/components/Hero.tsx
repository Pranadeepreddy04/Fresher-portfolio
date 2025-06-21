import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Mail, Github, Linkedin, FileText } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-8 overflow-hidden">
      <BackgroundAnimation />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-blue-500 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500 opacity-20 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-12 h-12 border-2 border-green-500 opacity-20"
        animate={{
          x: [0, -15, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Pranadeep Reddy Panyala
          </motion.h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.span
            animate={{ color: ["#ffffff", "#60a5fa", "#a855f7", "#ec4899", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Software Developer
          </motion.span>
          {" | "}
          <motion.span
            animate={{ color: ["#ffffff", "#10b981", "#f59e0b", "#ef4444", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            Full Stack Developer
          </motion.span>
          {" | "}
          <motion.span
            animate={{ color: ["#ffffff", "#8b5cf6", "#06b6d4", "#84cc16", "#ffffff"] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            Machine Learning and AI Developer
          </motion.span>
        </motion.p>

        <motion.div 
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/Pranadeepreddy04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              color: "#60a5fa"
            }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <Github className="w-10 h-10" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/panyala-pranadeep-reddy-8837bb208/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.2, 
              rotate: -360,
              color: "#0ea5e9"
            }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <Linkedin className="w-10 h-10" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { href: "#education", icon: GraduationCap, text: "Education", color: "bg-gradient-to-r from-blue-500 to-blue-700" },
            { href: "#experience", icon: Briefcase, text: "Experience", color: "bg-gradient-to-r from-green-500 to-green-700" },
            { href: "#projects", icon: Code2, text: "Projects", color: "bg-gradient-to-r from-purple-500 to-purple-700" },
            { href: "#contact", icon: Mail, text: "Contact", color: "bg-gradient-to-r from-red-500 to-red-700" },
            { href: "https://drive.google.com/file/d/1JTLjNjikJI_Sb22JPpGbsK6mN6ODsjFS/view?usp=sharing", icon: FileText, text: "Resume", color: "bg-gradient-to-r from-yellow-500 to-yellow-700", external: true }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 ${item.color} px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}