import { Section, VStack, HStack, Grid, Card, Heading, Text, Button } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, ExternalLink, MessageSquare, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { t, data } = useLanguage();
  const { socials } = data;

  return (
    <Section
      id="kontak"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <VStack gap={0} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-8 w-full">
          <Heading
            level={2}
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {t.support.connectTitle}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.support.connectBody}
          </Text>
        </VStack>

        {/* 2-Card Layout: Professional Channels + Coffee Support */}
        <Grid columns={{ minWidth: 320, max: 2, repeat: "fit" }} gap={6} className="w-full">
          {/* Card 1: Official Communication Channels */}
          <Card
            padding={6}
            className={`rounded-xl border flex flex-col justify-between ${
              isDark
                ? "border-slate-800 bg-slate-950/80 shadow-sm"
                : "border-slate-200 bg-slate-50/80 shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full">
              <HStack gap={3} vAlign="center" className="w-full">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-slate-100"
                      : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                </span>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {t.support.connectSubtitle}
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    LinkedIn · GitHub · Stack Overflow
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.support.connectBody}
              </Text>

              {/* Action Buttons */}
              <VStack gap={3} className="pt-2 w-full">
                <Button
                  label="LinkedIn @norfabagas"
                  variant="primary"
                  size="md"
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 h-10 px-4 shadow-sm"
                >
                  <HStack gap={2} vAlign="center">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn: /in/norfabagas</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </HStack>
                </Button>

                <HStack gap={2} className="w-full">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold border transition-colors ${
                      isDark
                        ? "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socials.stackoverflow}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold border transition-colors ${
                      isDark
                        ? "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Stack Overflow</span>
                  </a>

                  <a
                    href={socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold border transition-colors ${
                      isDark
                        ? "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Medium</span>
                  </a>
                </HStack>
              </VStack>
            </VStack>
          </Card>

          {/* Card 2: Buy Me a Coffee / Support */}
          <Card
            padding={6}
            className={`rounded-xl border flex flex-col justify-between ${
              isDark
                ? "border-slate-800 bg-slate-950/80 shadow-sm"
                : "border-slate-200 bg-slate-50/80 shadow-sm"
            }`}
          >
            <VStack gap={4} className="w-full">
              <HStack gap={3} vAlign="center" className="w-full">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-amber-400"
                      : "bg-white border-slate-200 text-amber-600 shadow-sm"
                  }`}
                >
                  <Coffee className="w-5 h-5" />
                </span>
                <VStack gap={0.5}>
                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {t.support.coffeeTitle}
                  </Heading>
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.support.coffeeSubtitle}
                  </Text>
                </VStack>
              </HStack>

              <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.support.coffeeBody}
              </Text>

              <Text type="supporting" className={`text-xs italic leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t.support.coffeeHeart}
              </Text>

              {/* Action Button */}
              <VStack gap={0} className="pt-2 w-full mt-auto">
                <Button
                  label={t.support.coffeeButton}
                  variant="primary"
                  size="md"
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors bg-amber-500 text-slate-950 hover:bg-amber-400 h-10 px-4 shadow-sm"
                >
                  <HStack gap={2} vAlign="center">
                    <Coffee className="w-4 h-4" />
                    <span>{t.support.coffeeButton}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </HStack>
                </Button>
              </VStack>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </Section>
  );
}
