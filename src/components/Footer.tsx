import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">

          {/* COLUMN 1 — BRAND + CERTIFICATION */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">

            {/* LOGO (complete SVG, auto light/dark) */}
            <img
              src={document.documentElement.classList.contains("dark") 
                ? "/bulbflux_logo_footer_light.svg" 
                : "/bulbflux_logo_footer_dark.svg"}
              alt="BulbFlux Logo"
              className="h-10 sm:h-12 w-auto"
            />

            {/* GOOGLE CERTIFICATION — EXACT GRADIENT */}
            <a
              href="https://skillshop.credential.net/7bc12c57-f026-4096-9d57-cf34d6d21d7e#acc.FB6KyEfq"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 opacity-90 dark:opacity-100 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src="/c4ce18e3-4b05-4fc1-9014-9da03d04a082.png"
                alt="Google Ads Search Certified Badge"
                className="w-6 sm:w-8 h-auto"
              />

              <span
                className="
                  text-xs sm:text-sm font-semibold 
                  bg-clip-text text-transparent
                  transition-all duration-500
                  group-hover:brightness-125 group-hover:saturate-150 group-hover:scale-[1.03]
                "
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
                }}
              >
                Google Ads Certified
              </span>
            </a>

            {/* COPYRIGHT (mobile only) */}
            <p className="text-xs text-gray-500 dark:text-gray-500 md:hidden mt-2">
              {t("footer.copyright")}
            </p>
          </div>

          {/* COLUMN 2 — CONTACT INFO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("footer.subtitle")}
            </p>

            <a
              href="mailto:bulbflux@gmail.com"
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 
                         hover:text-blue-600 dark:hover:text-blue-400 
                         transition-colors duration-300 font-medium"
            >
              bulbflux@gmail.com
            </a>
          </div>

          {/* COLUMN 3 — LEGAL LINKS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">

            <a
              href="/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("footer.privacy")}
            </a>

            <a
              href="/terms-and-conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>

        {/* COPYRIGHT (desktop only) */}
        <div className="hidden md:block text-center pt-8 mt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            {t("footer.copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}
