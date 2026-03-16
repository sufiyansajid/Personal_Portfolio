import { motion } from "framer-motion";
import { aboutData } from "../../data/constants";

export const About = () => {
  const { languages, frontend, backend, education, certifications } = aboutData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          {" "}
          About Me
        </motion.h2>

        <motion.div variants={itemVariants} className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in below skills and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend & DB</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all mt-6">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              {education.map((edu, key) => (
                <li key={key}>
                  <strong> {edu.degree} </strong> - {edu.institution} ({edu.period}) {edu.gpa && <><br/><span className="text-sm text-gray-400 ml-5">GPA: {edu.gpa}</span></>}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Certifications </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-4">
              {certifications.map((cert, key) => (
                <li key={key}>
                  <strong> {cert.name} </strong> - {cert.issuer}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};