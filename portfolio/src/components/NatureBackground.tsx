import { useEffect, useRef, useState } from "react";

// Helper function for random number generation
function randomBetween(a: number, b: number): number {
  return Math.random() * (b - a) + a;
}

type ButterflyStyle = {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  scale: number;
  color: string;
  direction?: number;
};
type CloudStyle = {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  scale: number;
  opacity: number;
  anim: string;
};

const butterflyColors = [
  "#ffb347",
  "#ff6961",
  "#77dd77",
  "#aec6cf",
  "#f49ac2",
  "#cfcfc4",
  "#b39eb5",
];

// --- Generation Functions ---

function generateButterflies(
  n = 10
): { style: ButterflyStyle & { direction?: number; anim: string } }[] {
  const butterflyAnims = ["butterfly-fly", "butterfly-wave", "butterfly-flap"];
  return Array.from({ length: n }).map(() => ({
    style: {
      top: `${randomBetween(40, 90)}%`, // Butterflies closer to the ground
      left: `${randomBetween(-10, 100)}%`,
      animationDuration: `${randomBetween(18, 32)}s`,
      animationDelay: `${randomBetween(0, 12)}s`,
      scale: randomBetween(0.7, 1.2),
      color:
        butterflyColors[Math.floor(Math.random() * butterflyColors.length)],
      direction: Math.random() > 0.5 ? 1 : -1, // For horizontal flip
      anim: butterflyAnims[Math.floor(Math.random() * butterflyAnims.length)],
    },
  }));
}

function generateClouds(n = 7): { style: CloudStyle }[] {
  const cloudAnims = ["cloud-move", "cloud-float", "cloud-pulse"]; // cloud-move is essential
  return Array.from({ length: n }).map(() => ({
    style: {
      top: `${randomBetween(5, 40)}%`,
      left: `${randomBetween(0, 90)}%`,
      animationDuration: `${randomBetween(30, 65)}s`, // Longer duration for slower cloud movement
      animationDelay: `${randomBetween(0, 25)}s`, // More varied delays
      scale: randomBetween(0.8, 1.5),
      opacity: randomBetween(0.6, 0.95),
      anim: cloudAnims[0], // Ensure it always uses cloud-move
    },
  }));
}

// --- React Component ---

