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
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header with Kreativa Signature Accent Bar */}
        <VStack gap={1} hAlign="center" className="text-center mb-12 w-full">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {t.articles.title}
          </Heading>
          <div className="mt-2 h-1 w-24 bg-slate-900 dark:bg-slate-100 mx-auto rounded-full" />
          <Text type="supporting" className={`mt-4 text-base sm:text-lg leading-8 max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.articles.subtitle}
          </Text>
        </VStack>

        {/* Mobile-First Responsive Grid in Kreativa Card Style */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {articles.map((art) => (
            <Card
              key={art.title}
              padding={6}
              className={`rounded-xl border transition-all duration-300 flex flex-col justify-between text-left ${
                isDark
                  ? "border-slate-700 bg-slate-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-600"
                  : "border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-300"
              }`}
            >
              <VStack gap={3} className="w-full">
                <HStack hAlign="between" vAlign="center" className="w-full">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${
                      isDark
                        ? "bg-slate-900 border-slate-700 text-slate-200"
                        : "bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    {art.category}
                  </span>

                  <HStack gap={1} vAlign="center" className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </HStack>
                </HStack>

                <Heading level={3} className={`text-lg sm:text-xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {art.title}
                </Heading>

                <Text type="body" className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {art.snippet}
                </Text>
              </VStack>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 mt-4 w-full">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold py-2 transition-colors ${
                    isDark ? "text-slate-200 hover:text-white" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t.articles.readArticle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </Grid>

        {/* Medium Profile Link */}
        <div className="mt-10 text-center">
          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors px-5 py-2.5 rounded-md border ${
              isDark
                ? "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <span>{t.articles.visitMedium}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
