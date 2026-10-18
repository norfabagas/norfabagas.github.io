import { Section, VStack, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowRight, Briefcase, Github, Linkedin, BookOpen, Coffee, MapPin } from "lucide-react";
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
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <VStack gap={0} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Status indicator & location pill */}
        <HStack gap={2} hAlign="center" vAlign="center" className="mb-6 flex-wrap justify-center">
          <HStack
            gap={2}
            vAlign="center"
            className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${
              isDark
                ? "bg-slate-900 border-slate-800 text-slate-200"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.hero.statusBadge}</span>
          </HStack>

          <HStack
            gap={1}
            vAlign="center"
            className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${
              isDark
                ? "bg-slate-900 border-slate-800 text-slate-300"
                : "bg-white border-slate-200 text-slate-700"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{profile.location}</span>
          </HStack>
        </HStack>

        {/* Profile Avatar Frame */}
        <VStack gap={0} hAlign="center" className="mb-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-slate-800 shadow-lg object-cover"
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
            isDark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          {profile.title}
        </Text>

        {/* Concrete Summary */}
        <Text
          type="body"
          className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {profile.summary}
        </Text>

        {/* Core Technology Chips */}
        <HStack gap={1.5} hAlign="center" vAlign="center" className="mt-6 flex-wrap justify-center max-w-xl mx-auto">
          {coreTech.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-md border font-mono font-medium ${
                isDark
                  ? "bg-slate-900 border-slate-800 text-slate-200"
                  : "bg-white border-slate-200 text-slate-800 shadow-sm"
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
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 shadow h-11 rounded-md px-6 w-full sm:w-auto min-h-[44px]"
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
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors border shadow-sm h-11 rounded-md px-6 w-full sm:w-auto min-h-[44px] ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
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
            className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100"
            }`}
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn @norfabagas"
            className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100"
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Medium @bgsnorfa"
            className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100"
            }`}
          >
            <BookOpen className="w-4 h-4" />
          </a>

          <a
            href={socials.buymeacoffee}
            target="_blank"
            rel="noreferrer"
            aria-label="Buy Me a Coffee @bgsnorfa"
            className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isDark
                ? "border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800"
                : "border-slate-200 bg-white text-amber-600 hover:bg-slate-100"
            }`}
          >
            <Coffee className="w-4 h-4" />
          </a>
        </HStack>
      </VStack>
    </Section>
  );
}
