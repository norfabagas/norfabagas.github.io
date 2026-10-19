import { Section, VStack, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowRight, Briefcase, Github, Linkedin, BookOpen, Coffee } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { data, t } = useLanguage();
  const { profile, socials } = data;

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const coreTech = ["Go (Golang)", "Ruby on Rails", "Python", "T-SQL / OLAP", "PostgreSQL", "Docker"];

  return (
    <Section
      id="beranda"
      variant="transparent"
      paddingBlock={0}
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-24 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
    >
      <VStack gap={0} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Profile Avatar Frame with Frutiger Aero Glass Ring */}
        <VStack gap={0} hAlign="center" className="mb-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 object-cover transition-all duration-300 hover:scale-105 ${
              isDark
                ? "border-white/40 ring-4 ring-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.45)]"
                : "border-white ring-4 ring-sky-200/80 shadow-[0_0_30px_rgba(56,189,248,0.35)]"
            }`}
            loading="eager"
          />
        </VStack>

        {/* Name & Title with solid high-contrast type */}
        <Heading
          level={1}
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}
        >
          {profile.name}
        </Heading>

        <Text
          type="large"
          className={`mt-2 text-lg sm:text-xl font-semibold ${
            isDark ? "text-sky-300" : "text-sky-700"
          }`}
        >
          {profile.title}
        </Text>

        {/* Concrete Summary */}
        <Text
          type="body"
          className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {profile.summary}
        </Text>

        {/* Core Technology Chips */}
        <HStack gap={1.5} hAlign="center" vAlign="center" className="mt-6 flex-wrap justify-center max-w-xl mx-auto">
          {coreTech.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-3 py-1 rounded-lg font-mono font-medium backdrop-blur-md ${
                isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
              }`}
            >
              {tech}
            </span>
          ))}
        </HStack>

        {/* Primary and Secondary CTA Buttons */}
        <HStack gap={3} hAlign="center" vAlign="center" className="mt-8 flex-col sm:flex-row gap-3 w-full justify-center">
          <Button
            label={t.hero.ctaProjects}
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("proyek")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold aero-btn-primary rounded-xl px-6 w-full sm:w-auto min-h-[44px]"
          >
            <HStack gap={2} vAlign="center">
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </HStack>
          </Button>

          <Button
            label={t.hero.ctaExperience}
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection("pengalaman")}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold rounded-xl px-6 w-full sm:w-auto min-h-[44px] ${
              isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
            }`}
          >
            <HStack gap={2} vAlign="center">
              <Briefcase className="w-4 h-4" />
              <span>{t.hero.ctaExperience}</span>
            </HStack>
          </Button>
        </HStack>

        {/* Quick Social & Contact Links */}
        <HStack gap={2} hAlign="center" vAlign="center" className="mt-8 justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub @norfabagas"
            className={`p-2.5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "aero-glass-badge-dark hover:border-white/30 hover:scale-105"
                : "aero-glass-badge-light hover:border-sky-300 hover:scale-105"
            }`}
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn @norfabagas"
            className={`p-2.5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "aero-glass-badge-dark hover:border-white/30 hover:scale-105"
                : "aero-glass-badge-light hover:border-sky-300 hover:scale-105"
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Medium @bgsnorfa"
            className={`p-2.5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "aero-glass-badge-dark hover:border-white/30 hover:scale-105"
                : "aero-glass-badge-light hover:border-sky-300 hover:scale-105"
            }`}
          >
            <BookOpen className="w-4 h-4" />
          </a>

          <a
            href={socials.buymeacoffee}
            target="_blank"
            rel="noreferrer"
            aria-label="Buy Me a Coffee @bgsnorfa"
            className={`p-2.5 rounded-xl border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "aero-glass-badge-dark text-amber-300 hover:border-white/30 hover:scale-105"
                : "aero-glass-badge-light text-amber-600 hover:border-amber-300 hover:scale-105"
            }`}
          >
            <Coffee className="w-4 h-4" />
          </a>
        </HStack>
      </VStack>
    </Section>
  );
}
