export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutData = {
  languages: ["C++", "JavaScript", "TypeScript", "Python", "PHP"],
  frontend: ["HTML", "CSS", "React", "Next.js", "Angular", "TailwindCSS"],
  backend: ["Node.js", "Express", "PHP", "Laravel", "MySQL", "PostgreSQL", "SQL"],
  education: [
    {
      degree: "BS Software Engineering",
      institution: "University of Lahore",
      period: "02/2022 - 02/2026",
      gpa: "3.40",
    },
    {
      degree: "ICS Physics",
      institution: "Govt. Islamia College Civil Lines",
      period: "04/2019 - 06/2021",
    },
  ],
  certifications: [
    { name: "Advance programming(ML/DL)", issuer: "PNY (NAVTCC)" },
    { name: "Data Science", issuer: "Professional Freelancing Training Program" },
    { name: "Python", issuer: "Sololearn" },
  ],
};

export const experiences = [
  {
    company: "Biafo tech",
    role: "Software engineer • Internship",
    duration: "12/2025 - Present",
    description:
      "Developing the end-to-end Procurement Module for the PCSIR ERP system. Responsibilities include implementing complex backend services for Requisition processing, Committee formation, and Comparative Statements generation. Actively designing frontend in Next.js components to streamline the digital approval workflow, replacing legacy manual paper-based processes with an automated system.",
  },
  {
    company: "Creamerz Soft",
    role: "Web Development • Internship",
    duration: "09/2025 - 11/2025",
    description: "On-site internship focusing on Web Development.",
  },
  {
    company: "Collectum Solutions",
    role: "Web Development • Internship",
    duration: "06/2025 - 07/2025",
    description: "On-site internship focusing on Web Development.",
  },
];

export const projects = [
  {
    title: "PCSIR Digitalization",
    description:
      "Currently developing the end-to-end Procurement Module for the PCSIR ERP system. Responsible for complex backend services for Requisition processing, Committee formation, and Comparative Statements generation, alongside designing frontend Next components.",
    tech: ["Next.js", "Node.js", "Express", "TailwindCSS"],
    link: null,
  },
  {
    title: "CarVizion (FYP)",
    description:
      "CarVizion is an AR-powered car customization platform. Users can see changes like new paint, rims, or decals on their car in real time to enhance decision-making.",
    tech: ["React", "GSAP", "TailwindCSS", "Express", "Three.js", "OpenCV", "MySQL"],
    link: "https://car-vizion.vercel.app/",
  },
  {
    title: "Red Sea One",
    description:
      "Developing a comprehensive Taxi App providing a responsive user interface with Angular, and a robust backend API built using PHP Laravel for secure and efficient management.",
    tech: ["Angular", "Bootstrap", "PHP", "Laravel", "MySQL"],
    link: "http://redsea1.creamerz.com/home",
  },
  {
    title: "Restaurant Manager",
    description:
      "Developed a Restaurant Management Web App with modules for menu, orders, inventory, and staff management, featuring secure authentication and a responsive dashboard.",
    tech: ["React", "TailwindCSS", "Express", "Node.js", "MySQL"],
    link: null,
  },
];
