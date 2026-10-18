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
        isDark ? "border-slate-800 bg-slate-950 text-slate-400" : "border-slate-200 bg-slate-900 text-slate-300"
      }`}
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        <HStack hAlign="between" vAlign="center" className="flex-col sm:flex-row gap-6 w-full text-center sm:text-left">
          <VStack gap={1}>
            <HStack gap={2} vAlign="center" hAlign="center" className="sm:justify-start">
              <Text type="large" className="font-bold text-base text-white">
                {PORTFOLIO_DATA.profile.name}
              </Text>
              <Text type="code" className="text-xs text-slate-400">
                (&ldquo;{PORTFOLIO_DATA.profile.tagline}&rdquo;)
              </Text>
            </HStack>
            <Text type="supporting" className="text-xs text-slate-400">
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
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn Norfa Bagas"
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil Medium bgsnorfa"
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              aria-label="Dukung bgsnorfa di Buy Me a Coffee"
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Coffee className="w-4 h-4" />
            </a>

            <Button
              label="Ke atas"
              variant="secondary"
              size="sm"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </HStack>
        </HStack>

        <Text type="supporting" className="text-center text-xs text-slate-500 pt-4 border-t border-slate-800 w-full">
          Dibuat dengan tema Kreativa Slate dan Astryx Design System berbasis React, StyleX, dan Tailwind CSS.
        </Text>
      </VStack>
    </footer>
  );
}
