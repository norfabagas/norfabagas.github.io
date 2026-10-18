import { Section, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { Coffee, Github, Linkedin, BookOpen, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SupportConnectProps {
  isDark: boolean;
}

export function SupportConnect({ isDark }: SupportConnectProps) {
  const { locale, data } = useLanguage();
  const { socials } = data;

  return (
    <Section
      id="dukungan"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Kreativa CTA Banner Card */}
        <div className="bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-300/60 dark:border-slate-700/60">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between text-left">
            <div className="mb-8 lg:mb-0 max-w-2xl">
              <Heading
                level={2}
                className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}
              >
                <span className="block">
                  {locale === "id-ID"
                    ? "Siap mentransformasikan arsitektur digital Anda?"
                    : "Ready to elevate your engineering architecture?"}
                </span>
                <span className="block text-slate-700 dark:text-slate-300 mt-2">
                  {locale === "id-ID"
                    ? "Mari wujudkan solusi sistem yang teruji dan tangguh bersama."
                    : "Let's bring your technical vision to life."}
                </span>
              </Heading>
              <Text
                type="body"
                className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                {locale === "id-ID"
                  ? "Tersedia untuk konsultasi arsitektur perangkat lunak, optimasi database warehouse, atau diskusi kolaborasi proyek skala korporasi."
                  : "Available for software architecture consulting, database warehouse optimization, and high-impact enterprise engineering collaborations."}
              </Text>
            </div>

            {/* Action Buttons in Kreativa Banner */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start lg:flex-shrink-0">
              <Button
                label={locale === "id-ID" ? "Traktir Kopi" : "Buy Me a Coffee"}
                variant="primary"
                size="lg"
                href={socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 h-11 px-8 shadow"
              >
                <HStack gap={2} vAlign="center">
                  <Coffee className="w-4 h-4" />
                  <span>{locale === "id-ID" ? "Traktir Kopi" : "Buy Me a Coffee"}</span>
                  <ArrowRight className="w-4 h-4" />
                </HStack>
              </Button>

              <Button
                label={locale === "id-ID" ? "Hubungi LinkedIn" : "Connect on LinkedIn"}
                variant="secondary"
                size="lg"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 h-11 px-8"
              >
                <HStack gap={2} vAlign="center">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </HStack>
              </Button>
            </div>
          </div>
        </div>

        {/* Supporting Channels Strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className={`p-4 rounded-xl border flex items-center justify-center gap-2.5 transition-all shadow-sm ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
            }`}
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-semibold">GitHub</span>
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`p-4 rounded-xl border flex items-center justify-center gap-2.5 transition-all shadow-sm ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
            }`}
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>

          <a
            href={socials.medium}
            target="_blank"
            rel="noreferrer"
            className={`p-4 rounded-xl border flex items-center justify-center gap-2.5 transition-all shadow-sm ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Medium</span>
          </a>

          <a
            href="mailto:contact@norfabagas.com"
            className={`p-4 rounded-xl border flex items-center justify-center gap-2.5 transition-all shadow-sm ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                : "bg-white/80 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold">Email</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
