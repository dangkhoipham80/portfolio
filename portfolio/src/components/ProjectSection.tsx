import {
  Github,
  ExternalLink,
  ArrowRight,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
    title: "Portfolio",
    description:
      "This is my portfolio website. A project that focuses to show my Frontend skills and introduce myself.",
    image: "/assets/images/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    demoUrl: "https://my-portfolio-black-seven-60.vercel.app/",
    githubUrl: "https://github.com/dangkhoipham80/portfolio",
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
  {
    id: 4,
    title: "Project Four",
    description:
      "Project Four is about building efficient systems with scalable technologies for the future.",
    image: "/assets/images/example.png",
    tags: ["TechStack1", "TechStack2", "TechStack3"],
    demoUrl: "https://example.com/project-four",
    githubUrl: "https://github.com/your-github-repo/project-four",
  },
];

const ProjectSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | undefined>(undefined);

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

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            scroll("right");
          }
        }
      }, 10000);
    };

    startAutoScroll();

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("mouseenter", () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      });

      container.addEventListener("mouseleave", () => {
        startAutoScroll();
      });
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (container) {
        const handleMouseEnter = () => {
          if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
          }
        };
        const handleMouseLeave = () => {
          startAutoScroll();
        };
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FolderGit2 className="h-8 w-8 text-primary drop-shadow-lg" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary/60 via-primary/80 to-primary rounded-full animate-pulse"
          />
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card/80 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/60 transition-all duration-300 card-hover flex flex-col min-w-[340px] max-w-[340px] h-[500px] snap-center backdrop-blur-md relative"
              >
                <div className="h-60 overflow-hidden relative flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80 pointer-events-none" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-2xl font-bold mb-2 text-primary font-mono group-hover:underline underline-offset-4 transition-all duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-mono font-semibold border border-primary/30 bg-background/60 text-primary rounded-full shadow-sm hover:bg-primary/10 transition-all duration-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-auto flex justify-end space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={22} />
                    </motion.a>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_32px_0_rgba(var(--primary),0.25)] transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-md text-primary p-2 rounded-full shadow-lg hover:bg-card border border-primary/20 hover:border-primary/60 transition-all duration-300 z-10 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-md text-primary p-2 rounded-full shadow-lg hover:bg-card border border-primary/20 hover:border-primary/60 transition-all duration-300 z-10 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-lg font-mono px-6 py-3"
            target="_blank"
            href="https://github.com/dangkhoipham80"
          >
            Check My Github <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
