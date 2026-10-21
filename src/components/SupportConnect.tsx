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
      variant="transparent"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-10 sm:py-16 md:py-20 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
    >
      <VStack gap={0} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-6 sm:mb-8 w-full">
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
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.support.connectHeaderDesc}
          </Text>
        </VStack>

        {/* 2-Card Layout: Professional Channels + Coffee Support */}
        <Grid columns={{ minWidth: 260, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {/* Card 1: Official Communication Channels */}
          <Card
            variant="transparent"
            padding={4}
            className={`rounded-2xl border flex flex-col justify-between aero-glass-card ${
              isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
            }`}
          >
            <VStack gap={4} className="w-full h-full justify-between">
              <VStack gap={3} className="w-full">
                <HStack gap={3} vAlign="center" className="w-full">
                  <HStack
                    hAlign="center"
                    vAlign="center"
                    className={`w-11 h-11 rounded-xl shrink-0 ${
                      isDark ? "aero-icon-dark" : "aero-icon-light"
                    }`}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </HStack>
                  <VStack gap={0.5}>
                    <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {t.support.connectSubtitle}
                    </Heading>
                    <Text type="supporting" className={`text-xs ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                      LinkedIn · GitHub · Stack Overflow
                    </Text>
                  </VStack>
                </HStack>

                <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                  {t.support.connectCardBody}
                </Text>
              </VStack>

              {/* Action Buttons */}
              <VStack gap={2} className="pt-2 w-full">
                <Button
                  label="LinkedIn @norfabagas"
                  variant="primary"
                  size="md"
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold aero-btn-primary min-h-[44px] h-11 px-4 active:scale-95"
                >
                  <HStack gap={2} vAlign="center">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn: /in/norfabagas</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </HStack>
                </Button>

                <Grid columns={{ minWidth: 120, max: 3, repeat: "fit" }} gap={2} className="w-full">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border min-h-[44px] transition-all duration-150 active:scale-95 ${
                      isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socials.stackoverflow}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border min-h-[44px] transition-all duration-150 active:scale-95 ${
                      isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Stack Overflow</span>
                  </a>

                  <a
                    href={socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border min-h-[44px] transition-all duration-150 active:scale-95 ${
                      isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Medium</span>
                  </a>
                </Grid>
              </VStack>
            </VStack>
          </Card>

          {/* Card 2: Buy Me a Coffee / Support */}
          <Card
            variant="transparent"
            padding={4}
            className={`rounded-2xl border flex flex-col justify-between aero-glass-card ${
              isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
            }`}
          >
            <VStack gap={4} className="w-full h-full justify-between">
              <VStack gap={3} className="w-full">
                <HStack gap={3} vAlign="center" className="w-full">
                  <HStack
                    hAlign="center"
                    vAlign="center"
                    className={`w-11 h-11 rounded-xl shrink-0 ${
                      isDark ? "aero-icon-dark" : "aero-icon-light"
                    }`}
                  >
                    <Coffee className="w-5 h-5" />
                  </HStack>
                  <VStack gap={0.5}>
                    <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {t.support.coffeeTitle}
                    </Heading>
                    <Text type="supporting" className={`text-xs ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                      {t.support.coffeeSubtitle}
                    </Text>
                  </VStack>
                </HStack>

                <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                  {t.support.coffeeBody}
                </Text>
              </VStack>

              {/* Action Buttons */}
              <VStack gap={2} className="pt-2 w-full">
                <Button
                  label={t.support.coffeeButton}
                  variant="primary"
                  size="md"
                  href={socials.buymeacoffee}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold aero-btn-primary min-h-[44px] h-11 px-4 active:scale-95"
                >
                  <HStack gap={2} vAlign="center">
                    <Coffee className="w-4 h-4" />
                    <span>{t.support.coffeeButton}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </HStack>
                </Button>

                <HStack
                  hAlign="center"
                  vAlign="center"
                  className={`w-full py-2.5 px-3 rounded-xl border text-center transition-all duration-150 min-h-[44px] ${
                    isDark ? "aero-btn-secondary-dark" : "aero-btn-secondary-light"
                  }`}
                >
                  <Text type="supporting" className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {t.support.coffeeHeart}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </Card>
        </Grid>
      </VStack>
    </Section>
  );
}
