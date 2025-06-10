import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <StarBackground />
      <ThemeToggle />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 font-mono">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50 bg-clip-text text-transparent">
                Not Found
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mb-12 text-xl text-muted-foreground leading-relaxed font-mono max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => navigate("/")}
              className="cosmic-button group relative overflow-hidden px-10 py-4 text-xl font-mono"
              whileHover={{
                boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.3)",
              }}
            >
              <span className="relative z-10">Back to Home</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
