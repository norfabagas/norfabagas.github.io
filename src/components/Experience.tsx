import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ExperienceProps {
  isDark: boolean;
}

export function Experience({ isDark }: ExperienceProps) {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="pengalaman" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isDark
                  ? "bg-purple-900/60 text-purple-200 border border-white/20"
                  : "bg-purple-100 text-purple-800 border border-purple-200"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Rekam Jejak Profesional LinkedIn</span>
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight mt-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Pengalaman & Pendidikan
          </h2>
          <p
            className={`mt-1 text-sm sm:text-base ${
              isDark ? "text-purple-200/80" : "text-gray-600"
            }`}
          >
            Pengalaman industri dalam rekayasa perangkat lunak skala korporasi dan riset akademik kecerdasan buatan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className={`text-lg font-bold flex items-center gap-2 mb-4 ${
                isDark ? "text-purple-200" : "text-purple-900"
              }`}
            >
              <Building2 className="w-5 h-5 text-purple-400" />
              <span>Pengalaman Kerja</span>
            </h3>

            {experience.map((exp) => (
              <div
                key={exp.company}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/40 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                    : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4
                    className={`text-base font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.role}
                  </h4>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md border w-fit ${
                      isDark
                        ? "bg-purple-950/60 border-white/15 text-purple-300"
                        : "bg-purple-50 border-purple-200 text-purple-800"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div
                  className={`text-sm font-semibold mb-3 ${
                    isDark ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {exp.company}
                </div>

                <p
                  className={`text-xs leading-relaxed mb-4 ${
                    isDark ? "text-purple-100/80" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className={`text-[11px] px-2 py-0.5 rounded border ${
                        isDark
                          ? "bg-[#211244] border-white/15 text-purple-200"
                          : "bg-purple-50 border-purple-200 text-purple-800"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Research Column (1 col) */}
          <div className="space-y-4">
            <h3
              className={`text-lg font-bold flex items-center gap-2 mb-4 ${
                isDark ? "text-purple-200" : "text-purple-900"
              }`}
            >
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span>Pendidikan & Publikasi</span>
            </h3>

            <div
              className={`p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-md border inline-block mb-3 ${
                    isDark
                      ? "bg-purple-950/60 border-white/15 text-purple-300"
                      : "bg-purple-50 border-purple-200 text-purple-800"
                  }`}
                >
                  Pendidikan Tinggi
                </span>

                <h4
                  className={`text-lg font-bold tracking-tight mb-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {education.institution}
                </h4>

                <div
                  className={`text-xs font-semibold mb-4 ${
                    isDark ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {education.degree}
                </div>

                <div
                  className={`text-xs leading-relaxed p-4 rounded-xl border ${
                    isDark
                      ? "bg-[#201243] border-white/15 text-purple-100"
                      : "bg-purple-50/70 border-purple-200 text-gray-700"
                  }`}
                >
                  <p className="font-semibold mb-1 text-purple-400">Riset Terpublikasi:</p>
                  <p>{education.highlight}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 text-xs">
                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1 ${
                    isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  <span>Lihat profil lengkap di LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
