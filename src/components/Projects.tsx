import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { FolderGit2, Wrench, ExternalLink, Github, Code2, Database, Terminal, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const { t, data } = useLanguage();
  const { projectResearchSummary, techTools, socials } = data;

  const categoryIcons = [
    <Code2 key="code" className="w-4 h-4" />,
    <Layers key="layers" className="w-4 h-4" />,
    <Database key="db" className="w-4 h-4" />,
    <Terminal key="term" className="w-4 h-4" />
  ];

  return (
    <Section
      id="proyek"
      variant="transparent"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-10 sm:py-16 md:py-20 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
    >
      <VStack gap={0} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-6 sm:mb-8 w-full">
          <Heading
            level={2}
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {t.projects.title}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.projects.subtitle}
          </Text>
        </VStack>

        {/* 1-Paragraph Project & Research Summary Card */}
        <Card
          variant="transparent"
          padding={4}
          className={`rounded-2xl border mb-6 sm:mb-8 w-full aero-glass-card ${
            isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
          }`}
        >
          <VStack gap={3} className="w-full">
            <HStack gap={2} vAlign="center" className="w-full">
              <span
                className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                  isDark ? "aero-icon-dark" : "aero-icon-light"
                }`}
              >
                <FolderGit2 className="w-5 h-5" />
              </span>
              <Heading level={3} className={`text-base sm:text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {t.projects.summaryCardTitle}
              </Heading>
            </HStack>

            <Text
              type="body"
              className={`text-sm sm:text-base leading-relaxed text-justify sm:text-left ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {projectResearchSummary}
            </Text>
          </VStack>
        </Card>

        {/* List of Technology & Tools Grid */}
        <VStack gap={4} className="w-full mb-8">
          <HStack gap={2} vAlign="center" className="w-full">
            <Wrench className="w-4 h-4 text-sky-500" />
            <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              {t.projects.toolsCardTitle}
            </Heading>
          </HStack>

          <Grid columns={{ minWidth: 260, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {techTools.map((group, index) => (
              <Card
                variant="transparent"
                key={group.category}
                padding={4}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between aero-glass-card ${
                  isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
                }`}
              >
                <VStack gap={3} className="w-full">
                  <HStack gap={2} vAlign="center" className="w-full">
                    <span
                      className={`p-2 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? "aero-icon-dark" : "aero-icon-light"
                      }`}
                    >
                      {categoryIcons[index % categoryIcons.length]}
                    </span>
                    <Heading level={4} className={`text-sm font-bold tracking-tight ${isDark ? "text-sky-300" : "text-sky-800"}`}>
                      {group.category}
                    </Heading>
                  </HStack>

                  {/* Technology item chips */}
                  <HStack gap={1.5} vAlign="center" className="flex-wrap pt-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                          isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </HStack>
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>

        {/* Public GitHub Link */}
        <VStack gap={2} hAlign="center" className="mt-6 sm:mt-8 text-center w-full">
          <Text
            type="supporting"
            className={`text-xs sm:text-sm max-w-md ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            {t.projects.githubNotice}
          </Text>

          <Button
            label={t.projects.viewGithubProfile}
            variant="secondary"
            size="md"
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold px-5 min-h-[44px] active:scale-95 transition-all duration-150 ${
              isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
            }`}
          >
            <HStack gap={2} vAlign="center">
              <Github className="w-4 h-4" />
              <span>{t.projects.viewGithubProfile}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </Section>
  );
}
