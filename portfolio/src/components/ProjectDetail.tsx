// src/components/ProjectDetail.tsx
import { useEffect } from "react";

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
    image: "/assets/images/project-two.png",
    tags: ["TechStack1", "TechStack2", "TechStack3"],
    demoUrl: "https://example.com/project-two",
    githubUrl: "https://github.com/your-github-repo/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Project Three is about building efficient systems with scalable technologies for the future.",
    image: "/assets/images/project-three.png",
    tags: ["TechStack1", "TechStack2", "TechStack3"],
    demoUrl: "https://example.com/project-three",
    githubUrl: "https://github.com/your-github-repo/project-three",
  },
];

interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

const ProjectDetail = ({ projectId, onClose }: ProjectDetailProps) => {
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project)
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-50">
        <div className="bg-card rounded-xl p-8 shadow-2xl max-w-2xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found!</h2>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    );

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-2xl w-full mx-4 bg-card rounded-xl p-8 shadow-2xl overflow-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">{project.title}</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-6 pt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                View Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
              >
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
