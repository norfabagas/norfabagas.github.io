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

export const PORTFOLIO_DATA = {
  profile: {
    name: "Norfa Bagas",
    title: "Software Engineer & IT Specialist",
    tagline: "All of my experiments",
    summary:
      "Software Engineer dengan pengalaman merancang arsitektur backend, sistem data warehouse OLAP, pipeline data terdistribusi, serta implementasi applied machine learning.",
    location: "Indonesia",
    avatar: "https://avatars.githubusercontent.com/u/22408586?v=4",
    githubUsername: "norfabagas"
  },
  socials: {
    github: "https://github.com/norfabagas",
    linkedin: "https://www.linkedin.com/in/norfabagas",
    medium: "https://medium.com/@bgsnorfa",
    buymeacoffee: "https://buymeacoffee.com/bgsnorfa",
    stackoverflow: "https://stackoverflow.com/users/17166221/norfa-bagas"
  },
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
  ] as ProjectScope[],
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
  ] as Repository[],
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
      role: "Chief Technology Officer (CTO)",
      company: "BRCODE",
      period: "Leadership & Tech Direction",
      description:
        "Memimpin arah teknis perangkat lunak, menentukan arsitektur sistem, memandu tim rekayasa, serta mengisi sesi workshop teknologi untuk komunitas pengembang.",
      skills: ["Tech Leadership", "System Architecture", "Software Strategy"]
    }
  ] as Experience[],
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
  ] as Article[]
};
