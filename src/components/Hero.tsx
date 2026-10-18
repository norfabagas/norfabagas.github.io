import { Section, Card, VStack, HStack, Grid, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowDown, Briefcase, BookOpen, Coffee, Linkedin, Github, Server, Database, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { t, data } = useLanguage();
  const { profile, socials, projectScopes } = data;

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const pillarIcons = [
    <Server key="backend" className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    <Database key="data" className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    <Cpu key="ai" className="w-4 h-4 text-slate-800 dark:text-slate-200" />
  ];

  return (
    <Section
      id="tentang"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <VStack gap={4} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Main Hero Card with WCAG AA compliant contrast */}
        <Card
          padding={6}
          className={`relative rounded-2xl transition-colors duration-200 w-full ${
            isDark
              ? "border border-slate-700 bg-[#0f172a] shadow-md"
              : "border border-slate-300 bg-white shadow-sm"
          }`}
        >
          {/* Mobile-first Stack: vertical on mobile, horizontal on lg screens */}
          <VStack gap={6} className="w-full">
            <HStack hAlign="between" vAlign="center" className="flex-col-reverse sm:flex-row gap-6 w-full">
              {/* Text Information Stack */}
              <VStack gap={4} className="flex-1 w-full text-left">
                {/* Name & Title: Crisp solid typography without AI slop gradient text */}
                <VStack gap={1.5}>
                  <Heading
                    level={1}
                    className={`text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {profile.name}
                  </Heading>
                  <Text type="large" className={`text-base sm:text-xl font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    {profile.title}
                  </Text>
                </VStack>

                {/* Summary */}
                <Text type="body" className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {profile.summary}
                </Text>

                {/* Action Buttons: Mobile-first full-width wrap with high-contrast borders & focus styles */}
                <HStack gap={2} vAlign="center" className="flex-wrap pt-2 w-full">
                  <Button
                    label={t.hero.ctaProjects}
                    variant="primary"
                    size="md"
                    onClick={() => scrollToSection("proyek")}
                    className={`px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm min-h-[44px] flex items-center gap-2 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isDark
                        ? "bg-white text-slate-950 hover:bg-slate-100 border border-white focus-visible:ring-white"
                        : "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 focus-visible:ring-slate-900"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <span>{t.hero.ctaProjects}</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </HStack>
                  </Button>

                  <Button
                    label={t.hero.ctaExperience}
                    variant="secondary"
                    size="md"
                    onClick={() => scrollToSection("pengalaman")}
                    className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm min-h-[44px] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isDark
                        ? "bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 focus-visible:ring-white"
                        : "bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-900"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{t.hero.ctaExperience}</span>
                    </HStack>
                  </Button>

                  <Button
                    label={t.hero.ctaMedium}
                    variant="ghost"
                    size="md"
                    href={socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-semibold text-xs min-h-[44px] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isDark
                        ? "bg-[#131b2e] border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white focus-visible:ring-white"
                        : "bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-slate-900"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.hero.ctaMedium}</span>
                    </HStack>
                  </Button>

                  <Button
                    label={t.hero.ctaCoffee}
                    variant="ghost"
                    size="md"
                    href={socials.buymeacoffee}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-semibold text-xs min-h-[44px] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isDark
                        ? "bg-amber-950/60 border-amber-500/40 text-amber-200 hover:bg-amber-900/60 focus-visible:ring-amber-300"
                        : "bg-amber-100 border-amber-300 text-amber-950 hover:bg-amber-200 focus-visible:ring-amber-500"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Coffee className="w-3.5 h-3.5" />
                      <span>{t.hero.ctaCoffee}</span>
                    </HStack>
                  </Button>

                  <Button
                    label={t.hero.ctaLinkedin}
                    variant="ghost"
                    size="md"
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-semibold text-xs min-h-[44px] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isDark
                        ? "bg-[#131b2e] border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white focus-visible:ring-white"
                        : "bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-slate-900"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>{t.hero.ctaLinkedin}</span>
                    </HStack>
                  </Button>
                </HStack>
              </VStack>

              {/* Avatar Stack */}
              <VStack gap={3} hAlign="center" className="shrink-0 w-full sm:w-auto">
                <HStack
                  hAlign="center"
                  vAlign="center"
                  className={`p-2 rounded-2xl border ${
                    isDark
                      ? "border-slate-700 bg-slate-800 shadow-sm"
                      : "border-slate-300 bg-slate-100 shadow-sm"
                  }`}
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl object-cover"
                  />
                </HStack>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-slate-800 border-slate-600 text-slate-200 hover:text-white hover:border-slate-500 focus-visible:ring-white"
                      : "bg-white border-slate-300 text-slate-800 hover:text-slate-950 hover:border-slate-400 focus-visible:ring-slate-900"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/{profile.githubUsername}</span>
                </a>
              </VStack>
            </HStack>

            {/* Scope Pillars Grid */}
            <Grid columns={{ minWidth: 260, max: 3, repeat: "fit" }} gap={3} className="w-full pt-4 border-t border-slate-300 dark:border-slate-700">
              {projectScopes.slice(0, 3).map((scope, index) => (
                <Card
                  key={scope.title}
                  padding={3}
                  className={`rounded-xl border ${
                    isDark ? "bg-[#131b2e] border-slate-700 text-left" : "bg-slate-50 border-slate-300 text-left"
                  }`}
                >
                  <VStack gap={1}>
                    <HStack gap={1.5} vAlign="center">
                      {pillarIcons[index]}
                      <Heading level={4} className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        {scope.title}
                      </Heading>
                    </HStack>
                    <Text type="supporting" className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {scope.description}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </Grid>
          </VStack>
        </Card>
      </VStack>
    </Section>
  );
}
