import {
  Github,
  ExternalLink,
  ArrowRight,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Calendar,
  Code2,
  CheckCircle,
  Clock,
  XCircle,
  PauseCircle,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Feng Shui Koi",
    description:
      "The FengShui Koi Consulting System is a project that provides consultation on Feng Shui and compatibility for Koi fish and ponds.",
    fullDescription: `The FengShui Koi Consulting System is a comprehensive web application designed to provide expert consultation on Feng Shui principles and compatibility for Koi fish and ponds. This project combines traditional Feng Shui wisdom with modern technology to help users create harmonious aquatic environments.

    Key Features:
    • Feng Shui Analysis: Advanced algorithms analyze pond placement, size, and orientation
    • Koi Compatibility: Detailed compatibility assessments based on color, size, and breed
    • Interactive Consultation: Real-time consultation system with expert recommendations
    • Responsive Design: Modern, mobile-first UI built with React and TypeScript
    • Secure Backend: Robust Spring Boot backend with MySQL database
    • Real-time Updates: Firebase integration for live notifications and updates`,
    image: "/assets/images/feng-shui-koi.png",
    tags: [
      "FireBase",
      "Java Spring Boot",
      "MySQL",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "TypeScript",
    ],
    demoUrl: "",
    githubUrl:
      "https://github.com/dangkhoipham80/FA24_SE1854_SWP391_G8_FengShuiKoiConsultingSystem.git",
    features: [
      "Feng Shui pond analysis and recommendations",
      "Koi fish compatibility assessment",
      "Interactive consultation dashboard",
      "User account management",
      "Expert consultation booking",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing complex Feng Shui algorithms",
      "Managing real-time data synchronization",
      "Creating intuitive user experience",
      "Integrating multiple databases",
    ],
    createdAt: "2024-01-15",
    endedAt: "2024-03-20",
    status: "Completed",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "This is my portfolio website. A project that focuses to show my Frontend skills and introduce myself.",
    fullDescription: `A modern, responsive portfolio website built to showcase my technical skills and professional journey. This project demonstrates my proficiency in frontend development using cutting-edge technologies and design principles.

    Technical Highlights:
    • Modern React Architecture: Built with React 18 and TypeScript for type safety
    • Advanced Animations: Smooth, performant animations using Framer Motion
    • Theme System: Custom dark/light theme implementation with smooth transitions
    • Responsive Design: Mobile-first approach with Tailwind CSS
    • Performance Optimized: Fast loading times and efficient code splitting
    • Interactive Elements: Engaging UI components and micro-interactions`,
    image: "/assets/images/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    demoUrl: "https://my-portfolio-black-seven-60.vercel.app/",
    githubUrl: "https://github.com/dangkhoipham80/portfolio",
    features: [
      "Interactive animated backgrounds",
      "Dynamic theme switching",
      "Responsive design across all devices",
      "Smooth page transitions",
      "Contact form with email integration",
      "Project showcase with filtering",
    ],
    challenges: [
      "Creating smooth, performant animations",
      "Implementing complex CSS animations",
      "Optimizing for mobile performance",
      "Managing state across components",
    ],
    createdAt: "2024-03-01",
    endedAt: "2024-04-15",
    status: "In Progress",
  },
  {
    id: 3,
    title: "EduPath",
    description:
      "EduPath is a smart platform that helps high school students explore universities, compare majors, and receive 24/7 career guidance.",
    fullDescription: `EduPath is an educational platform designed to support Vietnamese high school students in researching university information, comparing admission scores, viewing score distributions, and receiving real-time career guidance.

Key Features:
• Latest news and education events
• University admission score lookup by major and year
• National exam score distribution charts
• University and major comparison tools
• Rankings and leaderboards by location and field
• AI-powered career counseling chatbot
• 24/7 support from live career advisors

The platform is being built using scalable architecture and modern technologies to ensure high availability and performance.`,
    image: "/assets/images/edupath.png",
    tags: [
      "Java Spring Boot",
      "ReactTS",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Minio",
      "Docker",
      "Kibana",
      "Elasticsearch",
      "Redis",
      "Kafka",
    ],
    demoUrl: "",
    githubUrl: "https://gitlab.com/fpt2843445/period_7/sba301/edupath",
    features: [
      "University admission score search by year and major",
      "Score distribution visualization (THPT exam)",
      "University and major comparison tool",
      "AI-powered career counseling chatbot",
      "Live advisor support available 24/7",
    ],
    challenges: [
      "Data collection and integration from multiple sources",
      "Real-time score distribution updates",
      "AI model training and optimization",
      "User privacy and data security",
      "Scalable architecture for high traffic",
    ],
    createdAt: "2024-06-08",
    endedAt: "2024-07-27",
    status: "Completed",
  },
  {
    id: 4,
    title: "Food Forum",
    description:
      "Food Forum is a vibrant community platform for food lovers to share recipes, experiences, and engage in real-time conversations.",
    fullDescription: `Food Forum is a social platform built for all cooking enthusiasts—regardless of skill level—to connect, share recipes, post food experiences, and join real-time conversations.
  
  Key Objectives:
  • Create an inclusive, friendly cooking community
  • Allow users to post recipes, tips, and culinary experiences
  • Enable comments, likes, and group discussions
  • Join topic-based group chats or 1-on-1 messaging (via WebSocket)
  • Allow users to report content or send feedback
  • Admin panel for community moderation and management
  
  System Architecture:
  • Frontend is built with React, TypeScript, and TailwindCSS, deployed on Vercel
  • Backend is powered by FastAPI with WebSocket (Socket.IO equivalent), deployed on AWS EC2
  • PostgreSQL database is hosted on Neon.tech (serverless cloud PostgreSQL)
  • Nginx on EC2 handles reverse proxy for FastAPI, WebSocket and CORS
  `,
    image: "/assets/images/foodforum.png",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "PostgreSQL",
      "WebSocket",
      "Firebase Auth",
      "AWS",
      "Vercel",
      "Neon.tech",
      "Nginx",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/dangkhoipham80/FoodForum",
    features: [
      "Post recipes and food experiences",
      "Comment, like, and interact with others",
      "Topic-based group chats and 1-on-1 messaging",
      "Real-time communication via WebSocket (FastAPI)",
      "User authentication via Firebase",
      "Content reporting and user feedback",
      "Admin dashboard for moderation",
      "Responsive UI with TailwindCSS",
      "Frontend hosted on Vercel",
      "Backend and WebSocket on AWS EC2",
      "PostgreSQL database on Neon.tech",
    ],
    challenges: [
      "Building real-time messaging using FastAPI WebSocket",
      "Securing backend with Firebase token verification",
      "Managing deployment via AWS & Nginx",
      "Database performance with large user-generated content",
      "Responsive design & real-time UX consistency",
    ],
    createdAt: "2024-05-25",
    endedAt: "2024-07-27",
    status: "Completed",
  },
];

