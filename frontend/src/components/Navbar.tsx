"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // current path
  const searchParams = useSearchParams(); // query params
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी(Hindi)" },
    { code: "bn", label: "বাংলা(Bengali)" },
    { code: "ta", label: "தமிழ்(Tamil)" },
    { code: "te", label: "తెలుగు(Telugu)" },
    { code: "mr", label: "मराठी(Marathi)" },
  ];

  const links = ["home", "features", "about", "programs", "contact"];

  const changeLanguage = (lang: string) => {
    // Refresh page to apply the new language
    router.refresh();
    setLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-green-900/70 backdrop-blur-md border-b border-green-800 overflow-visible">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-green-300 cursor-pointer"
        >
          AgriSense
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="relative text-white hover:text-green-300 transition 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:w-0 after:h-[2px] after:bg-green-300 
                after:transition-all after:duration-300 
                hover:after:w-full cursor-pointer"
            >
              {t(link)}
            </a>
          ))}

          {/* Buttons */}

          <Link
            href="/signup"
            className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            {t("signin")}
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            role="button"
            aria-label="Login"
          >
            {t("login")}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Globe className="w-5 h-5 text-white" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-[9999]"
                >
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    >
                      {lang.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-green-800/95 backdrop-blur-md overflow-visible z-50"
          >
            <div className="flex flex-col items-center space-y-4 py-4 text-white">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover:text-green-300 transition"
                >
                  {t(link)}
                </a>
              ))}

              <Link
                href="/signup"
                className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                {t("signin")}
              </Link>

              <Link
                href="/login"
                className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition"
              >
                {t("login")}
              </Link>

              {/* Language Switcher Mobile */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen((prev) => !prev)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <Globe className="w-5 h-5 text-white" />
                  <span>{t("language")}</span>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-[9999]"
                    >
                      {languages.map((lang) => (
                        <li
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        >
                          {lang.label}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
