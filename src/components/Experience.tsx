import { useState } from "react";
import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Briefcase, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { t, data } = useLanguage();
  const { experience, projectScopes } = data;
  const [activeTab, setActiveTab] = useState<"timeline" | "scope">("timeline");

  return (
    <Section
      id="pengalaman"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <VStack gap={0} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-8 w-full">
          <Heading
            level={2}
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {t.experience.title}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.experience.subtitle}
          </Text>

          {/* Tab Switcher between Timeline and Scope */}
          <HStack gap={2} hAlign="center" vAlign="center" className="mt-4 p-1 rounded-lg border bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
            <Button
              label={t.experience.timelineTitle}
              variant={activeTab === "timeline" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("timeline")}
              className={`rounded-md text-xs sm:text-sm font-semibold transition-all min-h-[36px] px-4 ${
                activeTab === "timeline"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <HStack gap={1.5} vAlign="center">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{t.experience.timelineTitle}</span>
              </HStack>
            </Button>

            <Button
              label={t.experience.scopeTitle}
              variant={activeTab === "scope" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("scope")}
              className={`rounded-md text-xs sm:text-sm font-semibold transition-all min-h-[36px] px-4 ${
                activeTab === "scope"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <HStack gap={1.5} vAlign="center">
                <Layers className="w-3.5 h-3.5" />
                <span>{t.experience.scopeTitle}</span>
              </HStack>
            </Button>
          </HStack>
        </VStack>

        {/* Tab 1: Career Timeline */}
        {activeTab === "timeline" && (
          <VStack gap={4} className="relative w-full pl-4 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-4">
            {experience.map((exp, index) => (
              <VStack key={exp.company} gap={0} className="relative w-full">
                {/* Timeline node */}
                <span
                  className={`absolute -left-[25px] sm:-left-[41px] top-6 w-4 h-4 rounded-full border-2 transition-transform ${
                    index === 0
                      ? isDark
                        ? "bg-slate-100 border-slate-900 ring-4 ring-slate-800"
                        : "bg-slate-900 border-white ring-4 ring-slate-200"
                      : isDark
                        ? "bg-slate-900 border-slate-600"
                        : "bg-white border-slate-400"
                  }`}
                />

                <Card
                  padding={5}
                  className={`rounded-xl border transition-all duration-200 w-full ${
                    isDark
                      ? "border-slate-800 bg-slate-950/80 shadow-sm"
                      : "border-slate-200 bg-slate-50/80 shadow-sm"
                  }`}
                >
                  <VStack gap={3} className="w-full text-left">
                    <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-2">
                      <HStack gap={2} vAlign="center">
                        <Briefcase className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
                        <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {exp.role}
                        </Heading>
                      </HStack>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md border font-semibold font-mono ${
                          isDark
                            ? "bg-slate-900 border-slate-800 text-slate-300"
                            : "bg-white border-slate-200 text-slate-700"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </HStack>

                    <Text type="large" className={`text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {exp.company}
                    </Text>

                    <Text type="body" className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {exp.description}
                    </Text>

                    {/* Skill tags */}
                    <HStack gap={1.5} vAlign="center" className="flex-wrap pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className={`text-xs px-2 py-0.5 rounded border font-mono font-medium ${
                            isDark
                              ? "bg-slate-900 border-slate-800 text-slate-300"
                              : "bg-white border-slate-200 text-slate-700"
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </HStack>
                  </VStack>
                </Card>
              </VStack>
            ))}
          </VStack>
        )}

        {/* Tab 2: Scope of Projects */}
        {activeTab === "scope" && (
          <Grid columns={{ minWidth: 300, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {projectScopes.map((scope) => (
              <Card
                key={scope.title}
                padding={5}
                className={`rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isDark
                    ? "border-slate-800 bg-slate-950/80 shadow-sm"
                    : "border-slate-200 bg-slate-50/80 shadow-sm"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md border font-semibold ${
                        isDark
                          ? "bg-slate-900 border-slate-800 text-slate-300"
                          : "bg-white border-slate-200 text-slate-700"
                      }`}
                    >
                      {scope.area}
                    </span>
                  </HStack>

                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {scope.title}
                  </Heading>

                  <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {scope.description}
                  </Text>

                  {/* Deliverables checklist */}
                  <VStack gap={1.5} className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 w-full">
                    <Text type="supporting" className={`text-xs font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {t.experience.keyDeliverablesLabel}
                    </Text>
                    {scope.deliverables.map((item) => (
                      <HStack key={item} gap={2} vAlign="start" className="w-full">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {item}
                        </span>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Technologies */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-2">
                    {scope.technologies.map((tItem) => (
                      <span
                        key={tItem}
                        className={`text-[11px] px-2 py-0.5 rounded border font-mono ${
                          isDark
                            ? "bg-slate-900 border-slate-800 text-slate-400"
                            : "bg-white border-slate-200 text-slate-600"
                        }`}
                      >
                        {tItem}
                      </span>
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </Grid>
        )}
      </VStack>
    </Section>
  );
}
