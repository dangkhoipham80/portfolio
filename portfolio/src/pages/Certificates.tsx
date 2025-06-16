import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NatureBackground from "../components/NatureBackground";
import { useTheme } from "../components/ThemeContext";

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
  },
];

const Certificates = () => {
  const { isDarkMode } = useTheme();

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

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
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
