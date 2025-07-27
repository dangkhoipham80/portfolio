import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NatureBackground from "../components/NatureBackground";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";
import { cn } from "../lib/utils";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-123456",
    credentialUrl: "https://www.credly.com/aws-certified-cloud-practitioner",
    description:
      "Foundational level certification demonstrating cloud fluency and AWS Cloud concepts.",
    skills: ["Cloud Computing", "AWS", "Cloud Architecture"],
    category: "Cloud",
    fee: 100,
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "February 2024",
    credentialId: "IBM-789012",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/IBM-789012",
    description:
      "Comprehensive course covering Python programming for data analysis and visualization.",
    skills: ["Python", "Data Science", "Data Analysis"],
    category: "Data Science",
    fee: 49,
  },
  {
    title: "Spring Boot Developer",
    issuer: "Udemy",
    date: "January 2024",
    credentialId: "UDEMY-345678",
    credentialUrl: "https://www.udemy.com/certificate/UDEMY-345678",
    description:
      "Advanced Spring Boot development certification covering microservices and REST APIs.",
    skills: ["Java", "Spring Boot", "REST APIs"],
    category: "Backend",
    fee: 0,
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "December 2023",
    credentialId: "META-456789",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/META-456789",
    description:
      "Professional certification in React development and frontend engineering.",
    skills: ["React", "JavaScript", "Frontend Development"],
    category: "Frontend",
    fee: 0,
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "November 2023",
    credentialId: "STAN-234567",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/STAN-234567",
    description:
      "Comprehensive machine learning certification covering algorithms and practical applications.",
    skills: ["Machine Learning", "AI", "Data Analysis"],
    category: "AI/ML",
    fee: 79,
  },
];

const categories = [
  "All",
  "Cloud",
  "Data Science",
  "Backend",
  "Frontend",
  "AI/ML",
  "DevOps",
  "Security",
];

const Certificates = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const INITIAL_CATEGORIES_COUNT = 6;

  const filteredCertificates = certificates.filter(
    (cert) => activeCategory === "All" || cert.category === activeCategory
  );

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, INITIAL_CATEGORIES_COUNT);
  const hasMoreCategories = categories.length > INITIAL_CATEGORIES_COUNT;

  return (
    <div className="min-h-screen relative">
      {isDarkMode ? <StarBackground /> : <NatureBackground />}
      <Navbar />
      <ThemeToggle />

      <main className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
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
                  <Award className="h-10 w-10 text-primary" />
                </motion.div>
              </motion.div>
              Certificates
            </motion.h1>
            <p className="text-xl md:text-2xl font-mono text-primary/80 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 bg-clip-text text-transparent">
              Professional certifications and achievements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {displayedCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
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

          <div className="space-y-8">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="gradient-border p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-foreground text-left">
                        {cert.title}
                      </h3>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-mono w-fit"
                      >
                        {cert.category}
                      </motion.span>
                    </div>
                    <p className="text-primary font-semibold text-left">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>Fee: {cert.fee ? `$${cert.fee}` : "Free"}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {cert.description}
                    </p>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + 0.3 + skillIndex * 0.1,
                          }}
                          className="px-3 py-1 rounded-md text-sm bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Certificates;
