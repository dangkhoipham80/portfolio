import React from "react";

const clouds = [
  { style: { top: "8%", left: "2%", animationDuration: "28s" } },
  { style: { top: "12%", left: "18%", animationDuration: "32s" } },
  { style: { top: "20%", left: "60%", animationDuration: "40s" } },
  { style: { top: "30%", left: "30%", animationDuration: "35s" } },
  { style: { top: "15%", left: "80%", animationDuration: "50s" } },
  { style: { top: "25%", left: "45%", animationDuration: "38s" } },
  { style: { top: "10%", left: "70%", animationDuration: "36s" } },
];

const birds = [
  {
    style: {
      top: "38%",
      left: "-10%",
      animationDuration: "16s",
      animationDelay: "0s",
    },
  },
  {
    style: {
      top: "44%",
      left: "-15%",
      animationDuration: "22s",
      animationDelay: "5s",
    },
  },
  {
    style: {
      top: "52%",
      left: "-12%",
      animationDuration: "19s",
      animationDelay: "2s",
    },
  },
  {
    style: {
      top: "60%",
      left: "-18%",
      animationDuration: "25s",
      animationDelay: "7s",
    },
  },
  {
    style: {
      top: "48%",
      left: "-8%",
      animationDuration: "21s",
      animationDelay: "3s",
    },
  },
];

const treePositions = [
  "2%",
  "8%",
  "15%",
  "25%",
  "35%",
  "50%",
  "65%",
  "75%",
  "85%",
  "92%",
];

const NatureBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sun */}
      <div
        className="absolute light-only"
        style={{
          top: "60px",
          right: "60px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffd700 60%, #ffa500 100%)",
          boxShadow: "0 0 60px 10px #ffd700, 0 0 120px 40px #fff70044",
          zIndex: 1,
        }}
      />
      {/* Clouds */}
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-80 rounded-full light-only"
          style={{
            ...cloud.style,
            width: "120px",
            height: "60px",
            filter: "blur(2px)",
            animation: `cloud-move ${cloud.style.animationDuration} linear infinite`,
          }}
        />
      ))}
      {/* Birds */}
      {birds.map((bird, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...bird.style,
            width: "40px",
            height: "40px",
            animation: `bird-fly ${bird.style.animationDuration} linear infinite`,
            animationDelay: bird.style.animationDelay,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M5 25 Q20 10 35 25"
              stroke="#444"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      ))}
      {/* Trees (dùng hình ảnh) */}
      {treePositions.map((left, i) => (
        <img
          key={i}
          src="/assets/images/tree.svg"
          alt="tree"
          className="absolute"
          style={{ left, bottom: 0, width: "70px", height: "auto", zIndex: 2 }}
          draggable={false}
        />
      ))}
      {/* Flower field (dùng hình ảnh flower.svg) */}
      <img
        src="/assets/images/flower.svg"
        alt="flower field"
        className="absolute left-0 right-0 bottom-0"
        style={{
          width: "100vw",
          height: "100px",
          objectFit: "cover",
          zIndex: 1,
        }}
        draggable={false}
      />
      <style>{`
        .dark .light-only { display: none !important; }
        @keyframes cloud-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }
        @keyframes bird-fly {
          0% { transform: translateX(0) scale(1); }
          10% { transform: translateX(10vw) scale(1.1); }
          20% { transform: translateX(20vw) scale(1); }
          30% { transform: translateX(30vw) scale(0.95); }
          40% { transform: translateX(40vw) scale(1); }
          50% { transform: translateX(50vw) scale(1.05); }
          60% { transform: translateX(60vw) scale(1); }
          70% { transform: translateX(70vw) scale(0.9); }
          80% { transform: translateX(80vw) scale(1); }
          90% { transform: translateX(90vw) scale(1.1); }
          100% { transform: translateX(110vw) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default NatureBackground;
