import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  "Eduskills - AWS Academy Graduate - AWS Academy Cloud Architecting 2021",
  "Oracle Cloud Infrastructure 2021 Certified Architect Professional",
  "Microsoft Certified: Azure Fundamentals",
  "Oracle certified Foundations Associate",
  "Advanced RPA professional 2022"
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{cert}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}