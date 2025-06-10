import { Briefcase, Code, User } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative">
          About{" "}
          <span className="text-primary relative">
            Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Passionate Web Developer & Data/AI Engineer
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As a 3rd-year student at FPT University, I'm passionate about
                web development with a strong foundation in backend
                technologies. However, I'm now shifting my focus toward Data/AI
                Engineering, combining my backend knowledge with new skills in
                data science, machine learning, and artificial intelligence.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating scalable, efficient, and secure backend
                systems, and now I'm excited to dive deeper into the world of
                data, exploring how machine learning and AI can transform
                industries and solve complex problems. Constantly learning and
                evolving, I aim to merge my technical expertise with a keen
                interest in the future of data-driven technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center">
              <a
                href="#contact"
                className="cosmic-button group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="/contact"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="gradient-border p-8 card-hover group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-3">
                  <h4 className="font-semibold text-xl text-foreground">
                    Software Engineer
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building dynamic, scalable web applications with modern
                    technologies like React, Node.js, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-3">
                  <h4 className="font-semibold text-xl text-foreground">
                    Back-End Developer
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Specializing in server-side development with technologies
                    like Java, Spring Boot, and database management to build
                    secure, scalable systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left space-y-3">
                  <h4 className="font-semibold text-xl text-foreground">
                    Data/AI Engineer
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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
