import React from "react";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  ChevronDown,
  ChevronUp,
  Star,
  Brain,
} from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "text-green-500";
    case "Advanced":
      return "text-blue-500";
    case "Intermediate":
      return "text-yellow-500";
    case "Beginner":
      return "text-orange-500";
    default:
      return "text-muted-foreground";
  }
};

const getLevelOrder = (level: string) => {
  switch (level) {
    case "Expert":
      return 4;
    case "Advanced":
      return 3;
    case "Intermediate":
      return 2;
    case "Beginner":
      return 1;
    default:
      return 0;
  }
};

const skills = [
  // Frontend Skills
  { name: "HTML/CSS", level: "Advanced", category: "Frontend", icon: Code },
  {
    name: "JavaScript",
    level: "Intermediate",
    category: "Frontend",
    icon: Code,
  },
  { name: "React", level: "Intermediate", category: "Frontend", icon: Code },
  { name: "Tailwind CSS", level: "Beginner", category: "Frontend", icon: Code },
  {
    name: "TypeScript",
    level: "Beginner",
    category: "Frontend",
    icon: Code,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    category: "Frontend",
    icon: Code,
  },
  // Backend Skills
  {
    name: "Java Spring Boot",
    level: "Intermediate",
    category: "Backend",
    icon: Code,
  },
  { name: "FastAPI", level: "Intermediate", category: "Backend", icon: Code },

  // Database Skills
  {
    name: "MongoDB",
    level: "Beginner",
    category: "Database",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
    icon: Database,
  },
  {
    name: "MySQL",
    level: "Intermediate",
    category: "Database",
    icon: Database,
  },
  {
    name: "SQLite",
    level: "Beginner",
    category: "Database",
    icon: Database,
  },
  { name: "Redis", level: "Beginner", category: "Database", icon: Database },

  // Cloud Skills
  { name: "AWS", level: "Intermediate", category: "Cloud", icon: Cloud },
  { name: "Azure", level: "Intermediate", category: "Cloud", icon: Cloud },
  { name: "Google Cloud", level: "Beginner", category: "Cloud", icon: Cloud },
  { name: "Firebase", level: "Intermediate", category: "Cloud", icon: Cloud },

  // DevOps Skills
  { name: "Docker", level: "Intermediate", category: "DevOps", icon: Wrench },
  { name: "Kubernetes", level: "Beginner", category: "DevOps", icon: Wrench },

  // Tool Skills
  { name: "GitLab", level: "Intermediate", category: "Tools", icon: GitBranch },
  { name: "GitHub", level: "Intermediate", category: "Tools", icon: GitBranch },
  { name: "Vscode", level: "Intermediate", category: "Tools", icon: Wrench },
  { name: "Slack", level: "Beginner", category: "Tools", icon: Wrench },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
  "AI/ML",
  "Other",
  "Soft Skills",
  "Languages",
];

const levels = ["All", "Expert", "Advanced", "Intermediate", "Beginner"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [activeLevel, setActiveLevel] = React.useState("All");
  const [showAllSkills, setShowAllSkills] = React.useState(false);
  const [showAllCategories, setShowAllCategories] = React.useState(false);
  const INITIAL_SKILLS_COUNT = 15;
  const INITIAL_CATEGORIES_COUNT = 6;

  const filteredSkills = skills
    .filter(
      (skill) =>
        (activeCategory === "All" || skill.category === activeCategory) &&
        (activeLevel === "All" || skill.level === activeLevel)
    )
    .sort((a, b) => getLevelOrder(b.level) - getLevelOrder(a.level));

  const displayedSkills = showAllSkills
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_SKILLS_COUNT);
  const hasMoreSkills = filteredSkills.length > INITIAL_SKILLS_COUNT;

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, INITIAL_CATEGORIES_COUNT);
  const hasMoreCategories = categories.length > INITIAL_CATEGORIES_COUNT;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0.4)",
                    "0 0 0 10px rgba(var(--primary), 0)",
                    "0 0 0 0 rgba(var(--primary), 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-3 rounded-full bg-primary/10"
              >
                <Brain className="h-10 w-10 text-primary" />
              </motion.div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent text-center">
              My Skills
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary/60 via-primary/80 to-primary rounded-full mt-3 animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {displayedCategories.map((category, key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setShowAllSkills(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full font-mono text-sm font-semibold border border-primary/30 bg-background/60 hover:bg-primary/10 transition-all duration-300 capitalize shadow-sm",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "text-primary hover:scale-105"
              )}
            >
              {category}
            </motion.button>
          ))}
          {hasMoreCategories && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center gap-2 px-5 py-2 rounded-full font-mono text-sm font-semibold border border-primary/30 bg-background/60 hover:bg-primary/10 transition-all duration-300 shadow-sm"
            >
              {showAllCategories ? "Show Less" : "More"}
              {showAllCategories ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </motion.button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {levels.map((level, key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveLevel(level);
                setShowAllSkills(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full font-mono text-sm font-semibold border border-primary/30 bg-background/60 hover:bg-primary/10 transition-all duration-300 capitalize shadow-sm flex items-center gap-2",
                activeLevel === level
                  ? "bg-gradient-to-r from-primary/80 to-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "text-primary hover:scale-105"
              )}
            >
              {level !== "All" && <Star className="h-4 w-4" />}
              {level}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: showAllSkills ? 0 : index * 0.1,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="gradient-border p-6 rounded-2xl card-hover group bg-background/80 shadow-lg transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-mono font-bold text-lg truncate text-primary">
                        {skill.name}
                      </h3>
                      <span
                        className={`text-xs font-mono font-semibold ml-2 whitespace-nowrap ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            skill.level === "Expert"
                              ? "100%"
                              : skill.level === "Advanced"
                              ? "80%"
                              : skill.level === "Intermediate"
                              ? "60%"
                              : "40%",
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: showAllSkills ? 0 : index * 0.1,
                        }}
                        className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {hasMoreSkills && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="cosmic-button flex items-center gap-2 text-lg font-mono px-6 py-3"
            >
              {showAllSkills ? "Show Less Skills" : "Show More Skills"}
              {showAllSkills ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
