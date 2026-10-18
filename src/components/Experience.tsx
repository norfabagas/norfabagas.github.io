import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Building2, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { t, data } = useLanguage();
  const { experience, projectScopes } = data;

  return (
    <Section
      id="pengalaman"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-24"
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Section Header with Kreativa accent bar */}
        <VStack gap={1} className="w-full text-left">
          <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.experience.title}
          </Heading>
          <div className="mt-1 h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full" />
          <Text type="supporting" className={`text-sm pt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            {t.experience.subtitle}
          </Text>
        </VStack>

        {/* Work Experience Timeline Block */}
        <VStack gap={4} className="w-full text-left">
          <HStack gap={2} vAlign="center" className="pb-1">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
              isDark ? "bg-slate-800 border-slate-600 text-slate-100" : "bg-slate-100 border-slate-300 text-slate-900"
            }`}>
              <Building2 className="w-4 h-4" />
            </div>
            <Heading level={3} className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              {t.experience.timelineTitle}
            </Heading>
          </HStack>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 w-full">
            {/* Timeline Vertical Spine Line */}
            <div
              className={`absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 ${
                isDark ? "bg-slate-600" : "bg-slate-400"
              }`}
            />

            <VStack gap={4} className="w-full">
              {experience.map((exp, index) => (
                <div key={exp.company} className="relative w-full">
                  {/* Timeline Node Marker */}
                  <div
                    className={`absolute -left-[19px] sm:-left-[25px] top-5 w-4 h-4 rounded-full border-2 transition-transform ${
                      index === 0
                        ? isDark
                          ? "bg-white border-slate-950 shadow-sm ring-2 ring-white/30"
                          : "bg-slate-950 border-white shadow-sm ring-2 ring-slate-950/20"
                        : isDark
                          ? "bg-slate-900 border-slate-400"
                          : "bg-white border-slate-600"
                    }`}
                  />

                  {/* Timeline Entry Card */}
                  <Card
                    padding={5}
                    className={`rounded-xl transition-colors duration-200 w-full ${
                      isDark
                        ? "border border-slate-700 bg-slate-900/90 shadow-sm"
                        : "border border-slate-300 bg-white shadow-sm"
                    }`}
                  >
                    <VStack gap={2} className="w-full text-left">
                      <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-1">
                        <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                          {exp.role}
                        </Heading>
                        <Text
                          type="label"
                          className={`text-xs px-2.5 py-0.5 rounded-md border font-semibold ${
                            isDark ? "bg-slate-800 border-slate-600 text-slate-100" : "bg-slate-100 border-slate-300 text-slate-900"
                          }`}
                        >
                          {exp.period}
                        </Text>
                      </HStack>

                      <Text type="large" className={`text-xs sm:text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        {exp.company}
                      </Text>

                      <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {exp.description}
                      </Text>

                      <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                        {exp.skills.map((s) => (
                          <Text
                            key={s}
                            type="supporting"
                            className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                              isDark ? "bg-slate-800 border-slate-600 text-slate-200" : "bg-slate-100 border-slate-300 text-slate-800"
                            }`}
                          >
                            {s}
                          </Text>
                        ))}
                      </HStack>
                    </VStack>
                  </Card>
                </div>
              ))}
            </VStack>
          </div>
        </VStack>

        {/* Scope of Projects Block */}
        <VStack gap={4} className={`w-full text-left pt-6 border-t ${isDark ? "border-slate-700" : "border-slate-300"}`}>
          <HStack gap={2} vAlign="center" className="pb-1">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
              isDark ? "bg-slate-800 border-slate-600 text-slate-100" : "bg-slate-100 border-slate-300 text-slate-900"
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <Heading level={3} className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              {t.experience.scopeTitle}
            </Heading>
          </HStack>

          <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {projectScopes.map((scope) => (
              <Card
                key={scope.title}
                padding={5}
                className={`rounded-xl transition-colors duration-200 w-full ${
                  isDark
                    ? "border border-slate-700 bg-slate-900/90 shadow-sm"
                    : "border border-slate-300 bg-white shadow-sm"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-1">
                    <Heading level={4} className={`text-sm sm:text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                      {scope.title}
                    </Heading>
                    <Text
                      type="label"
                      className={`text-xs px-2.5 py-0.5 rounded-md border font-semibold ${
                        isDark ? "bg-slate-800 border-slate-600 text-slate-100" : "bg-slate-100 border-slate-300 text-slate-900"
                      }`}
                    >
                      {scope.area}
                    </Text>
                  </HStack>

                  <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {scope.description}
                  </Text>

                  {/* Deliverables Checklist */}
                  <VStack gap={1.5} className="pt-1">
                    {scope.deliverables.map((item) => (
                      <HStack key={item} gap={1.5} vAlign="start">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isDark ? "text-slate-100" : "text-slate-900"
                        }`} />
                        <Text type="supporting" className={`text-xs leading-tight font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Tech stack badges */}
                  <HStack gap={1} vAlign="center" className={`flex-wrap pt-2 border-t ${
                    isDark ? "border-slate-700" : "border-slate-300"
                  }`}>
                    {scope.technologies.map((tech) => (
                      <Text
                        key={tech}
                        type="supporting"
                        className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                          isDark ? "bg-slate-800 border-slate-600 text-slate-200" : "bg-slate-100 border-slate-300 text-slate-800"
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
