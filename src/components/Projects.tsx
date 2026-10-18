import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { FolderGit2, Wrench, ExternalLink, ShieldCheck, Code2, Database, Terminal, Layers } from "lucide-react";
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
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
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
            {t.projects.title}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.projects.subtitle}
          </Text>
        </VStack>

        {/* 1-Paragraph Project & Research Summary Card */}
        <Card
          padding={6}
          className={`rounded-xl border mb-8 w-full shadow-sm ${
            isDark
              ? "border-slate-800 bg-slate-900/90 text-slate-100"
              : "border-slate-200 bg-white/95 text-slate-900"
          }`}
        >
          <VStack gap={3} className="w-full">
            <HStack gap={2} vAlign="center" className="w-full">
              <span
                className={`p-2 rounded-lg border flex items-center justify-center shrink-0 ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-slate-200"
                    : "bg-slate-100 border-slate-200 text-slate-800"
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
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {projectResearchSummary}
            </Text>
          </VStack>
        </Card>

        {/* List of Technology & Tools Grid */}
        <VStack gap={4} className="w-full mb-8">
          <HStack gap={2} vAlign="center" className="w-full">
            <Wrench className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
            <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              {t.projects.toolsCardTitle}
            </Heading>
          </HStack>

          <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {techTools.map((group, index) => (
              <Card
                key={group.category}
                padding={5}
                className={`rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isDark
                    ? "border-slate-800 bg-slate-900/90 shadow-sm"
                    : "border-slate-200 bg-white/95 shadow-sm"
                }`}
              >
                <VStack gap={3} className="w-full">
                  <HStack gap={2} vAlign="center" className="w-full">
                    <span
                      className={`p-1.5 rounded-md border flex items-center justify-center shrink-0 ${
                        isDark
                          ? "bg-slate-950 border-slate-800 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {categoryIcons[index % categoryIcons.length]}
                    </span>
                    <Heading level={4} className={`text-sm font-bold tracking-tight ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {group.category}
                    </Heading>
                  </HStack>

                  {/* Technology item chips */}
                  <HStack gap={1.5} vAlign="center" className="flex-wrap pt-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2.5 py-1 rounded-md border font-mono font-medium ${
                          isDark
                            ? "bg-slate-950 border-slate-800 text-slate-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
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

        {/* Private Repo Notice & Public GitHub Profile Link */}
        <Card
          padding={4}
          className={`rounded-xl border w-full ${
            isDark
              ? "border-slate-800 bg-slate-900/60"
              : "border-slate-200 bg-white/80 shadow-sm"
          }`}
        >
          <HStack hAlign="between" vAlign="center" className="w-full flex-wrap gap-4">
            <HStack gap={2} vAlign="center" className="max-w-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <Text type="supporting" className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.projects.githubNotice}
              </Text>
            </HStack>

            <Button
              label={t.projects.viewGithubProfile}
              variant="secondary"
              size="sm"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className={`rounded-md text-xs font-semibold px-4 h-9 min-h-[36px] transition-colors border shadow-sm ${
                isDark
                  ? "border-slate-800 bg-slate-950 text-slate-200 hover:bg-slate-800 hover:text-white"
                  : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
              }`}
            >
              <HStack gap={1.5} vAlign="center">
                <span>{t.projects.viewGithubProfile}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </HStack>
            </Button>
          </HStack>
        </Card>
      </VStack>
    </Section>
  );
}
