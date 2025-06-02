// src/components/ProjectSection.tsx
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Feng Shui Koi",
    description:
      "The FengShui Koi Consulting System is a project that provides consultation on Feng Shui and compatibility for Koi fish and ponds.",
    image: "/assets/images/feng-shui-koi.png",
    tags: [
      "FireBase",
      "Spring Boot",
      "MySQL",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    demoUrl: "https://feng-shui-koi.vercel.app/",
    githubUrl:
      "https://github.com/dangkhoipham80/FA24_SE1854_SWP391_G8_FengShuiKoiConsultingSystem.git",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "This is a brief description of Project Two. A project that focuses on modern technologies.",
    image: "/assets/images/example.png",
    tags: ["TechStack1", "TechStack2", "TechStack3"],
    demoUrl: "https://example.com/project-two",
    githubUrl: "https://github.com/your-github-repo/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Project Three is about building efficient systems with scalable technologies for the future.",
    image: "/assets/images/example.png",
    tags: ["TechStack1", "TechStack2", "TechStack3"],
    demoUrl: "https://example.com/project-three",
    githubUrl: "https://github.com/your-github-repo/project-three",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-[500px]"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dangkhoipham80"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
