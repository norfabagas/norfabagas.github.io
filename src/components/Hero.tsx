import { Section, Card, VStack, HStack, Grid, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowDown, Briefcase, BookOpen, Coffee, Linkedin, Github, Server, Database, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { profile, socials } = PORTFOLIO_DATA;

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <Section
      id="tentang"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <VStack gap={4} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Main Hero Card in Kreativa Slate Theme */}
        <Card
          padding={6}
          className={`relative rounded-2xl transition-colors duration-200 w-full ${
            isDark
              ? "border border-slate-800 bg-slate-900/90 shadow-md backdrop-blur-sm"
              : "border border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm"
          }`}
        >
          {/* Mobile-first Stack: vertical on mobile, horizontal on lg screens */}
          <VStack gap={6} className="w-full">
            <HStack hAlign="between" vAlign="center" className="flex-col-reverse sm:flex-row gap-6 w-full">
              {/* Text Information Stack */}
              <VStack gap={4} className="flex-1 w-full text-left">
                {/* Name & Title with Kreativa gradient text */}
                <VStack gap={1.5}>
                  <Heading
                    level={1}
                    className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-400"
                  >
                    {profile.name}
                  </Heading>
                  <Text type="large" className={`text-base sm:text-xl font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {profile.title}
                  </Text>
                </VStack>

                {/* Summary */}
                <Text type="body" className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  Software Engineer dengan keahlian dalam arsitektur backend, pemrosesan data warehouse OLAP, pipeline data terdistribusi, serta riset applied machine learning. Berpengalaman membangun sistem perbankan institusional, modul SIMRS rumah sakit, dan layanan API skala korporasi.
                </Text>

                {/* Action Buttons: Mobile-first full-width wrap */}
                <HStack gap={2} vAlign="center" className="flex-wrap pt-2 w-full">
                  <Button
                    label="Lihat Proyek & Repositori"
                    variant="primary"
                    size="md"
                    onClick={() => scrollToSection("proyek")}
                    className={`px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm min-h-[44px] flex items-center gap-2 shadow-sm ${
                      isDark
                        ? "bg-slate-50 hover:bg-slate-200 text-slate-900 border border-slate-200"
                        : "bg-slate-900 hover:bg-slate-800 text-slate-50 border border-slate-900"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <span>Lihat Proyek & Repositori</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </HStack>
                  </Button>

                  <Button
                    label="Pengalaman & Scope Kerja"
                    variant="secondary"
                    size="md"
                    onClick={() => scrollToSection("pengalaman")}
                    className={`px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm min-h-[44px] border ${
                      isDark
                        ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                        : "border-slate-300 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Pengalaman & Scope</span>
                    </HStack>
                  </Button>

                  <Button
                    label="Medium bgsnorfa"
                    variant="ghost"
                    size="md"
                    href={socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-slate-300 hover:text-slate-100 hover:bg-slate-800"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Medium</span>
                    </HStack>
                  </Button>

                  <Button
                    label="Buy Me a Coffee bgsnorfa"
                    variant="ghost"
                    size="md"
                    href={socials.buymeacoffee}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-amber-400 hover:text-amber-300 hover:bg-slate-800"
                        : "text-amber-700 hover:text-amber-800 hover:bg-amber-50"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Coffee className="w-3.5 h-3.5" />
                      <span>Traktir Kopi</span>
                    </HStack>
                  </Button>

                  <Button
                    label="LinkedIn norfabagas"
                    variant="ghost"
                    size="md"
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2.5 rounded-lg font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-slate-300 hover:text-slate-100 hover:bg-slate-800"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
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
                      ? "border-slate-700 bg-slate-800/80 shadow-sm"
                      : "border-slate-200 bg-slate-100 shadow-sm"
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
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                    isDark
                      ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600"
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/{profile.githubUsername}</span>
                </a>
              </VStack>
            </HStack>

            {/* Scope Pillars Grid */}
            <Grid columns={{ minWidth: 260, max: 3, repeat: "fit" }} gap={3} className="w-full pt-4 border-t border-slate-200 dark:border-slate-800">
              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-slate-950/60 border-slate-800 text-left" : "bg-slate-50/70 border-slate-200 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Server className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      Backend & Architecture
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Core banking services, SIMRS, dan microservices modular (Go, Rails, TypeScript).
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-slate-950/60 border-slate-800 text-left" : "bg-slate-50/70 border-slate-200 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Database className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      Data Warehouse & OLAP
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Skema bintang analitik (Star Schema), pipeline ETL, dan optimasi query dimensi data (T-SQL).
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-slate-950/60 border-slate-800 text-left" : "bg-slate-50/70 border-slate-200 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Cpu className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      Applied Machine Learning
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Deep learning CNN (FER2013), klasifikasi otomatis REST API, dan integrasi dialog Watson.
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        </Card>
      </VStack>
    </Section>
  );
}
