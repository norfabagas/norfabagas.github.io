import { Section, VStack, HStack, Grid, Card, Heading, Text } from "@astryxdesign/core";
import { Server, Database, Brain, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { locale, t } = useLanguage();

  const skillDomains = locale === "id-ID" ? [
    {
      title: "Backend & Layanan Terdistribusi",
      icon: <Server className="h-5 w-5" />,
      description: "Arsitektur REST API modular, orkestrasi microservices, autentikasi berbasis JWT, serta penanganan request konkuren tinggi dengan Go dan Ruby on Rails.",
      skills: ["Go (Golang)", "Ruby on Rails", "PHP & Laravel", "TypeScript / Node.js", "RESTful API", "Domain-Driven Design (DDD)", "Microservices Architecture", "JWT & Auth Security"]
    },
    {
      title: "Data Warehouse & Pipeline OLAP",
      icon: <Database className="h-5 w-5" />,
      description: "Pemodelan data warehouse skema bintang (fact & dimension tables), pipeline ekstraksi dan pembersihan ETL, serta penulisan query agregasi analitik pada SQL Server dan PostgreSQL.",
      skills: ["T-SQL OLAP DWH", "Star Schema (Fact & Dim)", "Pipeline ETL", "PostgreSQL", "MySQL", "Indexing & Query Tuning", "Data Aggregation", "Relational Modeling"]
    },
    {
      title: "Machine Learning Terapan",
      icon: <Brain className="h-5 w-5" />,
      description: "Pelatihan model arsitektur CNN pada dataset citra (FER2013), pembuatan backend REST API Flask untuk inferensi klasifikasi tiket gangguan, dan perancangan dialog NLP IBM Watson.",
      skills: ["Deep Learning CNN", "TensorFlow & Keras", "Python & Flask API", "FER2013 Dataset", "IBM Watson Assistant", "Natural Language Processing (NLP)", "Computer Vision", "Model Deployment"]
    },
    {
      title: "DevOps & Infrastruktur",
      icon: <Cpu className="h-5 w-5" />,
      description: "Kontainerisasi layanan multi-service dengan Docker, otomatisasi pengujian unit dan integrasi (TDD), konfigurasi server Linux VPS, dan implementasi CI/CD workflow.",
      skills: ["Docker & Containers", "Linux / Bash Scripting", "Test-Driven Development (TDD)", "Git & Version Control", "DigitalOcean / VPS", "API Hardening", "CI/CD Workflows", "Tailwind CSS"]
    }
  ] : [
    {
      title: "Backend & Distributed Services",
      icon: <Server className="h-5 w-5" />,
      description: "Modular REST APIs, microservice orchestration, JWT token authentication, and concurrent request handling built with Go and Ruby on Rails.",
      skills: ["Go (Golang)", "Ruby on Rails", "PHP & Laravel", "TypeScript / Node.js", "RESTful API", "Domain-Driven Design (DDD)", "Microservices Architecture", "JWT & Auth Security"]
    },
    {
      title: "Data Warehouse & OLAP Pipelines",
      icon: <Database className="h-5 w-5" />,
      description: "Star-schema dimensional modeling (facts and dimensions), scheduled ETL pipelines, and analytical aggregation query tuning on Microsoft SQL Server and PostgreSQL.",
      skills: ["T-SQL OLAP DWH", "Star Schema (Fact & Dim)", "ETL Pipelines", "PostgreSQL", "MySQL", "Indexing & Query Tuning", "Data Aggregation", "Relational Modeling"]
    },
    {
      title: "Applied Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "CNN computer vision training on image datasets (FER2013), Flask REST inference API deployment for issue classification, and IBM Watson conversational NLP dialogs.",
      skills: ["Deep Learning CNN", "TensorFlow & Keras", "Python & Flask API", "FER2013 Dataset", "IBM Watson Assistant", "Natural Language Processing (NLP)", "Computer Vision", "Model Deployment"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Cpu className="h-5 w-5" />,
      description: "Multi-container Docker setups, automated unit and integration test suites (TDD), Linux VPS administration, and CI/CD workflow pipelines.",
      skills: ["Docker & Containers", "Linux / Bash Scripting", "Test-Driven Development (TDD)", "Git & Version Control", "DigitalOcean / VPS", "API Hardening", "CI/CD Workflows", "Tailwind CSS"]
    }
  ];

  return (
    <Section
      id="keahlian"
      variant="transparent"
      paddingBlock={0}
      className="w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-transparent transition-colors duration-300 border-b border-white/40 dark:border-white/10"
    >
      <VStack gap={0} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <VStack gap={2} hAlign="center" className="text-center mb-8 w-full">
          <Heading
            level={2}
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {t.skills.title}
          </Heading>
          <Text
            type="supporting"
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.skills.subtitle}
          </Text>
        </VStack>

        {/* 2x2 Clean Technical Domains Grid */}
        <Grid columns={{ minWidth: 280, max: 2, repeat: "fit" }} gap={4} className="w-full">
          {skillDomains.map((domain) => (
            <Card
              key={domain.title}
              padding={5}
              className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between aero-glass-card ${
                isDark ? "aero-glass-card-dark" : "aero-glass-card-light"
              }`}
            >
              <VStack gap={3} className="w-full text-left">
                <HStack gap={3} vAlign="center" className="w-full">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark ? "aero-icon-dark" : "aero-icon-light"
                    }`}
                  >
                    {domain.icon}
                  </span>
                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {domain.title}
                  </Heading>
                </HStack>

                <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                  {domain.description}
                </Text>

                {/* Skill Chips */}
                <HStack gap={1.5} vAlign="center" className="flex-wrap pt-3 border-t border-white/30 dark:border-white/10">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                        isDark ? "aero-glass-badge-dark" : "aero-glass-badge-light"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </HStack>
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
