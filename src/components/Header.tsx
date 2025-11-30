import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO (replace text + icon with one SVG) */}
        <div
          className="flex items-center gap-2 group cursor-pointer select-none"
          onClick={scrollToTop}
        >
          <img
            src={isDark ? "/bulbflux_logo_header_dark.svg" : "/bulbflux_logo_header_light.svg"}
            alt="BulbFlux Logo"
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-3 sm:gap-8">

          <button
            onClick={scrollToTop}
            className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 font-medium transition-all duration-300"
          >
            {t("header.home")}
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 font-medium transition-all duration-300"
          >
            {t("header.services")}
          </button>

          <button
            onClick={() => scrollTo("process")}
            className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 font-medium transition-all duration-300"
          >
            {t("header.process")}
          </button>

          <button
            onClick={() => scrollTo("results")}
            className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 font-medium transition-all duration-300"
          >
            {t("header.results")}
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 font-medium transition-all duration-300"
          >
            {t("header.contact")}
          </button>

          {/* GOOGLE ADS BADGE */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-950/30">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span
              className="text-[11px] font-medium bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
              }}
            >
              Google Ads Certified
            </span>
          </div>

          {/* LANGUAGE TOGGLE */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-md text-sm font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {lang.toUpperCase()}
          </button>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
