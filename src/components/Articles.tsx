import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { ExternalLink, Clock } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ArticlesProps {
  isDark: boolean;
}

export function Articles({ isDark }: ArticlesProps) {
  const { articles, socials } = PORTFOLIO_DATA;

  return (
    <Section id="artikel" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <VStack gap={1} className="w-full text-left">
          <HStack hAlign="between" vAlign="end" className="flex-col sm:flex-row gap-2 w-full">
            <VStack gap={0.5}>
              <Heading level={2} className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                Artikel & Tutorial Rekayasa
              </Heading>
              <Text type="supporting" className={`text-sm ${isDark ? "text-purple-200/80" : "text-gray-600"}`}>
                Catatan pemikiran teknis, tutorial instalasi, dan panduan praktis seputar rekayasa sistem di platform Medium @bgsnorfa.
              </Text>
            </VStack>

            <a
              href={socials.medium}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 p-1 ${
                isDark ? "text-purple-300 hover:text-white" : "text-purple-700 hover:text-purple-900"
              }`}
            >
              <span>Kunjungi medium.com/@bgsnorfa</span>
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
              className={`rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "border border-white/20 bg-[#160d2e]/80 hover:border-white/45 shadow-[0_4px_24px_-4px_rgba(147,51,234,0.15)] backdrop-blur-sm"
                  : "border border-purple-200/90 bg-white/90 hover:border-purple-300 shadow-[0_4px_20px_-4px_rgba(107,33,168,0.08)] backdrop-blur-sm"
              }`}
            >
              <VStack gap={3} className="w-full text-left">
                <HStack hAlign="between" vAlign="center" className="w-full">
                  <Text
                    type="label"
                    className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${
                      isDark ? "bg-purple-950/70 border-white/15 text-purple-200" : "bg-purple-100 border-purple-200 text-purple-800"
                    }`}
                  >
                    {art.category}
                  </Text>

                  <HStack gap={1} vAlign="center" className="text-xs text-purple-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </HStack>
                </HStack>

                <Heading level={3} className={`text-base font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  {art.title}
                </Heading>

                <Text type="body" className={`text-xs leading-relaxed ${isDark ? "text-purple-100/80" : "text-gray-600"}`}>
                  {art.snippet}
                </Text>
              </VStack>

              <HStack hAlign="between" vAlign="center" className="pt-4 border-t border-white/10 w-full">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
                >
                  <span>Baca artikel selengkapnya di Medium</span>
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
