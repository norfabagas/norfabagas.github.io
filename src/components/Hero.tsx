import { Section, Card, VStack, HStack, Grid, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowDown, Briefcase, BookOpen, Coffee, Linkedin, Github, Server, Database, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { profile, socials } = PORTFOLIO_DATA;

  return (
    <Section id="tentang" paddingBlockStart={8} paddingBlockEnd={4} className="pt-24 sm:pt-28">
      <VStack gap={4} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Hero Card with Clean White Border & Subtle Galaxy Backing */}
        <Card
          padding={6}
          className={`relative rounded-3xl transition-colors duration-200 ${
            isDark
              ? "border border-white/15 bg-[#120926]/90 shadow-lg shadow-purple-950/30"
              : "border border-purple-200 bg-white/95 shadow-sm"
          }`}
        >
          {/* Mobile-first Stack: vertical on mobile, horizontal on lg screens */}
          <VStack gap={6} className="w-full">
            <HStack hAlign="between" vAlign="center" className="flex-col-reverse sm:flex-row gap-6 w-full">
              {/* Text Information Stack */}
              <VStack gap={4} className="flex-1 w-full text-left">
                {/* Name & Title */}
                <VStack gap={1}>
                  <Heading level={1} className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    {profile.name}
                  </Heading>
                  <Text type="large" className={`text-base sm:text-xl font-medium ${isDark ? "text-purple-300" : "text-purple-700"}`}>
                    {profile.title}
                  </Text>
                </VStack>

                {/* Summary */}
                <Text type="body" className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-purple-100/90" : "text-gray-700"}`}>
                  Software Engineer dengan keahlian dalam arsitektur backend, pemrosesan data warehouse OLAP, pipeline data terdistribusi, serta riset applied machine learning. Berpengalaman membangun sistem perbankan institusional, modul SIMRS rumah sakit, dan layanan API skala korporasi.
                </Text>

                {/* Action Buttons: Mobile-first full-width wrap */}
                <HStack gap={2} vAlign="center" className="flex-wrap pt-2 w-full">
                  <Button
                    label="Lihat Proyek & Repositori"
                    variant="primary"
                    size="md"
                    href="#proyek"
                    className={`px-5 py-3 rounded-xl font-semibold text-xs min-h-[44px] flex items-center gap-2 ${
                      isDark
                        ? "bg-purple-600 hover:bg-purple-500 text-white border border-white/20"
                        : "bg-purple-700 hover:bg-purple-800 text-white border border-purple-400"
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
                    href="#pengalaman"
                    className={`px-4 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "bg-[#1d0f3a] hover:bg-[#26154c] text-purple-100 border border-white/15"
                        : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200"
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
                    className={`px-3 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-purple-200 hover:text-white hover:bg-white/10"
                        : "text-purple-800 hover:text-purple-950 hover:bg-purple-100"
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
                    className={`px-3 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-amber-300 hover:text-amber-200 hover:bg-white/10"
                        : "text-amber-800 hover:text-amber-950 hover:bg-amber-100"
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
                    className={`px-3 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "text-purple-200 hover:text-white hover:bg-white/10"
                        : "text-purple-800 hover:text-purple-950 hover:bg-purple-100"
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
                      ? "border-white/20 bg-[#1a0c35]/80"
                      : "border-purple-200 bg-purple-50/80"
                  }`}
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl object-cover"
                  />
                </HStack>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#180d32] border-white/15 text-purple-200 hover:text-white hover:border-white/30"
                      : "bg-white border-purple-200 text-gray-700 hover:text-purple-900"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/{profile.githubUsername}</span>
                </a>
              </VStack>
            </HStack>

            {/* Scope Pillars Grid (Replaces AI slop metric boxes) */}
            <Grid columns={{ minWidth: 220, max: 3, repeat: "fit" }} gap={3} className="w-full pt-4 border-t border-white/10">
              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#170c32]/80 border-white/10 text-left" : "bg-purple-50/60 border-purple-200/70 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Server className="w-4 h-4 text-purple-400" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Backend & Architecture
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/80" : "text-gray-600"}`}>
                    Core banking services, SIMRS, dan microservices modular (Go, Rails, TypeScript).
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#170c32]/80 border-white/10 text-left" : "bg-purple-50/60 border-purple-200/70 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Database className="w-4 h-4 text-purple-400" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Data Warehouse & OLAP
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/80" : "text-gray-600"}`}>
                    Skema bintang analitik (Star Schema), pipeline ETL, dan optimasi query dimensi data (T-SQL).
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#170c32]/80 border-white/10 text-left" : "bg-purple-50/60 border-purple-200/70 text-left"
                }`}
              >
                <VStack gap={1}>
                  <HStack gap={1.5} vAlign="center">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Applied Machine Learning
                    </Heading>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/80" : "text-gray-600"}`}>
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
