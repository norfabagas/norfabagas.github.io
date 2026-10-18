import { ArrowUp, Github, Linkedin, Coffee, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 py-12 ${
        isDark
          ? "border-white/15 bg-[#0a0518]/90 text-purple-200"
          : "border-purple-200 bg-white/90 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className={`font-bold text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-xs text-purple-400 font-mono">
                (&ldquo;{PORTFOLIO_DATA.profile.tagline}&rdquo;)
              </span>
            </div>
            <p className="text-xs text-purple-300/70 mt-1">
              Software Engineer & IT Specialist. Seluruh repositori dan data terverifikasi publik.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub Norfa Bagas"
              className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900 hover:border-purple-300"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn Norfa Bagas"
              className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900 hover:border-purple-300"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Profil Medium bgsnorfa"
              className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-[#180e38] border-white/20 text-purple-200 hover:text-white hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-gray-700 hover:text-purple-900 hover:border-purple-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              aria-label="Dukung bgsnorfa di Buy Me a Coffee"
              className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isDark
                  ? "bg-[#180e38] border-white/20 text-amber-300 hover:text-amber-200 hover:border-white/40"
                  : "bg-purple-50 border-purple-200 text-amber-800 hover:text-amber-900 hover:border-purple-300"
              }`}
            >
              <Coffee className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas halaman"
              className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isDark
                  ? "bg-purple-950/70 border-white/25 text-purple-200 hover:bg-purple-900 hover:text-white"
                  : "bg-purple-100 border-purple-200 text-purple-900 hover:bg-purple-200"
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-purple-400/80">
          Dibuat dengan tema galaxy dan Single Page Application menggunakan React, TypeScript, dan Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
