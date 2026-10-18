import { VStack, HStack, Heading, Text, Button } from "@astryxdesign/core";
import { ArrowUp, Github, Linkedin, Coffee, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  void isDark;
  const { locale, data } = useLanguage();
  const { profile, socials } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const handleNavClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Exact Kreativa 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Column 1: Brand & Socials */}
          <VStack gap={4} className="space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick("tentang")}
              className="flex items-center gap-2.5 p-0 bg-transparent border-0 cursor-pointer text-left"
            >
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect width="40" height="40" rx="8" className="fill-slate-100" />
                <path d="M11 29V11H16V20.5L25 11H29L20 20.5L29 29H25L16 22.5V29H11Z" className="fill-slate-900" />
              </svg>
              <Heading level={3} className="text-xl font-bold text-white">
                {profile.name}
              </Heading>
            </button>
            <Text type="body" className="text-sm text-slate-400 leading-relaxed">
              {locale === "id-ID"
                ? "Membangun sistem perangkat lunak berkinerja tinggi, pipeline data analitik OLAP, dan riset applied machine learning yang andal."
                : "Transforming ideas into resilient software architectures, analytical OLAP warehouses, and applied AI systems."}
            </Text>
            <HStack gap={3} vAlign="center" className="pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Norfa Bagas"
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Norfa Bagas"
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socials.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Medium bgsnorfa"
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href={socials.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                aria-label="Buy Me a Coffee bgsnorfa"
                className="text-slate-400 hover:text-amber-400 transition-colors p-1"
              >
                <Coffee className="w-5 h-5" />
              </a>
            </HStack>
          </VStack>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              {locale === "id-ID" ? "Keahlian Utama" : "Capabilities"}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0">
              <li>Backend & Microservices</li>
              <li>Data Warehouse & OLAP</li>
              <li>Applied Machine Learning</li>
              <li>Clean Architecture & TDD</li>
              <li>Docker & DevOps Tooling</li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              {locale === "id-ID" ? "Navigasi" : "Navigation"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400 list-none p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("tentang")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Beranda (Home)" : "Home"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("ringkasan")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Tentang Saya" : "About Us"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("keahlian")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Layanan & Kemampuan" : "Services"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("nilai")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Nilai & Prinsip" : "Our Values"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("pengalaman")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Pengalaman Kerja" : "Experience"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("proyek")}
                  className="hover:text-white transition-colors p-0 bg-transparent border-0 cursor-pointer text-sm text-slate-400"
                >
                  {locale === "id-ID" ? "Proyek & Repositori" : "Projects"}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              {locale === "id-ID" ? "Kontak & Lokasi" : "Contact"}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400 list-none p-0 m-0">
              <li>{profile.location}</li>
              <li>
                GitHub:{" "}
                <a href={socials.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  @norfabagas
                </a>
              </li>
              <li>
                Medium:{" "}
                <a href={socials.medium} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  @bgsnorfa
                </a>
              </li>
              <li>
                Coffee:{" "}
                <a href={socials.buymeacoffee} target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300">
                  buymeacoffee.com/bgsnorfa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <Button
            label="Back to top"
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white p-2 rounded-md transition-colors"
          >
            <HStack gap={1} vAlign="center">
              <span>{locale === "id-ID" ? "Kembali ke atas" : "Back to top"}</span>
              <ArrowUp className="w-4 h-4" />
            </HStack>
          </Button>
        </div>
      </div>
    </footer>
  );
}
