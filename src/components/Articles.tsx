import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { ExternalLink, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ArticlesProps {
  isDark: boolean;
}

export function Articles({ isDark }: ArticlesProps) {
  const { t, data } = useLanguage();
  const { articles, socials } = data;

  return (
    <Section
      id="artikel"
      variant="transparent"
      paddingBlock={0}
      className="w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
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
            {t.articles.title}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.articles.subtitle}
          </Text>
        </VStack>

        {/* Articles Grid */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {articles.map((art) => (
            <Card
              variant="transparent"
              key={art.title}
              padding={5}
              className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between text-left aero-glass-card ${
                isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
              }`}
            >
              <VStack gap={3} className="w-full">
                <HStack hAlign="between" vAlign="center" className="w-full">
                  <span
                    className={`text-xs px-3 py-0.5 rounded-lg font-semibold ${
                      isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
                    }`}
                  >
                    {art.category}
                  </span>

                  <HStack gap={1} vAlign="center" className={`text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    <span>{art.readTime}</span>
                  </HStack>
                </HStack>

                <Heading level={3} className={`text-base sm:text-lg font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {art.title}
                </Heading>

                <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                  {art.snippet}
                </Text>
              </VStack>

              <VStack gap={0} className="pt-4 border-t border-white/30 dark:border-white/10 mt-4 w-full">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 transition-colors group ${
                    isDark ? "text-sky-300 hover:text-sky-200" : "text-sky-700 hover:text-sky-800"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>{t.articles.readArticle}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </VStack>
            </Card>
          ))}
        </Grid>

        {/* Medium Profile Link */}
        <VStack gap={0} hAlign="center" className="mt-8 text-center w-full">
          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-150 px-6 py-2.5 rounded-xl ${
              isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
            }`}
          >
            <span>{t.articles.visitMedium}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </VStack>
      </VStack>
    </Section>
  );
}
