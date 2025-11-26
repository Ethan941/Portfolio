import { useState } from 'react';
import { X, Github } from 'lucide-react';
import project1Image from "figma:asset/36213a1342b6f57d513ecf6b168b5589e47927be.png";
import project2Image from "figma:asset/8fa3593daf0b0b503716a0323ee16ee0b6a458c1.png";
import project3Image from "figma:asset/6b9b38e4091f759a59a0ffe81bddbaf4c41589b2.png";

const projects = [
  {
    title: "Scraping_football_stats",
    technologies: ["Python", "Pandas", "RandomForest"],
    image: project1Image,
    link: "https://github.com/Ethan941/scraping_football_stats",
    description: "A comprehensive web scraping project focused on collecting and analyzing football statistics. This project uses Python for data extraction, Pandas for data manipulation, and implements RandomForest algorithms for predictive analysis of match outcomes and player performance.",
  },
  {
    title: "Project python",
    technologies: ["Python"],
    image: project2Image,
    link: "https://github.com/Ethan941/PythonDragonQuest",
    description: "A Python-based Dragon Quest game featuring object-oriented programming, interactive gameplay, and turn-based combat mechanics. This project demonstrates core programming concepts including classes, inheritance, and game logic implementation.",
  },
  {
    title: "Project sql",
    technologies: ["SQL"],
    image: project3Image,
    link: "https://github.com/Ethan941/SQL",
    description: "A collection of SQL projects showcasing database design, complex queries, data manipulation, and optimization techniques. Includes various use cases from data analysis to database management and performance tuning.",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#00A8E8] rounded-full"></div>
              <h2 className="text-[#00A8E8] tracking-wider uppercase text-sm">My Projects</h2>
              <div className="h-1 w-12 bg-[#00A8E8] rounded-full"></div>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto">
              A selection of my recent work showcasing different aspects of web development and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className="group bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/5 hover:ring-[#00A8E8]/30 transition-all duration-500 hover:-translate-y-2 block w-full text-left"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#00A8E8]/90 backdrop-blur-sm text-white rounded-full text-xs">
                    Project {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-white text-xl">
                    {project.title}
                  </h3>
                  
                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0F0F0F] text-white/90 rounded text-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-[#00A8E8] group-hover:gap-4 transition-all duration-300 text-sm">
                    View Details
                    <span>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#1A1A1A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-[#1A1A1A] border-b border-white/10 p-6 flex items-center justify-between">
              <h2 className="text-white text-2xl">{projects[selectedProject].title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 max-w-xl mx-auto">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-auto max-h-64 object-cover"
                />
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-white/70 text-sm uppercase tracking-wider mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-[#0F0F0F] text-white/90 rounded border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-white/70 text-sm uppercase tracking-wider mb-3">Description</h3>
                <p className="text-white/80 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* GitHub Button */}
              <div className="pt-4">
                <a
                  href={projects[selectedProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#00A8E8] hover:bg-[#0096d1] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}