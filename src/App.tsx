import { useState, useEffect } from "react";
import { VStack } from "@astryxdesign/core";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Articles } from "./components/Articles";
import { SupportConnect } from "./components/SupportConnect";
import { Footer } from "./components/Footer";

export type SectionId = "beranda" | "pengalaman" | "artikel" | "kontak";

const SECTION_BACKGROUNDS: { id: SectionId; darkClass: string; lightClass: string }[] = [
  {
    id: "beranda",
    darkClass: "aero-bg-beranda-dark",
    lightClass: "aero-bg-beranda-light",
  },
  {
    id: "pengalaman",
    darkClass: "aero-bg-pengalaman-dark",
    lightClass: "aero-bg-pengalaman-light",
  },
  {
    id: "artikel",
    darkClass: "aero-bg-artikel-dark",
    lightClass: "aero-bg-artikel-light",
  },
  {
    id: "kontak",
    darkClass: "aero-bg-kontak-dark",
    lightClass: "aero-bg-kontak-light",
  },
];

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

  const [activeSection, setActiveSection] = useState<SectionId>("beranda");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("nb_portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
      localStorage.setItem("nb_portfolio_theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const sectionIds: SectionId[] = ["beranda", "pengalaman", "artikel", "kontak"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topId = visible[0].target.id as SectionId;
          if (sectionIds.includes(topId)) {
            setActiveSection(topId);
          }
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("beranda");
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<SectionId>;
      if (customEvent.detail && sectionIds.includes(customEvent.detail)) {
        setActiveSection(customEvent.detail);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("nb-section-change", handleCustomChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("nb-section-change", handleCustomChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <VStack
      gap={0}
      className={`min-h-screen relative font-sans transition-colors duration-500 selection:bg-sky-500 selection:text-white w-full ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-sky-50 text-slate-900"
      }`}
    >
      {/* Dynamic Section Background Cross-fade Layers */}
      {SECTION_BACKGROUNDS.map((sec) => (
        <VStack
          key={sec.id}
          gap={0}
          aria-hidden="true"
          className={`fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000 ease-in-out ${
            activeSection === sec.id ? "opacity-100" : "opacity-0"
          } ${isDark ? sec.darkClass : sec.lightClass}`}
        />
      ))}

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
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
