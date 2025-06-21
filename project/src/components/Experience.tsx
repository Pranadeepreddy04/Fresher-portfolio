import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Briefcase className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Intern - Automation Testing</h3>
                <p className="text-green-400">OpenText, Hyderabad</p>
              </div>
              <p className="text-gray-400">Jan 2023 – Jul 2023</p>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Designed, wrote, and executed comprehensive test cases using Selenium WebDriver and SQL queries, focusing on end-to-end test automation and backend data validation for web-based applications.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Participated in the entire software testing lifecycle, from requirement analysis and test planning to bug reporting and retesting, ensuring adherence to QA best practices.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Developed and maintained automation test suites and supported backend testing using PL/SQL scripts, stored procedures, and views to validate key functionalities and data integrity.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Supported batch process testing by simulating real-world scenarios and validating backend jobs via SQL and UI verifications.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Collaborated closely with developers to enhance and debug ASP.NET MVC based Intelligent Viewing modules, ensuring cross-browser compatibility and efficient data retrieval from databases.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Detected, documented, and tracked critical software bugs using tools like JIRA; collaborated with developers and business analysts to ensure timely resolution.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Contributed to UI/UX validation by scripting UI tests that mimicked real user behavior, enhancing reliability and usability.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Worked closely with cross-functional teams in an Agile environment, attending daily scrums and sprint reviews, and providing regular updates on testing progress.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Optimized existing test scripts, including C#.NET based test utilities, reducing execution time by implementing parameterization and modular frameworks.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}