const NatureBackground = () => {
  const [butterflies, setButterflies] = useState<
    { style: ButterflyStyle & { direction?: number; anim: string } }[]
  >(() => generateButterflies(10));
  const [clouds, setClouds] = useState(() => generateClouds(7));
  const bgRef = useRef<HTMLDivElement>(null);

  // Regenerate elements on resize for variety
  useEffect(() => {
    const onResize = () => {
      setButterflies(generateButterflies(10));
      setClouds(generateClouds(7));
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
          className="absolute bg-white rounded-full light-only"
          style={{
            width: "140px",
            height: "70px",
            top: cloud.style.top,
            left: cloud.style.left,
            filter:
              "blur(3px) drop-shadow(0 0 30px #fff7) drop-shadow(0 0 60px #fff5)",
            transform: `scale(${cloud.style.scale})`,
            opacity: cloud.style.opacity,
            animation: `${cloud.style.anim} ${
              cloud.style.animationDuration
            } linear infinite, cloud-float-strong ${randomBetween(
              12,
              22
            )}s ease-in-out infinite alternate`,
            animationDelay: cloud.style.animationDelay,
            zIndex: 2,
          }}
        />
      ))}
      {/* Butterflies with random color and WAVE float */}
      {butterflies.map((b, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: "32px",
            height: "32px",
            top: b.style.top,
            left: b.style.left,
            animation: `${b.style.anim} ${b.style.animationDuration} linear infinite, butterfly-wave 9s ease-in-out infinite alternate, butterfly-flap 1.2s ease-in-out infinite, butterfly-float 5s ease-in-out infinite alternate`, // Added butterfly-float
            animationDelay: b.style.animationDelay,
            zIndex: 4,
            transform: `scale(${b.style.scale * (b.style.direction || 1)},${
              b.style.scale
            })`,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g className="butterfly-wings">
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
            </g>
            <ellipse cx="16" cy="16" rx="3" ry="7" fill="#333" />
          </svg>
        </div>
      ))}
      {/* Fireflies */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${randomBetween(5, 95)}%`,
            top: `${randomBetween(85, 98)}%`,
            width: 8,
            height: 8,
            borderRadius: 8,
            background: "radial-gradient(circle, #fffbe6 60%, #fff70044 100%)",
            opacity: randomBetween(0.5, 1),
            filter: "blur(1px)",
            animation: `firefly-move ${randomBetween(
              7,
              16
            )}s ease-in-out infinite alternate`,
            zIndex: 5,
          }}
        />
      ))}
      {/* Grass, leaves, big plants at bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
        style={{ height: 140 }}
      >
        <svg
          width="100%"
          height="140"
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        >
          <ellipse
            cx="720"
            cy="130"
            rx="800"
            ry="40"
            fill="#7ed957"
            fillOpacity="0.7"
          />
          {/* Big plants/cattails */}
          {Array.from({ length: 7 }).map((_, i) => (
            <g
              key={i}
              style={{
                animation: `plant-sway ${randomBetween(
                  4,
                  8
                )}s ease-in-out infinite alternate`,
                transformOrigin: `${120 + i * 180}px 120px`,
              }}
            >
              <rect
                x={120 + i * 180}
                y={60}
                width={12}
                height={70}
                rx={6}
                fill="#388e3c"
              />
              <ellipse
                cx={126 + i * 180}
                cy={60}
                rx={18}
                ry={12}
                fill="#b8e994"
              />
            </g>
          ))}
          {/* Grass blades */}
          {Array.from({ length: 40 }).map((_, i) => (
            <rect
              key={i}
              x={30 + i * 35}
              y={100 + Math.random() * 20}
              width={6}
              height={30 + Math.random() * 20}
              rx={3}
              fill="#43a047"
              style={{
                animation: `plant-sway ${randomBetween(
                  3,
                  7
                )}s ease-in-out infinite alternate`,
                transformOrigin: `${30 + i * 35}px 120px`,
              }}
            />
          ))}
          {/* Leaves */}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx={100 + i * 110 + Math.random() * 20}
              cy={125 + Math.random() * 5}
              rx={12}
              ry={5}
              fill="#388e3c"
              fillOpacity="0.7"
              style={{
                animation: `plant-sway ${randomBetween(
                  2,
                  5
                )}s ease-in-out infinite alternate`,
                transformOrigin: `${100 + i * 110}px 130px`,
              }}
            />
          ))}
        </svg>
      </div>
      <style>{`
        /* Dark mode toggle for light-only elements */
        .dark .light-only { display: none !important; }
        .light .light-only { display: block !important; opacity: 1 !important; filter: none !important; }

        /* Cloud Animations */
        @keyframes cloud-move {
          0% { transform: translateX(0) scale(var(--scale, 1)); opacity: 0.8; }
          50% { opacity: 1; }
          100% { transform: translateX(120vw) scale(var(--scale, 1)); opacity: 0.7; }
        }
        @keyframes cloud-float {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          100% { transform: translateY(-24px) scale(var(--scale, 1)); }
        }
        @keyframes cloud-float-strong {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          50% { transform: translateY(-32px) scale(var(--scale, 1.05)); }
          100% { transform: translateY(-48px) scale(var(--scale, 1)); }
        }
        @keyframes cloud-pulse {
          0%, 100% { filter: blur(3px) brightness(1); }
          50% { filter: blur(6px) brightness(1.1); }
        }
        /* Sun Animations */
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

        /* Butterfly Animations */
        @keyframes butterfly-fly {
          0% { transform: translateX(0) scale(var(--scale, 1)); }
          20% { transform: translateX(20vw) scale(var(--scale, 1.1)); }
          40% { transform: translateX(40vw) scale(var(--scale, 0.95)); }
          60% { transform: translateX(60vw) scale(var(--scale, 1.05)); }
          80% { transform: translateX(80vw) scale(var(--scale, 0.9)); }
          100% { transform: translateX(110vw) scale(var(--scale, 1)); }
        }
        @keyframes butterfly-wave {
          0% { transform: translateY(0) translateX(0) scale(var(--scale, 1)); }
          25% { transform: translateY(-15px) translateX(5vw) scale(var(--scale, 1.05)); }
          50% { transform: translateY(10px) translateX(0) scale(var(--scale, 0.95)); }
          75% { transform: translateY(-12px) translateX(-5vw) scale(var(--scale, 1.1)); }
          100% { transform: translateY(0) translateX(0) scale(var(--scale, 1)); }
        }
        @keyframes butterfly-flap {
          0%, 100% { transform: scaleX(1); }
          20% { transform: scaleX(1.2); }
          40% { transform: scaleX(0.8); }
          60% { transform: scaleX(1.15); }
          80% { transform: scaleX(0.9); }
        }
        @keyframes butterfly-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); } /* Increased vertical movement */
          100% { transform: translateY(0); }
        }
        .butterfly-wings {
          animation: butterfly-flap 1.2s ease-in-out infinite;
          transform-origin: 16px 16px;
        }

        /* Plant Animations */
        @keyframes plant-sway {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(7deg); }
        }
        /* Firefly Animation */
        @keyframes firefly-move {
          0% { opacity: 0.7; transform: translateY(0) scale(1); }
          30% { opacity: 1; transform: translateY(-10px) scale(1.1); }
          60% { opacity: 0.8; transform: translateY(8px) scale(0.95); }
          100% { opacity: 0.6; transform: translateY(-6px) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default NatureBackground;
