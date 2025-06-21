import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "pranadeep0405@gmail.com",
      href: "mailto:pranadeep0405@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(518) 229-0782",
      href: "tel:5182290782",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Albany, New York",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity }}
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
            <Send className="w-16 h-16 mx-auto text-red-500 mb-4" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to collaborate? Let's build something amazing together!
          </motion.p>
          <motion.div
            className="h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-500"
            >
              <motion.div
                className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl mb-6`}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-center group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {item.value}
              </motion.p>

              <motion.div
                className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 text-lg"
            animate={{
              color: ["#9ca3af", "#60a5fa", "#a855f7", "#ec4899", "#9ca3af"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "The best way to predict the future is to create it."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}