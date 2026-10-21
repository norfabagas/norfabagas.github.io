import { VStack, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowUp, Github, Linkedin, Coffee, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const { t, data } = useLanguage();
  const { profile, socials } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <footer
      className={`w-full backdrop-blur-xl border-t transition-colors duration-300 py-10 ${
        isDark
          ? "bg-slate-950/70 border-white/10 text-slate-300"
          : "bg-white/70 border-white/80 text-slate-700"
      }`}
    >
      <VStack gap={6} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Row: Brand & Back to Top */}
        <HStack hAlign="between" vAlign="center" className="w-full flex-col sm:flex-row items-center sm:justify-between gap-4">
          <HStack gap={3} vAlign="center">
            <img
              src="/favicon.png"
              alt={profile.name}
              className={`w-8 h-8 rounded-xl object-cover border shadow-sm ${
                isDark ? "border-sky-500/30" : "border-white"
              }`}
            />
            <VStack gap={0} className="text-left">
              <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {profile.name}
              </Heading>
              <Text type="supporting" className={`text-xs ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                {profile.title}
              </Text>
            </VStack>
          </HStack>

          <HStack gap={2} vAlign="center" className="flex-wrap justify-center">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Norfa Bagas"
              className={`p-2.5 rounded-xl border transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/30"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Norfa Bagas"
              className={`p-2.5 rounded-xl border transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/30"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium @bgsnorfa"
              className={`p-2.5 rounded-xl border transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/30"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              aria-label="Buy Me a Coffee @bgsnorfa"
              className={`p-2.5 rounded-xl border transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${
                isDark
                  ? "aero-glass-badge-dark text-amber-300 hover:border-white/30"
                  : "aero-glass-badge-light text-amber-700 hover:border-amber-300"
              }`}
            >
              <Coffee className="w-4 h-4" />
            </a>

            <Button
              label={t.footer.backToTop}
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className={`ml-1 px-3.5 py-2 rounded-xl text-xs font-semibold min-h-[44px] flex items-center gap-1.5 transition-all duration-150 active:scale-95 ${
                isDark
                  ? "aero-glass-badge-dark hover:border-white/30"
                  : "aero-glass-badge-light hover:border-sky-300"
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </Button>
          </HStack>
        </HStack>

        {/* Bottom Row: Tagline & Copyright */}
        <HStack
          hAlign="between"
          vAlign="center"
          className="w-full flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-2 pt-6 border-t border-white/30 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400"
        >
          <span>{t.footer.tagline}</span>
          <span>{t.footer.credit}</span>
        </HStack>
      </VStack>
    </footer>
  );
}
