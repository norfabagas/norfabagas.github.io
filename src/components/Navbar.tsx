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
    <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 w-full">
      <VStack gap={0} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HStack hAlign="between" vAlign="center" className="h-16 w-full">
          {/* Logo Brand: avatar/initials badge */}
          <button
            type="button"
            onClick={(e) => handleNavClick(e, "beranda")}
            className="flex-shrink-0 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white rounded-lg p-1 text-left bg-transparent border-0 cursor-pointer"
            aria-label="Norfa Bagas Portfolio Home"
          >
            <img
              src="/favicon.png"
              alt={data.profile.name}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-slate-300 dark:border-slate-700 shadow-sm"
            />
            <VStack gap={0} className="text-left">
              <Heading level={3} className={`text-base sm:text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {data.profile.name}
              </Heading>
              <span className={`text-[11px] font-mono leading-none ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Software Engineer
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
                className={`text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white cursor-pointer bg-transparent border-0 py-2 px-3 rounded-md ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
              className={`px-2.5 py-1.5 rounded-md border min-h-[36px] flex items-center gap-1 font-bold text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                  : "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
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
              className={`p-2 rounded-md border min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                  : "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </Button>

            {/* Traktir Kopi / Coffee Action Button */}
            <Button
              label={t.nav.kopi}
              variant="primary"
              size="sm"
              href={data.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-semibold transition-colors bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900 shadow hover:bg-slate-800 dark:hover:bg-slate-200 h-9 px-3.5 py-2"
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
              className={`md:hidden p-2 rounded-md border min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-white hover:bg-slate-800"
                  : "bg-white border-slate-300 text-slate-900 hover:bg-slate-100"
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
            className={`md:hidden border-t py-4 w-full transition-all ${
              isDark ? "border-slate-800 text-slate-100" : "border-slate-200 text-slate-900"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2.5 rounded-md text-sm font-semibold flex items-center transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white cursor-pointer w-full text-left bg-transparent border-0 ${
                  isDark ? "text-slate-200 hover:bg-slate-800" : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}

            <VStack gap={0} className="pt-2 px-4 w-full">
              <a
                href={data.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900 shadow hover:bg-slate-800 dark:hover:bg-slate-200 h-11 px-4"
              >
                <Coffee className="w-4 h-4" />
                <span>{locale === "id-ID" ? "Traktir Kopi di BuyMeACoffee" : "Support on BuyMeACoffee"}</span>
              </a>
            </VStack>
          </VStack>
        )}
      </VStack>
    </nav>
  );
}