interface ProjectDetailModalProps {
  project: (typeof projects)[0];
  isOpen: boolean;
  onClose: () => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case "Completed":
      return {
        color: "bg-green-500/20 text-green-400 border-green-500/30",
        icon: CheckCircle,
        darkColor: "bg-green-500/10 text-green-300 border-green-500/20",
      };
    case "In Progress":
      return {
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        icon: Clock,
        darkColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      };
    case "Dropped":
      return {
        color: "bg-red-500/20 text-red-400 border-red-500/30",
        icon: XCircle,
        darkColor: "bg-red-500/10 text-red-300 border-red-500/20",
      };
    case "On Hold":
      return {
        color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        icon: PauseCircle,
        darkColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
      };
    default:
      return {
        color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
        icon: Clock,
        darkColor: "bg-gray-500/10 text-gray-300 border-gray-500/20",
      };
  }
};

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  const statusConfig = getStatusConfig(project.status);
  const StatusIcon = statusConfig.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 p-4"
          style={{ overflow: "auto" }}
        >
          <div className="min-h-full flex items-start justify-center py-800">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-primary/20 w-full max-w-4xl relative"
            >
              {/* Header */}
              <div className="bg-background/90 backdrop-blur-md border-b border-primary/10 px-6 py-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>
                          From:{" "}
                          {new Date(project.createdAt).toLocaleDateString()}
                          {" - "}
                          Until:{" "}
                          {new Date(project.endedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusConfig.color}`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {project.status}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-120 md:h-136 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Project Overview
                  </h3>
                  <div className="text-left prose prose-sm max-w-none text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                    {project.fullDescription}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="px-3 py-1 text-sm font-semibold border border-primary/30 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features and Challenges */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Challenges Solved
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary/10">
                  {project.demoUrl && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors duration-300 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

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
      }, 15000); // Tăng từ 10000 lên 15000 (15 giây)
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
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
            {projects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              const StatusIcon = statusConfig.icon;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group bg-card/80 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/60 transition-all duration-500 card-hover flex flex-col min-w-[340px] max-w-[340px] h-[500px] snap-center backdrop-blur-md relative"
                >
                  <div className="h-60 overflow-hidden relative flex-shrink-0">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80 pointer-events-none" />

                    {/* Status Badge on Image */}
                    <div className="absolute top-3 right-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusConfig.color}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {project.status}
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold mb-2 text-primary font-mono group-hover:underline underline-offset-4 transition-all duration-400"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-mono">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.15 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-mono font-semibold border border-primary/30 bg-background/60 text-primary rounded-full shadow-sm hover:bg-primary/10 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-mono font-semibold border border-primary/30 bg-background/60 text-primary rounded-full shadow-sm">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-semibold transition-colors duration-300"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </motion.button>
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            transition={{ duration: 0.3 }}
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <ExternalLink size={22} />
                          </motion.a>
                        )}
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: -3 }}
                          transition={{ duration: 0.3 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={22} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_32px_0_rgba(var(--primary),0.25)] transition-all duration-500"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-md text-primary p-2 rounded-full shadow-lg hover:bg-card border border-primary/20 hover:border-primary/60 transition-all duration-400 z-10 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-md text-primary p-2 rounded-full shadow-lg hover:bg-card border border-primary/20 hover:border-primary/60 transition-all duration-400 z-10 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-lg font-mono px-6 py-3"
            target="_blank"
            href="https://github.com/dangkhoipham80"
          >
            Check My Github <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectSection;
