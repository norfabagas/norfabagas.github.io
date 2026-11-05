import { useState, useEffect, useRef } from "react";
import { VStack } from "@astryxdesign/core";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Articles } from "./components/Articles";
import { SupportConnect } from "./components/SupportConnect";
import { Footer } from "./components/Footer";

function PortfolioContent() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("nb_portfolio_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return true;
    }
    return true;
  });

  const [isMounted, setIsMounted] = useState(false);
  const gradientFlowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      root.style.backgroundColor = "#020617";
      localStorage.setItem("nb_portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
      root.style.backgroundColor = "#f0f9ff";
      localStorage.setItem("nb_portfolio_theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    let ticking = false;
    let cachedMaxScroll = 1;

    const recalculateDimensions = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      cachedMaxScroll = docHeight > 0 ? docHeight : 1;
      applyProgress();
    };

    const applyProgress = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / cachedMaxScroll));
      if (gradientFlowRef.current) {
        gradientFlowRef.current.style.opacity = progress.toFixed(4);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          applyProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate dimensions after mount
    recalculateDimensions();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", recalculateDimensions, { passive: true });
    window.addEventListener("load", recalculateDimensions, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        recalculateDimensions();
      });
      ro.observe(document.body);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", recalculateDimensions);
      window.removeEventListener("load", recalculateDimensions);
      if (ro) ro.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <VStack
      gap={0}
      className={`min-h-screen relative font-sans selection:bg-sky-500 selection:text-white w-full transition-opacity duration-300 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      } ${isDark ? "text-slate-100" : "text-slate-900"}`}
    >
      {/* Background Canvas: Base Layer (0% gradient) + Dynamic Scroll-driven Gradient Layer (0% -> 100%) */}
      <VStack gap={0} aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Layer 1: Solid Clean Base Atmosphere (visible at top height 0%) */}
        <VStack
          gap={0}
          className={`absolute inset-0 ${isDark ? "aero-base-dark" : "aero-base-light"}`}
        />

        {/* Layer 2: Rich Frutiger Aero Gradient (increases from 0% opacity at top to 100% on scroll) */}
        <VStack
          ref={gradientFlowRef}
          gap={0}
          className={`absolute inset-0 aero-gradient-flow ${
            isDark ? "aero-gradient-flow-dark" : "aero-gradient-flow-light"
          }`}
        />
      </VStack>

      {/* Main Page Elements (Elevated above background canvas at z-10) */}
      <VStack gap={0} className="relative z-10 w-full">
        {/* Navigation Bar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main Content Sections */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none w-full">
          <Hero isDark={isDark} />
          <Experience isDark={isDark} />
          <Articles isDark={isDark} />
          <SupportConnect isDark={isDark} />
        </main>

        {/* Footer */}
        <Footer isDark={isDark} />
      </VStack>
    </VStack>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
