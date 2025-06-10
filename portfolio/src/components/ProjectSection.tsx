// src/components/ProjectSection.tsx
import {
  Github,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  FolderGit2,
} from "lucide-react";
import { useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title redesign */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FolderGit2 className="h-8 w-8 text-primary drop-shadow-lg" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary/60 via-primary/80 to-primary rounded-full animate-pulse" />
        </div>

        {/* Slider controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-background border border-primary/30 hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-background border border-primary/30 hover:bg-primary/10 transition-colors"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Horizontal scrollable project list */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/80 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/60 transition-all duration-300 card-hover flex flex-col min-w-[340px] max-w-[340px] h-[500px] snap-center backdrop-blur-md relative"
            >
              <div className="h-60 overflow-hidden relative flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80 pointer-events-none" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-primary font-mono group-hover:underline underline-offset-4 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-mono">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono font-semibold border border-primary/30 bg-background/60 text-primary rounded-full shadow-sm hover:bg-primary/10 transition-all duration-200"
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
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110"
                  >
                    <ExternalLink size={22} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-110"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_32px_0_rgba(var(--primary),0.25)] transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-lg font-mono px-6 py-3"
            target="_blank"
            href="https://github.com/dangkhoipham80"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
