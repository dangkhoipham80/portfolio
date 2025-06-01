import { useEffect, useState, useRef } from "react";

interface Star {
  id: number;
  size: number;
  x?: number;
  y?: number;
  opacity?: number;
  delay?: number;
  animationDuration: number;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Star[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = event;
        const moveX = (clientX - window.innerWidth / 2) * 0.03;
        const moveY = (clientY - window.innerHeight / 2) * 0.03;
        const rotateX = (clientY - window.innerHeight / 2) * 0.0008;
        const rotateY = (clientX - window.innerWidth / 2) * 0.0008;

        // Apply transform to background
        backgroundRef.current.style.transform = `
          translate(${moveX}px, ${moveY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
        backgroundRef.current.style.animationPlayState = "paused";

        // Apply transform to root element for full screen effect
        const root = document.getElementById("root");
        if (root) {
          root.style.transform = `
            translate(${moveX * 0.7}px, ${moveY * 0.7}px)
            rotateX(${rotateX * 0.7}deg)
            rotateY(${rotateY * 0.7}deg)
          `;
        }
      }
    };

    const handleMouseLeave = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = "";
        backgroundRef.current.style.animationPlayState = "running";

        // Reset root element transform
        const root = document.getElementById("root");
        if (root) {
          root.style.transform = "";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * -20,
        delay: Math.random() * 10 + 2,
        animationDuration: Math.random() * 4 + 4,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 background-container"
      style={{ transition: "transform 0.3s ease-out" }}
    >
      <div className="moon"></div>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
