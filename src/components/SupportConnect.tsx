import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { t, data, locale } = useLanguage();
  const { socials } = data;

  const contactLinks = [
    {
      name: "LinkedIn",
      handle: "/in/norfabagas",
      desc: locale === "id-ID" ? "Jaringan profesional & kolaborasi" : "Professional network & inquiries",
      url: socials.linkedin,
      icon: Linkedin,
    },
    {
      name: "GitHub",
      handle: "@norfabagas",
      desc: locale === "id-ID" ? "Repositori & proyek open source" : "Repositories & open source code",
      url: socials.github,
      icon: Github,
    },
    {
      name: "Medium",
      handle: "@bgsnorfa",
      desc: locale === "id-ID" ? "Artikel & catatan teknis" : "Technical articles & notes",
      url: socials.medium,
      icon: BookOpen,
    },
    {
      name: "Buy Me a Coffee",
      handle: "@bgsnorfa",
      desc: locale === "id-ID" ? "Dukungan & apresiasi karya" : "Support my writing & projects",
      url: socials.buymeacoffee,
      icon: Coffee,
    },
  ];

  return (
    <Section
      id="kontak"
      variant="transparent"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-10 sm:py-16 md:py-20 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
    >
      <VStack gap={0} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
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

        {/* Single Unified Container: 4 Equal-Level Channels */}
        <Card
          variant="transparent"
          padding={5}
          className={`rounded-2xl border aero-glass-card w-full ${
            isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
          }`}
        >
          <Grid columns={{ minWidth: 260, max: 2, repeat: "fit" }} gap={4} className="w-full">
            {contactLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-200 min-h-[64px] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  isDark
                    ? "aero-glass-badge-dark hover:border-sky-400/50 hover:bg-slate-800/60"
                    : "aero-glass-badge-light hover:border-sky-400/60 hover:bg-white/90 hover:shadow-md"
                }`}
              >
                <HStack gap={3} vAlign="center" className="min-w-0">
                  <HStack
                    hAlign="center"
                    vAlign="center"
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                      isDark ? "aero-icon-dark" : "aero-icon-light"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-sky-500" />
                  </HStack>
                  <VStack gap={0.5} className="min-w-0 text-left">
                    <HStack gap={1.5} vAlign="center" className="flex-wrap">
                      <Heading level={4} className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {item.name}
                      </Heading>
                      <span className={`text-xs font-mono font-medium ${isDark ? "text-sky-300/80" : "text-sky-700"}`}>
                        {item.handle}
                      </span>
                    </HStack>
                    <Text type="supporting" className={`text-xs truncate max-w-[200px] sm:max-w-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {item.desc}
                    </Text>
                  </VStack>
                </HStack>

                <HStack
                  hAlign="center"
                  vAlign="center"
                  className={`w-8 h-8 rounded-lg shrink-0 ml-2 transition-colors ${
                    isDark ? "text-slate-400 group-hover:text-white" : "text-slate-500 group-hover:text-slate-900"
                  }`}
                >
                  <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </HStack>
              </a>
            ))}
          </Grid>
        </Card>
      </VStack>
    </Section>
  );
}
