import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const MainSection = () => {
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
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
                <motion.span
                  className="text-primary inline-block"
                  animate={{
                    textShadow: [
                      "0 0 7px rgba(var(--primary), 0.3)",
                      "0 0 10px rgba(var(--primary), 0.5)",
                      "0 0 7px rgba(var(--primary), 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Phạm
                </motion.span>{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                    filter: [
                      "brightness(1)",
                      "brightness(1.2)",
                      "brightness(1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  Đăng Khôi
                </motion.span>
              </motion.div>
              <motion.span
                variants={cursorVariants}
                initial="hidden"
                animate="visible"
                className="inline-block w-[2px] h-[1em] bg-primary ml-[2px]"
              />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I'm a Full-Stack Developer with a strong passion for backend
            development. While I work across the entire stack, my focus is on
            building efficient, scalable, and secure server-side systems. I love
            exploring new technologies and improving my problem-solving skills,
            especially through challenges on LeetCode.
          </motion.p>

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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
    </section>
  );
};

export default MainSection;
