import { useEffect, useRef } from "react";

interface GalaxyBackgroundProps {
  isDark: boolean;
}

export function GalaxyBackground({ isDark }: GalaxyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate fixed stars
    const starCount = Math.floor((width * height) / 10000);
    const stars = Array.from({ length: Math.min(starCount, 120) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.008 + 0.003,
      direction: Math.random() > 0.5 ? 1 : -1
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const checkReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw celestial stars
      for (const star of stars) {
        if (!checkReducedMotion) {
          star.alpha += star.speed * star.direction;
          if (star.alpha > 0.85) {
            star.alpha = 0.85;
            star.direction = -1;
          } else if (star.alpha < 0.2) {
            star.alpha = 0.2;
            star.direction = 1;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(235, 230, 255, ${star.alpha})`
          : `rgba(120, 80, 200, ${star.alpha * 0.55})`;
        ctx.fill();
      }

      if (!checkReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Nebula ambient gradients */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark
            ? "bg-[#0a0518]"
            : "bg-gradient-to-b from-[#f9f8fe] via-[#f3f0fb] to-[#ece8f7]"
        }`}
      />

      {/* Cosmic dust and nebula clouds */}
      <div
        className={`absolute -top-48 -left-48 w-[550px] h-[550px] rounded-full blur-[140px] opacity-40 transition-opacity duration-700 ${
          isDark ? "bg-[#7928ca]/35" : "bg-[#9333ea]/15"
        }`}
      />
      <div
        className={`absolute top-1/3 -right-36 w-[600px] h-[600px] rounded-full blur-[160px] opacity-35 transition-opacity duration-700 ${
          isDark ? "bg-[#3b0764]/40" : "bg-[#c084fc]/15"
        }`}
      />
      <div
        className={`absolute -bottom-48 left-1/4 w-[650px] h-[650px] rounded-full blur-[160px] opacity-30 transition-opacity duration-700 ${
          isDark ? "bg-[#4c1d95]/35" : "bg-[#a855f7]/15"
        }`}
      />

      {/* Interactive twinkling starfield canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
