import { useEffect, useRef, useState } from "react";

const clouds = [
  { style: { top: "8%", left: "2%", animationDuration: "28s", scale: 1.2 } },
  { style: { top: "12%", left: "18%", animationDuration: "32s", scale: 1.1 } },
  { style: { top: "20%", left: "60%", animationDuration: "40s", scale: 1.3 } },
  { style: { top: "30%", left: "30%", animationDuration: "35s", scale: 0.9 } },
  { style: { top: "15%", left: "80%", animationDuration: "50s", scale: 1.4 } },
  { style: { top: "25%", left: "45%", animationDuration: "38s", scale: 1.0 } },
  { style: { top: "10%", left: "70%", animationDuration: "36s", scale: 1.2 } },
];

const birdColors = [
  "#444",
  "#e67e22",
  "#2980b9",
  "#27ae60",
  "#e74c3c",
  "#8e44ad",
  "#f1c40f",
];
const butterflyColors = [
  "#ffb347",
  "#ff6961",
  "#77dd77",
  "#aec6cf",
  "#f49ac2",
  "#cfcfc4",
  "#b39eb5",
];

function randomBetween(a: number, b: number): number {
  return Math.random() * (b - a) + a;
}

type BirdStyle = {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  scale: number;
  color: string;
  path: string;
};
type ButterflyStyle = {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  scale: number;
  color: string;
};

function generateBirds(n = 7): { style: BirdStyle }[] {
  return Array.from({ length: n }).map((_, idx) => ({
    style: {
      top: `${randomBetween(30, 65)}%`,
      left: `${randomBetween(-20, -5)}%`,
      animationDuration: `${randomBetween(14, 28)}s`,
      animationDelay: `${randomBetween(0, 10)}s`,
      scale: randomBetween(0.8, 1.3),
      color: birdColors[Math.floor(Math.random() * birdColors.length)],
      path: idx % 2 === 0 ? "M5 25 Q20 10 35 25" : "M5 30 Q20 5 35 30",
    },
  }));
}

function generateButterflies(n = 5): { style: ButterflyStyle }[] {
  return Array.from({ length: n }).map(() => ({
    style: {
      top: `${randomBetween(40, 80)}%`,
      left: `${randomBetween(-10, 100)}%`,
      animationDuration: `${randomBetween(18, 32)}s`,
      animationDelay: `${randomBetween(0, 12)}s`,
      scale: randomBetween(0.7, 1.2),
      color:
        butterflyColors[Math.floor(Math.random() * butterflyColors.length)],
    },
  }));
}

