import { ArrowDown } from "lucide-react";

const MainSection = () => {
  return (
    <section
      id="/"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-bounce-in inline-block">
              Hi,
            </span>
            <span
              className="opacity-0 animate-bounce-in inline-block mx-2"
              style={{ animationDelay: "0.1s" }}
            >
              I'm
            </span>
            <span
              className="text-primary opacity-0 animate-bounce-in inline-block mx-2"
              style={{ animationDelay: "0.2s" }}
            >
              Phạm
            </span>
            <span
              className="text-gradient opacity-0 animate-bounce-in inline-block mx-2"
              style={{ animationDelay: "0.4s" }}
            >
              Đăng Khôi
            </span>
          </h1>

          <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Full-Stack Developer with a strong passion for backend
            development. While I work across the entire stack, my focus is on
            building efficient, scalable, and secure server-side systems. I love
            exploring new technologies and improving my problem-solving skills,
            especially through challenges on LeetCode.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="/projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default MainSection;
