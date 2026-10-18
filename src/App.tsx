import { useState, useEffect } from "react";
import { GalaxyBackground } from "./components/GalaxyBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Articles } from "./components/Articles";
import { SupportConnect } from "./components/SupportConnect";
import { Footer } from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check saved local preference or default to dark (galaxy theme)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("nb_portfolio_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return true; // Default to dark galaxy theme
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

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 selection:bg-purple-500 selection:text-white ${
      isDark ? "text-purple-100" : "text-gray-900"
    }`}>
      {/* Background with Twinkling Starfield & Cosmic Nebulae */}
      <GalaxyBackground isDark={isDark} />

      {/* Fixed Navigation Bar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Single Page Content */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Experience isDark={isDark} />
        <Articles isDark={isDark} />
        <SupportConnect isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}
