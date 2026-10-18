import { useState, useMemo } from "react";
import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Search, Star, ExternalLink, GitFork } from "lucide-react";
import { Repository } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const { t, data, locale } = useLanguage();
  const { repositories, socials } = data;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ALL");

  const techLanguages = ["Go", "Ruby", "Python", "TypeScript", "PHP", "TSQL"];

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo: Repository) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics.some((tItem) => tItem.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang =
        selectedLanguage === "ALL" ||
        repo.language.toLowerCase() === selectedLanguage.toLowerCase();

      return matchesSearch && matchesLang;
    });
  }, [repositories, searchQuery, selectedLanguage]);

  return (
    <Section
      id="proyek"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header with Kreativa Signature Accent Bar */}
        <VStack gap={1} hAlign="center" className="text-center mb-10 w-full">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {t.projects.title}
          </Heading>
          <div className="mt-2 h-1 w-24 bg-slate-900 dark:bg-slate-100 mx-auto rounded-full" />
          <Text type="supporting" className={`mt-4 text-base sm:text-lg leading-8 max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.projects.subtitle}
          </Text>
        </VStack>

        {/* Kreativa Search & Filter Control Card */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md p-4 sm:p-5 mb-8 w-full">
          <VStack gap={3} className="w-full">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                aria-label={t.projects.searchAria}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-md border transition-colors min-h-[42px] focus:outline-none focus-visible:ring-2 ${
                  isDark
                    ? "bg-slate-900 border-slate-700 text-white placeholder-slate-400 focus:border-slate-500 focus-visible:ring-white"
                    : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-slate-500 focus-visible:ring-slate-900"
                }`}
              />
            </div>

            {/* Language Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setSelectedLanguage("ALL")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] transition-colors cursor-pointer ${
                  selectedLanguage === "ALL"
                    ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 shadow"
                    : "border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {t.projects.allFilter}
              </button>

              {techLanguages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] transition-colors cursor-pointer ${
                    selectedLanguage === lang
                      ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 shadow"
                      : "border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </VStack>
        </div>

        {/* Repositories Grid in Kreativa Card Style */}
        {filteredRepositories.length > 0 ? (
          <Grid columns={{ minWidth: 280, max: 3, repeat: "fit" }} gap={4} className="w-full">
            {filteredRepositories.map((repo) => (
              <Card
                key={repo.name}
                padding={6}
                className={`rounded-xl border transition-all duration-300 flex flex-col justify-between text-left ${
                  isDark
                    ? "border-slate-700 bg-white/5 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-600"
                    : "border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-300"
                }`}
              >
                <VStack gap={3} className="w-full">
                  {/* Top Bar: Language Badge & Star count */}
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        isDark
                          ? "bg-slate-900 border-slate-700 text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      {repo.language}
                    </span>

                    <HStack gap={1} vAlign="center" className="text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                        {repo.stars}
                      </span>
                    </HStack>
                  </HStack>

                  <Heading level={3} className={`text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {repo.name}
                  </Heading>

                  <Text type="body" className={`text-sm leading-relaxed line-clamp-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {repo.description}
                  </Text>

                  {/* Topics Tags */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                    {repo.topics.map((tItem) => (
                      <span
                        key={tItem}
                        className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                          isDark
                            ? "bg-slate-900/60 border-slate-700 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        #{tItem}
                      </span>
                    ))}
                  </HStack>
                </VStack>

                {/* Card Action Link */}
                <div className="pt-5 mt-auto">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-md text-xs font-semibold transition-colors border ${
                      isDark
                        ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                        : "bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span>{t.projects.viewOnGithub}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            ))}
          </Grid>
        ) : (
          /* Empty State */
          <Card
            padding={8}
            className={`rounded-xl text-center w-full ${
              isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200 shadow-md"
            }`}
          >
            <VStack gap={2} hAlign="center">
              <GitFork className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <Heading level={4} className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.projects.emptyTitle}
              </Heading>
              <Text type="supporting" className={`text-sm max-w-md ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {locale === "id-ID"
                  ? `Pencarian untuk "${searchQuery}" tidak menemukan repositori yang cocok.`
                  : `Search for "${searchQuery}" did not return any matching repositories.`}
              </Text>
              <Button
                label={t.projects.resetFilter}
                variant="primary"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLanguage("ALL");
                }}
                className={`mt-2 font-semibold px-4 rounded-md h-9 ${
                  isDark ? "bg-slate-50 text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {t.projects.resetFilter}
              </Button>
            </VStack>
          </Card>
        )}

        {/* Global GitHub Link button */}
        <div className="mt-10 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors px-5 py-2.5 rounded-md border ${
              isDark
                ? "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <span>{t.projects.githubLink}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
