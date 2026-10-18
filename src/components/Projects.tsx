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
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-24"
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Section Header with Kreativa accent bar */}
        <VStack gap={1} className="w-full text-left">
          <HStack hAlign="between" vAlign="end" className="flex-col sm:flex-row gap-2 w-full">
            <VStack gap={1}>
              <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.projects.title}
              </Heading>
              <div className="mt-1 h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full" />
              <Text type="supporting" className={`text-sm pt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {t.projects.subtitle}
              </Text>
            </VStack>

            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white p-1 shrink-0 ${
                isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <span>{t.projects.githubLink}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </HStack>
        </VStack>

        {/* Mobile-First Search & Filter Controls */}
        <Card
          padding={4}
          className={`rounded-xl w-full ${
            isDark ? "bg-slate-900/90 border border-slate-700" : "bg-white border border-slate-300 shadow-sm"
          }`}
        >
          <VStack gap={3} className="w-full">
            {/* Search Input using relative input container */}
            <div className="relative w-full">
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                aria-label={t.projects.searchAria}
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 ${
                  isDark
                    ? "bg-slate-950 border-slate-500 text-white placeholder-slate-400 focus:border-white focus-visible:ring-white"
                    : "bg-white border-slate-500 text-slate-900 placeholder-slate-500 focus:border-slate-900 focus-visible:ring-slate-900"
                }`}
              />
            </div>

            {/* Language Filter Buttons */}
            <HStack gap={1.5} vAlign="center" className="flex-wrap overflow-x-auto w-full pb-1">
              <Button
                label={t.projects.allFilter}
                variant={selectedLanguage === "ALL" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setSelectedLanguage("ALL")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold min-h-[44px] transition-colors ${
                  selectedLanguage === "ALL"
                    ? isDark
                      ? "bg-white text-slate-950 border border-white"
                      : "bg-slate-950 text-white border border-slate-950"
                    : isDark
                      ? "bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white"
                      : "bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 hover:text-slate-950"
                }`}
              >
                {t.projects.allFilter}
              </Button>

              {techLanguages.map((lang) => (
                <Button
                  key={lang}
                  label={lang}
                  variant={selectedLanguage === lang ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold min-h-[44px] transition-colors ${
                    selectedLanguage === lang
                      ? isDark
                        ? "bg-white text-slate-950 border border-white"
                        : "bg-slate-950 text-white border border-slate-950"
                      : isDark
                        ? "bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white"
                        : "bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 hover:text-slate-950"
                  }`}
                >
                  {lang}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Card>

        {/* Repositories Grid with Responsive Mobile Columns */}
        {filteredRepositories.length > 0 ? (
          <Grid columns={{ minWidth: 280, max: 3, repeat: "fit" }} gap={4} className="w-full">
            {filteredRepositories.map((repo) => (
              <Card
                key={repo.name}
                padding={5}
                className={`rounded-xl transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "border border-slate-700 bg-slate-900/90 hover:border-slate-500 shadow-sm"
                    : "border border-slate-300 bg-white hover:border-slate-400 shadow-sm"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  {/* Card Header: Language & Stars */}
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <Text
                      type="label"
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        isDark
                          ? "bg-slate-800 border-slate-600 text-slate-100"
                          : "bg-slate-100 border-slate-300 text-slate-900"
                      }`}
                    >
                      {repo.language}
                    </Text>

                    <HStack gap={1} vAlign="center" className="text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <Text type="supporting" className={`font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        {repo.stars}
                      </Text>
                    </HStack>
                  </HStack>

                  {/* Title & Description */}
                  <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {repo.name}
                  </Heading>

                  <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {repo.description}
                  </Text>

                  {/* Topics Tags */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                    {repo.topics.map((tItem) => (
                      <Text
                        key={tItem}
                        type="supporting"
                        className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
                          isDark
                            ? "bg-slate-800 border-slate-600 text-slate-200"
                            : "bg-slate-100 border-slate-300 text-slate-800"
                        }`}
                      >
                        #{tItem}
                      </Text>
                    ))}
                  </HStack>
                </VStack>

                {/* Card Action Link */}
                <VStack gap={0} className="w-full pt-4">
                  <Button
                    label={t.projects.viewOnGithub}
                    variant="secondary"
                    size="sm"
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 rounded-lg text-xs font-semibold min-h-[44px] transition-colors ${
                      isDark
                        ? "bg-slate-800 border border-slate-600 text-slate-100 hover:bg-slate-700 hover:text-white"
                        : "bg-slate-100 border border-slate-300 text-slate-900 hover:bg-slate-200 hover:text-slate-950"
                    }`}
                  >
                    <HStack gap={1.5} hAlign="center" vAlign="center">
                      <span>{t.projects.viewOnGithub}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </HStack>
                  </Button>
                </VStack>
              </Card>
            ))}
          </Grid>
        ) : (
          /* Empty State */
          <Card
            padding={8}
            className={`rounded-xl text-center w-full ${
              isDark ? "bg-slate-900/90 border border-slate-700" : "bg-white border border-slate-300 shadow-sm"
            }`}
          >
            <VStack gap={2} hAlign="center">
              <GitFork className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <Heading level={4} className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.projects.emptyTitle}
              </Heading>
              <Text type="supporting" className={`text-xs max-w-md ${isDark ? "text-slate-300" : "text-slate-700"}`}>
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
                className={`mt-2 min-h-[44px] font-semibold px-4 rounded-lg ${
                  isDark ? "bg-white text-slate-950 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {t.projects.resetFilter}
              </Button>
            </VStack>
          </Card>
        )}
      </VStack>
    </Section>
  );
}
