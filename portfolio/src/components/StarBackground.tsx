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
  isPulsing?: boolean;
  isTwinkling?: boolean;
  glowSize?: number;
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
      (window.innerWidth * window.innerHeight) / 2000
    );

    const starColors = [
      "#ffffff", // White
      "#fff7e6", // Warm white
      "#e6f3ff", // Cool white
      "#ffe6e6", // Pink tint
      "#e6ffe6", // Green tint
      "#e6e6ff", // Blue tint
      "#fff0e6", // Orange tint
      "#ffd700", // Gold
      "#ff69b4", // Hot pink
      "#00ffff", // Cyan
    ];

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 2 + 0.5;
      const isPulsing = Math.random() > 0.7;
      const isTwinkling = Math.random() > 0.5;

      newStars.push({
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 3 + 1,
        twinkleSpeed: Math.random() * 1.5 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        isPulsing,
        isTwinkling,
        glowSize: size * (Math.random() * 3 + 2),
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 25;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * -30,
        delay: Math.random() * 20 + 5,
        animationDuration: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateBlackHoles = () => {
    const numberOfBlackHoles = 2;
    const blackHoles = [];

    for (let i = 0; i < numberOfBlackHoles; i++) {
      blackHoles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 150 + 100,
        rotationSpeed: Math.random() * 20 + 10,
        glowSize: Math.random() * 50 + 30,
      });
    }

    return blackHoles;
  };

  const generateAsteroids = () => {
    const numberOfAsteroids = 20;
    const asteroids = [];

    for (let i = 0; i < numberOfAsteroids; i++) {
      asteroids.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        rotationSpeed: Math.random() * 10 + 5,
        orbitRadius: Math.random() * 100 + 50,
        orbitSpeed: Math.random() * 0.02 + 0.01,
        startAngle: Math.random() * 360,
      });
    }

    return asteroids;
  };

  const blackHoles = generateBlackHoles();
  const asteroids = generateAsteroids();

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 background-container"
      style={{
        transition: "transform 0.1s linear",
        willChange: "transform",
        background:
          "radial-gradient(circle at center, #000000 0%, #0a0a2a 100%)",
      }}
    >
      <div className="moon"></div>
      {blackHoles.map((hole) => (
        <div
          key={`blackhole-${hole.id}`}
          className="black-hole"
          style={{
            position: "absolute",
            left: `${hole.x}%`,
            top: `${hole.y}%`,
            width: `${hole.size}px`,
            height: `${hole.size}px`,
            background:
              "radial-gradient(circle at center, #000000 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: `rotate ${hole.rotationSpeed}s linear infinite`,
            boxShadow: `0 0 ${hole.glowSize}px rgba(0,0,0,0.8)`,
          }}
        >
          <div
            className="event-horizon"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at center, #000000 0%, transparent 60%)",
              boxShadow: "inset 0 0 50px rgba(0,0,0,0.8)",
            }}
          />
        </div>
      ))}

      {asteroids.map((asteroid) => (
        <div
          key={`asteroid-${asteroid.id}`}
          className="asteroid"
          style={{
            position: "absolute",
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            background: "linear-gradient(45deg, #4a4a4a, #2a2a2a)",
            borderRadius: "20%",
            transform: `translate(-50%, -50%) rotate(${asteroid.startAngle}deg)`,
            animation: `
              orbit ${1 / asteroid.orbitSpeed}s linear infinite,
              rotate ${asteroid.rotationSpeed}s linear infinite
            `,
            boxShadow: "0 0 5px rgba(255,255,255,0.2)",
          }}
        />
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.glowSize}px ${star.color}`,
            borderRadius: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            animation: `
              ${
                star.isTwinkling
                  ? `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate,`
                  : ""
              }
              ${
                star.isPulsing
                  ? `pulse ${star.animationDuration}s ease-in-out infinite alternate`
                  : ""
              }
            `,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 100}px`,
            height: `${meteor.size}px`,
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            opacity: meteor.opacity,
            transform: `rotate(25deg)`,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            position: "absolute",
            animation: "meteor-fall linear infinite",
          }}
        />
      ))}

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); }
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 5px currentColor; }
            50% { box-shadow: 0 0 20px currentColor; }
            100% { box-shadow: 0 0 5px currentColor; }
          }

          @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes orbit {
            from { transform: translate(-50%, -50%) rotate(0deg) translateX(50px) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg) translateX(50px) rotate(-360deg); }
          }

          @keyframes meteor-fall {
            0% { transform: translateX(0) translateY(0) rotate(25deg); opacity: 1; }
            100% { transform: translateX(1000px) translateY(1000px) rotate(25deg); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default StarBackground;
