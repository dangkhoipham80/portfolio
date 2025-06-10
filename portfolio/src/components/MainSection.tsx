import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingWords = ["Dang Khoi Pham", "AI Engineering", "BackEnd Developer"];

const MainSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < typingWords[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(typingWords[wordIndex].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <section
      id="/"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-4xl mx-auto text-center z-10 mt-16"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight font-mono">
            <span className="inline-block">Hi,</span>{" "}
            <span className="inline-block">I'm</span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent min-w-[12ch]">
              {displayed}
              <span className="inline-block animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono">
            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-foreground/10">
              <pre className="text-left whitespace-pre-wrap">
                {`const developer = {
  role: "Full-Stack Developer",
  focus: ["Backend Development", "AI Engineering"],
  skills: [
    "Efficient Systems",
    "Scalable Architecture",
    "Secure Solutions"
  ],
  passion: [
    "New Technologies",
    "Problem Solving",
    "LeetCode Challenges"
  ]
};`}
              </pre>
            </div>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="cosmic-button group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com/dangkhoipham80"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://linkedin.com/in/dangkhoipham80"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="mailto:dangkhoipham80@gmail.com"
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Mail className="h-6 w-6 text-primary" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center mt-10 mb-4">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-muted-foreground mb-2">Scroll</span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainSection;
