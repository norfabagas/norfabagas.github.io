import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, MessageSquare, Heart, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { t, data } = useLanguage();
  const { socials } = data;

  return (
    <Section
      id="dukungan"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-24"
    >
      <VStack gap={6} className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {/* Buy Me A Coffee Block */}
          <Card
            padding={6}
            className={`rounded-xl flex flex-col justify-between transition-colors duration-200 ${
              isDark
                ? "border border-slate-700 bg-slate-900/90 shadow-sm"
                : "border border-slate-300 bg-white shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    isDark ? "bg-amber-400 text-slate-950" : "bg-amber-500 text-slate-950"
                  }`}
                >
                  <Coffee className="w-5 h-5" />
                </div>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.support.coffeeTitle}
                  </Heading>
                  <Text type="supporting" className={`text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t.support.coffeeSubtitle}
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {t.support.coffeeBody}
              </Text>

              <Card
                padding={3}
                className={`rounded-lg border ${
                  isDark ? "bg-slate-950 border-slate-700 text-slate-200 text-xs" : "bg-slate-50 border-slate-300 text-slate-800 text-xs"
                }`}
              >
                <HStack gap={2} vAlign="center">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                  <Text type="supporting" className={`text-xs leading-normal font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {t.support.coffeeHeart}
                  </Text>
                </HStack>
              </Card>
            </VStack>

            <VStack gap={0} className="w-full pt-6">
              <Button
                label={t.support.coffeeButton}
                variant="primary"
                size="lg"
                href={socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-lg font-bold text-xs sm:text-sm min-h-[44px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isDark
                    ? "bg-amber-400 text-slate-950 hover:bg-amber-300 border border-amber-400 focus-visible:ring-amber-300"
                    : "bg-amber-500 text-slate-950 hover:bg-amber-400 border border-amber-500 focus-visible:ring-amber-600"
                }`}
              >
                <HStack gap={2} hAlign="center" vAlign="center">
                  <Coffee className="w-4 h-4" />
                  <span>{t.support.coffeeButton}</span>
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
                ? "border border-slate-700 bg-slate-900/90 shadow-sm"
                : "border border-slate-300 bg-white shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full text-left">
              <HStack gap={3} vAlign="center">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                    isDark ? "bg-slate-100 text-slate-950" : "bg-slate-900 text-white"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                </div>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.support.connectTitle}
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t.support.connectSubtitle}
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {t.support.connectBody}
              </Text>

              {/* Mobile-First Grid for Social Shortcuts */}
              <Grid columns={{ minWidth: 130, max: 2, repeat: "fit" }} gap={2} className="w-full">
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                    isDark
                      ? "bg-slate-950 border-slate-700 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <BookOpen className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className={`text-xs font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>Medium</Text>
                    <Text type="supporting" className={`text-[11px] truncate font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>@bgsnorfa</Text>
                  </VStack>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                    isDark
                      ? "bg-slate-950 border-slate-700 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <Linkedin className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className={`text-xs font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>LinkedIn</Text>
                    <Text type="supporting" className={`text-[11px] truncate font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>in/norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                    isDark
                      ? "bg-slate-950 border-slate-700 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <Github className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className={`text-xs font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>GitHub</Text>
                    <Text type="supporting" className={`text-[11px] truncate font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>norfabagas</Text>
                  </VStack>
                </a>

                <a
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2.5 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white ${
                    isDark
                      ? "bg-slate-950 border-slate-700 text-slate-100 hover:border-slate-500 hover:bg-slate-800"
                      : "bg-slate-50 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <Coffee className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
                  <VStack gap={0} className="overflow-hidden text-left">
                    <Text type="label" className={`text-xs font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>Buy Me a Coffee</Text>
                    <Text type="supporting" className={`text-[11px] truncate font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>bgsnorfa</Text>
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
