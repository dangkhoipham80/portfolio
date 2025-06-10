import { useEffect, useState, useRef } from "react";

interface Star {
  id: number;
  size: number;
  x?: number;
  y?: number;
  opacity?: number;
  delay?: number;
  animationDuration: number;
  twinkleSpeed?: number;
  color?: string;
}

interface MousePosition {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Star[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastMousePosition = useRef<MousePosition>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });
  const currentTransform = useRef<MousePosition>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    const animate = () => {
      if (backgroundRef.current) {
        const smoothingFactor = 0.1;
        currentTransform.current.x +=
          (lastMousePosition.current.x - currentTransform.current.x) *
          smoothingFactor;
        currentTransform.current.y +=
          (lastMousePosition.current.y - currentTransform.current.y) *
          smoothingFactor;
        currentTransform.current.rotateX +=
          (lastMousePosition.current.rotateX -
            currentTransform.current.rotateX) *
          smoothingFactor;
        currentTransform.current.rotateY +=
          (lastMousePosition.current.rotateY -
            currentTransform.current.rotateY) *
          smoothingFactor;

        const swayX = Math.sin(Date.now() * 0.001) * 2;
        const swayY = Math.cos(Date.now() * 0.001) * 2;

        backgroundRef.current.style.transform = `
          translate(${currentTransform.current.x + swayX}px, ${
          currentTransform.current.y + swayY
        }px)
          rotateX(${currentTransform.current.rotateX}deg)
          rotateY(${currentTransform.current.rotateY}deg)
        `;

        const root = document.getElementById("root");
        if (root) {
          root.style.transform = `
            translate(${(currentTransform.current.x + swayX) * 0.5}px, ${
            (currentTransform.current.y + swayY) * 0.5
          }px)
            rotateX(${currentTransform.current.rotateX * 0.5}deg)
            rotateY(${currentTransform.current.rotateY * 0.5}deg)
          `;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const k = 2.5;

      lastMousePosition.current = {
        x: ((clientX - window.innerWidth / 2) * 0.015) / k,
        y: ((clientY - window.innerHeight / 2) * 0.015) / k,
        rotateX: ((clientY - window.innerHeight / 2) * 0.0003) / k,
        rotateY: ((clientX - window.innerWidth / 2) * 0.0003) / k,
      };
    };

    const handleMouseLeave = () => {
      lastMousePosition.current = { x: 0, y: 0, rotateX: 0, rotateY: 0 };
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const starColors = [
      "#ffffff", // White
      "#fff7e6", // Warm white
      "#e6f3ff", // Cool white
      "#ffe6e6", // Pink tint
      "#e6ffe6", // Green tint
    ];

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        twinkleSpeed: Math.random() * 2 + 1,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 15;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 2,
        x: Math.random() * 100,
        y: Math.random() * -20,
        delay: Math.random() * 15 + 2,
        animationDuration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 background-container"
      style={{
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
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
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            opacity: meteor.opacity,
            transform: `rotate(25deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
