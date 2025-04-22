import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "C++",
    "Python",
    "Html",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "PHP",
    "Laravel",
    "SQL",
    "Power BI",

  ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8  border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in below skills and creating innovative solutions.
            </p>

            <div className="grid grid-rows-1 md:grid-rows-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-1 md:grid-rows-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> ICS Physics </strong> - Govt. Islamia College Civil Lines (04/2019 - 06/2021)
                </li>
                <li>
                  <strong> BS Software Engineering </strong> - University of Lahore (02/2022 - Present)
                </li>
                <li>
                  <strong> Advance programming(ML/DL) </strong> - NAVTCC(PNY) (07/2024 - 10/2024)
                </li>
                <li>
                  <strong> Data Science  </strong> - Professional Freelancing Training Program (08/2024 - 10/2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};