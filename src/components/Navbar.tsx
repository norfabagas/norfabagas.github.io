import { useState, useEffect } from "react";
import { HStack, VStack, Button, Heading, Text } from "@astryxdesign/core";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0d0722]/95 border-b border-white/20 backdrop-blur-md shadow-lg shadow-purple-950/40"
            : "bg-white/95 border-b border-purple-200/90 backdrop-blur-md shadow-md shadow-purple-200/40"
          : isDark
            ? "bg-[#0d0722]/75 border-b border-white/10 backdrop-blur-sm"
            : "bg-white/75 border-b border-purple-100 backdrop-blur-sm"
      }`}
    >
      <VStack gap={0} className="max-w-6xl mx-auto px-4 sm:px-6">
        <HStack hAlign="between" vAlign="center" className="h-16 w-full">
          {/* Logo Brand with NB initials */}
          <a
            href="#tentang"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl p-1"
          >
            <HStack
              hAlign="center"
              vAlign="center"
              className={`w-9 h-9 rounded-xl font-bold text-sm ${
                isDark
                  ? "bg-gradient-to-tr from-purple-700 to-indigo-600 text-white border border-white/30"
                  : "bg-gradient-to-tr from-purple-600 to-indigo-500 text-white border border-purple-300"
              }`}
            >
              NB
            </HStack>
            <VStack gap={0}>
              <Heading level={3} className={`text-sm sm:text-base font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                {PORTFOLIO_DATA.profile.name}
              </Heading>
              <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/80" : "text-purple-700"}`}>
                Software Engineer
              </Text>
            </VStack>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark
                    ? "text-purple-100 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-purple-900 hover:bg-purple-100/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Controls */}
          <HStack gap={2} vAlign="center">
            {/* Quick social shortcuts (Desktop) */}
            <HStack gap={1} vAlign="center" className="hidden lg:flex pr-2 border-r border-white/15">
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi profil GitHub Norfa Bagas"
                className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
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
                className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
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
                className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
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
                className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isDark ? "text-amber-300 hover:text-amber-200 hover:bg-white/10" : "text-amber-700 hover:text-amber-800 hover:bg-amber-100"
                }`}
              >
                <Coffee className="w-4 h-4" />
              </a>
            </HStack>

            {/* Dark / Light Mode Toggler */}
            <Button
              label={isDark ? "Mode Terang" : "Mode Gelap"}
              variant="ghost"
              size="md"
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark
                  ? "bg-[#1c123d] border-white/25 text-amber-300 hover:bg-[#251852] hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100 hover:border-purple-300"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Toggler */}
            <Button
              label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              variant="ghost"
              size="md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark
                  ? "bg-[#1c123d] border-white/25 text-purple-200 hover:bg-[#251852]"
                  : "bg-purple-50 border-purple-200 text-gray-800 hover:bg-purple-100"
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
              isDark ? "border-white/15 text-white" : "border-purple-200 text-gray-900"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark ? "text-purple-100 hover:bg-white/10" : "text-gray-800 hover:bg-purple-50"
                }`}
              >
                {link.label}
              </a>
            ))}

            <HStack hAlign="between" vAlign="center" className="pt-3 border-t border-white/10 w-full">
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-purple-300 min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-purple-300 min-h-[44px]"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials.medium}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-purple-300 min-h-[44px]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Medium</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 p-2 text-xs font-medium text-amber-300 min-h-[44px]"
              >
                <Coffee className="w-4 h-4" />
                <span>Kopi</span>
              </a>
            </HStack>
          </VStack>
        )}
      </VStack>
    </header>
  );
}
