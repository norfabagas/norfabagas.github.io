import { Section, VStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Globe, Award, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  const { locale, data } = useLanguage();

  const cardsData = locale === "id-ID" ? [
    {
      icon: <Globe className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "Arsitektur Skala Tinggi",
      description: "Berpengalaman merancang dan mengimplementasikan microservices, pipeline data streaming, dan modul perbankan dengan konkurensi serta integritas data yang teruji."
    },
    {
      icon: <Award className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "Clean Architecture & TDD",
      description: "Penerapan standar rekayasa software teruji: Domain-Driven Design (DDD), automasi testing berbasis TDD, serta optimasi query T-SQL dan PostgreSQL berkecepatan tinggi."
    },
    {
      icon: <Users className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "IT Consultant & Strategic Impact",
      description: "Konsultasi sistem teknologi informasi, modernisasi stack warisan (legacy), dan kepemimpinan teknis dalam menghadirkan solusi digital yang scalable dan aman."
    }
  ] : [
    {
      icon: <Globe className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "High-Throughput Systems",
      description: "Proven experience architecting distributed backend microservices, streaming pipelines, and enterprise banking modules handling high transaction concurrency."
    },
    {
      icon: <Award className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "Clean Architecture & TDD",
      description: "Rigorous software engineering standards: Domain-Driven Design (DDD), automated Test-Driven Development, and high-performance relational query tuning."
    },
    {
      icon: <Users className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4 mx-auto" />,
      title: "IT Consultant & Strategic Impact",
      description: "Providing technology strategy consulting, legacy infrastructure modernization, and high-impact advisory to elevate engineering teams and digital reliability."
    }
  ];

  return (
    <Section
      id="ringkasan"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-12">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {data.profile.name}
          </Heading>
          <Text type="large" className={`text-lg sm:text-xl font-normal max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {locale === "id-ID"
              ? "Mentransformasikan kompleksitas bisnis menjadi arsitektur sistem digital yang tangguh dan terukur"
              : "Transforming complex business logic into resilient, scalable digital architecture"}
          </Text>
        </VStack>

        {/* 3 Kreativa Impact Cards */}
        <Grid columns={{ minWidth: 280, max: 3, repeat: "fit" }} gap={4} className="w-full">
          {cardsData.map((card) => (
            <Card
              key={card.title}
              padding={6}
              className={`rounded-xl border transition-all duration-300 text-center ${
                isDark
                  ? "border-slate-700 bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-600"
                  : "border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-slate-300"
              }`}
            >
              <VStack gap={2} hAlign="center" className="w-full">
                {card.icon}
                <Heading level={3} className={`text-xl font-semibold mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {card.title}
                </Heading>
                <Text type="body" className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {card.description}
                </Text>
              </VStack>
            </Card>
          ))}
        </Grid>

        {/* Bottom Detailed Quote & Summary */}
        <div className="mt-12 text-center">
          <Text type="body" className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
            {data.profile.summary}
          </Text>
        </div>
      </div>
    </Section>
  );
}
