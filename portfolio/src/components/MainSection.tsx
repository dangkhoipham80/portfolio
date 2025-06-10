import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Phạm Đăng Khôi", "Back End Developer", "Data Engineering"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nameVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const cursorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      id="/"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight font-mono"
          >
            <span className="inline-block">Hi,</span>{" "}
            <span className="inline-block">I'm</span>{" "}
            <div className="inline-flex items-center">
              <motion.div
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="overflow-hidden whitespace-nowrap"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent inline-block"
                  >
                    {titles[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <motion.span
                variants={cursorVariants}
                initial="hidden"
                animate="visible"
                className="inline-block w-[2px] h-[1em] bg-primary ml-[2px]"
              />
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono"
          >
            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-foreground/10">
              <pre className="text-left whitespace-pre-wrap">
                {`const developer = {
  role: "Full-Stack Developer",
  focus: "Backend Development",
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
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
                href="https://github.com/dangkhoi2204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Github className="h-6 w-6 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.linkedin.com/in/khoipham4022/"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center mt-10 mb-4"
          >
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
              <ArrowDown className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
