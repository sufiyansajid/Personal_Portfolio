import { motion } from "framer-motion";
import { projects } from "../../data/constants";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          {" "}
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, key) => (
            <motion.div key={key} variants={itemVariants} className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-justify flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.tech.map((tech, techKey) => (
                  <span key={techKey} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="flex justify-between items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Project →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
};