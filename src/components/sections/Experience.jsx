import { motion } from "framer-motion";
import { experiences } from "../../data/constants";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 z-10 w-full"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:bg-blue-500/10 group-hover:border-blue-500/50 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              {/* Content Card */}
              <div className="glass w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-blue-500/80 text-sm font-semibold tracking-wide uppercase bg-blue-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4 font-medium">{exp.role}</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
