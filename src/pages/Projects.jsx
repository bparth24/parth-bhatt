import { Github, ExternalLink } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Projects = ({ className = "" }) => {
  const projects = [
    {
      title: "Personal Website",
      description:
        "A responsive personal website built with React and Tailwind CSS. Features include dark mode, dynamic layouts, and markdown content support.",
      tags: ["React", "Tailwind CSS", "Markdown"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/200",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "An admin dashboard for managing products, orders, and customers. Built with modern web technologies and real-time data updates.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/200",
    },
    {
      title: "Weather App",
      description:
        "A weather application that shows current conditions and forecasts. Uses geolocation and weather APIs for real-time updates.",
      tags: ["JavaScript", "APIs", "CSS"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/200",
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here are some of the projects I&apos;ve worked on. Each project
          represents different skills and technologies I&apos;ve mastered.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
                Code
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <ExternalLink className="h-5 w-5" />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
