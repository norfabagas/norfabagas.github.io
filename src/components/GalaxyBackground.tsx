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

    let animId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      curX += (targetX - curX) * 0.1;
      curY += (targetY - curY) * 0.1;

      const gradient = ctx.createRadialGradient(curX, curY, 0, curX, curY, 320);
      if (isDark) {
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
        gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.05)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else {
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.15)");
        gradient.addColorStop(0.6, "rgba(0, 0, 0, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      animId = requestAnimationFrame(render);
    };

    handleResize();
    render();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      <div
        className={`w-full h-full transition-colors duration-300 ${
          isDark ? "bg-slate-900" : "bg-slate-50"
        }`}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
}
