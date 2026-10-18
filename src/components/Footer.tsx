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
    <footer className="w-full bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 py-10">
      <VStack gap={6} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Row: Brand & Back to Top */}
        <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-4">
          <HStack gap={3} vAlign="center">
            <img
              src="/favicon.png"
              alt={profile.name}
              className="w-8 h-8 rounded-lg object-cover border border-slate-300 dark:border-slate-700 shadow-sm"
            />
            <VStack gap={0} className="text-left">
              <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {profile.name}
              </Heading>
              <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {profile.title}
              </Text>
            </VStack>
          </HStack>

          <HStack gap={3} vAlign="center">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Norfa Bagas"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Norfa Bagas"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium @bgsnorfa"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950"
              }`}
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              aria-label="Buy Me a Coffee @bgsnorfa"
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800"
                  : "border-slate-200 bg-slate-50 text-amber-600 hover:bg-slate-100"
              }`}
            >
              <Coffee className="w-4 h-4" />
            </a>

            <Button
              label={t.footer.backToTop}
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className={`ml-2 px-3 py-1.5 rounded-md border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950"
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
          className="w-full flex-wrap gap-2 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400"
        >
          <span>{t.footer.tagline}</span>
          <span>{t.footer.credit}</span>
        </HStack>
      </VStack>
    </footer>
  );
}
