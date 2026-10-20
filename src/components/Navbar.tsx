import { useState, useEffect } from "react";
import { HStack, VStack, Button, Heading } from "@astryxdesign/core";
import { Moon, Sun, Menu, X, Coffee, Globe } from "lucide-react";
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
    { label: t.nav.projects, id: "proyek" },
    { label: t.nav.skills, id: "keahlian" },
    { label: t.nav.articles, id: "artikel" },
    { label: t.nav.support, id: "kontak" }
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
    <nav
      className={`backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300 w-full border-b ${
        isDark
          ? "bg-slate-950/75 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]"
          : "bg-white/75 border-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.05),inset_0_-1px_0_rgba(255,255,255,0.9)]"
      }`}
    >
      <VStack gap={0} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HStack hAlign="between" vAlign="center" className="h-16 w-full">
          {/* Logo Brand: avatar/initials badge */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, "beranda")}
            className="flex-shrink-0 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1 text-left bg-transparent border-0 cursor-pointer group"
            aria-label="Norfa Bagas Portfolio Home"
          >
            <img
              src="/favicon.png"
              alt={data.profile.name}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border-2 shadow-sm transition-transform duration-200 group-hover:scale-105 ${
                isDark ? "border-sky-500/40 shadow-sky-950/50" : "border-white shadow-sky-100"
              }`}
            />
            <VStack gap={0} className="text-left">
              <Heading level={3} className={`text-base sm:text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {data.profile.name}
              </Heading>
              <span className={`text-[11px] font-mono leading-none ${isDark ? "text-sky-400" : "text-sky-600"}`}>
                Product Engineer
              </span>
            </VStack>
          </button>

          {/* Desktop Nav Links */}
          <HStack gap={1} vAlign="center" className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer bg-transparent border py-1.5 px-3 rounded-lg ${
                  isDark
                    ? "text-slate-300 border-transparent hover:text-white hover:bg-slate-800/60 hover:border-white/15"
                    : "text-slate-700 border-transparent hover:text-slate-950 hover:bg-white/80 hover:border-white/90 hover:shadow-sm"
                }`}
              >
                {link.label}
              </button>
            ))}
          </HStack>

          {/* Header Controls (Right side) */}
          <HStack gap={2} vAlign="center">
            {/* Language Switcher Button (en-US <-> id-ID) */}
            <Button
              label={t.nav.toggleLang}
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className={`px-2.5 py-1.5 rounded-lg border min-h-[36px] flex items-center gap-1 font-bold text-xs transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/25"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono text-xs font-bold tracking-wider">
                {locale === "id-ID" ? "ID" : "EN"}
              </span>
            </Button>

            {/* Dark / Light Theme Toggle */}
            <Button
              label={isDark ? t.nav.toggleThemeLight : t.nav.toggleThemeDark}
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border min-h-[36px] min-w-[36px] flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/25"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-700" />}
            </Button>

            {/* Traktir Kopi / Coffee Action Button */}
            <Button
              label={t.nav.kopi}
              variant="primary"
              size="sm"
              href={data.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-sm font-semibold aero-btn-primary h-9 px-4 py-2"
            >
              <HStack gap={1.5} vAlign="center">
                <Coffee className="w-3.5 h-3.5" />
                <span>{t.nav.kopi}</span>
              </HStack>
            </Button>

            {/* Mobile Menu Toggler */}
            <Button
              label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg border min-h-[36px] min-w-[36px] flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
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
            className={`md:hidden p-3 my-2 rounded-2xl border aero-glass-card ${
              isDark ? "aero-glass-card-dark text-slate-100" : "aero-glass-card-light text-slate-900"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer w-full text-left bg-transparent border-0 ${
                  isDark ? "text-slate-200 hover:bg-slate-800/70" : "text-slate-800 hover:bg-white/80"
                }`}
              >
                {link.label}
              </button>
            ))}

            <VStack gap={0} className="pt-2 px-1 w-full">
              <a
                href={data.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold aero-btn-primary h-11 px-4"
              >
                <Coffee className="w-4 h-4" />
                <span>{locale === "id-ID" ? "Traktir Kopi di BuyMeACoffee" : "Buy Me a Coffee"}</span>
              </a>
            </VStack>
          </VStack>
        )}
      </VStack>
    </nav>
  );
}
