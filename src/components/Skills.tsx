import { Code2, Database, Brain, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons = [
    <Code2 key="code" className="w-5 h-5" />,
    <Database key="data" className="w-5 h-5" />,
    <Brain key="ai" className="w-5 h-5" />,
    <Cpu key="devops" className="w-5 h-5" />
  ];

  return (
    <section id="keahlian" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Keahlian & Ekosistem Teknologi
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              isDark ? "text-purple-200/80" : "text-gray-600"
            }`}
          >
            Teknologi dan kerangka kerja yang digunakan dalam arsitektur backend, pemrosesan data, dan eksperimen kecerdasan buatan.
          </p>
        </div>

        {/* Skills Grid with White Borders & Galaxy Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/40 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2.5 rounded-xl border ${
                    isDark
                      ? "bg-purple-900/60 border-white/20 text-purple-200"
                      : "bg-purple-100 border-purple-200 text-purple-800"
                  }`}
                >
                  {categoryIcons[index % categoryIcons.length]}
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skillGroup.category}
                  </h3>
                  <p
                    className={`text-xs ${
                      isDark ? "text-purple-300/70" : "text-gray-500"
                    }`}
                  >
                    {skillGroup.description}
                  </p>
                </div>
              </div>

              {/* Items Badges with Crisp Borders */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isDark
                        ? "bg-[#211244] border-white/20 text-purple-200 hover:border-white/40"
                        : "bg-purple-50 border-purple-200 text-purple-900 hover:border-purple-300"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
