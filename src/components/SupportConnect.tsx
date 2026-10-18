import { Coffee, Github, Linkedin, BookOpen, MessageSquare, Heart, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { socials, profile } = PORTFOLIO_DATA;

  return (
    <section id="dukungan" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buy Me A Coffee Galaxy Block */}
          <div
            className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "border border-white/25 bg-[#170c32]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.2)] backdrop-blur-md"
                : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.1)] backdrop-blur-md"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-2xl border ${
                    isDark
                      ? "bg-amber-950/60 border-amber-400/30 text-amber-300"
                      : "bg-amber-100 border-amber-300 text-amber-800"
                  }`}
                >
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Dukung Karya & Riset
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold">
                    Buy Me a Coffee: @bgsnorfa
                  </p>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  isDark ? "text-purple-100/90" : "text-gray-700"
                }`}
              >
                Jika Anda menyukai artikel teknis di Medium, repositori open source, atau eksperimen machine learning yang saya bagikan, Anda dapat memberikan apresiasi dan traktir kopi virtual untuk mendukung kontinuitas riset.
              </p>

              <div
                className={`p-4 rounded-xl border mb-6 flex items-center gap-3 ${
                  isDark
                    ? "bg-[#211145] border-white/15 text-purple-200 text-xs"
                    : "bg-purple-50 border-purple-200 text-gray-700 text-xs"
                }`}
              >
                <Heart className="w-5 h-5 text-rose-400 shrink-0" />
                <span>
                  Setiap dukungan sangat berarti untuk menjaga proyek dan tulisan teknologi tetap terbuka dan bermanfaat bagi komunitas developer.
                </span>
              </div>
            </div>

            <a
              href={socials.buymeacoffee}
              target="_blank"
              rel="noreferrer"
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm border flex items-center justify-center gap-2 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isDark
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 border-white/30 shadow-lg shadow-amber-950/40"
                  : "bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-300/40"
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>Traktir Kopi di buymeacoffee.com/bgsnorfa</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links & Collaboration Galaxy Block */}
          <div
            className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "border border-white/25 bg-[#170c32]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.2)] backdrop-blur-md"
                : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.1)] backdrop-blur-md"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-2xl border ${
                    isDark
                      ? "bg-purple-950/60 border-white/20 text-purple-200"
                      : "bg-purple-100 border-purple-200 text-purple-800"
                  }`}
                >
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Terhubung & Kolaborasi
                  </h3>
                  <p
                    className={`text-xs ${
                      isDark ? "text-purple-300/80" : "text-gray-500"
                    }`}
                  >
                    Saluran Komunikasi Resmi Norfa Bagas
                  </p>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  isDark ? "text-purple-100/90" : "text-gray-700"
                }`}
              >
                Terbuka untuk diskusi arsitektur perangkat lunak, sistem data warehouse, pengembangan backend terdistribusi, serta kolaborasi riset kecerdasan buatan.
              </p>

              {/* Verified Links Grid with White Borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-3 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-purple-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">Medium</div>
                    <div className="text-[11px] text-purple-400 truncate">@bgsnorfa</div>
                  </div>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-3 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Linkedin className="w-5 h-5 text-blue-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">LinkedIn</div>
                    <div className="text-[11px] text-purple-400 truncate">in/norfabagas</div>
                  </div>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-3 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Github className="w-5 h-5 text-purple-300 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">GitHub</div>
                    <div className="text-[11px] text-purple-400 truncate">norfabagas</div>
                  </div>
                </a>

                <a
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-3 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-amber-200 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-amber-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Coffee className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold">Buy Me a Coffee</div>
                    <div className="text-[11px] text-amber-400 truncate">bgsnorfa</div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border text-xs text-center ${
                isDark
                  ? "bg-[#1f1042] border-white/10 text-purple-300/80"
                  : "bg-purple-50 border-purple-200 text-gray-600"
              }`}
            >
              Berdomisili di {profile.location} (Waktu Indonesia Barat / UTC+7)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
