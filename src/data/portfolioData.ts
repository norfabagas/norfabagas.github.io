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

export interface LocalizedPortfolioData {
  profile: Profile;
  socials: Socials;
  projectScopes: ProjectScope[];
  skills: SkillCategory[];
  repositories: Repository[];
  experience: Experience[];
  articles: Article[];
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
        "Software Engineer dengan keahlian dalam arsitektur backend, pemrosesan data warehouse OLAP, pipeline data terdistribusi, serta riset applied machine learning. Berpengalaman membangun sistem perbankan institusional, modul SIMRS rumah sakit, dan layanan API skala korporasi.",
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
          "Pengembangan modul perangkat lunak terintegrasi untuk sektor perbankan dan penjaminan keuangan dengan standar keamanan institusional, keandalan data, dan ketersediaan tinggi.",
        technologies: ["Go", "T-SQL", "Enterprise Security", "Microservices", "REST API"],
        deliverables: [
          "Arsitektur modul transaksi perbankan",
          "Mekanisme audit trail dan verifikasi integritas data",
          "Otentikasi terpusat dan manajemen otorisasi berjenjang"
        ]
      },
      {
        title: "Healthcare Systems & SIMRS",
        area: "Healthcare Information",
        description:
          "Perancangan modul Sistem Informasi Manajemen Rumah Sakit (SIMRS) yang mengintegrasikan alur operasional klinis, pencatatan rekam medis, dan sinkronisasi data antar unit.",
        technologies: ["PostgreSQL", "PHP", "Database Optimization", "System Integration"],
        deliverables: [
          "Otomatisasi alur kerja operasional antar instalasi medis",
          "Sinkronisasi data rekam medis terpadu",
          "Optimasi query basis data transaksional berkecepatan tinggi"
        ]
      },
      {
        title: "Data Warehouse & OLAP Pipelines",
        area: "Data Engineering",
        description:
          "Perancangan skema analitik data warehouse (Star Schema), pipeline ETL transaksi point-of-sale, dan pengolahan query multidimensi untuk kebutuhan analitik pelaporan.",
        technologies: ["T-SQL", "OLAP Data Warehouse", "ETL Pipelines", "PostgreSQL"],
        deliverables: [
          "Desain skema bintang (fact table dan dimension tables)",
          "Pipeline ekstraksi, transformasi, dan pemuatan data transaksi",
          "Agregasi analitik data penjualan multi-cabang"
        ]
      },
      {
        title: "Microservices & Distributed APIs",
        area: "Backend Architecture",
        description:
          "Pembangunan service backend modular, implementasi auth global multi-tenant, serta penerapan prinsip Test-Driven Development (TDD) untuk keandalan API.",
        technologies: ["Go", "Ruby on Rails", "TypeScript", "Node.js", "Docker", "TDD"],
        deliverables: [
          "Layanan otentikasi terpusat berbasis JWT",
          "Pemisahan modular service arsitektur backend",
          "Pengujian otomatis dan integrasi berkelanjutan"
        ]
      },
      {
        title: "Applied Machine Learning & AI Integration",
        area: "Applied AI",
        description:
          "Eksperimen arsitektur deep learning Convolutional Neural Network (CNN) untuk Facial Expression Recognition (FER2013), API klasifikasi keluhan jaringan, dan integrasi IBM Watson.",
        technologies: ["Python", "TensorFlow", "Keras", "Flask", "IBM Watson"],
        deliverables: [
          "Arsitektur deep learning klasifikasi citra ekspresi wajah",
          "REST API klasifikasi otomatis gangguan jaringan",
          "Integrasi antarmuka chatbot NLP cerdas"
        ]
      }
    ],
    skills: [
      {
        category: "Backend & Systems",
        description: "Pondasi arsitektur API terdistribusi, microservices, dan performa tinggi",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Desain skema analitik data warehouse, ETL pipeline, dan pemrosesan query",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "Riset computer vision, arsitektur deep learning CNN, dan integrasi asisten cerdas",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Automasi alur kerja, kontainerisasi terisolasi, dan pengujian berbasis TDD",
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
          "Membangun dan memelihara modul perangkat lunak perbankan terintegrasi dengan standar keamanan institusional, manajemen data terpusat, dan keandalan sistem penjaminan simpanan.",
        skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Pengalaman Profesional",
        description:
          "Mengembangkan modul Sistem Informasi Manajemen Rumah Sakit (SIMRS), otomatisasi alur kerja klinis, serta integrasi pertukaran data antar instalasi medis.",
        skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
      },
      {
        role: "Fullstack / Backend Developer",
        company: "Stealth Startup",
        period: "Pengalaman Profesional",
        description:
          "Berkolaborasi dalam tim pengembang perangkat lunak lintas batas untuk merancang arsitektur API modular, optimasi performa backend Ruby on Rails, dan antarmuka web modern.",
        skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Pengalaman Profesional",
        description:
          "Memberikan konsultasi arsitektur perangkat lunak, evaluasi infrastruktur sistem, bimbingan teknis tim rekayasa, serta mengisi workshop teknologi untuk komunitas pengembang.",
        skills: ["IT Consulting", "System Architecture", "Software Strategy", "Technical Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min baca",
        snippet: "Panduan praktis mengisolasi dependensi aplikasi dan menyusun konfigurasi container multi-layanan untuk lingkungan pengembangan konsisten."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min baca",
        snippet: "Langkah optimal mengatur ekosistem pengembangan Ruby on Rails di Windows melalui integrasi native Windows Subsystem for Linux (WSL)."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min baca",
        snippet: "Tinjauan mendalam perbandingan efisiensi algoritma pengurutan data beserta implikasi performa pada kasus nyata rekayasa data."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min baca",
        snippet: "Membangun antarmuka percakapan interaktif dengan mendefinisikan intent, entity, dan dialog trees pada layanan cloud Watson."
      }
    ]
  },
  "en-US": {
    profile: {
      name: "Norfa Bagas",
      title: "Software Engineer & IT Specialist",
      tagline: "All of my experiments",
      summary:
        "Software Engineer with expertise in backend architecture, OLAP data warehouses, distributed data pipelines, and applied machine learning. Experienced in building institutional banking modules, hospital SIMRS services, and production REST APIs.",
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
          "Development of integrated banking and financial guarantee software modules adhering to institutional security standards, data integrity, and high availability.",
        technologies: ["Go", "T-SQL", "Enterprise Security", "Microservices", "REST API"],
        deliverables: [
          "Banking transaction module architecture",
          "Audit trail mechanisms and data integrity verification",
          "Centralized authentication and tiered authorization management"
        ]
      },
      {
        title: "Healthcare Systems & SIMRS",
        area: "Healthcare Information",
        description:
          "Design of hospital information system (SIMRS) modules integrating clinical workflows, medical records, and synchronization across hospital units.",
        technologies: ["PostgreSQL", "PHP", "Database Optimization", "System Integration"],
        deliverables: [
          "Workflow automation across clinical departments",
          "Integrated electronic medical records synchronization",
          "High-throughput transactional database query optimization"
        ]
      },
      {
        title: "Data Warehouse & OLAP Pipelines",
        area: "Data Engineering",
        description:
          "Design of analytical star schemas, Point of Sale ETL pipelines, and multidimensional query processing for business intelligence reporting.",
        technologies: ["T-SQL", "OLAP Data Warehouse", "ETL Pipelines", "PostgreSQL"],
        deliverables: [
          "Star schema design (fact tables and dimension tables)",
          "Extraction, transformation, and load pipelines for sales data",
          "Multidimensional sales aggregation across regional branches"
        ]
      },
      {
        title: "Microservices & Distributed APIs",
        area: "Backend Architecture",
        description:
          "Development of modular backend services, global multitenant authentication, and test-driven development (TDD) for reliable APIs.",
        technologies: ["Go", "Ruby on Rails", "TypeScript", "Node.js", "Docker", "TDD"],
        deliverables: [
          "Centralized JWT authentication services",
          "Modular service decoupling for backend architecture",
          "Automated test suites and continuous integration pipelines"
        ]
      },
      {
        title: "Applied Machine Learning & AI Integration",
        area: "Applied AI",
        description:
          "Deep learning Convolutional Neural Network (CNN) experiments for Facial Expression Recognition (FER2013), automated ticket classification APIs, and IBM Watson integration.",
        technologies: ["Python", "TensorFlow", "Keras", "Flask", "IBM Watson"],
        deliverables: [
          "Deep learning image classification for facial expressions",
          "Automated network trouble ticket classification REST API",
          "Intelligent NLP chatbot interface integration"
        ]
      }
    ],
    skills: [
      {
        category: "Backend & Systems",
        description: "Distributed backend services, microservices, and high-throughput APIs",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Data warehouse star schema design, ETL pipelines, and query optimization",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "Computer vision research, CNN deep learning models, and conversational assistants",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Workflow automation, containerized environments, and test-driven development",
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
          "Built and maintained integrated banking software modules meeting institutional security standards, centralized data management, and deposit guarantee reliability.",
        skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Professional Experience",
        description:
          "Developed Hospital Management Information System (SIMRS) modules, automated clinical workflows, and integrated data exchange across medical units.",
        skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
      },
      {
        role: "Fullstack / Backend Developer",
        company: "Stealth Startup",
        period: "Professional Experience",
        description:
          "Collaborated with a cross-border engineering team to design modular API architectures, optimize Ruby on Rails backend performance, and build modern web interfaces.",
        skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Professional Experience",
        description:
          "Provided software architecture consulting, system infrastructure evaluations, technical engineering advisory, and developer community workshops.",
        skills: ["IT Consulting", "System Architecture", "Software Strategy", "Technical Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min read",
        snippet: "A practical guide to isolating application dependencies and configuring multi-service containers for consistent development environments."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min read",
        snippet: "Optimal steps for configuring a Ruby on Rails development ecosystem on Windows via Windows Subsystem for Linux (WSL)."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min read",
        snippet: "A thorough comparison of sorting algorithm efficiency and performance implications in real-world data engineering scenarios."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        snippet: "Building conversational interfaces by defining intents, entities, and dialog trees within IBM Watson cloud services."
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
      statusBadge: "Terbuka untuk konsultasi & proyek rekayasa backend",
      ctaProjects: "Lihat Repositori & Proyek",
      ctaExperience: "Rekam Jejak Pengalaman",
      ctaMedium: "Medium",
      ctaCoffee: "Traktir Kopi",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Pengalaman Kerja & Cakupan Rekayasa",
      subtitle: "Rekam jejak implementasi perangkat lunak pada sistem korporasi dan cakupan ranah arsitektur teknis yang ditangani.",
      timelineTitle: "Timeline Karier",
      scopeTitle: "Cakupan Rekayasa (Scope of Engineering)"
    },
    projects: {
      title: "Repositori & Proyek Open Source",
      subtitle: "Koleksi implementasi perangkat lunak terbuka: arsitektur backend, sistem data warehouse OLAP, dan pipeline applied machine learning.",
      githubLink: "Lihat Semua di GitHub",
      searchPlaceholder: "Cari repositori atau topik teknis...",
      searchAria: "Cari repositori berdasarkan nama atau topik",
      allFilter: "Semua",
      viewOnGithub: "Buka di GitHub",
      emptyTitle: "Tidak ada repositori yang cocok",
      emptyDesc: "Coba ubah kata kunci pencarian atau pilih kategori bahasa pemrograman lain.",
      resetFilter: "Reset Pencarian"
    },
    skills: {
      title: "Keahlian & Ekosistem Teknologi",
      subtitle: "Spesialisasi teknis dan perangkat yang digunakan sehari-hari dalam merancang arsitektur backend, pemrosesan data, dan infrastruktur sistem."
    },
    articles: {
      title: "Tulisan & Panduan Teknis",
      subtitle: "Catatan rekayasa sistem, tutorial konfigurasi, dan panduan praktis yang dipublikasikan di platform Medium @bgsnorfa.",
      visitMedium: "Kunjungi Profil Medium",
      readArticle: "Baca Tulisan"
    },
    support: {
      coffeeTitle: "Dukung Riset & Open Source",
      coffeeSubtitle: "Buy Me a Coffee: @bgsnorfa",
      coffeeBody: "Jika tulisan teknis di Medium atau repositori open source yang saya bagikan membantu pekerjaan Anda, Anda dapat memberikan dukungan apresiasi secangkir kopi virtual.",
      coffeeHeart: "Setiap dukungan membantu menjaga riset teknologi dan modul open source tetap dapat diakses publik.",
      coffeeButton: "Traktir Kopi di buymeacoffee.com/bgsnorfa",
      connectTitle: "Mari Terhubung",
      connectSubtitle: "Saluran Komunikasi Profesional",
      connectBody: "Terbuka untuk diskusi seputar arsitektur backend terdistribusi, optimasi database warehouse, migrasi microservices, atau peluang konsultasi teknis."
    },
    footer: {
      tagline: "Software Engineer & IT Specialist. Seluruh repositori dan data terverifikasi publik.",
      backToTop: "Kembali ke Atas",
      credit: "Dibangun dengan Astryx Design System dan Tailwind CSS."
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
      toggleLang: "Ganti ke Bahasa Indonesia (id-ID)",
      langShort: "EN",
      openMenu: "Open Menu",
      closeMenu: "Close Menu",
      kopi: "Buy Coffee"
    },
    hero: {
      statusBadge: "Available for backend engineering & technical consulting",
      ctaProjects: "Explore Repositories",
      ctaExperience: "Work Experience",
      ctaMedium: "Medium",
      ctaCoffee: "Buy a Coffee",
      ctaLinkedin: "LinkedIn"
    },
    experience: {
      title: "Work Experience & Engineering Scope",
      subtitle: "Engineering track record across enterprise production systems and technical architecture domains.",
      timelineTitle: "Career Timeline",
      scopeTitle: "Scope of Engineering"
    },
    projects: {
      title: "Repositories & Open Source Work",
      subtitle: "Public codebases focused on distributed backend architectures, OLAP data warehouses, and applied machine learning pipelines.",
      githubLink: "View All on GitHub",
      searchPlaceholder: "Search repository name or topic...",
      searchAria: "Search repositories by name or topic",
      allFilter: "All",
      viewOnGithub: "View on GitHub",
      emptyTitle: "No matching repositories",
      emptyDesc: "Try adjusting your search terms or selecting a different language filter.",
      resetFilter: "Reset Filter"
    },
    skills: {
      title: "Skills & Technical Ecosystem",
      subtitle: "Core languages, frameworks, and engineering tools applied across backend architecture, data warehousing, and infrastructure."
    },
    articles: {
      title: "Articles & Engineering Guides",
      subtitle: "Systems engineering walkthroughs, environment setup guides, and technical deep-dives published on Medium @bgsnorfa.",
      visitMedium: "Visit Medium Profile",
      readArticle: "Read Article"
    },
    support: {
      coffeeTitle: "Support Research & Open Source",
      coffeeSubtitle: "Buy Me a Coffee: @bgsnorfa",
      coffeeBody: "If my technical write-ups on Medium or open source modules have helped your work, you can buy me a virtual coffee to support ongoing technical research.",
      coffeeHeart: "Every contribution helps maintain technical articles and open-source experiments accessible for developers.",
      coffeeButton: "Buy a Coffee at buymeacoffee.com/bgsnorfa",
      connectTitle: "Let's Connect",
      connectSubtitle: "Professional Communication Channels",
      connectBody: "Open for discussions on distributed backend architectures, data warehouse engineering, microservices migration, or technical consulting."
    },
    footer: {
      tagline: "Software Engineer & IT Specialist. All public repositories and verified data.",
      backToTop: "Back to Top",
      credit: "Built with Astryx Design System and Tailwind CSS."
    }
  }
};
