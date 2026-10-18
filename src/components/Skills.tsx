import { useState } from "react";
import { Section, VStack, HStack, Heading, Text } from "@astryxdesign/core";
import { Server, Database, Brain, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("backend");

  const servicesData = locale === "id-ID" ? {
    backend: {
      id: "backend",
      title: "Backend & Distributed Systems",
      icon: <Server className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Pondasi arsitektur microservices terdistribusi, concurrent request processing, dan perancangan RESTful API berkinerja tinggi sesuai standar korporasi.",
      features: [
        "Go (Golang) Microservices",
        "Ruby on Rails High-Concurrency APIs",
        "Enterprise Authentication & JWT Multi-Tenant",
        "PHP & Laravel Modular Architecture",
        "TypeScript & Node.js Backend Services",
        "Domain-Driven Design (DDD) & Clean Architecture"
      ]
    },
    data: {
      id: "data",
      title: "Data Warehouse & OLAP Pipelines",
      icon: <Database className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Desain skema analitik data warehouse (Star Schema), pipeline ETL data transaksi POS, dan optimasi query multi-dimensi berskala besar.",
      features: [
        "T-SQL OLAP Data Warehouse Architecture",
        "PostgreSQL & MySQL Relational Optimization",
        "Star Schema (Fact & Dimension Tables)",
        "Pipeline Ekstraksi, Transformasi & Load (ETL)",
        "Analisis & Agregasi Data Penjualan Multi-Cabang",
        "Query Tuning & Advanced Indexing Strategies"
      ]
    },
    ai: {
      id: "ai",
      title: "Applied AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Eksperimen model deep learning Convolutional Neural Network (CNN), service REST API prediksi otomatis, dan integrasi conversational assistant cerdas.",
      features: [
        "Deep Learning CNN (Facial Expression Recognition)",
        "TensorFlow & Keras Model Training",
        "Automated Network Issue Classification REST API",
        "Dataset FER2013 Preprocessing & Augmentation",
        "Integrasi IBM Watson Assistant NLP Chatbot",
        "Deploy Model Prediksi berbasis Python Flask"
      ]
    },
    devops: {
      id: "devops",
      title: "DevOps & Engineering Tooling",
      icon: <Cpu className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Automasi alur pengujian berbasis Test-Driven Development (TDD), isolasi dependensi via kontainer Docker, dan standar rekayasa software teruji.",
      features: [
        "Docker Containerization & Multi-Service Setup",
        "Test-Driven Development (TDD) dengan Jest/RSpec",
        "Automasi Lingkungan Pengembangan WSL & Linux",
        "Git Workflow, Code Review & Version Control",
        "Optimasi Keamanan & Hardening API",
        "CI/CD Pipeline & Server Deployment"
      ]
    }
  } : {
    backend: {
      id: "backend",
      title: "Backend & Distributed Systems",
      icon: <Server className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Architecting resilient distributed microservices, concurrent request processing, and high-throughput enterprise RESTful API systems.",
      features: [
        "Go (Golang) Distributed Microservices",
        "Ruby on Rails High-Concurrency APIs",
        "Enterprise Centralized JWT Authentication",
        "PHP & Laravel Modular Architecture",
        "TypeScript & Node.js Backend Services",
        "Domain-Driven Design (DDD) & Clean Architecture"
      ]
    },
    data: {
      id: "data",
      title: "Data Warehouse & OLAP Pipelines",
      icon: <Database className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Architecting analytical star schema data warehouses, ETL transaction pipelines, and high-performance multidimensional query processing.",
      features: [
        "T-SQL OLAP Data Warehouse Architecture",
        "PostgreSQL & MySQL Relational Optimization",
        "Star Schema (Fact & Dimension Tables)",
        "Extract, Transform & Load (ETL) Pipelines",
        "Multi-Branch Transaction Analytical Aggregation",
        "Query Tuning & Advanced Indexing Strategies"
      ]
    },
    ai: {
      id: "ai",
      title: "Applied AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Applied deep learning Convolutional Neural Networks (CNN), automated predictive REST APIs, and conversational AI integrations.",
      features: [
        "Deep Learning CNN (Facial Expression Recognition)",
        "TensorFlow & Keras Model Architectures",
        "Automated Network Issue Classification REST API",
        "FER2013 Dataset Preprocessing & Augmentation",
        "IBM Watson Assistant NLP Conversational Dialogs",
        "Python Flask Model Serving & Inference APIs"
      ]
    },
    devops: {
      id: "devops",
      title: "DevOps & Engineering Tooling",
      icon: <Cpu className="h-6 w-6 text-slate-100 dark:text-slate-900" />,
      description: "Test-Driven Development (TDD) automation, environment containerization with Docker, and rigorous software engineering standards.",
      features: [
        "Docker Containerization & Multi-Service Orchestration",
        "Test-Driven Development (TDD) via Jest & RSpec",
        "Linux & WSL Development Workflow Automation",
        "Git Collaboration, Branching & Code Standards",
        "API Security Hardening & Rate Limiting",
        "CI/CD Pipeline Setup & Cloud Deployment"
      ]
    }
  };

  const activeService = servicesData[activeTab as keyof typeof servicesData] || servicesData.backend;

  return (
    <Section
      id="keahlian"
      paddingBlock={0}
      className="min-h-screen min-h-[100dvh] w-full flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header with Kreativa Signature Accent Bar */}
        <VStack gap={1} hAlign="center" className="text-center w-full">
          <Heading level={2} className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            {t.skills.title}
          </Heading>
          <div className="mt-2 h-1 w-24 bg-slate-900 dark:bg-slate-100 mx-auto rounded-full" />
          <Text type="supporting" className={`mt-4 text-base sm:text-lg leading-8 max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.skills.subtitle}
          </Text>
        </VStack>

        {/* Kreativa Category Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {Object.values(servicesData).map((srv) => (
            <button
              key={srv.id}
              type="button"
              onClick={() => setActiveTab(srv.id)}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 h-9 px-4 py-2 cursor-pointer ${
                activeTab === srv.id
                  ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 shadow"
                  : "border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {srv.title}
            </button>
          ))}
        </div>

        {/* Kreativa Active Detail Card */}
        <div className="mt-10 sm:mt-12">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg p-6 sm:p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:space-x-6">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                  {activeService.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <Heading level={3} className={`text-2xl font-bold mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {activeService.title}
                </Heading>
                <Text type="body" className={`text-base mb-6 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {activeService.description}
                </Text>
                {/* 2-Column Checklist with Kreativa Bullet Dots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {activeService.features.map((feat) => (
                    <HStack key={feat} gap={2} vAlign="center" className="text-sm">
                      <div className="w-2 h-2 bg-slate-900 dark:bg-slate-100 rounded-full shrink-0" />
                      <span className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                        {feat}
                      </span>
                    </HStack>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
