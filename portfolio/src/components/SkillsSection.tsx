import React from "react";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "../lib/utils";

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
  { name: "Python", level: "Advanced", category: "Backend", icon: Code },
  { name: "Java", level: "Intermediate", category: "Backend", icon: Code },
  { name: "FastAPI", level: "Intermediate", category: "Backend", icon: Code },
  { name: "Django", level: "Intermediate", category: "Backend", icon: Code },
  { name: "Flask", level: "Intermediate", category: "Backend", icon: Code },
  {
    name: "Spring Boot",
    level: "Intermediate",
    category: "Backend",
    icon: Code,
  },

  // Database Skills
  { name: "SQL", level: "Advanced", category: "Database", icon: Database },
  {
    name: "MongoDB",
    level: "Intermediate",
    category: "Database",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
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
    level: "Intermediate",
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
  { name: "Git", level: "Advanced", category: "Tools", icon: GitBranch },
  { name: "GitHub", level: "Advanced", category: "Tools", icon: GitBranch },
  { name: "Vscode", level: "Expert", category: "Tools", icon: Wrench },
  { name: "Slack", level: "Intermediate", category: "Tools", icon: Wrench },
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

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [showAllSkills, setShowAllSkills] = React.useState(false);
  const [showAllCategories, setShowAllCategories] = React.useState(false);
  const INITIAL_SKILLS_COUNT = 15;
  const INITIAL_CATEGORIES_COUNT = 6;

  const filteredSkills = skills
    .filter(
      (skill) => activeCategory === "All" || skill.category === activeCategory
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {displayedCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setShowAllSkills(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
          {hasMoreCategories && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/70 text-foreground hover:bg-secondary transition-colors duration-300"
            >
              {showAllCategories ? "Show Less" : "More"}
              {showAllCategories ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="gradient-border p-6 rounded-lg card-hover group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg truncate">
                        {skill.name}
                      </h3>
                      <span
                        className={`text-sm font-medium ml-2 whitespace-nowrap ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                        style={{
                          width: "0%",
                          animation: `grow 1.5s ease-out forwards`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasMoreSkills && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
            >
              {showAllSkills ? "Show Less Skills" : "Show More Skills"}
              {showAllSkills ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
