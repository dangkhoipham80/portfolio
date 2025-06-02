import React from "react";
import { Code, Database, Cloud, Wrench, GitBranch } from "lucide-react";
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

const skills = [
  // Frontend Skills
  { name: "HTML/CSS", level: "Expert", category: "Frontend", icon: Code },
  { name: "JavaScript", level: "Advanced", category: "Frontend", icon: Code },
  { name: "React", level: "Advanced", category: "Frontend", icon: Code },

  // Backend Skills
  { name: "Python", level: "Advanced", category: "Backend", icon: Code },
  { name: "Java", level: "Intermediate", category: "Backend", icon: Code },

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

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
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
      </div>
    </section>
  );
};

export default SkillsSection;
