import { useState, useEffect } from "react";
import { HStack, VStack, Button, Heading } from "@astryxdesign/core";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const { locale, toggleLocale, t, data } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: t.nav.experience, id: "pengalaman" },


    { label: t.nav.articles, id: "artikel" },
    { label: t.nav.support, id: "kontak" }
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("nb-section-change", { detail: targetId }));
    }
    setIsMobileMenuOpen(false);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <nav
      className={`backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300 w-full border-b ${
        isDark
          ? "bg-slate-950/75 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]"
          : "bg-white/75 border-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.05),inset_0_-1px_0_rgba(255,255,255,0.9)]"
      }`}
    >
      <VStack gap={0} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HStack hAlign="between" vAlign="center" className="h-14 sm:h-16 w-full relative">
          {/* Left: Brand / Logo */}
          <HStack vAlign="center" className="flex-1 justify-start">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, "beranda")}
              className="flex-shrink-0 flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1 text-left bg-transparent border-0 cursor-pointer group min-h-[44px]"
              aria-label="Norfa Bagas Portfolio Home"
            >
              <img
                src="/favicon.png"
                alt={data.profile.name}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover border-2 shadow-sm transition-transform duration-200 group-hover:scale-105 ${
                  isDark ? "border-sky-500/40 shadow-sky-950/50" : "border-white shadow-sky-100"
                }`}
              />
              <Heading level={3} className={`text-sm sm:text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {data.profile.name}
              </Heading>
            </button>
          </HStack>

          {/* Middle: Desktop Nav Links (strictly centered) */}
          <HStack gap={1} vAlign="center" className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer bg-transparent border py-1.5 px-3.5 rounded-lg min-h-[40px] ${
                  isDark
                    ? "text-slate-300 border-transparent hover:text-white hover:bg-slate-800/60 hover:border-white/15"
                    : "text-slate-700 border-transparent hover:text-slate-950 hover:bg-white/80 hover:border-white/90 hover:shadow-sm"
                }`}
              >
                {link.label}
              </button>
            ))}
          </HStack>

          {/* Right: Header Controls */}
          <HStack gap={1.5} vAlign="center" className="flex-1 justify-end">
            {/* Language Switcher Toggle Button (ID <-> EN) */}
            <Button
              label={t.nav.toggleLang}
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className={`p-2.5 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 text-xs font-mono font-bold tracking-wider ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/25 text-slate-200 hover:text-white"
                  : "aero-glass-badge-light hover:border-sky-300 text-slate-700 hover:text-slate-900"
              }`}
            >
              {locale === "id-ID" ? "ID" : "EN"}
            </Button>

            {/* Dark / Light Theme Toggle */}
            <Button
              label={isDark ? t.nav.toggleThemeLight : t.nav.toggleThemeDark}
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/25"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-700" />}
            </Button>

            {/* Mobile Menu Toggler */}
            <Button
              label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/25"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </HStack>
        </HStack>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <VStack
            gap={1}
            className={`md:hidden p-3 my-2 rounded-2xl border aero-glass-card shadow-2xl ${
              isDark ? "aero-glass-card-dark text-slate-100" : "aero-glass-card-light text-slate-900"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center transition-all min-h-[48px] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer w-full text-left bg-transparent border-0 ${
                  isDark ? "text-slate-200 hover:bg-slate-800/70" : "text-slate-800 hover:bg-white/80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </VStack>
        )}
      </VStack>
    </nav>
  );
}
