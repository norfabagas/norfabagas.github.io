import { Section, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  void isDark;
  const { locale, data } = useLanguage();
  const { profile } = data;

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <Section
      id="tentang"
      paddingBlock={0}
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center my-auto w-full">
          {/* Kreativa Signature Headline with Dual-Tone Gradient */}
          <Heading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500"
          >
            <span className="block">{profile.name}</span>
            <span className="block mt-2">{profile.title}</span>
          </Heading>

          {/* Subtitle description */}
          <Text
            type="large"
            className="mt-4 max-w-xl mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {locale === "id-ID"
              ? "Spesialis arsitektur backend, pemrosesan data warehouse OLAP, pipeline terdistribusi, dan riset applied machine learning."
              : "Specializing in distributed backend architectures, OLAP data warehouses, high-concurrency APIs, and applied AI experiments."}
          </Text>

          {/* Dual Action Buttons mirroring Kreativa */}
          <HStack gap={2} hAlign="center" vAlign="center" className="mt-10 flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              label={locale === "id-ID" ? "Lihat Proyek" : "Get started"}
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("proyek")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 shadow h-11 rounded-md px-8 w-full sm:w-auto"
            >
              <HStack gap={1.5} vAlign="center">
                <span>{locale === "id-ID" ? "Lihat Proyek" : "Get started"}</span>
                <ArrowRight className="w-4 h-4" />
              </HStack>
            </Button>

            <Button
              label={locale === "id-ID" ? "Tentang Saya" : "Learn more"}
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("ringkasan")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 h-11 rounded-md px-8 w-full sm:w-auto"
            >
              <HStack gap={1.5} vAlign="center">
                <Sparkles className="w-4 h-4" />
                <span>{locale === "id-ID" ? "Tentang Saya" : "Learn more"}</span>
              </HStack>
            </Button>
          </HStack>
        </div>
      </div>
    </Section>
  );
}