const NatureBackground = () => {
  const [birds, setBirds] = useState<{ style: BirdStyle }[]>(() =>
    generateBirds(9)
  );
  const [butterflies, setButterflies] = useState<{ style: ButterflyStyle }[]>(
    () => generateButterflies(18)
  );
  const bgRef = useRef<HTMLDivElement>(null);

  // Regenerate birds/butterflies on resize for variety
  useEffect(() => {
    const onResize = () => {
      setBirds(generateBirds(9));
      setButterflies(generateButterflies(18));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: "linear-gradient(to bottom, #87ceeb 0%, #e0f7fa 100%)",
      }}
    >
      {/* Sun with animated glow and floating */}
      <div
        className="absolute light-only"
        style={{
          top: "60px",
          right: "60px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffd700 60%, #ffa500 100%)",
          boxShadow: "0 0 80px 20px #ffd700, 0 0 160px 60px #fff70066",
          zIndex: 1,
          animation:
            "sun-pulse 8s ease-in-out infinite alternate, sun-float 10s ease-in-out infinite alternate",
        }}
      />
      {/* Clouds with glow and parallax */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-90 rounded-full light-only"
          style={{
            ...cloud.style,
            width: "140px",
            height: "70px",
            filter:
              "blur(3px) drop-shadow(0 0 30px #fff7) drop-shadow(0 0 60px #fff5)",
            transform: `scale(${cloud.style.scale})`,
            animation: `cloud-move ${cloud.style.animationDuration} linear infinite, cloud-float 8s ease-in-out infinite alternate`,
            zIndex: 2,
          }}
        />
      ))}
      {/* Birds with random color and path */}
      {birds.map((bird, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...bird.style,
            width: "44px",
            height: "44px",
            transform: `scale(${bird.style.scale})`,
            animation: `bird-fly ${bird.style.animationDuration} linear infinite, bird-float 4s ease-in-out infinite alternate`,
            animationDelay: bird.style.animationDelay,
            zIndex: 3,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
            <path
              d={bird.style.path}
              stroke={bird.style.color}
              strokeWidth="2.5"
              fill="none"
              className="bird-path"
            />
          </svg>
        </div>
      ))}
      {/* Butterflies with random color and WAVE float */}
      {butterflies.map((b, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...b.style,
            width: "32px",
            height: "32px",
            transform: `scale(${b.style.scale})`,
            animation: `butterfly-fly ${b.style.animationDuration} linear infinite, butterfly-wave 9s ease-in-out infinite alternate`,
            animationDelay: b.style.animationDelay,
            zIndex: 4,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <ellipse
              cx="10"
              cy="16"
              rx="8"
              ry="12"
              fill={b.style.color}
              fillOpacity="0.7"
            />
            <ellipse
              cx="22"
              cy="16"
              rx="8"
              ry="12"
              fill={b.style.color}
              fillOpacity="0.7"
            />
            <ellipse cx="16" cy="16" rx="3" ry="7" fill="#333" />
          </svg>
        </div>
      ))}
      {/* Grass, flowers, leaves at bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
        style={{ height: 120 }}
      >
        <svg
          width="100%"
          height="120"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        >
          <ellipse
            cx="720"
            cy="120"
            rx="800"
            ry="40"
            fill="#7ed957"
            fillOpacity="0.7"
          />
          {/* Grass blades */}
          {Array.from({ length: 40 }).map((_, i) => (
            <rect
              key={i}
              x={30 + i * 35}
              y={90 + Math.random() * 20}
              width={6}
              height={30 + Math.random() * 20}
              rx={3}
              fill="#43a047"
            />
          ))}
          {/* Flowers */}
          {Array.from({ length: 18 }).map((_, i) => (
            <circle
              key={i}
              cx={60 + i * 75 + Math.random() * 20}
              cy={110 + Math.random() * 8}
              r={7 + Math.random() * 4}
              fill={
                [
                  "#ffb6b9",
                  "#f9d423",
                  "#f6e58d",
                  "#b8e994",
                  "#f7cac9",
                  "#f38181",
                ][i % 6]
              }
            />
          ))}
          {/* Leaves */}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx={100 + i * 110 + Math.random() * 20}
              cy={115 + Math.random() * 5}
              rx={12}
              ry={5}
              fill="#388e3c"
              fillOpacity="0.7"
            />
          ))}
        </svg>
      </div>
      <style>{`
        .dark .light-only { display: none !important; }
        .light .light-only { display: block !important; opacity: 1 !important; filter: none !important; }
        @keyframes cloud-move {
          0% { transform: translateX(0) scale(var(--scale, 1)); }
          100% { transform: translateX(120vw) scale(var(--scale, 1)); }
        }
        @keyframes cloud-float {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          100% { transform: translateY(-16px) scale(var(--scale, 1)); }
        }
        @keyframes bird-fly {
          0% { transform: translateX(0) scale(var(--scale, 1)); }
          10% { transform: translateX(10vw) scale(var(--scale, 1.1)); }
          20% { transform: translateX(20vw) scale(var(--scale, 1)); }
          30% { transform: translateX(30vw) scale(var(--scale, 0.95)); }
          40% { transform: translateX(40vw) scale(var(--scale, 1)); }
          50% { transform: translateX(50vw) scale(var(--scale, 1.05)); }
          60% { transform: translateX(60vw) scale(var(--scale, 1)); }
          70% { transform: translateX(70vw) scale(var(--scale, 0.9)); }
          80% { transform: translateX(80vw) scale(var(--scale, 1)); }
          90% { transform: translateX(90vw) scale(var(--scale, 1.1)); }
          100% { transform: translateX(110vw) scale(var(--scale, 1)); }
        }
        @keyframes bird-float {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          100% { transform: translateY(-7px) scale(var(--scale, 1)); }
        }
        @keyframes sun-pulse {
          0% {
            box-shadow: 0 0 80px 20px #ffd700, 0 0 160px 60px #fff70066;
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 120px 40px #ffd700, 0 0 200px 80px #fff70099;
            transform: scale(1.07);
          }
        }
        @keyframes sun-float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
        .bird-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw-bird 2s ease-in-out infinite alternate;
        }
        @keyframes draw-bird {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes butterfly-fly {
          0% { transform: translateX(0) scale(var(--scale, 1)); }
          20% { transform: translateX(20vw) scale(var(--scale, 1.1)); }
          40% { transform: translateX(40vw) scale(var(--scale, 0.95)); }
          60% { transform: translateX(60vw) scale(var(--scale, 1.05)); }
          80% { transform: translateX(80vw) scale(var(--scale, 0.9)); }
          100% { transform: translateX(110vw) scale(var(--scale, 1)); }
        }
        @keyframes butterfly-wave {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          20% { transform: translateY(-10px) scale(var(--scale, 1.05)); }
          40% { transform: translateY(10px) scale(var(--scale, 0.95)); }
          60% { transform: translateY(-12px) scale(var(--scale, 1.1)); }
          80% { transform: translateY(8px) scale(var(--scale, 0.9)); }
          100% { transform: translateY(-14px) scale(var(--scale, 1)); }
        }
      `}</style>
    </div>
  );
};

export default NatureBackground;
