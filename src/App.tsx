import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";

const PAD = 20;

function App() {
  const [noCoords, setNoCoords] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [answered, setAnswered] = useState<"yes" | null>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const name = "Baby";

  // Set initial No button position to match the ghost placeholder
  useLayoutEffect(() => {
    if (ghostRef.current) {
      const rect = ghostRef.current.getBoundingClientRect();
      setNoCoords({ x: Math.floor(rect.left), y: Math.floor(rect.top) });
    }
  }, []);

  const escapeButton = () => {
    const btn = noButtonRef.current;
    const w = btn ? btn.offsetWidth : 120;
    const h = btn ? btn.offsetHeight : 48;

    const newX = PAD + Math.random() * (window.innerWidth - w - PAD * 2);
    const newY = PAD + Math.random() * (window.innerHeight - h - PAD * 2);

    setNoCoords({ x: Math.floor(newX), y: Math.floor(newY) });
  };

  if (answered === "yes") {
    return (
      <div
        className="min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        }}
      >
        <div className="text-center p-12">
          <div className="text-8xl mb-6 animate-bounce">🥰</div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#f9a8d4" }}>
            She said yes! 💖
          </h1>
          <p className="text-lg" style={{ color: "#e9d5ff" }}>
            You just made everything perfect,{name}!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: "white",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* No button in fixed overflow-hidden overlay — can never escape screen */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        <button
          ref={noButtonRef}
          onMouseEnter={escapeButton}
          className="absolute px-10 py-3 rounded-full font-bold text-lg cursor-default select-none pointer-events-auto"
          style={{
            left: noCoords ? `${noCoords.x}px` : "-9999px",
            top: noCoords ? `${noCoords.y}px` : "-9999px",
            background: "rgba(255,255,255,0.1)",
            color: "#d1d5db",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "left 0.12s ease, top 0.12s ease",
          }}
        >
          No
        </button>
      </div>

      {/* Card */}
      <div
        className="relative rounded-3xl p-12 w-full max-w-md text-center shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          className="text-7xl mb-4"
          style={{ filter: "drop-shadow(0 0 20px rgba(249,168,212,0.8))" }}
        >
          ❤️‍🔥
        </div>
        <div
          className="text-2xl mb-6 tracking-widest"
          style={{ color: "#c084fc" }}
        >
          ✦ ✦ ✦
        </div>

        <h1 className="text-3xl font-bold mb-8" style={{ color: "#f3e8ff" }}>
          {name} will you be my valentine?
        </h1>

        <div className="flex gap-6 justify-center mb-6">
          <button
            onClick={() => setAnswered("yes")}
            className="px-10 py-3 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "white",
              boxShadow: "0 0 20px rgba(168,85,247,0.5)",
            }}
          >
            Yes ✨
          </button>

          {/* Ghost — invisible but holds the layout space and gives us the position */}
          <div
            ref={ghostRef}
            className="px-10 py-3 rounded-full font-bold text-lg opacity-0 pointer-events-none select-none"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            No
          </div>
        </div>

        <p className="text-sm italic" style={{ color: "#a78bfa" }}>
          "No" seems a bit shy 💔
        </p>
      </div>
    </div>
  );
}

export default App;
