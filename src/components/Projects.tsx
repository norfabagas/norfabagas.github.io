import { useState, useMemo } from "react";
import { Search, Star, ExternalLink, GitFork, Sparkles } from "lucide-react";
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
    <section id="proyek" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark
                    ? "bg-purple-900/60 text-purple-200 border border-white/20"
                    : "bg-purple-100 text-purple-800 border border-purple-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hasil Scanning GitHub github.com/norfabagas</span>
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mt-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Proyek & Repositori Terpilih
            </h2>
            <p
              className={`mt-1 text-sm sm:text-base ${
                isDark ? "text-purple-200/80" : "text-gray-600"
              }`}
            >
              Menampilkan karya rekayasa nyata dari 56 repositori publik yang dikembangkan sejak 2016.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1 ${
              isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
            }`}
          >
            <span>Buka Seluruh 56 Repo di GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filter & Search Bar with White Borders */}
        <div
          className={`p-4 rounded-2xl mb-8 flex flex-col md:flex-row items-center gap-4 ${
            isDark
              ? "bg-[#140b2b]/90 border border-white/20"
              : "bg-white/95 border border-purple-200 shadow-sm"
          }`}
        >
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari repositori..."
              aria-label="Cari repositori berdasarkan nama atau topik"
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#1d103d] border-white/20 text-white placeholder-purple-300/40 focus:border-white/50"
                  : "bg-purple-50/50 border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"
              }`}
            />
          </div>

          {/* Language Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none" role="tablist">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                role="tab"
                aria-selected={selectedLanguage === lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  selectedLanguage === lang
                    ? isDark
                      ? "bg-purple-600 text-white border border-white/40 shadow-sm shadow-purple-900/50"
                      : "bg-purple-700 text-white border border-purple-400 shadow-sm"
                    : isDark
                      ? "bg-[#1b0f38] border border-white/10 text-purple-200 hover:border-white/30 hover:text-white"
                      : "bg-purple-50 border border-purple-200 text-purple-900 hover:bg-purple-100"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with White Borders & Galaxy Background */}
        {filteredRepositories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.map((repo) => (
              <div
                key={repo.name}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group ${
                  isDark
                    ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/45 hover:bg-[#1a0f37]/90 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                    : "border border-purple-200/90 bg-white/90 hover:border-purple-300 hover:bg-white shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
                }`}
              >
                <div>
                  {/* Top Bar: Language & Star Stats */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                        isDark
                          ? "bg-purple-950/70 border-white/20 text-purple-200"
                          : "bg-purple-100 border-purple-200 text-purple-800"
                      }`}
                    >
                      {repo.language}
                    </span>

                    <div className="flex items-center gap-1 text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className={isDark ? "text-purple-200" : "text-gray-600"}>
                        {repo.stars}
                      </span>
                    </div>
                  </div>

                  {/* Repository Name */}
                  <h3
                    className={`text-base font-bold tracking-tight mb-2 group-hover:text-purple-400 transition-colors ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {repo.name}
                  </h3>

                  {/* Repository Description */}
                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isDark ? "text-purple-200/80" : "text-gray-600"
                    }`}
                  >
                    {repo.description}
                  </p>
                </div>

                <div>
                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] px-2 py-0.5 rounded border ${
                          isDark
                            ? "bg-[#201242] border-white/10 text-purple-300"
                            : "bg-purple-50 border-purple-200 text-purple-700"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link to Repo */}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isDark
                        ? "bg-[#1c103a] border-white/20 text-purple-100 hover:bg-[#25154d] hover:border-white/40"
                        : "bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <span>Lihat di GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State (R-27) */
          <div
            className={`p-10 rounded-2xl text-center border ${
              isDark
                ? "bg-[#140b2a] border-white/20 text-purple-200"
                : "bg-white border-purple-200 text-gray-700"
            }`}
          >
            <GitFork className="w-8 h-8 mx-auto text-purple-400 mb-3 opacity-60" />
            <h4 className="text-base font-bold mb-1">Tidak ada repositori yang cocok</h4>
            <p className="text-xs max-w-md mx-auto text-purple-300/80 mb-4">
              Pencarian untuk &ldquo;{searchQuery}&rdquo; dengan filter &ldquo;{selectedLanguage}&rdquo; tidak menemukan hasil.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedLanguage("Semua");
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white border border-white/30 hover:bg-purple-500 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
