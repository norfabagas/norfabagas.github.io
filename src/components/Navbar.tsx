import { useState, useEffect } from "react";
import { HStack, VStack, Button, Heading, Text } from "@astryxdesign/core";
import { Moon, Sun, Menu, X, Github, Linkedin, Coffee, BookOpen, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const { locale, toggleLocale, t, data } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { label: t.nav.about, id: "tentang" },
    { label: t.nav.skills, id: "keahlian" },
    { label: t.nav.projects, id: "proyek" },
    { label: t.nav.experience, id: "pengalaman" },
    { label: t.nav.articles, id: "artikel" },
    { label: t.nav.support, id: "dukungan" }
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-slate-950/95 border-b border-slate-800 backdrop-blur-md shadow-md"
            : "bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-sm"
          : isDark
            ? "bg-slate-950/80 border-b border-slate-800/60 backdrop-blur-sm"
            : "bg-white/80 border-b border-slate-200/60 backdrop-blur-sm"
      }`}
    >
      <VStack gap={0} className="max-w-6xl mx-auto px-4 sm:px-6">
        <HStack hAlign="between" vAlign="center" className="h-16 w-full">
          {/* Logo Brand with avatar */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, "tentang")}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-xl p-1 text-left bg-transparent border-0 cursor-pointer"
          >
            <img
              src="/favicon.png"
              alt={data.profile.name}
              className={`w-9 h-9 rounded-xl object-cover border ${
                isDark ? "border-slate-700 shadow-sm" : "border-slate-200 shadow-sm"
              }`}
            />
            <VStack gap={0}>
              <Heading level={3} className={`text-sm sm:text-base font-bold leading-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {data.profile.name}
              </Heading>
              <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {data.profile.title}
              </Text>
            </VStack>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer bg-transparent border-0 ${
                  isDark
                    ? "text-slate-300 hover:text-slate-100 hover:bg-slate-800/70"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Controls */}
          <HStack gap={2} vAlign="center">
            {/* Quick social shortcuts (Desktop) */}
            <HStack gap={1} vAlign="center" className="hidden lg:flex pr-2 border-r border-slate-200 dark:border-slate-800">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil GitHub Norfa Bagas"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                  isDark ? "text-slate-400 hover:text-slate-100 hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil LinkedIn Norfa Bagas"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                  isDark ? "text-slate-400 hover:text-slate-100 hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={data.socials.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil Medium bgsnorfa"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                  isDark ? "text-slate-400 hover:text-slate-100 hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={data.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                aria-label="Dukung bgsnorfa di Buy Me a Coffee"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isDark ? "text-amber-400 hover:text-amber-300 hover:bg-slate-800" : "text-amber-700 hover:text-amber-800 hover:bg-amber-50"
                }`}
              >
                <Coffee className="w-4 h-4" />
              </a>
            </HStack>

            {/* Language Switcher Button (en-US <-> id-ID) */}
            <Button
              label={t.nav.toggleLang}
              variant="ghost"
              size="md"
              onClick={toggleLocale}
              className={`px-2.5 py-2 rounded-lg border min-h-[44px] flex items-center gap-1.5 font-bold text-xs transition-colors ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
                  : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 hover:border-slate-400"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono text-xs font-semibold tracking-wider">
                {locale === "id-ID" ? "ID" : "EN"}
              </span>
            </Button>

            {/* Dark / Light Mode Toggler */}
            <Button
              label={isDark ? t.nav.toggleThemeLight : t.nav.toggleThemeDark}
              variant="ghost"
              size="md"
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg border min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
                  : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 hover:border-slate-400"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Toggler */}
            <Button
              label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              variant="ghost"
              size="md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-lg border min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </HStack>
        </HStack>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <VStack
            gap={2}
            className={`md:hidden border-t py-4 w-full transition-all ${
              isDark ? "border-slate-800 text-slate-100" : "border-slate-200 text-slate-900"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer w-full text-left bg-transparent border-0 ${
                  isDark ? "text-slate-200 hover:bg-slate-800/80" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}

            <HStack hAlign="between" vAlign="center" className="pt-3 border-t border-slate-800/60 w-full">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-slate-400 hover:text-slate-200 min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-slate-400 hover:text-slate-200 min-h-[44px]"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={data.socials.medium}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-slate-400 hover:text-slate-200 min-h-[44px]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Medium</span>
              </a>
              <a
                href={data.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-amber-500 hover:text-amber-400 min-h-[44px]"
              >
                <Coffee className="w-4 h-4" />
                <span>{t.nav.kopi}</span>
              </a>
            </HStack>
          </VStack>
        )}
      </VStack>
    </header>
  );
}
