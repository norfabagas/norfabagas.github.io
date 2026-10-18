import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { ExternalLink, Clock } from "lucide-react";
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
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-24"
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        {/* Section Header with Kreativa accent bar */}
        <VStack gap={1} className="w-full text-left">
          <HStack hAlign="between" vAlign="end" className="flex-col sm:flex-row gap-2 w-full">
            <VStack gap={1}>
              <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                {t.articles.title}
              </Heading>
              <div className="mt-1 h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full" />
              <Text type="supporting" className={`text-sm pt-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.articles.subtitle}
              </Text>
            </VStack>

            <a
              href={socials.medium}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 p-1 shrink-0 ${
                isDark ? "text-slate-400 hover:text-slate-100" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>{t.articles.visitMedium}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </HStack>
        </VStack>

        {/* Mobile-First Responsive Grid */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {articles.map((art) => (
            <Card
              key={art.title}
              padding={5}
              className={`rounded-xl transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "border border-slate-800 bg-slate-900/80 hover:border-slate-700 shadow-sm backdrop-blur-sm"
                  : "border border-slate-200 bg-white/95 hover:border-slate-300 shadow-sm backdrop-blur-sm"
              }`}
            >
              <VStack gap={3} className="w-full text-left">
                <HStack hAlign="between" vAlign="center" className="w-full">
                  <Text
                    type="label"
                    className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${
                      isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    {art.category}
                  </Text>

                  <HStack gap={1} vAlign="center" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </HStack>
                </HStack>

                <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {art.title}
                </Heading>

                <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {art.snippet}
                </Text>
              </VStack>

              <HStack hAlign="between" vAlign="center" className={`pt-4 border-t mt-4 w-full ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <a
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold min-h-[44px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-lg ${
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span>{t.articles.readArticle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </HStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
