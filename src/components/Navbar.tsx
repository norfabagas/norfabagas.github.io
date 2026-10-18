import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin, Coffee, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press (R-32)
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
    { label: "Tentang", href: "#tentang" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Proyek", href: "#proyek" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Artikel", href: "#artikel" },
    { label: "Dukungan", href: "#dukungan" }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0d0722]/90 border-b border-white/20 backdrop-blur-md shadow-lg shadow-purple-950/30"
            : "bg-white/90 border-b border-purple-200/90 backdrop-blur-md shadow-md shadow-purple-200/40"
          : isDark
            ? "bg-[#0d0722]/60 border-b border-white/10 backdrop-blur-sm"
            : "bg-white/60 border-b border-purple-100 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#tentang"
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-tr from-purple-700 to-indigo-600 text-white border border-white/30 shadow-sm shadow-purple-500/30"
                  : "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white border border-purple-300 shadow-sm shadow-purple-400/20"
              }`}
            >
              NB
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className={`text-xs ${isDark ? "text-purple-300/80" : "text-purple-700"}`}>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark
                    ? "text-purple-100 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-purple-900 hover:bg-purple-100/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggler */}
          <div className="flex items-center gap-2">
            {/* Quick External Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 pr-2 border-r border-white/15 dark:border-white/15">
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil GitHub Norfa Bagas"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark ? "text-purple-200 hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-purple-900 hover:bg-purple-100"
                }`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil LinkedIn Norfa Bagas"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark ? "text-purple-200 hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-purple-900 hover:bg-purple-100"
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socials.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil Medium bgsnorfa"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark ? "text-purple-200 hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-purple-900 hover:bg-purple-100"
                }`}
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                aria-label="Dukung bgsnorfa di Buy Me a Coffee"
                className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark ? "text-amber-300 hover:text-amber-200 hover:bg-white/10" : "text-amber-700 hover:text-amber-800 hover:bg-amber-100"
                }`}
              >
                <Coffee className="w-4 h-4" />
              </a>
            </div>

            {/* Dark / Light Mode Toggler */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className={`p-2.5 rounded-xl border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#1c123d] border-white/25 text-amber-300 hover:bg-[#251852] hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100 hover:border-purple-300"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className={`md:hidden p-2.5 rounded-xl border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#1c123d] border-white/25 text-purple-200 hover:bg-[#251852]"
                  : "bg-purple-50 border-purple-200 text-gray-800 hover:bg-purple-100"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-2 transition-all ${
            isDark
              ? "bg-[#0e0724] border-white/20 text-white"
              : "bg-white border-purple-200 text-gray-900"
          }`}
        >
          <nav aria-label="Menu Mobile" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark
                    ? "text-purple-100 hover:bg-white/10"
                    : "text-gray-800 hover:bg-purple-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 dark:border-white/10 flex items-center justify-around">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 text-sm text-purple-300 dark:text-purple-200 min-h-[44px]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 text-sm text-purple-300 dark:text-purple-200 min-h-[44px]"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.socials.medium}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 text-sm text-purple-300 dark:text-purple-200 min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Medium</span>
            </a>
            <a
              href={PORTFOLIO_DATA.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 p-2 text-sm text-amber-300 min-h-[44px]"
            >
              <Coffee className="w-4 h-4" />
              <span>Coffee</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
