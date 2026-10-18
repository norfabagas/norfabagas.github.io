import { Section, Card, VStack, HStack, Grid, Heading, Text, Button } from "@astryxdesign/core";
import { Terminal, ArrowDown, BookOpen, Coffee, Linkedin, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { profile, socials } = PORTFOLIO_DATA;

  return (
    <Section id="tentang" paddingBlockStart={8} paddingBlockEnd={4} className="pt-24 sm:pt-28">
      <VStack gap={4} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Hero Card with White Border and Galaxy Background */}
        <Card
          padding={6}
          className={`relative rounded-3xl transition-all duration-300 ${
            isDark
              ? "border border-white/25 bg-[#140b2e]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.25)] backdrop-blur-md"
              : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.12)] backdrop-blur-md"
          }`}
        >
          {/* Mobile-first Stack: vertical on mobile, horizontal on lg screens */}
          <VStack gap={6} className="w-full">
            <HStack hAlign="between" vAlign="center" className="flex-col-reverse sm:flex-row gap-6 w-full">
              {/* Text Information Stack */}
              <VStack gap={4} className="flex-1 w-full text-left">
                {/* Category label */}
                <HStack gap={2} vAlign="center" className="flex-wrap">
                  <HStack
                    gap={1.5}
                    vAlign="center"
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isDark
                        ? "bg-purple-900/60 text-purple-200 border border-white/20"
                        : "bg-purple-100 text-purple-800 border border-purple-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <Text type="label" className="text-xs font-semibold">
                      Rekam Jejak Rekayasa
                    </Text>
                  </HStack>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/70" : "text-gray-500"}`}>
                    {profile.location}
                  </Text>
                </HStack>

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
                  {profile.summary}
                </Text>

                {/* Action Buttons: Mobile first full-width wrap */}
                <HStack gap={2} vAlign="center" className="flex-wrap pt-2 w-full">
                  <Button
                    label="Jelajahi 56 Proyek Repository"
                    variant="primary"
                    size="md"
                    href="#proyek"
                    className={`px-5 py-3 rounded-xl font-semibold text-xs min-h-[44px] flex items-center gap-2 ${
                      isDark
                        ? "bg-purple-600 hover:bg-purple-500 text-white border border-white/30 shadow-md shadow-purple-900/40"
                        : "bg-purple-700 hover:bg-purple-800 text-white border border-purple-400"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <span>Jelajahi 56 Proyek Repository</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </HStack>
                  </Button>

                  <Button
                    label="Baca di Medium"
                    variant="secondary"
                    size="md"
                    href={socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "bg-[#1f1345] hover:bg-[#28185c] text-purple-100 border border-white/20"
                        : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Medium</span>
                    </HStack>
                  </Button>

                  <Button
                    label="Buy Me a Coffee"
                    variant="secondary"
                    size="md"
                    href={socials.buymeacoffee}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 border border-amber-400/30"
                        : "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    <HStack gap={1.5} vAlign="center">
                      <Coffee className="w-3.5 h-3.5" />
                      <span>Traktir Kopi</span>
                    </HStack>
                  </Button>

                  <Button
                    label="LinkedIn"
                    variant="ghost"
                    size="md"
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-3 rounded-xl font-medium text-xs min-h-[44px] ${
                      isDark
                        ? "bg-[#1f1345] hover:bg-[#28185c] text-purple-100 border border-white/20"
                        : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200"
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
                      ? "border-white/30 bg-[#1e1046]/70 shadow-lg shadow-purple-950/40"
                      : "border-purple-200 bg-purple-50/80 shadow-md shadow-purple-200/50"
                  }`}
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover"
                  />
                </HStack>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#170e36] border-white/20 text-purple-200 hover:text-white hover:border-white/40"
                      : "bg-white border-purple-200 text-gray-700 hover:text-purple-900"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/{profile.githubUsername}</span>
                </a>
              </VStack>
            </HStack>

            {/* Quick Metrics Grid using Astryx Grid */}
            <Grid columns={{ minWidth: 200, max: 3, repeat: "fit" }} gap={3} className="w-full pt-4 border-t border-white/15">
              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#1b103e]/60 border-white/20" : "bg-purple-50/70 border-purple-200/70"
                }`}
              >
                <VStack gap={0.5}>
                  <Heading level={4} className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    56
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                    Public Repositories di GitHub
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#1b103e]/60 border-white/20" : "bg-purple-50/70 border-purple-200/70"
                }`}
              >
                <VStack gap={0.5}>
                  <Heading level={4} className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    8+ Tahun
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                    Aktif Rekayasa Perangkat Lunak (sejak 2016)
                  </Text>
                </VStack>
              </Card>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#1b103e]/60 border-white/20" : "bg-purple-50/70 border-purple-200/70"
                }`}
              >
                <VStack gap={0.5}>
                  <Heading level={4} className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    BINUS University
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                    Sarjana Ilmu Komputer (Fokus AI & Sistem)
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
