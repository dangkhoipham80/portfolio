import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NatureBackground from "../components/NatureBackground";
import { useTheme } from "../components/ThemeContext";
import { useState } from "react";

const careerData = [
  {
    title: "Python Developer Intern",
    company: "FPT Software",
    location: "Ho Chi Minh City, Vietnam",
    period: "December 2024 - March 2025",
    startDate: "12/2024",
    description: [
      "Developed and maintained RESTful APIs using Python and FastAPI",
      "Collaborated with cross-functional teams to implement new features",
      "Optimized database queries and improved application performance",
      "Participated in code reviews and implemented best practices for the project",
    ],
  },
  {
    title: "Software Engineering Student",
    company: "FPT University",
    location: "Ho Chi Minh City, Vietnam",
    period: "September 2022 - Present",
    startDate: "09/2022",
    description: [
      "Studying Software Engineering with focus on Backend Development",
      "Participated in various hackathons and coding competitions",
      "Developed personal projects to enhance technical skills",
      "Learning Data Science and AI concepts",
    ],
  },
].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

const CareerJourney = () => {
  const { isDarkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {isDarkMode ? <StarBackground /> : <NatureBackground />}
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
            My Career
            <span className="text-primary relative ml-2">
              Journey
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h1>

          {/* Timeline container */}
          <div className="relative flex">
            {/* Vertical line on the left */}
            <div
              className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/10 rounded-full z-0"
              style={{ minHeight: 400 }}
            />

            {/* Content container */}
            <div className="flex flex-col w-full ml-12">
              {careerData.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  className="relative w-full flex items-start group mb-16"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-12 w-10 h-10 rounded-full border-4 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer
                      ${
                        activeIndex === idx
                          ? "bg-gradient-to-br from-primary to-primary/60 border-primary scale-125"
                          : "bg-background border-primary/30"
                      }
                    `}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <Briefcase
                      className={`w-6 h-6 ${
                        activeIndex === idx
                          ? "text-white animate-bounce"
                          : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Detail card */}
                  <div
                    className={`transition-all duration-300 w-full max-w-2xl
                      ${
                        activeIndex === idx
                          ? "opacity-100 scale-100"
                          : "opacity-60 scale-95"
                      }
                    `}
                  >
                    <div className="bg-background/80 backdrop-blur-md border border-primary/10 rounded-xl shadow-lg p-6 group-hover:border-primary/40">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <span className="text-primary font-semibold flex items-center gap-2">
                          <Calendar className="w-5 h-5" /> {job.period}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-5 h-5" /> {job.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {job.title}
                      </h3>
                      <div className="text-lg text-primary font-semibold mb-3">
                        {job.company}
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {job.description.map((item, i) => (
                          <li key={i} className="text-base leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CareerJourney;
