import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Building2, Layers, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { experience, projectScopes } = PORTFOLIO_DATA;

  return (
    <Section id="pengalaman" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <VStack gap={1} className="w-full text-left">
          <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Pengalaman Kerja & Scope Proyek
          </Heading>
          <Text type="supporting" className={`text-sm ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
            Rekam jejak implementasi perangkat lunak pada sistem korporasi dan cakupan ranah arsitektur teknis yang ditangani.
          </Text>
        </VStack>

        {/* Work Experience Block */}
        <VStack gap={4} className="w-full text-left">
          <HStack gap={2} vAlign="center" className="pb-1">
            <Building2 className="w-5 h-5 text-purple-400" />
            <Heading level={3} className={`text-lg font-bold ${isDark ? "text-purple-200" : "text-purple-900"}`}>
              Riwayat Pengalaman Kerja
            </Heading>
          </HStack>

          <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {experience.map((exp) => (
              <Card
                key={exp.company}
                padding={5}
                className={`rounded-2xl transition-colors duration-200 w-full ${
                  isDark
                    ? "border border-white/15 bg-[#150c2e]/80 shadow-md shadow-purple-950/20"
                    : "border border-purple-200 bg-white/95 shadow-sm"
                }`}
              >
                <VStack gap={2} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-1">
                    <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
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

                  <Text type="large" className={`text-xs sm:text-sm font-semibold ${isDark ? "text-purple-300" : "text-purple-700"}`}>
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
                          isDark ? "bg-[#1f103f] border-white/10 text-purple-200" : "bg-purple-50 border-purple-200 text-purple-800"
                        }`}
                      >
                        {s}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>

        {/* Scope of Projects Block */}
        <VStack gap={4} className="w-full text-left pt-6 border-t border-white/10">
          <HStack gap={2} vAlign="center" className="pb-1">
            <Layers className="w-5 h-5 text-purple-400" />
            <Heading level={3} className={`text-lg font-bold ${isDark ? "text-purple-200" : "text-purple-900"}`}>
              Scope of Projects (Cakupan Rekayasa)
            </Heading>
          </HStack>

          <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {projectScopes.map((scope) => (
              <Card
                key={scope.title}
                padding={5}
                className={`rounded-2xl transition-colors duration-200 w-full ${
                  isDark
                    ? "border border-white/15 bg-[#150c2e]/80 shadow-md shadow-purple-950/20"
                    : "border border-purple-200 bg-white/95 shadow-sm"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-1">
                    <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {scope.title}
                    </Heading>
                    <Text
                      type="label"
                      className={`text-xs px-2.5 py-0.5 rounded-md border ${
                        isDark ? "bg-[#221045] border-white/15 text-purple-300" : "bg-purple-100 border-purple-200 text-purple-900"
                      }`}
                    >
                      {scope.area}
                    </Text>
                  </HStack>

                  <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-purple-100/80" : "text-gray-600"}`}>
                    {scope.description}
                  </Text>

                  {/* Deliverables Checklist */}
                  <VStack gap={1.5} className="pt-1">
                    {scope.deliverables.map((item) => (
                      <HStack key={item} gap={1.5} vAlign="start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <Text type="supporting" className={`text-xs leading-tight ${isDark ? "text-purple-200/90" : "text-gray-700"}`}>
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Tech stack badges */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-2 border-t border-white/10">
                    {scope.technologies.map((tech) => (
                      <Text
                        key={tech}
                        type="supporting"
                        className={`text-[11px] px-2 py-0.5 rounded border ${
                          isDark ? "bg-[#1d0e3b] border-white/10 text-purple-300" : "bg-purple-50 border-purple-200 text-purple-800"
                        }`}
                      >
                        {tech}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Section>
  );
}
