import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";

const careerData = [
  {
    title: "Backend Developer Intern",
    company: "FPT Software",
    location: "Ho Chi Minh City, Vietnam",
    period: "June 2023 - Present",
    description: [
      "Developed and maintained RESTful APIs using Java Spring Boot",
      "Collaborated with cross-functional teams to implement new features",
      "Optimized database queries and improved application performance",
      "Participated in code reviews and implemented best practices",
    ],
  },
  {
    title: "Software Engineering Student",
    company: "FPT University",
    location: "Ho Chi Minh City, Vietnam",
    period: "2021 - Present",
    description: [
      "Studying Software Engineering with focus on Backend Development",
      "Participated in various hackathons and coding competitions",
      "Developed personal projects to enhance technical skills",
      "Learning Data Science and AI concepts",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const CareerJourney = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarBackground />
      <Navbar />
      <ThemeToggle />

      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            My Career{" "}
            <span className="text-primary relative">
              Journey
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {careerData.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="gradient-border p-8 rounded-2xl card-hover group bg-background/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="p-5 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-xl text-primary font-semibold">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="text-lg">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">{job.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-lg leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CareerJourney;
