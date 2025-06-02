import { Briefcase, Code, User } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Data/AI Engineer
            </h3>

            <p className="text-muted-foreground">
              As a 3rd-year student at FPT University, I'm passionate about web
              development with a strong foundation in backend technologies.
              However, I'm now shifting my focus toward Data/AI Engineering,
              combining my backend knowledge with new skills in data science,
              machine learning, and artificial intelligence.
            </p>

            <p className="text-muted-foreground">
              I specialize in creating scalable, efficient, and secure backend
              systems, and now I'm excited to dive deeper into the world of
              data, exploring how machine learning and AI can transform
              industries and solve complex problems. Constantly learning and
              evolving, I aim to merge my technical expertise with a keen
              interest in the future of data-driven technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Building dynamic, scalable web applications with modern
                    technologies like React, Node.js, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-End Developer</h4>
                  <p className="text-muted-foreground">
                    Specializing in server-side development with technologies
                    like Java, Spring Boot, and database management to build
                    secure, scalable systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data/AI Engineer</h4>
                  <p className="text-muted-foreground">
                    Transitioning into Data Science and AI, exploring machine
                    learning, data analytics, and artificial intelligence to
                    solve complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
