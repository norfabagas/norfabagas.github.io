import { Section, VStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Lightbulb, Rocket, Users, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ValuesProps {
  isDark: boolean;
}

export function Values({ isDark }: ValuesProps) {
  const { locale } = useLanguage();

  const valuesData = locale === "id-ID" ? [
    {
      icon: <Lightbulb className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Inovasi & Riset",
      description: "Terus mengeksplorasi arsitektur mutakhir, riset applied machine learning, dan automasi cerdas untuk memecahkan tantangan rekayasa software.",
      bgColor: "bg-slate-50/60 dark:bg-slate-900/60",
      hoverColor: "hover:bg-slate-100 dark:hover:bg-slate-800"
    },
    {
      icon: <Rocket className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Performa & Efisiensi",
      description: "Fokus pada latensi rendah, throughput konkurensi tinggi, serta optimasi query T-SQL dan PostgreSQL untuk performa sistem maksimal.",
      bgColor: "bg-slate-100/60 dark:bg-slate-800/60",
      hoverColor: "hover:bg-slate-200 dark:hover:bg-slate-700"
    },
    {
      icon: <Users className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Kolaborasi & Mentoring",
      description: "Membangun budaya engineering yang solid melalui code review mendalam, mentoring teknis, dan komunikasi transparan lintas tim.",
      bgColor: "bg-slate-50/60 dark:bg-slate-900/60",
      hoverColor: "hover:bg-slate-100 dark:hover:bg-slate-800"
    },
    {
      icon: <Shield className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Keandalan & Integritas",
      description: "Keamanan institusional dan keandalan data adalah prioritas utama. Mengadopsi prinsip TDD dan audit trail di setiap implementasi.",
      bgColor: "bg-slate-100/60 dark:bg-slate-800/60",
      hoverColor: "hover:bg-slate-200 dark:hover:bg-slate-700"
    }
  ] : [
    {
      icon: <Lightbulb className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Innovation",
      description: "Constantly pushing technical boundaries to deliver resilient architectures and applied AI models that solve complex engineering problems.",
      bgColor: "bg-slate-50/60 dark:bg-slate-900/60",
      hoverColor: "hover:bg-slate-100 dark:hover:bg-slate-800"
    },
    {
      icon: <Rocket className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Performance",
      description: "Obsessed with low latency, concurrent throughput, and relentless database query tuning for mission-critical operations.",
      bgColor: "bg-slate-100/60 dark:bg-slate-800/60",
      hoverColor: "hover:bg-slate-200 dark:hover:bg-slate-700"
    },
    {
      icon: <Users className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Collaboration",
      description: "Fostering strong cross-functional partnerships, structured peer reviews, and technical mentorship across development teams.",
      bgColor: "bg-slate-50/60 dark:bg-slate-900/60",
      hoverColor: "hover:bg-slate-100 dark:hover:bg-slate-800"
    },
    {
      icon: <Shield className="h-8 w-8 text-slate-700 dark:text-slate-300 mb-4" />,
      title: "Reliability",
      description: "Enterprise security and bulletproof data integrity. Practicing automated TDD and audit mechanisms in every deliverable.",
      bgColor: "bg-slate-100/60 dark:bg-slate-800/60",
      hoverColor: "hover:bg-slate-200 dark:hover:bg-slate-700"
    }
  ];

  return (
    <Section
      id="nilai"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header with Kreativa Signature Accent Bar */}
        <VStack gap={1} hAlign="center" className="text-center mb-12 w-full">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {locale === "id-ID" ? "Prinsip & Nilai Kerja" : "Our Values"}
          </Heading>
          <div className="mt-2 h-1 w-24 bg-slate-900 dark:bg-slate-100 mx-auto rounded-full" />
          <Text type="supporting" className={`mt-4 text-base sm:text-lg leading-8 max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {locale === "id-ID"
              ? "Prinsip-prinsip utama yang memandu setiap baris kode, arsitektur sistem, dan komitmen profesional saya"
              : "The engineering principles that guide my work and define an unwavering commitment to excellence"}
          </Text>
        </VStack>

        {/* 4 Cards Grid mirroring Kreativa Section 4 */}
        <Grid columns={{ minWidth: 240, max: 4, repeat: "fit" }} gap={4} className="w-full">
          {valuesData.map((val) => (
            <Card
              key={val.title}
              padding={6}
              className={`rounded-xl border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 ${val.bgColor} ${val.hoverColor} hover:shadow-lg dark:hover:shadow-slate-700/50 cursor-pointer`}
            >
              <VStack gap={2} className="text-left w-full">
                {val.icon}
                <Heading level={3} className={`text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {val.title}
                </Heading>
                <Text type="supporting" className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {val.description}
                </Text>
              </VStack>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
