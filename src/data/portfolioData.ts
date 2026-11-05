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

export const COMMON_ARTICLES: Article[] = [
  {
    title: "How to Dockerize your Rails 6 App from Scratch",
    url: "https://bgsnorfa.medium.com/how-to-dockerize-your-rails-6-app-from-scratch-37083df752f5",
    category: "DevOps & Tooling",
    readTime: "5 min read",
    snippet: "A step-by-step tutorial on dockerizing a Rails 6 application with PostgreSQL and multiple containers using Docker Compose."
  },
  {
    title: "How I Enhance WSL for Development (Personal Approach)",
    url: "https://bgsnorfa.medium.com/how-i-enhance-wsl-for-development-personal-approach-3aca92c53875",
    category: "Development Setup",
    readTime: "6 min read",
    snippet: "Personal approach and practical setup tips for enhancing the Windows Subsystem for Linux (WSL) development workflow."
  },
  {
    title: "Write Bubble Sort Algorithm in Javascript",
    url: "https://bgsnorfa.medium.com/write-bubble-sort-algorithm-in-javascript-3d2e2f5b2e6a",
    category: "Computer Science",
    readTime: "7 min read",
    snippet: "Understanding the Bubble Sort algorithm in JavaScript through step-by-step implementation and time/space complexity analysis."
  },
  {
    title: "Create a Rock-Paper-Scissors game with Chatbot",
    url: "https://bgsnorfa.medium.com/create-a-rock-paper-scissors-game-with-chatbot-2bf9a0c78868",
    category: "Artificial Intelligence",
    readTime: "4 min read",
    snippet: "Building conversation flows and game logic in IBM Watson Assistant to create an interactive Rock-Paper-Scissors chatbot."
  }
];

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
        "Saya mengembangkan backend dan sistem data, dengan pengalaman di industri finance dan healthcare.",
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
        company: "LPS (Lembaga Penjamin Simpanan)",
        period: "2025 - Sekarang",
        description:
          "Melakukan manajemen server LPS, DevOps, dan software engineering untuk sistem core business serta supporting applications.",
        skills: ["DevOps", "Project Management", "AI Workflow", "Programming"]
      },
      {
        role: "Software Engineer",
        company: "Sinarmas Healthcare",
        period: "2022 - 2025",
        description:
          "Mengerjakan ERP untuk sistem healthcare pada Eka Hospital, dan mengembangkan healthcare application SehatQ.",
        skills: ["System Architecture", "API Management", "Agentic Programming", "Software Engineering", "ERP Integration"]
      },
      {
        role: "Software Engineer",
        company: "Stealth Startup",
        period: "2019 - 2022",
        description:
          "Mengerjakan berbagai kebutuhan client terkait pengembangan aplikasi. Mayoritas berada pada area Singapura, Australia, dan Indonesia.",
        skills: ["Programming", "IT Consulting"]
      },
      {
        role: "IT Consultant",
        company: "IT Consulting",
        period: "2017 - 2019",
        description:
          "Menjual berbagai software berdasarkan kebutuhan klien.",
        skills: ["Programming", "Tech Sales"]
      }
    ],
    articles: COMMON_ARTICLES,
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
        "I build backend and data systems, with experience in the finance and healthcare industries.",
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
        company: "IDIC (Indonesia Deposit Insurance Corporation)",
        period: "2025 - Present",
        description:
          "Managing IDIC server infrastructure, DevOps, and software engineering for core business and supporting applications.",
        skills: ["DevOps", "Project Management", "AI Workflow", "Programming"]
      },
      {
        role: "Software Engineer",
        company: "Sinarmas Healthcare",
        period: "2022 - 2025",
        description:
          "Engineered ERP for hospital healthcare systems at Eka Hospital, and developed the SehatQ healthcare application.",
        skills: ["System Architecture", "API Management", "Agentic Programming", "Software Engineering", "ERP Integration"]
      },
      {
        role: "Software Engineer",
        company: "Stealth Startup",
        period: "2019 - 2022",
        description:
          "Handled diverse client requirements for application development, primarily across Singapore, Australia, and Indonesia.",
        skills: ["Programming", "IT Consulting"]
      },
      {
        role: "IT Consultant",
        company: "IT Consulting",
        period: "2017 - 2019",
        description:
          "Delivered and sold customized software solutions tailored to client needs.",
        skills: ["Programming", "Tech Sales"]
      }
    ],
    articles: COMMON_ARTICLES,
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
      articles: "Articles",
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
      scopeTitle: "Proyek & Domain Teknis",
      keyDeliverablesLabel: "Kontribusi:"
    },
    projects: {
      title: "Proyek & Riset",
      subtitle: "Repositori publik dan eksperimen teknis.",
      summaryCardTitle: "Ringkasan",
      toolsCardTitle: "Teknologi",
      githubNotice: "Repositori dan eksperimen kode terbuka dapat diakses di GitHub.",
      viewGithubProfile: "Lihat GitHub @norfabagas"
    },
    skills: {
      title: "Keahlian & Domain",
      subtitle: "Bahasa, framework, dan tools yang saya gunakan."
    },
    articles: {
      title: "Technical Articles",
      subtitle: "Notes on software development.",
      visitMedium: "Open Medium @bgsnorfa",
      readArticle: "Read Article"
    },
    support: {
      coffeeTitle: "Dukungan",
      coffeeSubtitle: "Buy Me a Coffee · @bgsnorfa",
      coffeeBody: "Dukung tulisan dan proyek open source saya melalui Buy Me a Coffee.",
      coffeeHeart: "Terima kasih atas dukungannya.",
      coffeeButton: "Traktir Kopi di BuyMeACoffee",
      connectTitle: "Kontak Langsung",
      connectSubtitle: "LinkedIn & GitHub",
      connectHeaderDesc: "Terhubung melalui LinkedIn, GitHub, Medium, atau Buy Me a Coffee.",
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
      scopeTitle: "Projects & Technical Domains",
      keyDeliverablesLabel: "Contributions:"
    },
    projects: {
      title: "Projects & Research",
      subtitle: "Public repositories and technical experiments.",
      summaryCardTitle: "Overview",
      toolsCardTitle: "Technologies",
      githubNotice: "Open-source repositories and code experiments are available on GitHub.",
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
      connectHeaderDesc: "Connect with me across LinkedIn, GitHub, Medium, or Buy Me a Coffee.",
      connectCardBody: "LinkedIn for work inquiries; GitHub for code discussions."
    },
    footer: {
      tagline: "Software Engineer · Backend architecture, data warehouses, and applied machine learning.",
      backToTop: "Back to Top",
      credit: "Astryx & Tailwind CSS"
    }
  }
};
