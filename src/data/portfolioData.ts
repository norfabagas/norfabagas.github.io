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
    fullName: "Norfa Bagas Nurhuda Sukowati",
    title: "Software Engineer & IT Specialist",
    tagline: "All of my experiments",
    summary:
      "Software Engineer berbasis di Jakarta, Indonesia dengan pengalaman membangun layanan backend berkinerja tinggi, sistem data warehouse OLAP, arsitektur microservices, serta eksplorasi riset applied machine learning dan computer vision.",
    location: "Jakarta, Indonesia",
    avatar: "https://avatars.githubusercontent.com/u/22408586?v=4",
    yearsActive: "Sejak 2016",
    githubUsername: "norfabagas",
    stats: {
      publicRepos: 56,
      publicGists: 4,
      experienceYears: "8+ tahun di open source"
    }
  },
  socials: {
    github: "https://github.com/norfabagas",
    linkedin: "https://www.linkedin.com/in/norfabagas",
    medium: "https://medium.com/@bgsnorfa",
    buymeacoffee: "https://buymeacoffee.com/bgsnorfa",
    stackoverflow: "https://stackoverflow.com/users/17166221/norfa-bagas"
  },
  skills: [
    {
      category: "Backend & Systems",
      description: "Pondasi arsitektur API terdistribusi, microservices, dan performa tinggi",
      items: ["Go (Golang)", "Ruby on Rails", "PHP (Laravel)", "TypeScript", "Node.js (Express)", "Python (Flask)"]
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
        "Membangun dan memelihara modul perangkat lunak perbankan terintegrasi dengan standar keamanan institusional tinggi, manajemen data terpusat, dan ketersediaan layanan sistem keuangan.",
      skills: ["Backend Architecture", "Enterprise Security", "Database Systems", "API Integration"]
    },
    {
      role: "Software Engineer",
      company: "Eka Hospital",
      period: "Pengalaman Profesional",
      description:
        "Mengembangkan solusi sistem informasi manajemen rumah sakit (SIMRS), otomatisasi alur kerja klinis, dan integrasi pertukaran data antar instalasi medis secara real-time.",
      skills: ["Healthcare Systems", "Relational Database", "System Integration", "Data Reliability"]
    },
    {
      role: "Fullstack / Backend Developer",
      company: "Geekseat",
      period: "Pengalaman Profesional",
      description:
        "Berkolaborasi dalam tim pengembang perangkat lunak lintas negara untuk merancang API modular, optimasi performa backend Ruby on Rails, dan komponen UI modern.",
      skills: ["Ruby on Rails", "React", "TypeScript", "Agile Development", "REST API"]
    },
    {
      role: "Chief Technology Officer (CTO)",
      company: "BRCODE",
      period: "Leadership & Tech Direction",
      description:
        "Memimpin visi teknologi perusahaan, menentukan arsitektur sistem, memandu tim rekayasa perangkat lunak, dan mengisi sesi workshop teknologi komunitas.",
      skills: ["Tech Leadership", "System Architecture", "Public Speaking", "Software Strategy"]
    }
  ] as Experience[],
  education: {
    institution: "BINUS University (Bina Nusantara)",
    degree: "Bachelor of Science (S.Kom.) in Computer Science",
    highlight:
      "Fokus pada rekayasa perangkat lunak dan kecerdasan buatan. Mempublikasikan penelitian akademik terkait klasifikasi motif Batik Nusantara menggunakan model Deep Learning Convolutional Neural Network (CNN) dengan teknik data augmentation dan hyperparameter tuning."
  },
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
