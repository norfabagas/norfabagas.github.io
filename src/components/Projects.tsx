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
      className="w-full flex flex-col justify-center py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <VStack gap={0} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

        {/* Search & Filter Control Card */}
        <Card
          padding={4}
          className={`rounded-xl border mb-8 w-full ${
            isDark
              ? "border-slate-800 bg-slate-900/90 shadow-sm"
              : "border-slate-200 bg-white/95 shadow-sm"
          }`}
        >
          <VStack gap={3} className="w-full">
            {/* Search Input */}
            <VStack gap={0} className="relative w-full">
              <Search
                className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                aria-label={t.projects.searchAria}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-md border transition-colors min-h-[42px] focus:outline-none focus-visible:ring-2 ${
                  isDark
                    ? "bg-slate-950 border-slate-800 text-white placeholder-slate-400 focus:border-slate-500 focus-visible:ring-white"
                    : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-slate-500 focus-visible:ring-slate-900"
                }`}
              />
            </VStack>

            {/* Language Filter Chips */}
            <HStack gap={2} vAlign="center" className="flex-wrap pt-1">
              <button
                type="button"
                onClick={() => setSelectedLanguage("ALL")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] transition-colors cursor-pointer border ${
                  selectedLanguage === "ALL"
                    ? "bg-slate-900 border-slate-900 text-slate-50 dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900 shadow-sm"
                    : isDark
                      ? "border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {t.projects.allFilter}
              </button>

              {techLanguages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[36px] transition-colors cursor-pointer border font-mono ${
                    selectedLanguage === lang
                      ? "bg-slate-900 border-slate-900 text-slate-50 dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900 shadow-sm"
                      : isDark
                        ? "border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </HStack>
          </VStack>
        </Card>

        {/* Repositories Grid */}
        {filteredRepositories.length > 0 ? (
          <Grid columns={{ minWidth: 280, max: 3, repeat: "fit" }} gap={4} className="w-full">
            {filteredRepositories.map((repo) => (
              <Card
                key={repo.name}
                padding={5}
                className={`rounded-xl border transition-all duration-200 flex flex-col justify-between text-left ${
                  isDark
                    ? "border-slate-800 bg-slate-900/90 shadow-sm hover:border-slate-700"
                    : "border-slate-200 bg-white/95 shadow-sm hover:border-slate-300"
                }`}
              >
                <VStack gap={3} className="w-full">
                  {/* Top Bar: Language Badge & Star count */}
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold font-mono border ${
                        isDark
                          ? "bg-slate-950 border-slate-800 text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}
                    >
                      {repo.language}
                    </span>

                    <HStack gap={1} vAlign="center" className="text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className={`font-semibold font-mono ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                        {repo.stars}
                      </span>
                    </HStack>
                  </HStack>

                  <Heading level={3} className={`text-base font-bold tracking-tight font-mono ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {repo.name}
                  </Heading>

                  <Text type="body" className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {repo.description}
                  </Text>

                  {/* Topics Tags */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                    {repo.topics.map((tItem) => (
                      <span
                        key={tItem}
                        className={`text-[11px] px-2 py-0.5 rounded border font-mono ${
                          isDark
                            ? "bg-slate-950/60 border-slate-800 text-slate-400"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        #{tItem}
                      </span>
                    ))}
                  </HStack>
                </VStack>

                {/* Card Action Link */}
                <VStack gap={0} className="pt-4 mt-auto w-full">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-md text-xs font-semibold transition-colors border ${
                      isDark
                        ? "bg-slate-950 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span>{t.projects.viewOnGithub}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </VStack>
              </Card>
            ))}
          </Grid>
        ) : (
          /* Empty State */
          <Card
            padding={8}
            className={`rounded-xl text-center w-full ${
              isDark ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200 shadow-sm"
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
                  isDark ? "bg-slate-100 text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {t.projects.resetFilter}
              </Button>
            </VStack>
          </Card>
        )}

        {/* Global GitHub Link button */}
        <VStack gap={0} hAlign="center" className="mt-8 text-center w-full">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors px-5 py-2.5 rounded-md border ${
              isDark
                ? "border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950 shadow-sm"
            }`}
          >
            <span>{t.projects.githubLink}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </VStack>
      </VStack>
    </Section>
  );
}
