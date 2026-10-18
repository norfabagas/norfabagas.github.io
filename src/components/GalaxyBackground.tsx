import { useEffect, useRef } from "react";

interface BackgroundProps {
  isDark: boolean;
}

export function GalaxyBackground({ isDark }: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Subtle ambient particles matching Kreativa's interactive canvas
    const particleCount = Math.floor((width * height) / 22000);
    const particles = Array.from({ length: Math.min(particleCount, 45) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
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

      if (!checkReducedMotion) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(203, 213, 225, ${p.alpha * 0.6})`
            : `rgba(71, 85, 105, ${p.alpha * 0.4})`;
          ctx.fill();
        }

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
      {/* Base Slate Background with Kreativa subtle gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? "bg-slate-950"
            : "bg-slate-50"
        }`}
      />

      {/* Subtle Slate Radial Ambient Glow (Kreativa style) */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] transition-opacity duration-700 pointer-events-none ${
          isDark
            ? "bg-slate-800/40 opacity-70"
            : "bg-slate-200/70 opacity-80"
        }`}
      />

      {/* Kreativa Signature Subtle Grid Overlay */}
      <div
        className={`absolute inset-0 opacity-[0.45] pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent_85%)] ${
          isDark
            ? "bg-[linear-gradient(to_right,#33415525_1px,transparent_1px),linear-gradient(to_bottom,#33415525_1px,transparent_1px)] bg-[size:32px_32px]"
            : "bg-[linear-gradient(to_right,#cbd5e150_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e150_1px,transparent_1px)] bg-[size:32px_32px]"
        }`}
      />

      {/* Interactive Subtle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
