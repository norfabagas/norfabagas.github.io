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
      title: "Software Engineer",
      tagline: "All of my experiments",
      summary:
        "Saya mengembangkan backend dan sistem data, termasuk aplikasi perbankan di LPS dan SIMRS di Eka Hospital.",
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
          "Modul transaksi perbankan, audit trail, dan kontrol akses.",
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
          "Modul SIMRS untuk rawat jalan, rawat inap, farmasi, dan integrasi layanan kesehatan.",
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
          "Data warehouse skema bintang dan ETL untuk analisis transaksi lintas cabang.",
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
          "REST API dengan Go dan Ruby on Rails, Docker, dan pengujian otomatis.",
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
          "Eksperimen CNN pada FER2013, API klasifikasi gangguan jaringan, dan chatbot IBM Watson.",
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
          "Membangun modul backend transaksi perbankan dan pencatatan audit trail pada sistem penjaminan simpanan nasional, menjaga konsistensi data transaksi dan keamanan akses bertingkat.",
        skills: ["Go", "T-SQL", "Sistem Perbankan", "Audit Trail", "REST API"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Pengalaman Profesional",
        description:
          "Mengembangkan modul SIMRS untuk operasional rekam medis elektronik rawat jalan, rawat inap, dan farmasi, menghubungkan sinkronisasi data antar-instalasi medis dan interoperabilitas API kesehatan.",
        skills: ["PHP", "PostgreSQL", "SIMRS", "Integrasi Sistem", "Database Tuning"]
      },
      {
        role: "Software Engineer",
        company: "Stealth Startup",
        period: "Pengalaman Profesional",
        description:
          "Membangun API modular dan layanan backend dengan Ruby on Rails dan TypeScript, menerapkan pengujian otomatis (TDD), serta mengoptimalkan query database untuk aplikasi web.",
        skills: ["Ruby on Rails", "TypeScript", "REST API", "Docker", "TDD"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Pengalaman Profesional",
        description:
          "Memberikan konsultasi arsitektur software, evaluasi infrastruktur server, dan panduan teknis implementasi best practices backend bagi tim pengembang.",
        skills: ["Konsultasi IT", "Arsitektur Software", "Evaluasi Infrastruktur", "Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min baca",
        snippet: "Langkah mengisolasi dependensi aplikasi dan menyusun konfigurasi docker-compose multi-container untuk lingkungan development yang konsisten."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min baca",
        snippet: "Setup environment development Ruby on Rails di Windows melalui WSL2 tanpa hambatan kompatibilitas gem native."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min baca",
        snippet: "Perbandingan efisiensi Big-O waktu dan memori pada algoritma sorting standar terhadap karakteristik dataset yang berbeda."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min baca",
        snippet: "Struktur perancangan dialog percakapan melalui definisi intent, entity recognition, dan percabangan dialog tree di IBM Watson Assistant."
      }
    ],
    projectResearchSummary:
      "Pekerjaan saya mencakup backend perbankan dan SIMRS, data warehouse OLAP, serta eksperimen machine learning dan chatbot.",
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
      title: "Software Engineer",
      tagline: "All of my experiments",
      summary:
        "I build backend and data systems, including banking applications at LPS and hospital systems at Eka Hospital.",
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
          "Banking transaction modules, audit logs, and access controls.",
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
          "SIMRS modules for clinical workflows, pharmacy, and healthcare integrations.",
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
          "Star-schema data warehouse and ETL for multi-branch transaction analysis.",
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
          "REST APIs in Go and Ruby on Rails, with Docker and automated tests.",
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
          "CNN experiments on FER2013, a network issue classification API, and an IBM Watson chatbot.",
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
          "Built banking transaction modules and audit trail logging services for national deposit insurance operations, maintaining transaction consistency and secure data access.",
        skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Professional Experience",
        description:
          "Developed hospital management (SIMRS) modules for outpatient, inpatient, and pharmacy operations, handling electronic medical record data exchange and healthcare API interoperability.",
        skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
      },
      {
        role: "Fullstack / Backend Developer",
        company: "Stealth Startup",
        period: "Professional Experience",
        description:
          "Engineered modular backend services and REST APIs with Ruby on Rails and TypeScript, implementing automated testing (TDD), query optimization, and Docker containerization.",
        skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Professional Experience",
        description:
          "Advised on backend software architecture, evaluated server infrastructure readiness, and provided technical guidance on engineering best practices for developer teams.",
        skills: ["IT Consulting", "System Architecture", "Software Strategy", "Technical Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min read",
        snippet: "Packaging application dependencies and configuring multi-container docker-compose setups for reproducible development environments."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min read",
        snippet: "Step-by-step Ruby on Rails setup on Windows via WSL2, avoiding native gem compatibility issues."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min read",
        snippet: "Comparing Big-O time and memory complexity across standard sorting algorithms against varying dataset profiles."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        snippet: "Structuring conversational flows with intent definitions, entity extraction, and dialog tree branching in IBM Watson Assistant."
      }
    ],
    projectResearchSummary:
      "My work covers banking backends, hospital systems, OLAP data warehouses, and ML experiments.",
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
      projects: "Proyek",
      skills: "Keahlian",
      articles: "Artikel",
      support: "Kontak",
      toggleThemeDark: "Mode Gelap",
      toggleThemeLight: "Mode Terang",
      toggleLang: "English",
      langShort: "ID",
      openMenu: "Buka Menu",
      closeMenu: "Tutup Menu",
      kopi: "Traktir Kopi"
    },
    hero: {
      statusBadge: "Backend & data systems",
      ctaProjects: "Lihat Proyek",
      ctaExperience: "Pengalaman Kerja",
      ctaMedium: "Medium",
      ctaCoffee: "Traktir Kopi",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Pengalaman Kerja",
      subtitle: "Perbankan, kesehatan, dan pengembangan aplikasi.",
      timelineTitle: "Riwayat Karier",
      scopeTitle: "Cakupan Sistem",
      keyDeliverablesLabel: "Kontribusi:"
    },
    projects: {
      title: "Proyek & Riset",
      subtitle: "Repositori publik dan eksperimen teknis.",
      summaryCardTitle: "Ringkasan",
      toolsCardTitle: "Teknologi",
      githubNotice: "Kode pekerjaan institusional tidak dipublikasikan.",
      viewGithubProfile: "Lihat GitHub @norfabagas"
    },
    skills: {
      title: "Keahlian & Domain",
      subtitle: "Bahasa, framework, dan tools yang saya gunakan."
    },
    articles: {
      title: "Tulisan Teknis",
      subtitle: "Tulisan tentang pengembangan perangkat lunak.",
      visitMedium: "Buka Medium @bgsnorfa",
      readArticle: "Baca Tulisan"
    },
    support: {
      coffeeTitle: "Dukungan",
      coffeeSubtitle: "Buy Me a Coffee · @bgsnorfa",
      coffeeBody: "Dukung tulisan dan proyek open source saya melalui Buy Me a Coffee.",
      coffeeHeart: "Terima kasih atas dukungannya.",
      coffeeButton: "Traktir Kopi di BuyMeACoffee",
      connectTitle: "Kontak Langsung",
      connectSubtitle: "LinkedIn & GitHub",
      connectHeaderDesc: "Hubungi saya melalui LinkedIn atau GitHub.",
      connectCardBody: "LinkedIn untuk kerja sama; GitHub untuk diskusi kode."
    },
    footer: {
      tagline: "Software Engineer · Rekayasa backend, data warehouse, dan machine learning terapan.",
      backToTop: "Kembali ke Atas",
      credit: "Astryx & Tailwind CSS"
    }
  },
  "en-US": {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      articles: "Articles",
      support: "Contact",
      toggleThemeDark: "Dark Mode",
      toggleThemeLight: "Light Mode",
      toggleLang: "Bahasa Indonesia",
      langShort: "EN",
      openMenu: "Open Menu",
      closeMenu: "Close Menu",
      kopi: "Buy Me a Coffee"
    },
    hero: {
      statusBadge: "Backend & data systems",
      ctaProjects: "View Projects",
      ctaExperience: "Work Experience",
      ctaMedium: "Medium",
      ctaCoffee: "Buy Me a Coffee",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Work Experience",
      subtitle: "Banking, healthcare, and web applications.",
      timelineTitle: "Career Timeline",
      scopeTitle: "System Scope",
      keyDeliverablesLabel: "Contributions:"
    },
    projects: {
      title: "Projects & Research",
      subtitle: "Public repositories and technical experiments.",
      summaryCardTitle: "Overview",
      toolsCardTitle: "Technologies",
      githubNotice: "Institutional code is not public.",
      viewGithubProfile: "View GitHub @norfabagas"
    },
    skills: {
      title: "Technical Domains",
      subtitle: "Languages, frameworks, and tools I use."
    },
    articles: {
      title: "Technical Articles",
      subtitle: "Notes on software development.",
      visitMedium: "Open Medium @bgsnorfa",
      readArticle: "Read Article"
    },
    support: {
      coffeeTitle: "Support",
      coffeeSubtitle: "Buy Me a Coffee · @bgsnorfa",
      coffeeBody: "Support my writing and open-source projects on Buy Me a Coffee.",
      coffeeHeart: "Thanks for your support.",
      coffeeButton: "Buy a Coffee on BuyMeACoffee",
      connectTitle: "Get in Touch",
      connectSubtitle: "LinkedIn & GitHub",
      connectHeaderDesc: "Find me on LinkedIn or GitHub.",
      connectCardBody: "LinkedIn for work inquiries; GitHub for code discussions."
    },
    footer: {
      tagline: "Software Engineer · Backend architecture, data warehouses, and applied machine learning.",
      backToTop: "Back to Top",
      credit: "Astryx & Tailwind CSS"
    }
  }
};
