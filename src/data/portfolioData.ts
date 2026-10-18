export type Locale = "id-ID" | "en-US";

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  topics: string[];
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface ProjectScope {
  title: string;
  area: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export interface Article {
  title: string;
  url: string;
  category: string;
  readTime: string;
  snippet: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  avatar: string;
  githubUsername: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  medium: string;
  buymeacoffee: string;
  stackoverflow: string;
}

export interface TechToolGroup {
  category: string;
  items: string[];
}

export interface LocalizedPortfolioData {
  profile: Profile;
  socials: Socials;
  projectScopes: ProjectScope[];
  skills: SkillCategory[];
  repositories: Repository[];
  experience: Experience[];
  articles: Article[];
  projectResearchSummary: string;
  techTools: TechToolGroup[];
}

const COMMON_SOCIALS: Socials = {
  github: "https://github.com/norfabagas",
  linkedin: "https://www.linkedin.com/in/norfabagas",
  medium: "https://medium.com/@bgsnorfa",
  buymeacoffee: "https://buymeacoffee.com/bgsnorfa",
  stackoverflow: "https://stackoverflow.com/users/17166221/norfa-bagas"
};

export const PORTFOLIO_DATA: Record<Locale, LocalizedPortfolioData> = {
  "id-ID": {
    profile: {
      name: "Norfa Bagas",
      title: "Software Engineer & IT Specialist",
      tagline: "All of my experiments",
      summary:
        "Software engineer yang berfokus pada arsitektur backend, data warehouse OLAP, dan pipeline data. Pernah mengerjakan sistem transaksi perbankan, modul SIMRS rumah sakit, dan layanan API produksi.",
      location: "Indonesia",
      avatar: "https://avatars.githubusercontent.com/u/22408586?v=4",
      githubUsername: "norfabagas"
    },
    socials: COMMON_SOCIALS,
    projectScopes: [
      {
        title: "Enterprise Core & Financial Systems",
        area: "Core Services",
        description:
          "Modul transaksi perbankan dan penjaminan simpanan, dengan fokus pada keamanan bertingkat, pencatatan audit trail, dan keabsahan data transaksi.",
        technologies: ["Go", "T-SQL", "Enterprise Security", "Microservices", "REST API"],
        deliverables: [
          "Modul pemrosesan transaksi perbankan",
          "Pencatatan audit trail dan verifikasi integritas data",
          "Otentikasi terpusat dan otorisasi bertingkat"
        ]
      },
      {
        title: "Healthcare Systems & SIMRS",
        area: "Healthcare Information",
        description:
          "Modul SIMRS untuk operasional rumah sakit, mencakup alur rekam medis elektronik dan pertukaran data antar-instalasi medis.",
        technologies: ["PostgreSQL", "PHP", "Database Optimization", "System Integration"],
        deliverables: [
          "Integrasi alur kerja antar-departemen rumah sakit",
          "Sinkronisasi data rekam medis elektronik",
          "Optimasi query database transaksional"
        ]
      },
      {
        title: "Data Warehouse & OLAP Pipelines",
        area: "Data Engineering",
        description:
          "Perancangan data warehouse skema bintang (star schema) dan pipeline ETL untuk agregasi analitik transaksi multi-cabang.",
        technologies: ["T-SQL", "OLAP Data Warehouse", "ETL Pipelines", "PostgreSQL"],
        deliverables: [
          "Skema bintang (fact table dan dimension tables)",
          "Pipeline ETL untuk pembersihan dan pemuatan data transaksi",
          "Query agregasi analitik performa penjualan"
        ]
      },
      {
        title: "Microservices & Distributed APIs",
        area: "Backend Architecture",
        description:
          "Layanan backend terpisah dan API modular dengan Go dan Ruby on Rails, dilengkapi pengujian otomatis.",
        technologies: ["Go", "Ruby on Rails", "TypeScript", "Node.js", "Docker", "TDD"],
        deliverables: [
          "Service otentikasi JWT terpusat",
          "Arsitektur API modular berbasis domain",
          "Rangkaian pengujian otomatis (TDD)"
        ]
      },
      {
        title: "Applied Machine Learning & AI Integration",
        area: "Applied AI",
        description:
          "Eksperimen model deep learning CNN untuk pengenalan ekspresi wajah, API klasifikasi gangguan jaringan, dan chatbot NLP.",
        technologies: ["Python", "TensorFlow", "Keras", "Flask", "IBM Watson"],
        deliverables: [
          "Model CNN deteksi ekspresi wajah pada dataset FER2013",
          "REST API Flask untuk klasifikasi otomatis gangguan jaringan",
          "Integrasi percakapan chatbot dengan IBM Watson Assistant"
        ]
      }
    ],
    skills: [
      {
        category: "Backend & Systems",
        description: "Pengembangan API, microservices, dan sistem berbasis konkurensi",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Desain skema bintang data warehouse, pipeline ETL, dan penulisan query analitik",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "Pelatihan model CNN pengenal citra dan pembuatan API inferensi",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Kontainerisasi Docker, automasi testing TDD, dan manajemen server Linux",
        items: ["Docker", "Linux / Bash", "DigitalOcean", "Git", "TDD & Jest", "Tailwind CSS"]
      }
    ],
    repositories: [
      {
        name: "learn-olap-dwh",
        description: "Implementasi sistem OLAP Data Warehouse untuk transaksi Point of Sale (POS) dengan skema bintang dan analitik dimensi data.",
        language: "TSQL",
        stars: 1,
        url: "https://github.com/norfabagas/learn-olap-dwh",
        topics: ["data-warehouse", "olap", "sql-server", "analytics"],
        featured: true
      },
      {
        name: "cnn-fer-architecture",
        description: "Eksperimen arsitektur Convolutional Neural Network (CNN) untuk Facial Expression Recognition menggunakan dataset FER2013.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/cnn-fer-architecture",
        topics: ["deep-learning", "computer-vision", "cnn", "fer2013"],
        featured: true
      },
      {
        name: "inet-trouble-ml-api",
        description: "Service API klasifikasi otomatis keluhan gangguan jaringan internet berbasis framework Flask dan model deep learning Keras.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/inet-trouble-ml-api",
        topics: ["flask", "keras", "machine-learning", "api"],
        featured: true
      },
      {
        name: "rock-paper-scissors-watson-assistant",
        description: "Integrasi sistem chatbot cerdas untuk permainan interaktif batu-gunting-kertas memanfaatkan layanan IBM Watson Assistant.",
        language: "AI / Cloud",
        stars: 1,
        url: "https://github.com/norfabagas/rock-paper-scissors-watson-assistant",
        topics: ["watson-assistant", "chatbot", "nlp", "ibm-cloud"],
        featured: true
      },
      {
        name: "url-shortener-api",
        description: "API pemendek URL berkecepatan tinggi yang dibangun menggunakan Ruby on Rails dengan pencatatan metrik pengalihan.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/url-shortener-api",
        topics: ["ruby-on-rails", "rest-api", "backend", "url-shortener"],
        featured: true
      },
      {
        name: "auth-global",
        description: "Layanan otentikasi terpusat berbasis Golang yang dirancang untuk mendukung ekosistem aplikasi multitenant.",
        language: "Go",
        stars: 1,
        url: "https://github.com/norfabagas/auth-global",
        topics: ["golang", "jwt", "authentication", "microservices"],
        featured: true
      },
      {
        name: "watson-coffee-api",
        description: "Backend service pemesanan kopi otomatis yang terhubung dengan dialog interaktif IBM Watson Assistant.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/watson-coffee-api",
        topics: ["ruby-on-rails", "watson-assistant", "api-integration"],
        featured: false
      },
      {
        name: "inventory-management",
        description: "Sistem inventaris terstruktur untuk monitoring stok, pergudangan, dan alur pergerakan logistik barang.",
        language: "PHP",
        stars: 1,
        url: "https://github.com/norfabagas/inventory-management",
        topics: ["laravel", "inventory-system", "mysql", "warehouse"],
        featured: false
      },
      {
        name: "learn-datawarehouse",
        description: "Kumpulan kode eksplorasi konsep arsitektur dan ekstraksi data untuk implementasi data warehouse modern.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/learn-datawarehouse",
        topics: ["data-warehouse", "etl", "ruby", "data-engineering"],
        featured: false
      },
      {
        name: "benchmark-oop-fp-node",
        description: "Eksperimen komparasi pemakaian memori dan alokasi resource CPU antara paradigma Object-Oriented (OOP) dan Functional (FP) pada Node.js.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/norfabagas/benchmark-oop-fp-node",
        topics: ["nodejs", "benchmark", "oop", "functional-programming"],
        featured: false
      },
      {
        name: "go-drone-cli",
        description: "Aplikasi simulasi navigasi pergerakan drone berbasis antarmuka baris perintah (CLI) yang ditulis dalam bahasa pemrograman Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/go-drone-cli",
        topics: ["golang", "cli-app", "navigation", "simulation"],
        featured: false
      },
      {
        name: "norfabagas-betest",
        description: "Implementasi backend microservice untuk user authentication dengan standar arsitektur RESTful API yang bersih.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/norfabagas-betest",
        topics: ["typescript", "microservices", "authentication", "clean-architecture"],
        featured: false
      },
      {
        name: "learn-express-tdd",
        description: "Praktek penerapan Test-Driven Development (TDD) pada pembangunan REST API dengan framework Express dan TypeScript.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/learn-express-tdd",
        topics: ["expressjs", "tdd", "testing", "typescript"],
        featured: false
      },
      {
        name: "learn-go-design-patterns",
        description: "Studi komprehensif implementasi pola desain perangkat lunak (GoF Design Patterns) menggunakan bahasa Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/learn-go-design-patterns",
        topics: ["golang", "design-patterns", "software-architecture"],
        featured: false
      },
      {
        name: "naive-bayes-ranking",
        description: "Penerapan algoritma klasifikasi probabilistik Naive Bayes untuk penentuan peringkat otomatis pada hasil evaluasi data.",
        language: "PHP",
        stars: 0,
        url: "https://github.com/norfabagas/naive-bayes-ranking",
        topics: ["machine-learning", "naive-bayes", "ranking-system", "php"],
        featured: false
      },
      {
        name: "netracer-app",
        description: "Aplikasi Android native menggunakan Kotlin untuk melakukan pelacakan rute koneksi dan diagnostik kestabilan jaringan.",
        language: "Kotlin",
        stars: 0,
        url: "https://github.com/norfabagas/netracer-app",
        topics: ["kotlin", "android", "networking", "traceroute"],
        featured: false
      }
    ],
    experience: [
      {
        role: "Software Engineer",
        company: "Lembaga Penjamin Simpanan (LPS)",
        period: "Pengalaman Profesional",
        description:
          "Mengembangkan modul backend untuk sistem transaksi perbankan dan pencatatan audit data penjaminan simpanan, dengan fokus pada integritas data dan keamanan akses.",
        skills: ["Go", "T-SQL", "Sistem Perbankan", "Audit Trail", "REST API"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Pengalaman Profesional",
        description:
          "Mengembangkan modul SIMRS (Sistem Informasi Manajemen Rumah Sakit) untuk operasional rekam medis elektronik dan pertukaran data antar-instalasi kesehatan.",
        skills: ["PHP", "PostgreSQL", "SIMRS", "Integrasi Sistem", "Database Tuning"]
      },
      {
        role: "Software Engineer",
        company: "Stealth Startup",
        period: "Pengalaman Profesional",
        description:
          "Membangun API modular dan layanan backend menggunakan Ruby on Rails dan TypeScript, serta mengoptimalkan respons endpoint untuk aplikasi web.",
        skills: ["Ruby on Rails", "TypeScript", "REST API", "Docker", "TDD"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Pengalaman Profesional",
        description:
          "Memberikan konsultasi arsitektur software, evaluasi infrastruktur server, dan pendampingan teknis bagi tim pengembang.",
        skills: ["Konsultasi IT", "Arsitektur Software", "Evaluasi Infrastruktur", "Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min baca",
        snippet: "Panduan praktis mengisolasi dependensi aplikasi dan menyusun konfigurasi Docker compose untuk lingkungan development."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min baca",
        snippet: "Langkah mengatur environment development Ruby on Rails di Windows melalui WSL secara cepat dan stabil."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min baca",
        snippet: "Perbandingan performa berbagai algoritma sorting beserta efisiensi waktu dan memorinya pada data nyata."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min baca",
        snippet: "Cara merancang dialog interaktif dengan mendefinisikan intent, entity, dan dialog tree di IBM Watson."
      }
    ],
    projectResearchSummary:
      "Sebagai software engineer, saya fokus membangun sistem backend dan arsitektur data. Di sektor perbankan dan kesehatan, saya mengembangkan modul transaksi perbankan serta mengintegrasikan SIMRS rumah sakit dengan API BPJS dan SATUSEHAT. Di sisi data, saya merancang data warehouse OLAP berskema bintang untuk analitik transaksi penjualan. Saya juga melakukan riset machine learning terapan, seperti melatih model CNN untuk pengenalan ekspresi wajah pada dataset FER2013, membuat API klasifikasi gangguan jaringan dengan Flask dan Keras, serta mengintegrasikan chatbot IBM Watson.",
    techTools: [
      {
        category: "Bahasa Pemrograman",
        items: ["Go (Golang)", "Ruby", "Python", "TypeScript", "PHP", "T-SQL / SQL", "Bash"]
      },
      {
        category: "Framework & Library",
        items: ["Ruby on Rails", "Flask", "Laravel", "Express.js / Node.js", "TensorFlow & Keras", "React"]
      },
      {
        category: "Database & Data Warehouse",
        items: ["Microsoft SQL Server (OLAP)", "PostgreSQL", "MySQL", "Redis", "Star Schema (Fact & Dim)"]
      },
      {
        category: "Tools, DevOps & Infrastruktur",
        items: ["Docker", "Linux (Ubuntu / Debian)", "Git & GitHub", "Postman", "Jest & RSpec", "DigitalOcean / VPS", "CI/CD Actions"]
      }
    ]
  },
  "en-US": {
    profile: {
      name: "Norfa Bagas",
      title: "Software Engineer & IT Specialist",
      tagline: "All of my experiments",
      summary:
        "Software engineer working on backend systems, OLAP data warehouses, and data pipelines. Experienced with core banking services, hospital clinical systems, and production APIs.",
      location: "Indonesia",
      avatar: "https://avatars.githubusercontent.com/u/22408586?v=4",
      githubUsername: "norfabagas"
    },
    socials: COMMON_SOCIALS,
    projectScopes: [
      {
        title: "Enterprise Core & Financial Systems",
        area: "Core Services",
        description:
          "Core banking and deposit insurance transaction modules, focusing on multi-tier security, audit trail logging, and transaction integrity.",
        technologies: ["Go", "T-SQL", "Enterprise Security", "Microservices", "REST API"],
        deliverables: [
          "Banking transaction processing module",
          "Audit trail logging and data integrity verification",
          "Centralized authentication and tiered authorization"
        ]
      },
      {
        title: "Healthcare Systems & SIMRS",
        area: "Healthcare Information",
        description:
          "Hospital information system (SIMRS) modules for clinical workflows, electronic medical records, and data exchange between healthcare units.",
        technologies: ["PostgreSQL", "PHP", "Database Optimization", "System Integration"],
        deliverables: [
          "Workflow integration across hospital departments",
          "Electronic medical record synchronization",
          "Transactional database query optimization"
        ]
      },
      {
        title: "Data Warehouse & OLAP Pipelines",
        area: "Data Engineering",
        description:
          "Star schema data warehouse design and ETL pipelines for multi-branch retail transaction analytics.",
        technologies: ["T-SQL", "OLAP Data Warehouse", "ETL Pipelines", "PostgreSQL"],
        deliverables: [
          "Star schema design (fact and dimension tables)",
          "ETL pipeline for cleaning and loading transaction data",
          "Analytical aggregation queries for sales metrics"
        ]
      },
      {
        title: "Microservices & Distributed APIs",
        area: "Backend Architecture",
        description:
          "Modular backend services and APIs using Go and Ruby on Rails, supported by automated testing suites.",
        technologies: ["Go", "Ruby on Rails", "TypeScript", "Node.js", "Docker", "TDD"],
        deliverables: [
          "Centralized JWT authentication service",
          "Domain-driven modular API architecture",
          "Automated test suites (TDD)"
        ]
      },
      {
        title: "Applied Machine Learning & AI Integration",
        area: "Applied AI",
        description:
          "Applied deep learning CNN experiments for facial expression detection, network trouble classification API, and conversational chatbot NLP.",
        technologies: ["Python", "TensorFlow", "Keras", "Flask", "IBM Watson"],
        deliverables: [
          "CNN model for facial expression detection on FER2013",
          "Flask REST API for automated network trouble classification",
          "Chatbot conversation integration with IBM Watson Assistant"
        ]
      }
    ],
    skills: [
      {
        category: "Backend & Systems",
        description: "API design, microservices, and concurrent backend services",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Star schema data warehouses, ETL pipelines, and analytical queries",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "CNN image classification training and inference API endpoints",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Docker containerization, automated TDD test suites, and Linux servers",
        items: ["Docker", "Linux / Bash", "DigitalOcean", "Git", "TDD & Jest", "Tailwind CSS"]
      }
    ],
    repositories: [
      {
        name: "learn-olap-dwh",
        description: "OLAP Data Warehouse implementation for Point of Sale (POS) transactions with star schema and dimensional data analytics.",
        language: "TSQL",
        stars: 1,
        url: "https://github.com/norfabagas/learn-olap-dwh",
        topics: ["data-warehouse", "olap", "sql-server", "analytics"],
        featured: true
      },
      {
        name: "cnn-fer-architecture",
        description: "Convolutional Neural Network (CNN) architecture experiment for Facial Expression Recognition using the FER2013 dataset.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/cnn-fer-architecture",
        topics: ["deep-learning", "computer-vision", "cnn", "fer2013"],
        featured: true
      },
      {
        name: "inet-trouble-ml-api",
        description: "Automated network issue classification REST API powered by Flask and Keras deep learning models.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/inet-trouble-ml-api",
        topics: ["flask", "keras", "machine-learning", "api"],
        featured: true
      },
      {
        name: "rock-paper-scissors-watson-assistant",
        description: "Interactive rock-paper-scissors game integrated with IBM Watson Assistant conversational dialogs.",
        language: "AI / Cloud",
        stars: 1,
        url: "https://github.com/norfabagas/rock-paper-scissors-watson-assistant",
        topics: ["watson-assistant", "chatbot", "nlp", "ibm-cloud"],
        featured: true
      },
      {
        name: "url-shortener-api",
        description: "High-performance URL shortener REST API built with Ruby on Rails including redirect metric tracking.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/url-shortener-api",
        topics: ["ruby-on-rails", "rest-api", "backend", "url-shortener"],
        featured: true
      },
      {
        name: "auth-global",
        description: "Centralized Golang authentication service designed to support multitenant application ecosystems.",
        language: "Go",
        stars: 1,
        url: "https://github.com/norfabagas/auth-global",
        topics: ["golang", "jwt", "authentication", "microservices"],
        featured: true
      },
      {
        name: "watson-coffee-api",
        description: "Automated coffee ordering backend service connected to IBM Watson Assistant dialog flows.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/watson-coffee-api",
        topics: ["ruby-on-rails", "watson-assistant", "api-integration"],
        featured: false
      },
      {
        name: "inventory-management",
        description: "Structured inventory system for stock tracking, warehouse management, and logistics flows.",
        language: "PHP",
        stars: 1,
        url: "https://github.com/norfabagas/inventory-management",
        topics: ["laravel", "inventory-system", "mysql", "warehouse"],
        featured: false
      },
      {
        name: "learn-datawarehouse",
        description: "Architectural exploration and data extraction patterns for modern data warehouse implementations.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/learn-datawarehouse",
        topics: ["data-warehouse", "etl", "ruby", "data-engineering"],
        featured: false
      },
      {
        name: "benchmark-oop-fp-node",
        description: "Memory and CPU benchmark comparing Object-Oriented (OOP) and Functional Programming (FP) paradigms in Node.js.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/norfabagas/benchmark-oop-fp-node",
        topics: ["nodejs", "benchmark", "oop", "functional-programming"],
        featured: false
      },
      {
        name: "go-drone-cli",
        description: "Command-line interface (CLI) drone navigation simulation written in Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/go-drone-cli",
        topics: ["golang", "cli-app", "navigation", "simulation"],
        featured: false
      },
      {
        name: "norfabagas-betest",
        description: "Backend microservice for user authentication built with clean RESTful architectural standards.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/norfabagas-betest",
        topics: ["typescript", "microservices", "authentication", "clean-architecture"],
        featured: false
      },
      {
        name: "learn-express-tdd",
        description: "Test-Driven Development (TDD) implementation for REST APIs using Express and TypeScript.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/learn-express-tdd",
        topics: ["expressjs", "tdd", "testing", "typescript"],
        featured: false
      },
      {
        name: "learn-go-design-patterns",
        description: "Comprehensive implementation of Gang of Four (GoF) design patterns in Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/learn-go-design-patterns",
        topics: ["golang", "design-patterns", "software-architecture"],
        featured: false
      },
      {
        name: "naive-bayes-ranking",
        description: "Naive Bayes probabilistic classification algorithm applied to automated ranking systems.",
        language: "PHP",
        stars: 0,
        url: "https://github.com/norfabagas/naive-bayes-ranking",
        topics: ["machine-learning", "naive-bayes", "ranking-system", "php"],
        featured: false
      },
      {
        name: "netracer-app",
        description: "Native Android application built with Kotlin for network route tracing and latency diagnostics.",
        language: "Kotlin",
        stars: 0,
        url: "https://github.com/norfabagas/netracer-app",
        topics: ["kotlin", "android", "networking", "traceroute"],
        featured: false
      }
    ],
    experience: [
      {
        role: "Software Engineer",
        company: "Lembaga Penjamin Simpanan (LPS)",
        period: "Professional Experience",
        description:
          "I built banking transaction modules and internal APIs for deposit insurance operations, focusing on secure data exchange and transaction integrity.",
        skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Professional Experience",
        description:
          "I developed SIMRS modules for outpatient, inpatient, and pharmacy workflows, connecting medical data exchange between hospital units.",
        skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
      },
      {
        role: "Fullstack / Backend Developer",
        company: "Stealth Startup",
        period: "Professional Experience",
        description:
          "I worked with an international engineering team to build Ruby on Rails backend services, optimize database queries, and deliver React interfaces.",
        skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Professional Experience",
        description:
          "I advised on backend architecture, reviewed system infrastructure, and ran technical workshops for development teams.",
        skills: ["IT Consulting", "System Architecture", "Software Strategy", "Technical Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min read",
        snippet: "How to package application dependencies with Docker and run multi-container setups for consistent local environments."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min read",
        snippet: "Step-by-step setup for running Ruby on Rails on Windows using WSL without native dependency friction."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min read",
        snippet: "Comparing time and space complexity across sorting algorithms and what each means for data processing performance."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        snippet: "Setting up intents, entities, and dialog trees for chatbot workflows in IBM Watson Assistant."
      }
    ],
    projectResearchSummary:
      "Most of my work centers on backend engineering, data systems, and applied machine learning. In banking and healthcare, I built transaction modules at LPS and hospital management (SIMRS) modules at Eka Hospital, integrating national BPJS and SATUSEHAT services. For analytical data, I designed an OLAP data warehouse using a star schema to aggregate multi-branch retail transactions. On the research side, I trained CNN models for facial expression recognition (FER2013), integrated conversational NLP with IBM Watson Assistant, and built network incident classification APIs.",
    techTools: [
      {
        category: "Programming Languages",
        items: ["Go (Golang)", "Ruby", "Python", "TypeScript", "PHP", "T-SQL / SQL", "Bash"]
      },
      {
        category: "Frameworks & Libraries",
        items: ["Ruby on Rails", "Flask", "Laravel", "Express.js / Node.js", "TensorFlow & Keras", "React"]
      },
      {
        category: "Database & Data Warehousing",
        items: ["Microsoft SQL Server (OLAP)", "PostgreSQL", "MySQL", "Redis", "Star Schema (Fact & Dim)"]
      },
      {
        category: "Tools, DevOps & Infrastructure",
        items: ["Docker", "Linux (Ubuntu / Debian)", "Git & GitHub", "Postman", "Jest & RSpec", "DigitalOcean / VPS", "CI/CD Actions"]
      }
    ]
  }
};

export const UI_STRINGS = {
  "id-ID": {
    nav: {
      home: "Beranda",
      experience: "Pengalaman",
      projects: "Proyek & Riset",
      skills: "Keahlian",
      articles: "Tulisan",
      support: "Kontak",
      toggleThemeDark: "Mode Gelap",
      toggleThemeLight: "Mode Terang",
      toggleLang: "Switch to English (en-US)",
      langShort: "ID",
      openMenu: "Buka Menu",
      closeMenu: "Tutup Menu",
      kopi: "Traktir Kopi"
    },
    hero: {
      statusBadge: "Terbuka untuk konsultasi & proyek backend",
      ctaProjects: "Lihat Proyek & Riset",
      ctaExperience: "Riwayat Pengalaman",
      ctaMedium: "Medium",
      ctaCoffee: "Traktir Kopi",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Pengalaman Kerja & Cakupan Teknis",
      subtitle: "Pengalaman membangun sistem backend dan cakupan teknis yang saya tangani sehari-hari.",
      timelineTitle: "Riwayat Karier",
      scopeTitle: "Cakupan Rekayasa",
      keyDeliverablesLabel: "Hasil Pekerjaan:"
    },
    projects: {
      title: "Proyek & Riset",
      subtitle: "Ringkasan sistem yang pernah saya bangun, riset kecerdasan buatan, dan tools yang saya gunakan.",
      summaryCardTitle: "Ringkasan Proyek & Riset",
      toolsCardTitle: "Bahasa, Database & Tools",
      githubNotice: "Sebagian repositori untuk klien dan institusi bersifat privat demi menjaga kerahasiaan kode. Proyek open source publik dapat dilihat langsung di GitHub.",
      viewGithubProfile: "Buka GitHub @norfabagas"
    },
    skills: {
      title: "Keahlian Teknis",
      subtitle: "Bahasa pemrograman, database, dan tools yang saya gunakan untuk backend dan pengolahan data."
    },
    articles: {
      title: "Tulisan Teknis",
      subtitle: "Catatan rekayasa sistem, tutorial setup, dan artikel teknis yang saya tulis di Medium @bgsnorfa.",
      visitMedium: "Buka Profil Medium",
      readArticle: "Baca Tulisan"
    },
    support: {
      coffeeTitle: "Dukungan Kopi",
      coffeeSubtitle: "Buy Me a Coffee: @bgsnorfa",
      coffeeBody: "Jika artikel teknis di Medium atau repositori open source saya bermanfaat untuk pekerjaan Anda, Anda bisa mengirim apresiasi lewat secangkir kopi virtual.",
      coffeeHeart: "Dukungan Anda membantu saya meluangkan waktu menulis artikel teknis dan merilis modul open source baru.",
      coffeeButton: "Traktir Kopi di buymeacoffee.com/bgsnorfa",
      connectTitle: "Kontak & Diskusi",
      connectSubtitle: "Kanal Komunikasi",
      connectHeaderDesc: "Silakan hubungi saya untuk diskusi teknis, peluang konsultasi, atau kolaborasi proyek backend.",
      connectCardBody: "Saya terbuka untuk diskusi teknis seputar arsitektur sistem, data warehouse, atau kebutuhan konsultasi rekayasa perangkat lunak."
    },
    footer: {
      tagline: "Software Engineer & IT Specialist. Portofolio dan rekam jejak terverifikasi.",
      backToTop: "Kembali ke Atas",
      credit: "Dibangun dengan Astryx Design System dan Tailwind CSS."
    }
  },
  "en-US": {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects & Research",
      skills: "Skills",
      articles: "Articles",
      support: "Contact",
      toggleThemeDark: "Dark Mode",
      toggleThemeLight: "Light Mode",
      toggleLang: "Ganti ke Bahasa Indonesia (id-ID)",
      langShort: "EN",
      openMenu: "Open Menu",
      closeMenu: "Close Menu",
      kopi: "Buy Coffee"
    },
    hero: {
      statusBadge: "Available for backend engineering & consulting",
      ctaProjects: "View Projects & Research",
      ctaExperience: "Work Experience",
      ctaMedium: "Medium",
      ctaCoffee: "Buy Coffee",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Work Experience & Engineering Scope",
      subtitle: "Work history across backend systems and the technical areas I handle.",
      timelineTitle: "Career Timeline",
      scopeTitle: "Scope of Engineering",
      keyDeliverablesLabel: "Key Deliverables:"
    },
    projects: {
      title: "Projects & Research",
      subtitle: "Summary of systems I have built, applied machine learning research, and the tools I use.",
      summaryCardTitle: "Projects & Research Summary",
      toolsCardTitle: "Languages, Databases & Tools",
      githubNotice: "Some repositories for client and institutional systems are private to protect source confidentiality. Public open source code is available on GitHub.",
      viewGithubProfile: "Open GitHub @norfabagas"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Programming languages, databases, and tools I use for backend development and data processing."
    },
    articles: {
      title: "Technical Articles",
      subtitle: "Engineering notes, setup tutorials, and technical articles published on Medium @bgsnorfa.",
      visitMedium: "Open Medium Profile",
      readArticle: "Read Article"
    },
    support: {
      coffeeTitle: "Buy Me a Coffee",
      coffeeSubtitle: "Buy Me a Coffee: @bgsnorfa",
      coffeeBody: "If my technical articles on Medium or open source repositories have been helpful to your work, you can send support with a virtual coffee.",
      coffeeHeart: "Your support helps me spend time writing engineering write-ups and publishing open source experiments.",
      coffeeButton: "Buy a coffee at buymeacoffee.com/bgsnorfa",
      connectTitle: "Contact & Connect",
      connectSubtitle: "Communication Channels",
      connectHeaderDesc: "Get in touch for technical discussions, consulting opportunities, or backend engineering projects.",
      connectCardBody: "I am open to discussing backend architecture, data warehouses, and software engineering consulting."
    },
    footer: {
      tagline: "Software Engineer & IT Specialist. Verified portfolio and project history.",
      backToTop: "Back to Top",
      credit: "Built with Astryx Design System and Tailwind CSS."
    }
  }
};
