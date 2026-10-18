import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Code2, Database, Brain, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons = [
    <Code2 key="code" className="w-5 h-5" />,
    <Database key="data" className="w-5 h-5" />,
    <Brain key="ai" className="w-5 h-5" />,
    <Cpu key="devops" className="w-5 h-5" />
  ];

  return (
    <Section id="keahlian" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <VStack gap={1} className="text-left w-full">
          <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Keahlian & Ekosistem Teknologi
          </Heading>
          <Text type="supporting" className={`text-sm ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
            Teknologi dan kerangka kerja yang digunakan dalam arsitektur backend, pemrosesan data, dan eksperimen kecerdasan buatan.
          </Text>
        </VStack>

        {/* Responsive Mobile-First Grid */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {skills.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              padding={5}
              className={`rounded-2xl transition-all duration-300 ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/40 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <VStack gap={4} className="w-full">
                <HStack gap={3} vAlign="center">
                  <HStack
                    hAlign="center"
                    vAlign="center"
                    className={`p-2.5 rounded-xl border ${
                      isDark
                        ? "bg-purple-900/60 border-white/20 text-purple-200"
                        : "bg-purple-100 border-purple-200 text-purple-800"
                    }`}
                  >
                    {categoryIcons[index % categoryIcons.length]}
                  </HStack>
                  <VStack gap={0.5}>
                    <Heading level={3} className={`text-base font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {skillGroup.category}
                    </Heading>
                    <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/70" : "text-gray-500"}`}>
                      {skillGroup.description}
                    </Text>
                  </VStack>
                </HStack>

                {/* Items Badges */}
                <HStack gap={1.5} vAlign="center" className="flex-wrap pt-1">
                  {skillGroup.items.map((item) => (
                    <Text
                      key={item}
                      type="label"
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        isDark
                          ? "bg-[#211244] border-white/20 text-purple-200"
                          : "bg-purple-50 border-purple-200 text-purple-900"
                      }`}
                    >
                      {item}
                    </Text>
                  ))}
                </HStack>
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
