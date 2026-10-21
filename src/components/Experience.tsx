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
      variant="transparent"
      paddingBlock={0}
      className="w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
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
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.experience.subtitle}
          </Text>

          {/* Tab Switcher between Timeline and Scope */}
          <HStack
            gap={1.5}
            hAlign="center"
            vAlign="center"
            className={`mt-4 p-1.5 rounded-xl border backdrop-blur-md ${
              isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
            }`}
          >
            <Button
              label={t.experience.timelineTitle}
              variant={activeTab === "timeline" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("timeline")}
              className={`rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[36px] px-4 ${
                activeTab === "timeline"
                  ? "aero-btn-primary"
                  : isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
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
              className={`rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-[36px] px-4 ${
                activeTab === "scope"
                  ? "aero-btn-primary"
                  : isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
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
          <VStack gap={4} className="relative w-full pl-4 sm:pl-8 border-l-2 border-sky-300/60 dark:border-sky-700/40 ml-2 sm:ml-4">
            {experience.map((exp, index) => (
              <VStack key={exp.company} gap={0} className="relative w-full">
                {/* Timeline node with Aero Aqua Glow */}
                <span
                  className={`absolute -left-[25px] sm:-left-[41px] top-6 w-4 h-4 rounded-full border-2 transition-transform duration-200 ${
                    index === 0
                      ? "bg-sky-500 border-white shadow-[0_0_14px_rgba(14,165,233,0.9)] scale-110"
                      : isDark
                        ? "bg-slate-800 border-sky-400/50"
                        : "bg-white border-sky-400"
                  }`}
                />

                <Card
                  variant="transparent"
                  padding={5}
                  className={`rounded-2xl border transition-all duration-200 w-full aero-glass-card ${
                    isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
                  }`}
                >
                  <VStack gap={3} className="w-full text-left">
                    <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-2">
                      <HStack gap={2} vAlign="center">
                        <Briefcase className={`w-4 h-4 shrink-0 ${isDark ? "text-sky-400" : "text-sky-600"}`} />
                        <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {exp.role}
                        </Heading>
                      </HStack>
                      <span
                        className={`text-xs px-3 py-1 rounded-lg font-semibold font-mono ${
                          isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </HStack>

                    <Text type="large" className={`text-sm font-semibold ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                      {exp.company}
                    </Text>

                    <Text type="body" className={`text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                      {exp.description}
                    </Text>

                    {/* Skill tags */}
                    <HStack gap={1.5} vAlign="center" className="flex-wrap pt-2 border-t border-white/30 dark:border-white/10">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                            isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
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
                variant="transparent"
                key={scope.title}
                padding={5}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between aero-glass-card ${
                  isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <span
                      className={`text-xs px-3 py-1 rounded-lg font-semibold ${
                        isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
                      }`}
                    >
                      {scope.area}
                    </span>
                  </HStack>

                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {scope.title}
                  </Heading>

                  <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    {scope.description}
                  </Text>

                  {/* Deliverables checklist */}
                  <VStack gap={1.5} className="pt-2 border-t border-white/30 dark:border-white/10 w-full">
                    <Text type="supporting" className={`text-xs font-semibold ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                      {t.experience.keyDeliverablesLabel}
                    </Text>
                    {scope.deliverables.map((item) => (
                      <HStack key={item} gap={2} vAlign="start" className="w-full">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={`text-xs leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
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
                        className={`text-[11px] px-2.5 py-0.5 rounded-md font-mono ${
                          isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
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
