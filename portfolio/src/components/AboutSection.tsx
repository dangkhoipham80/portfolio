import { motion } from "framer-motion";
import { Code, Database, Server } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
          >
            About{" "}
            <span className="text-primary relative">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I am a passionate Full Stack Developer with expertise in
                building modern web applications. With a strong foundation in
                both frontend and backend technologies, I create seamless user
                experiences and robust server-side solutions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My journey in software development has equipped me with a
                diverse skill set and a problem-solving mindset. I am constantly
                learning and adapting to new technologies to deliver the best
                solutions for my clients and users.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cosmic-button group relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="gradient-border p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">
                      Frontend Development
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Creating responsive and interactive user interfaces with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="gradient-border p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">
                      Backend Development
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Building scalable and secure server-side applications and
                      APIs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="gradient-border p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">
                      Database Management
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Designing and optimizing database structures for optimal
                      performance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
