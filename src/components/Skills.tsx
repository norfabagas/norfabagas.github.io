import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Code2, Database, Brain, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { t, data } = useLanguage();
  const { skills } = data;

  const categoryIcons = [
    <Code2 key="code" className="w-5 h-5" />,
    <Database key="data" className="w-5 h-5" />,
    <Brain key="ai" className="w-5 h-5" />,
    <Cpu key="devops" className="w-5 h-5" />
  ];

  return (
    <Section
      id="keahlian"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-24"
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Section Header with Kreativa accent bar */}
        <VStack gap={1} className="text-left w-full">
          <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {t.skills.title}
          </Heading>
          <div className="mt-1 h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full" />
          <Text type="supporting" className={`text-sm pt-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {t.skills.subtitle}
          </Text>
        </VStack>

        {/* Responsive Mobile-First Grid */}
        <Grid columns={{ minWidth: 260, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {skills.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              padding={5}
              className={`rounded-xl transition-all duration-300 ${
                isDark
                  ? "border border-slate-800 bg-slate-900/80 hover:border-slate-700 shadow-sm backdrop-blur-sm"
                  : "border border-slate-200 bg-white/95 hover:border-slate-300 shadow-sm backdrop-blur-sm"
              }`}
            >
              <VStack gap={4} className="w-full text-left">
                <HStack gap={3} vAlign="center">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                      isDark
                        ? "bg-slate-100 text-slate-900"
                        : "bg-slate-900 text-slate-100"
                    }`}
                  >
                    {categoryIcons[index % categoryIcons.length]}
                  </div>
                  <VStack gap={0.5}>
                    <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {skillGroup.category}
                    </Heading>
                    <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
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
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                        isDark
                          ? "bg-slate-800 border-slate-700 text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-800"
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
