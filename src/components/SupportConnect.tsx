import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, MessageSquare, Heart, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { socials, profile } = PORTFOLIO_DATA;

  return (
    <Section id="dukungan" paddingBlock={6}>
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6">
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {/* Buy Me A Coffee Galaxy Block */}
          <Card
            padding={6}
            className={`rounded-3xl flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "border border-white/25 bg-[#170c32]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.2)] backdrop-blur-md"
                : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.1)] backdrop-blur-md"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <HStack
                  hAlign="center"
                  vAlign="center"
                  className={`p-3 rounded-2xl border ${
                    isDark
                      ? "bg-amber-950/60 border-amber-400/30 text-amber-300"
                      : "bg-amber-100 border-amber-300 text-amber-800"
                  }`}
                >
                  <Coffee className="w-6 h-6" />
                </HStack>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    Dukung Karya & Riset
                  </Heading>
                  <Text type="supporting" className="text-xs text-amber-400 font-semibold">
                    Buy Me a Coffee: @bgsnorfa
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-purple-100/90" : "text-gray-700"}`}>
                Jika Anda menyukai artikel teknis di Medium, repositori open source, atau eksperimen machine learning yang saya bagikan, Anda dapat memberikan apresiasi dan traktir kopi virtual untuk mendukung kontinuitas riset.
              </Text>

              <Card
                padding={3}
                className={`rounded-xl border ${
                  isDark ? "bg-[#211145] border-white/15 text-purple-200 text-xs" : "bg-purple-50 border-purple-200 text-gray-700 text-xs"
                }`}
              >
                <HStack gap={2} vAlign="center">
                  <Heart className="w-5 h-5 text-rose-400 shrink-0" />
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
                className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm border min-h-[44px] ${
                  isDark
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 border-white/30 shadow-lg shadow-amber-950/40"
                    : "bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-300/40"
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

          {/* Social Links & Collaboration Galaxy Block */}
          <Card
            padding={6}
            className={`rounded-3xl flex flex-col justify-between transition-all duration-300 ${
              isDark
                ? "border border-white/25 bg-[#170c32]/85 shadow-[0_8px_32px_-4px_rgba(147,51,234,0.2)] backdrop-blur-md"
                : "border border-purple-200/90 bg-white/90 shadow-[0_8px_30px_-4px_rgba(107,33,168,0.1)] backdrop-blur-md"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <HStack
                  hAlign="center"
                  vAlign="center"
                  className={`p-3 rounded-2xl border ${
                    isDark
                      ? "bg-purple-950/60 border-white/20 text-purple-200"
                      : "bg-purple-100 border-purple-200 text-purple-800"
                  }`}
                >
                  <MessageSquare className="w-6 h-6" />
                </HStack>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    Terhubung & Kolaborasi
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-purple-300/80" : "text-gray-500"}`}>
                    Saluran Komunikasi Resmi Norfa Bagas
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-purple-100/90" : "text-gray-700"}`}>
                Terbuka untuk diskusi arsitektur perangkat lunak, sistem data warehouse, pengembangan backend terdistribusi, serta kolaborasi riset kecerdasan buatan.
              </Text>

              {/* Mobile-First Grid for Social Shortcuts */}
              <Grid columns={{ minWidth: 140, max: 2, repeat: "fit" }} gap={2} className="w-full">
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-bold leading-tight">Medium</Text>
                    <Text type="supporting" className="text-[11px] text-purple-400 truncate">@bgsnorfa</Text>
                  </VStack>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-bold leading-tight">LinkedIn</Text>
                    <Text type="supporting" className="text-[11px] text-purple-400 truncate">in/norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-purple-100 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-gray-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Github className="w-4 h-4 text-purple-300 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-bold leading-tight">GitHub</Text>
                    <Text type="supporting" className="text-[11px] text-purple-400 truncate">norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isDark
                      ? "bg-[#201243] border-white/20 text-amber-200 hover:border-white/40 hover:bg-[#281754]"
                      : "bg-purple-50/80 border-purple-200 text-amber-800 hover:border-purple-300 hover:bg-purple-100"
                  }`}
                >
                  <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className="text-xs font-bold leading-tight">Buy Me a Coffee</Text>
                    <Text type="supporting" className="text-[11px] text-amber-400 truncate">bgsnorfa</Text>
                  </VStack>
                </a>
              </Grid>
            </VStack>

            <Card
              padding={3}
              className={`rounded-xl border text-center mt-4 ${
                isDark ? "bg-[#1f1042] border-white/10 text-purple-300/80" : "bg-purple-50 border-purple-200 text-gray-600"
              }`}
            >
              <Text type="supporting" className="text-xs">
                Berdomisili di {profile.location} (Waktu Indonesia Barat / UTC+7)
              </Text>
            </Card>
          </Card>
        </Grid>
      </VStack>
    </Section>
  );
}
