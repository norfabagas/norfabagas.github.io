import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, MessageSquare, Heart, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { socials } = PORTFOLIO_DATA;

  return (
    <Section id="dukungan" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {/* Buy Me A Coffee Block */}
          <Card
            padding={6}
            className={`rounded-xl flex flex-col justify-between transition-colors duration-200 ${
              isDark
                ? "border border-slate-800 bg-slate-900/80 shadow-sm"
                : "border border-slate-200 bg-white/95 shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    isDark ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-100"
                  }`}
                >
                  <Coffee className="w-5 h-5" />
                </div>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Dukung Karya & Riset
                  </Heading>
                  <Text type="supporting" className={`text-xs font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Buy Me a Coffee: @bgsnorfa
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Jika Anda menyukai artikel teknis di Medium, repositori open source, atau eksperimen machine learning yang saya bagikan, Anda dapat memberikan apresiasi dan traktir kopi virtual untuk mendukung kontinuitas riset.
              </Text>

              <Card
                padding={3}
                className={`rounded-lg border ${
                  isDark ? "bg-slate-950/60 border-slate-800 text-slate-400 text-xs" : "bg-slate-100/80 border-slate-200 text-slate-600 text-xs"
                }`}
              >
                <HStack gap={2} vAlign="center">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                  <Text type="supporting" className="text-xs leading-normal">
                    Setiap dukungan sangat berarti untuk menjaga proyek dan tulisan teknologi tetap terbuka dan bermanfaat bagi komunitas developer.
                  </Text>
                </HStack>
              </Card>
            </VStack>

            <VStack gap={0} className="w-full pt-6">
              <Button
                label="Traktir Kopi di buymeacoffee.com/bgsnorfa"
                variant="primary"
                size="lg"
                href={socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-lg font-semibold text-xs sm:text-sm min-h-[44px] transition-colors ${
                  isDark
                    ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    : "bg-slate-900 text-slate-50 hover:bg-slate-800"
                }`}
              >
                <HStack gap={2} hAlign="center" vAlign="center">
                  <Coffee className="w-4 h-4" />
                  <span>Traktir Kopi di buymeacoffee.com/bgsnorfa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </HStack>
              </Button>
            </VStack>
          </Card>

          {/* Social Links & Collaboration Block */}
          <Card
            padding={6}
            className={`rounded-xl flex flex-col justify-between transition-colors duration-200 ${
              isDark
                ? "border border-slate-800 bg-slate-900/80 shadow-sm"
                : "border border-slate-200 bg-white/95 shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    isDark ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-100"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                </div>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Terhubung & Kolaborasi
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Saluran Komunikasi Resmi Norfa Bagas
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Terbuka untuk diskusi arsitektur perangkat lunak, sistem data warehouse, pengembangan backend terdistribusi, serta kolaborasi riset kecerdasan buatan.
              </Text>

              {/* Mobile-First Grid for Social Shortcuts */}
              <Grid columns={{ minWidth: 140, max: 2, repeat: "fit" }} gap={2} className="w-full">
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                    isDark
                      ? "bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-semibold leading-tight">Medium</Text>
                    <Text type="supporting" className={`text-[11px] truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}>@bgsnorfa</Text>
                  </VStack>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                    isDark
                      ? "bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-slate-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-semibold leading-tight">LinkedIn</Text>
                    <Text type="supporting" className={`text-[11px] truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}>in/norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                    isDark
                      ? "bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <Github className="w-4 h-4 text-slate-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-semibold leading-tight">GitHub</Text>
                    <Text type="supporting" className={`text-[11px] truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}>norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                    isDark
                      ? "bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <Coffee className="w-4 h-4 text-slate-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-semibold leading-tight">Buy Me a Coffee</Text>
                    <Text type="supporting" className={`text-[11px] truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}>bgsnorfa</Text>
                  </VStack>
                </a>
              </Grid>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </Section>
  );
}
