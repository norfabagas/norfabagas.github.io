import { Section, VStack, HStack, Card, Heading, Text } from "@astryxdesign/core";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { t, data } = useLanguage();
  const { experience } = data;

  return (
    <Section
      id="pengalaman"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header with Kreativa Signature Accent Bar */}
        <VStack gap={1} hAlign="center" className="text-center mb-12 w-full">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {t.experience.title}
          </Heading>
          <div className="mt-2 h-1 w-24 bg-slate-900 dark:bg-slate-100 mx-auto rounded-full" />
          <Text type="supporting" className={`mt-4 text-base sm:text-lg leading-8 max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.experience.subtitle}
          </Text>
        </VStack>

        {/* Work Experience Timeline */}
        <div className="relative pl-6 sm:pl-10 w-full text-left">
          {/* Vertical Spine Line */}
          <div
            className={`absolute left-3 sm:left-4 top-4 bottom-4 w-0.5 ${
              isDark ? "bg-slate-700" : "bg-slate-300"
            }`}
          />

          <VStack gap={6} className="w-full">
            {experience.map((exp, index) => (
              <div key={exp.company} className="relative w-full">
                {/* Node Marker */}
                <div
                  className={`absolute -left-[19px] sm:-left-[31px] top-5 w-4 h-4 rounded-full border-2 transition-transform ${
                    index === 0
                      ? isDark
                        ? "bg-white border-slate-950 shadow-sm ring-4 ring-white/20"
                        : "bg-slate-900 border-white shadow-sm ring-4 ring-slate-900/20"
                      : isDark
                        ? "bg-slate-900 border-slate-500"
                        : "bg-white border-slate-400"
                  }`}
                />

                {/* Timeline Card matching Kreativa Card Style */}
                <Card
                  padding={6}
                  className={`rounded-xl border transition-all duration-300 w-full ${
                    isDark
                      ? "border-slate-700 bg-slate-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-600"
                      : "border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-300"
                  }`}
                >
                  <VStack gap={3} className="w-full text-left">
                    <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-2">
                      <HStack gap={2} vAlign="center">
                        <Briefcase className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                        <Heading level={3} className={`text-base sm:text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {exp.role}
                        </Heading>
                      </HStack>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${
                          isDark
                            ? "bg-slate-900 border-slate-700 text-slate-200"
                            : "bg-slate-100 border-slate-300 text-slate-800"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </HStack>

                    <Text type="large" className={`text-sm sm:text-base font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {exp.company}
                    </Text>

                    <Text type="body" className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {exp.description}
                    </Text>

                    {/* Skill tags */}
                    <HStack gap={1.5} vAlign="center" className="flex-wrap pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className={`text-xs px-2 py-0.5 rounded border font-medium ${
                            isDark
                              ? "bg-slate-900/60 border-slate-700 text-slate-300"
                              : "bg-slate-50 border-slate-300 text-slate-700"
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </HStack>
                  </VStack>
                </Card>
              </div>
            ))}
          </VStack>
        </div>
      </div>
    </Section>
  );
}
