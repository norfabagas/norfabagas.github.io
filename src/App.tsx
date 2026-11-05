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
    let ticking = false;

    const checkActiveSection = () => {
      // 1. Near the top of page, anchor to Hero
      if (window.scrollY < 120) {
        setActiveSection("beranda");
        return;
      }

      // 2. Near the bottom of page, anchor to Contact
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 80) {
        setActiveSection("kontak");
        return;
      }

      // 3. Focal line at 35% from the top of the viewport
      const focalPoint = window.innerHeight * 0.35;
      let matchedSection: SectionId = "beranda";

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section intersects the focal line
          if (rect.top <= focalPoint && rect.bottom > focalPoint) {
            matchedSection = id;
            break;
          } else if (rect.top <= focalPoint) {
            matchedSection = id;
          }
        }
      }

      setActiveSection((prev) => (prev !== matchedSection ? matchedSection : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkActiveSection();
          ticking = false;
        });
        ticking = true;
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
    window.addEventListener("resize", checkActiveSection, { passive: true });

    // Initial check on mount
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("nb-section-change", handleCustomChange);
      window.removeEventListener("resize", checkActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <VStack
      gap={0}
      className={`min-h-screen relative font-sans selection:bg-sky-500 selection:text-white w-full ${
        isDark ? "text-slate-100" : "text-slate-900"
      }`}
    >
      {/* Dynamic Section Background Canvas (Fixed behind all content) */}
      <VStack gap={0} aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {SECTION_BACKGROUNDS.map((sec) => (
          <VStack
            key={sec.id}
            gap={0}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSection === sec.id ? "opacity-100" : "opacity-0"
            } ${isDark ? sec.darkClass : sec.lightClass}`}
          />
        ))}
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
