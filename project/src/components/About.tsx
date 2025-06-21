import { motion } from 'framer-motion';
import { User, Heart, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Heart, text: "Passionate about Technology", color: "text-red-400" },
    { icon: Target, text: "Goal-Oriented Mindset", color: "text-green-400" },
    { icon: Lightbulb, text: "Innovative Problem Solver", color: "text-yellow-400" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <User className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <highlight.icon className={`w-12 h-12 ${highlight.color}`} />
              </motion.div>
              <p className="text-white font-semibold">{highlight.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700"
        >
          <div className="prose prose-invert max-w-none">
            {[
              "Hello, I am Panyala Pranadeep Reddy, an engineering graduate with a specialization in Computer Science and Engineering with Artificial Intelligence and Machine Learning from KL University. I am currently pursuing my Master's in Computer Science at the University at Albany, New York.",
              "Alongside my academic journey, I am also interning at OpenText, where I work as a Frontend Developer and UI Automation Tester.",
              "As a computer science enthusiast, I have always been passionate about exploring the latest technologies and trends in the field. During my time at KL University, I had the opportunity to study various programming languages and tools that helped me gain a comprehensive understanding of the computer science landscape.",
              "In my current role at OpenText, I am responsible for developing and maintaining the user interfaces of software applications. I also work on UI automation testing to ensure that the applications function correctly and meet the required standards. This experience has strengthened my skills in programming, debugging, and quality assurance.",
              "I am a quick learner and always eager to take on new challenges. I am committed to developing my skills and knowledge further, and I believe that my passion for computer science and technology will drive me to achieve my professional goals.",
              "Thank you for taking the time to visit my profile. If you would like to connect with me, feel free to send me a message."
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-gray-300 text-lg leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}