import { useState, useMemo } from "react";
import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Search, Star, ExternalLink, GitFork } from "lucide-react";
import { PORTFOLIO_DATA, Repository } from "../data/portfolioData";

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Semua");

  const languages = ["Semua", "Go", "Ruby", "Python", "TypeScript", "PHP", "TSQL"];

  const filteredRepositories = useMemo(() => {
    return PORTFOLIO_DATA.repositories.filter((repo: Repository) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang =
        selectedLanguage === "Semua" ||
        repo.language.toLowerCase() === selectedLanguage.toLowerCase();

      return matchesSearch && matchesLang;
    });
  }, [searchQuery, selectedLanguage]);

  return (
    <Section id="proyek" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <VStack gap={2} className="w-full text-left">
          <HStack hAlign="between" vAlign="end" className="flex-col sm:flex-row gap-2 w-full">
            <VStack gap={0.5}>
              <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                Proyek & Repositori Terpilih
              </Heading>
              <Text type="supporting" className={`text-sm ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
                Koleksi repositori publik yang berfokus pada arsitektur backend, sistem data warehouse OLAP, dan implementasi machine learning.
              </Text>
            </VStack>

            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 p-1 ${
                isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
              }`}
            >
              <span>Repositori di GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </HStack>
        </VStack>

        {/* Mobile-First Search & Filter Controls */}
        <Card
          padding={4}
          className={`rounded-2xl w-full ${
            isDark ? "bg-[#140b2b]/90 border border-white/20" : "bg-white/95 border border-purple-200 shadow-sm"
          }`}
        >
          <VStack gap={3} className="w-full">
            {/* Search Input using relative input container */}
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama repositori atau topik..."
                aria-label="Cari repositori berdasarkan nama atau topik"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isDark
                    ? "bg-[#1d103d] border-white/20 text-white placeholder-purple-300/40 focus:border-white/50"
                    : "bg-purple-50/50 border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"
                }`}
              />
            </div>

            {/* Language Filter Buttons */}
            <HStack gap={1.5} vAlign="center" className="flex-wrap overflow-x-auto w-full pb-1">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  label={lang}
                  variant={selectedLanguage === lang ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium min-h-[44px] ${
                    selectedLanguage === lang
                      ? isDark
                        ? "bg-purple-600 text-white border border-white/40"
                        : "bg-purple-700 text-white border border-purple-400"
                      : isDark
                        ? "bg-[#1b0f38] border border-white/10 text-purple-200 hover:border-white/30"
                        : "bg-purple-50 border border-purple-200 text-purple-900 hover:bg-purple-100"
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
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/45 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                    : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
                }`}
              >
                <VStack gap={3} className="w-full text-left">
                  {/* Card Header: Language & Stars */}
                  <HStack hAlign="between" vAlign="center" className="w-full">
                    <Text
                      type="label"
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        isDark
                          ? "bg-purple-950/70 border-white/20 text-purple-200"
                          : "bg-purple-100 border-purple-200 text-purple-800"
                      }`}
                    >
                      {repo.language}
                    </Text>

                    <HStack gap={1} vAlign="center" className="text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <Text type="supporting" className={isDark ? "text-purple-200" : "text-gray-600"}>
                        {repo.stars}
                      </Text>
                    </HStack>
                  </HStack>

                  {/* Title & Description */}
                  <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    {repo.name}
                  </Heading>

                  <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
                    {repo.description}
                  </Text>

                  {/* Topics Tags */}
                  <HStack gap={1} vAlign="center" className="flex-wrap pt-1">
                    {repo.topics.map((t) => (
                      <Text
                        key={t}
                        type="supporting"
                        className={`text-[11px] px-2 py-0.5 rounded border ${
                          isDark
                            ? "bg-[#201242] border-white/10 text-purple-300"
                            : "bg-purple-50 border-purple-200 text-purple-700"
                        }`}
                      >
                        #{t}
                      </Text>
                    ))}
                  </HStack>
                </VStack>

                {/* Card Action Link */}
                <VStack gap={0} className="w-full pt-4">
                  <Button
                    label="Lihat di GitHub"
                    variant="secondary"
                    size="sm"
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold min-h-[44px] ${
                      isDark
                        ? "bg-[#1c103a] border border-white/20 text-purple-100 hover:bg-[#25154d]"
                        : "bg-purple-50 border border-purple-200 text-purple-900 hover:bg-purple-100"
                    }`}
                  >
                    <HStack gap={1.5} hAlign="center" vAlign="center">
                      <span>Lihat di GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </HStack>
                  </Button>
                </VStack>
              </Card>
            ))}
          </Grid>
        ) : (
          /* Empty State (R-27) */
          <Card
            padding={8}
            className={`rounded-2xl text-center w-full ${
              isDark ? "bg-[#140b2a] border border-white/20" : "bg-white border border-purple-200"
            }`}
          >
            <VStack gap={2} hAlign="center">
              <GitFork className="w-8 h-8 text-purple-400 opacity-60" />
              <Heading level={4} className="text-base font-bold">
                Tidak ada repositori yang cocok
              </Heading>
              <Text type="supporting" className="text-xs max-w-md text-purple-300/80">
                Pencarian untuk &ldquo;{searchQuery}&rdquo; dengan filter &ldquo;{selectedLanguage}&rdquo; tidak menemukan hasil.
              </Text>
              <Button
                label="Reset Filter"
                variant="primary"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLanguage("Semua");
                }}
                className="mt-2 min-h-[44px] bg-purple-600 text-white border border-white/30"
              >
                Reset Filter Pencarian
              </Button>
            </VStack>
          </Card>
        )}
      </VStack>
    </Section>
  );
}
