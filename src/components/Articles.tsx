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
      className="w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
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
              key={art.title}
              padding={5}
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between text-left ${
                isDark
                  ? "border-slate-800 bg-slate-900 text-slate-100 shadow-sm hover:border-slate-700"
                  : "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300"
              }`}
            >
              <VStack gap={3} className="w-full">
                <HStack hAlign="between" vAlign="center" className="w-full">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${
                      isDark
                        ? "bg-slate-950 border-slate-700 text-slate-200"
                        : "bg-slate-100 border-slate-300 text-slate-800"
                    }`}
                  >
                    {art.category}
                  </span>

                  <HStack gap={1} vAlign="center" className={`text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    <Clock className="w-3.5 h-3.5" />
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

              <VStack gap={0} className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-4 w-full">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 transition-colors ${
                    isDark ? "text-slate-200 hover:text-white" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t.articles.readArticle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors px-5 py-2.5 rounded-md border ${
              isDark
                ? "border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950 shadow-sm"
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
