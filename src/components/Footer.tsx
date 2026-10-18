import { VStack, HStack, Text, Button } from "@astryxdesign/core";
import { ArrowUp, Github, Linkedin, Coffee, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 py-10 ${
        isDark ? "border-white/15 bg-[#0a0518]/95 text-purple-200" : "border-purple-200 bg-white/95 text-gray-700"
      }`}
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        <HStack hAlign="between" vAlign="center" className="flex-col sm:flex-row gap-6 w-full text-center sm:text-left">
          <VStack gap={1}>
            <HStack gap={2} vAlign="center" hAlign="center" className="sm:justify-start">
              <Text type="large" className={`font-bold text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                {PORTFOLIO_DATA.profile.name}
              </Text>
              <Text type="code" className="text-xs text-purple-400">
                (&ldquo;{PORTFOLIO_DATA.profile.tagline}&rdquo;)
              </Text>
            </HStack>
            <Text type="supporting" className="text-xs text-purple-300/70">
              Software Engineer & IT Specialist. Seluruh repositori dan data terverifikasi publik.
            </Text>
          </VStack>

          {/* Social Buttons and Back-to-Top */}
          <HStack gap={2} vAlign="center">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub Norfa Bagas"
              className={`p-2 rounded-xl border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white" : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn Norfa Bagas"
              className={`p-2 rounded-xl border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white" : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil Medium bgsnorfa"
              className={`p-2 rounded-xl border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white" : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900"
              }`}
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              aria-label="Dukung bgsnorfa di Buy Me a Coffee"
              className={`p-2 rounded-xl border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isDark ? "bg-[#180e38] border-white/20 text-amber-300 hover:text-amber-200" : "bg-purple-50 border-purple-200 text-amber-800 hover:text-amber-900"
              }`}
            >
              <Coffee className="w-4 h-4" />
            </a>

            <Button
              label="Ke atas"
              variant="secondary"
              size="sm"
              onClick={scrollToTop}
              className={`p-2 rounded-xl border min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isDark ? "bg-purple-950/70 border-white/25 text-purple-200 hover:bg-purple-900" : "bg-purple-100 border-purple-200 text-purple-900 hover:bg-purple-200"
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </HStack>
        </HStack>

        <Text type="supporting" className="text-center text-xs text-purple-400/80 pt-4 border-t border-white/10 w-full">
          Dibuat dengan tema galaxy dan Astryx Design System berbasis React, StyleX, dan Tailwind CSS.
        </Text>
      </VStack>
    </footer>
  );
}
