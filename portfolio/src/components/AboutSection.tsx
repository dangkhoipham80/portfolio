import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-6"
          >
            I am a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create seamless user experiences and
            robust server-side solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            My journey in software development has equipped me with a diverse
            skill set and a problem-solving mindset. I am constantly learning
            and adapting to new technologies to deliver the best solutions for
            my clients and users.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
