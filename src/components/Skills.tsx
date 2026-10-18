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
      title: "Backend & Sistem Terdistribusi",
      icon: <Server className="h-5 w-5" />,
      description: "Pondasi arsitektur microservices terdistribusi, concurrent request processing, dan perancangan RESTful API berkinerja tinggi sesuai standar industri.",
      skills: ["Go (Golang)", "Ruby on Rails", "PHP & Laravel", "TypeScript / Node.js", "RESTful API", "Domain-Driven Design (DDD)", "Microservices Architecture", "JWT & Auth Security"]
    },
    {
      title: "Data Warehouse & Pipeline OLAP",
      icon: <Database className="h-5 w-5" />,
      description: "Desain skema analitik data warehouse (Star Schema), pipeline ETL transaksi, serta optimasi query relasional multi-dimensi berskala besar.",
      skills: ["T-SQL OLAP DWH", "Star Schema (Fact & Dim)", "Pipeline ETL", "PostgreSQL", "MySQL", "Indexing & Query Tuning", "Data Aggregation", "Relational Modeling"]
    },
    {
      title: "Applied AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "Eksperimen model deep learning Convolutional Neural Network (CNN), integrasi service API prediksi, dan implementasi conversational AI.",
      skills: ["Deep Learning CNN", "TensorFlow & Keras", "Python & Flask API", "FER2013 Dataset", "IBM Watson Assistant", "Natural Language Processing (NLP)", "Computer Vision", "Model Deployment"]
    },
    {
      title: "Infrastruktur, DevOps & Tooling",
      icon: <Cpu className="h-5 w-5" />,
      description: "Automasi alur pengujian berbasis Test-Driven Development (TDD), isolasi kontainer Docker, serta deployment server Linux yang andal.",
      skills: ["Docker & Containers", "Linux / Bash Scripting", "Test-Driven Development (TDD)", "Git & Version Control", "DigitalOcean / VPS", "API Hardening", "CI/CD Workflows", "Tailwind CSS"]
    }
  ] : [
    {
      title: "Backend & Distributed Systems",
      icon: <Server className="h-5 w-5" />,
      description: "Architecting resilient distributed microservices, concurrent request processing, and high-throughput enterprise RESTful API systems.",
      skills: ["Go (Golang)", "Ruby on Rails", "PHP & Laravel", "TypeScript / Node.js", "RESTful API", "Domain-Driven Design (DDD)", "Microservices Architecture", "JWT & Auth Security"]
    },
    {
      title: "Data Warehouse & OLAP Pipelines",
      icon: <Database className="h-5 w-5" />,
      description: "Architecting analytical star schema data warehouses, ETL transaction pipelines, and high-performance multidimensional query processing.",
      skills: ["T-SQL OLAP DWH", "Star Schema (Fact & Dim)", "ETL Pipelines", "PostgreSQL", "MySQL", "Indexing & Query Tuning", "Data Aggregation", "Relational Modeling"]
    },
    {
      title: "Applied AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "Applied deep learning experiments using Convolutional Neural Networks (CNN), automated prediction REST APIs, and conversational AI.",
      skills: ["Deep Learning CNN", "TensorFlow & Keras", "Python & Flask API", "FER2013 Dataset", "IBM Watson Assistant", "Natural Language Processing (NLP)", "Computer Vision", "Model Deployment"]
    },
    {
      title: "Infrastructure, DevOps & Tooling",
      icon: <Cpu className="h-5 w-5" />,
      description: "Automated test suites with Test-Driven Development (TDD), Docker containerized services, and dependable Linux server environments.",
      skills: ["Docker & Containers", "Linux / Bash Scripting", "Test-Driven Development (TDD)", "Git & Version Control", "DigitalOcean / VPS", "API Hardening", "CI/CD Workflows", "Tailwind CSS"]
    }
  ];

  return (
    <Section
      id="keahlian"
      paddingBlock={0}
      className="w-full flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80"
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
              isDark ? "text-slate-300" : "text-slate-600"
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
              className={`rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isDark
                  ? "border-slate-800 bg-slate-950/80 shadow-sm"
                  : "border-slate-200 bg-slate-50/80 shadow-sm"
              }`}
            >
              <VStack gap={3} className="w-full text-left">
                <HStack gap={3} vAlign="center" className="w-full">
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-slate-100"
                        : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}
                  >
                    {domain.icon}
                  </span>
                  <Heading level={3} className={`text-base font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {domain.title}
                  </Heading>
                </HStack>

                <Text type="body" className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {domain.description}
                </Text>

                {/* Skill Chips */}
                <HStack gap={1.5} vAlign="center" className="flex-wrap pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-md border font-mono font-medium ${
                        isDark
                          ? "bg-slate-900 border-slate-800 text-slate-300"
                          : "bg-white border-slate-200 text-slate-700 shadow-sm"
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
