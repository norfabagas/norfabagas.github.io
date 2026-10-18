import { BookOpen, ExternalLink, Clock } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ArticlesProps {
  isDark: boolean;
}

export function Articles({ isDark }: ArticlesProps) {
  const { articles, socials } = PORTFOLIO_DATA;

  return (
    <section id="artikel" className="py-16 sm:py-20 relative">
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
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publikasi Teknis Medium</span>
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mt-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Artikel & Tutorial Rekayasa
            </h2>
            <p
              className={`mt-1 text-sm sm:text-base ${
                isDark ? "text-purple-200/80" : "text-gray-600"
              }`}
            >
              Catatan pemikiran teknis, tutorial instalasi, dan panduan praktis seputar rekayasa sistem di platform Medium @bgsnorfa.
            </p>
          </div>

          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1 ${
              isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
            }`}
          >
            <span>Kunjungi medium.com/@bgsnorfa</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid with White Borders & Galaxy Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art) => (
            <a
              key={art.title}
              href={art.url}
              target="_blank"
              rel="noreferrer"
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/45 hover:bg-[#1b0f39]/90 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 hover:border-purple-300 hover:bg-white shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${
                      isDark
                        ? "bg-purple-950/70 border-white/15 text-purple-200"
                        : "bg-purple-100 border-purple-200 text-purple-800"
                    }`}
                  >
                    {art.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-purple-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3
                  className={`text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-purple-400 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {art.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? "text-purple-100/80" : "text-gray-600"
                  }`}
                >
                  {art.snippet}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <span>Baca artikel selengkapnya di Medium</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
