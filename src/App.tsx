import { useState, useEffect } from "react";
import { VStack } from "@astryxdesign/core";
import { LanguageProvider } from "./context/LanguageContext";
import { GalaxyBackground } from "./components/GalaxyBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
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

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("nb_portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("nb_portfolio_theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <VStack
      gap={0}
      className={`min-h-screen relative font-sans transition-colors duration-500 selection:bg-slate-900 selection:text-white dark:selection:bg-slate-100 dark:selection:text-slate-900 w-full ${
        isDark ? "text-slate-100" : "text-slate-900"
      }`}
    >
      {/* Background Starfield & Cosmic Nebulae */}
      <GalaxyBackground isDark={isDark} />

      {/* Navigation Bar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Single Page Content Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none w-full">
        <Hero isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Articles isDark={isDark} />
        <SupportConnect isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
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
