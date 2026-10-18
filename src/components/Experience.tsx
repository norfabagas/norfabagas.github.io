import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Building2, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <Section id="pengalaman" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <VStack gap={1} className="w-full text-left">
          <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Pengalaman & Pendidikan
          </Heading>
          <Text type="supporting" className={`text-sm ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
            Pengalaman industri dalam rekayasa perangkat lunak skala korporasi dan riset akademik kecerdasan buatan.
          </Text>
        </VStack>

        {/* Mobile-First Responsive Layout */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {/* Work Experiences */}
          <VStack gap={3} className="w-full text-left">
            <HStack gap={2} vAlign="center" className="pb-1">
              <Building2 className="w-5 h-5 text-purple-400" />
              <Heading level={3} className={`text-base font-bold ${isDark ? "text-purple-200" : "text-purple-900"}`}>
                Pengalaman Kerja
              </Heading>
            </HStack>

            {experience.map((exp) => (
              <Card
                key={exp.company}
                padding={5}
                className={`rounded-2xl transition-all duration-300 w-full ${
                  isDark
                    ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/40 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                    : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
                }`}
              >
                <VStack gap={2} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-1">
                    <Heading level={4} className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {exp.role}
                    </Heading>
                    <Text
                      type="label"
                      className={`text-xs px-2.5 py-0.5 rounded-md border ${
                        isDark ? "bg-purple-950/60 border-white/15 text-purple-300" : "bg-purple-50 border-purple-200 text-purple-800"
                      }`}
                    >
                      {exp.period}
                    </Text>
                  </HStack>

                  <Text type="large" className={`text-xs font-semibold ${isDark ? "text-purple-300" : "text-purple-700"}`}>
                    {exp.company}
                  </Text>

                  <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-purple-100/80" : "text-gray-600"}`}>
                    {exp.description}
                  </Text>

                  <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                    {exp.skills.map((s) => (
                      <Text
                        key={s}
                        type="supporting"
                        className={`text-[11px] px-2 py-0.5 rounded border ${
                          isDark ? "bg-[#211244] border-white/15 text-purple-200" : "bg-purple-50 border-purple-200 text-purple-800"
                        }`}
                      >
                        {s}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </VStack>

          {/* Education & Academic Research */}
          <VStack gap={3} className="w-full text-left">
            <HStack gap={2} vAlign="center" className="pb-1">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <Heading level={3} className={`text-base font-bold ${isDark ? "text-purple-200" : "text-purple-900"}`}>
                Pendidikan & Publikasi
              </Heading>
            </HStack>

            <Card
              padding={5}
              className={`rounded-2xl transition-all duration-300 w-full ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <VStack gap={3} className="w-full text-left">
                <Text
                  type="label"
                  className={`text-xs px-2.5 py-0.5 rounded-md border w-fit ${
                    isDark ? "bg-purple-950/60 border-white/15 text-purple-300" : "bg-purple-50 border-purple-200 text-purple-800"
                  }`}
                >
                  Pendidikan Tinggi
                </Text>

                <Heading level={4} className={`text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {education.institution}
                </Heading>

                <Text type="supporting" className={`text-xs font-semibold ${isDark ? "text-purple-300" : "text-purple-700"}`}>
                  {education.degree}
                </Text>

                <Card
                  padding={3}
                  className={`rounded-xl border ${
                    isDark ? "bg-[#201243] border-white/15 text-purple-100" : "bg-purple-50/70 border-purple-200 text-gray-700"
                  }`}
                >
                  <VStack gap={1} className="text-left text-xs">
                    <Text type="label" className="font-semibold text-purple-400">
                      Riset Terpublikasi:
                    </Text>
                    <Text type="body" className="leading-relaxed">
                      {education.highlight}
                    </Text>
                  </VStack>
                </Card>

                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 pt-2 ${
                    isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  <span>Lihat profil lengkap di LinkedIn</span>
                </a>
              </VStack>
            </Card>
          </VStack>
        </Grid>
      </VStack>
    </Section>
  );
}
