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
        description: "Backend API dan microservices",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Data warehouse, ETL, dan query analitik",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "CNN dan API inferensi",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Docker, testing, dan Linux",
        items: ["Docker", "Linux / Bash", "DigitalOcean", "Git", "TDD & Jest", "Tailwind CSS"]
      }
    ],
    repositories: [
      {
        name: "learn-olap-dwh",
        description: "Data warehouse OLAP untuk transaksi POS dengan star schema.",
        language: "TSQL",
        stars: 1,
        url: "https://github.com/norfabagas/learn-olap-dwh",
        topics: ["data-warehouse", "olap", "sql-server", "analytics"],
        featured: true
      },
      {
        name: "cnn-fer-architecture",
        description: "Eksperimen CNN untuk klasifikasi ekspresi wajah pada FER2013.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/cnn-fer-architecture",
        topics: ["deep-learning", "computer-vision", "cnn", "fer2013"],
        featured: true
      },
      {
        name: "inet-trouble-ml-api",
        description: "API Flask dan Keras untuk klasifikasi gangguan jaringan.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/inet-trouble-ml-api",
        topics: ["flask", "keras", "machine-learning", "api"],
        featured: true
      },
      {
        name: "rock-paper-scissors-watson-assistant",
        description: "Permainan batu-gunting-kertas dengan IBM Watson Assistant.",
        language: "AI / Cloud",
        stars: 1,
        url: "https://github.com/norfabagas/rock-paper-scissors-watson-assistant",
        topics: ["watson-assistant", "chatbot", "nlp", "ibm-cloud"],
        featured: true
      },
      {
        name: "url-shortener-api",
        description: "API pemendek URL dengan Ruby on Rails dan metrik redirect.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/url-shortener-api",
        topics: ["ruby-on-rails", "rest-api", "backend", "url-shortener"],
        featured: true
      },
      {
        name: "auth-global",
        description: "Layanan autentikasi terpusat dengan Go.",
        language: "Go",
        stars: 1,
        url: "https://github.com/norfabagas/auth-global",
        topics: ["golang", "jwt", "authentication", "microservices"],
        featured: true
      },
      {
        name: "watson-coffee-api",
        description: "API pemesanan kopi terhubung ke IBM Watson Assistant.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/watson-coffee-api",
        topics: ["ruby-on-rails", "watson-assistant", "api-integration"],
        featured: false
      },
      {
        name: "inventory-management",
        description: "Pengelolaan stok dan pergerakan barang.",
        language: "PHP",
        stars: 1,
        url: "https://github.com/norfabagas/inventory-management",
        topics: ["laravel", "inventory-system", "mysql", "warehouse"],
        featured: false
      },
      {
        name: "learn-datawarehouse",
        description: "Eksperimen ekstraksi data dan data warehouse.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/learn-datawarehouse",
        topics: ["data-warehouse", "etl", "ruby", "data-engineering"],
        featured: false
      },
      {
        name: "benchmark-oop-fp-node",
        description: "Benchmark penggunaan CPU dan memori: OOP vs FP di Node.js.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/norfabagas/benchmark-oop-fp-node",
        topics: ["nodejs", "benchmark", "oop", "functional-programming"],
        featured: false
      },
      {
        name: "go-drone-cli",
        description: "Simulasi navigasi drone berbasis CLI dengan Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/go-drone-cli",
        topics: ["golang", "cli-app", "navigation", "simulation"],
        featured: false
      },
      {
        name: "norfabagas-betest",
        description: "Microservice autentikasi pengguna dengan TypeScript.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/norfabagas-betest",
        topics: ["typescript", "microservices", "authentication", "clean-architecture"],
        featured: false
      },
      {
        name: "learn-express-tdd",
        description: "Latihan TDD untuk REST API Express dan TypeScript.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/learn-express-tdd",
        topics: ["expressjs", "tdd", "testing", "typescript"],
        featured: false
      },
      {
        name: "learn-go-design-patterns",
        description: "Contoh design pattern GoF dalam Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/learn-go-design-patterns",
        topics: ["golang", "design-patterns", "software-architecture"],
        featured: false
      },
      {
        name: "naive-bayes-ranking",
        description: "Pemeringkatan data menggunakan Naive Bayes.",
        language: "PHP",
        stars: 0,
        url: "https://github.com/norfabagas/naive-bayes-ranking",
        topics: ["machine-learning", "naive-bayes", "ranking-system", "php"],
        featured: false
      },
      {
        name: "netracer-app",
        description: "Aplikasi Android Kotlin untuk traceroute jaringan.",
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
          "Mengembangkan modul transaksi perbankan dan audit trail.",
        skills: ["Go", "T-SQL", "Sistem Perbankan", "Audit Trail", "REST API"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Pengalaman Profesional",
        description:
          "Mengembangkan modul SIMRS dan integrasi rekam medis.",
        skills: ["PHP", "PostgreSQL", "SIMRS", "Integrasi Sistem", "Database Tuning"]
      },
      {
        role: "Software Engineer",
        company: "Stealth Startup",
        period: "Pengalaman Profesional",
        description:
          "Membangun API dengan Ruby on Rails dan TypeScript serta pengujian otomatis.",
        skills: ["Ruby on Rails", "TypeScript", "REST API", "Docker", "TDD"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Pengalaman Profesional",
        description:
          "Konsultasi arsitektur aplikasi dan infrastruktur server.",
        skills: ["Konsultasi IT", "Arsitektur Software", "Evaluasi Infrastruktur", "Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min baca",
        snippet: "Docker Compose untuk menjalankan beberapa container."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min baca",
        snippet: "Setup Ruby on Rails di Windows dengan WSL2."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min baca",
        snippet: "Perbandingan kompleksitas waktu dan memori algoritma sorting."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min baca",
        snippet: "Membuat alur percakapan di IBM Watson Assistant."
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
        description: "Backend APIs and microservices",
        items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js", "Python"]
      },
      {
        category: "Data & OLAP",
        description: "Data warehouses, ETL, and analytics",
        items: ["T-SQL (OLAP DW)", "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Firebase"]
      },
      {
        category: "AI & Machine Learning",
        description: "CNN and inference APIs",
        items: ["TensorFlow", "Keras (CNN)", "FER2013 Facial Recognition", "IBM Watson Assistant", "Data Augmentation"]
      },
      {
        category: "DevOps & Tooling",
        description: "Docker, testing, and Linux",
        items: ["Docker", "Linux / Bash", "DigitalOcean", "Git", "TDD & Jest", "Tailwind CSS"]
      }
    ],
    repositories: [
      {
        name: "learn-olap-dwh",
        description: "OLAP data warehouse for POS transactions using a star schema.",
        language: "TSQL",
        stars: 1,
        url: "https://github.com/norfabagas/learn-olap-dwh",
        topics: ["data-warehouse", "olap", "sql-server", "analytics"],
        featured: true
      },
      {
        name: "cnn-fer-architecture",
        description: "CNN experiment for facial expression classification on FER2013.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/cnn-fer-architecture",
        topics: ["deep-learning", "computer-vision", "cnn", "fer2013"],
        featured: true
      },
      {
        name: "inet-trouble-ml-api",
        description: "Network issue classification API using Flask and Keras.",
        language: "Python",
        stars: 1,
        url: "https://github.com/norfabagas/inet-trouble-ml-api",
        topics: ["flask", "keras", "machine-learning", "api"],
        featured: true
      },
      {
        name: "rock-paper-scissors-watson-assistant",
        description: "Rock-paper-scissors game with IBM Watson Assistant.",
        language: "AI / Cloud",
        stars: 1,
        url: "https://github.com/norfabagas/rock-paper-scissors-watson-assistant",
        topics: ["watson-assistant", "chatbot", "nlp", "ibm-cloud"],
        featured: true
      },
      {
        name: "url-shortener-api",
        description: "URL shortener API in Ruby on Rails with redirect metrics.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/url-shortener-api",
        topics: ["ruby-on-rails", "rest-api", "backend", "url-shortener"],
        featured: true
      },
      {
        name: "auth-global",
        description: "Centralized authentication service in Go.",
        language: "Go",
        stars: 1,
        url: "https://github.com/norfabagas/auth-global",
        topics: ["golang", "jwt", "authentication", "microservices"],
        featured: true
      },
      {
        name: "watson-coffee-api",
        description: "Coffee ordering API connected to IBM Watson Assistant.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/watson-coffee-api",
        topics: ["ruby-on-rails", "watson-assistant", "api-integration"],
        featured: false
      },
      {
        name: "inventory-management",
        description: "Stock and inventory tracking system.",
        language: "PHP",
        stars: 1,
        url: "https://github.com/norfabagas/inventory-management",
        topics: ["laravel", "inventory-system", "mysql", "warehouse"],
        featured: false
      },
      {
        name: "learn-datawarehouse",
        description: "Data extraction and warehouse experiments.",
        language: "Ruby",
        stars: 1,
        url: "https://github.com/norfabagas/learn-datawarehouse",
        topics: ["data-warehouse", "etl", "ruby", "data-engineering"],
        featured: false
      },
      {
        name: "benchmark-oop-fp-node",
        description: "CPU and memory benchmark: OOP vs FP in Node.js.",
        language: "JavaScript",
        stars: 0,
        url: "https://github.com/norfabagas/benchmark-oop-fp-node",
        topics: ["nodejs", "benchmark", "oop", "functional-programming"],
        featured: false
      },
      {
        name: "go-drone-cli",
        description: "Drone navigation CLI in Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/go-drone-cli",
        topics: ["golang", "cli-app", "navigation", "simulation"],
        featured: false
      },
      {
        name: "norfabagas-betest",
        description: "User authentication microservice in TypeScript.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/norfabagas-betest",
        topics: ["typescript", "microservices", "authentication", "clean-architecture"],
        featured: false
      },
      {
        name: "learn-express-tdd",
        description: "TDD practice with Express and TypeScript REST APIs.",
        language: "TypeScript",
        stars: 0,
        url: "https://github.com/norfabagas/learn-express-tdd",
        topics: ["expressjs", "tdd", "testing", "typescript"],
        featured: false
      },
      {
        name: "learn-go-design-patterns",
        description: "GoF design pattern examples in Go.",
        language: "Go",
        stars: 0,
        url: "https://github.com/norfabagas/learn-go-design-patterns",
        topics: ["golang", "design-patterns", "software-architecture"],
        featured: false
      },
      {
        name: "naive-bayes-ranking",
        description: "Data ranking with Naive Bayes.",
        language: "PHP",
        stars: 0,
        url: "https://github.com/norfabagas/naive-bayes-ranking",
        topics: ["machine-learning", "naive-bayes", "ranking-system", "php"],
        featured: false
      },
      {
        name: "netracer-app",
        description: "Kotlin Android app for network traceroute.",
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
          "Developed banking transaction modules and audit logs.",
        skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
      },
      {
        role: "Software Engineer",
        company: "Eka Hospital",
        period: "Professional Experience",
        description:
          "Developed SIMRS modules and medical record integrations.",
        skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
      },
      {
        role: "Fullstack / Backend Developer",
        company: "Stealth Startup",
        period: "Professional Experience",
        description:
          "Built APIs with Ruby on Rails and TypeScript, with automated tests.",
        skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
      },
      {
        role: "IT Consultant",
        company: "BRCODE",
        period: "Professional Experience",
        description:
          "Consulted on application architecture and server infrastructure.",
        skills: ["IT Consulting", "System Architecture", "Software Strategy", "Technical Mentoring"]
      }
    ],
    articles: [
      {
        title: "Memahami Kontainerisasi dengan Docker untuk Web Developer",
        url: "https://medium.com/@bgsnorfa",
        category: "DevOps & Tooling",
        readTime: "5 min read",
        snippet: "Running multiple containers with Docker Compose."
      },
      {
        title: "Konfigurasi Lingkungan Ruby on Rails Menggunakan WSL",
        url: "https://medium.com/@bgsnorfa",
        category: "Development Setup",
        readTime: "6 min read",
        snippet: "Setting up Ruby on Rails on Windows with WSL2."
      },
      {
        title: "Analisis Kompleksitas Waktu dan Ruang pada Algoritma Sorting",
        url: "https://medium.com/@bgsnorfa",
        category: "Computer Science",
        readTime: "7 min read",
        snippet: "Time and space complexity of sorting algorithms."
      },
      {
        title: "Eksplorasi Chatbot Cerdas dengan IBM Watson Assistant",
        url: "https://medium.com/@bgsnorfa",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        snippet: "Building conversation flows in IBM Watson Assistant."
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
