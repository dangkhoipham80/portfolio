const clouds = [
  { style: { top: "8%", left: "2%", animationDuration: "28s", scale: 1.2 } },
  { style: { top: "12%", left: "18%", animationDuration: "32s", scale: 1.1 } },
  { style: { top: "20%", left: "60%", animationDuration: "40s", scale: 1.3 } },
  { style: { top: "30%", left: "30%", animationDuration: "35s", scale: 0.9 } },
  { style: { top: "15%", left: "80%", animationDuration: "50s", scale: 1.4 } },
  { style: { top: "25%", left: "45%", animationDuration: "38s", scale: 1.0 } },
  { style: { top: "10%", left: "70%", animationDuration: "36s", scale: 1.2 } },
];

const birds = [
  {
    style: {
      top: "38%",
      left: "-10%",
      animationDuration: "16s",
      animationDelay: "0s",
      scale: 1.1,
    },
  },
  {
    style: {
      top: "44%",
      left: "-15%",
      animationDuration: "22s",
      animationDelay: "5s",
      scale: 0.9,
    },
  },
  {
    style: {
      top: "52%",
      left: "-12%",
      animationDuration: "19s",
      animationDelay: "2s",
      scale: 1.2,
    },
  },
  {
    style: {
      top: "60%",
      left: "-18%",
      animationDuration: "25s",
      animationDelay: "7s",
      scale: 1.0,
    },
  },
  {
    style: {
      top: "48%",
      left: "-8%",
      animationDuration: "21s",
      animationDelay: "3s",
      scale: 1.1,
    },
  },
];

const NatureBackground = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        background: "linear-gradient(to bottom, #87ceeb 0%, #e0f7fa 100%)",
      }}
    >
      {/* Sun */}
      <div
        className="absolute light-only"
        style={{
          top: "60px",
          right: "60px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffd700 60%, #ffa500 100%)",
          boxShadow: "0 0 60px 10px #ffd700, 0 0 120px 40px #fff70044",
          zIndex: 1,
          animation: "sun-pulse 8s ease-in-out infinite alternate",
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
            transform: `scale(${cloud.style.scale})`,
            animation: `cloud-move ${cloud.style.animationDuration} linear infinite, cloud-float 6s ease-in-out infinite alternate`,
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
            transform: `scale(${bird.style.scale})`,
            animation: `bird-fly ${bird.style.animationDuration} linear infinite, bird-float 4s ease-in-out infinite alternate`,
            animationDelay: bird.style.animationDelay,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M5 25 Q20 10 35 25"
              stroke="#444"
              strokeWidth="2"
              fill="none"
              className="bird-path"
            />
          </svg>
        </div>
      ))}
      <style>{`
        .dark .light-only { display: none !important; }
        .light .light-only { display: block !important; opacity: 1 !important; filter: none !important; }
        
        @keyframes cloud-move {
          0% { transform: translateX(0) scale(var(--scale, 1)); }
          100% { transform: translateX(120vw) scale(var(--scale, 1)); }
        }
        
        @keyframes cloud-float {
          0% { transform: translateY(0) scale(var(--scale, 1)); }
          100% { transform: translateY(-10px) scale(var(--scale, 1)); }
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
          100% { transform: translateY(-5px) scale(var(--scale, 1)); }
        }
        
        @keyframes sun-pulse {
          0% { 
            box-shadow: 0 0 60px 10px #ffd700, 0 0 120px 40px #fff70044;
            transform: scale(1);
          }
          100% { 
            box-shadow: 0 0 80px 15px #ffd700, 0 0 140px 50px #fff70066;
            transform: scale(1.05);
          }
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
      `}</style>
    </div>
  );
};

export default NatureBackground;
