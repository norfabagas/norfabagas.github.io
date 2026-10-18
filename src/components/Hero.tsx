import { Github, Linkedin, Coffee, BookOpen, Terminal, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { profile, socials } = PORTFOLIO_DATA;

  return (
    <section id="tentang" className="pt-28 pb-16 sm:pt-36 sm:pb-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Galaxy Card with White Border and Purple-ish Galaxy Background */}
        <div
          className={`relative p-6 sm:p-10 lg:p-12 rounded-3xl transition-all duration-300 ${
            isDark
              ? "border border-white/25 bg-[#140b2e]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.25)] backdrop-blur-md"
              : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.12)] backdrop-blur-md"
          }`}
        >
          {/* Subtle cosmic inner glow accent */}
          <div
            className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none -z-10 ${
              isDark ? "bg-purple-600/20" : "bg-purple-300/30"
            }`}
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              {/* Header category label without duplicate badges */}
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark
                      ? "bg-purple-900/60 text-purple-200 border border-white/20"
                      : "bg-purple-100 text-purple-800 border border-purple-200"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Portofolio & Rekam Jejak Rekayasa</span>
                </span>
                <span
                  className={`text-xs ${
                    isDark ? "text-purple-300/70" : "text-gray-500"
                  }`}
                >
                  {profile.location}
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1
                  className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {profile.name}
                </h1>
                <p
                  className={`text-lg sm:text-xl font-medium ${
                    isDark ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {profile.title}
                </p>
              </div>

              {/* Tagline & Summary */}
              <p
                className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                  isDark ? "text-purple-100/90" : "text-gray-700"
                }`}
              >
                {profile.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#proyek"
                  className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-purple-600 hover:bg-purple-500 text-white border border-white/30 shadow-md shadow-purple-900/40"
                      : "bg-purple-700 hover:bg-purple-800 text-white border border-purple-400 shadow-md shadow-purple-600/20"
                  }`}
                >
                  <span>Jelajahi 56 Proyek Repository</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#1f1345] hover:bg-[#28185c] text-purple-100 border border-white/20"
                      : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Baca di Medium</span>
                </a>

                <a
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isDark
                      ? "bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 border border-amber-400/30"
                      : "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300"
                  }`}
                >
                  <Coffee className="w-4 h-4" />
                  <span>Buy Me a Coffee</span>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#1f1345] hover:bg-[#28185c] text-purple-100 border border-white/20"
                      : "bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200"
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Profile Avatar & Interactive Quick Card */}
            <div className="w-full lg:w-auto flex flex-col items-center sm:items-start lg:items-end">
              <div
                className={`p-2 rounded-2xl border transition-all ${
                  isDark
                    ? "border-white/30 bg-[#1e1046]/70 shadow-lg shadow-purple-950/40"
                    : "border-purple-200 bg-purple-50/80 shadow-md shadow-purple-200/50"
                }`}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl object-cover"
                />
              </div>

              {/* Quick Verified GitHub Badge */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#170e36] border-white/20 text-purple-200 hover:text-white hover:border-white/40"
                      : "bg-white border-purple-200 text-gray-700 hover:text-purple-900 hover:border-purple-300"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/{profile.githubUsername}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid with White Border & Galaxy Background */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                isDark
                  ? "bg-[#1b103e]/60 border-white/20"
                  : "bg-purple-50/70 border-purple-200/70"
              }`}
            >
              <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                56
              </div>
              <div className={`text-xs mt-1 ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                Public Repositories di GitHub
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark
                  ? "bg-[#1b103e]/60 border-white/20"
                  : "bg-purple-50/70 border-purple-200/70"
              }`}
            >
              <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                8+ Tahun
              </div>
              <div className={`text-xs mt-1 ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                Aktif Rekayasa Perangkat Lunak (sejak 2016)
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark
                  ? "bg-[#1b103e]/60 border-white/20"
                  : "bg-purple-50/70 border-purple-200/70"
              }`}
            >
              <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                BINUS University
              </div>
              <div className={`text-xs mt-1 ${isDark ? "text-purple-300" : "text-gray-600"}`}>
                Sarjana Ilmu Komputer (Fokus AI & Sistem)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
