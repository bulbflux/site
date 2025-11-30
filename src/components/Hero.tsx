// @ts-nocheck

import { ArrowRight, Sparkles, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 pt-20 transition-colors duration-300">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-green-500 rounded-full blur-3xl dark:opacity-20 opacity-10"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-green-500 to-blue-600 rounded-full blur-3xl dark:opacity-20 opacity-10"
        />

        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-3 dark:opacity-5">
          <Lightbulb className="w-full h-full text-blue-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-3 dark:opacity-5">
          <Lightbulb className="w-full h-full text-green-500" />
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center"
      >
        {/* BADGE */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-6 sm:mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs sm:text-sm font-medium text-white">
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          {t("hero.title1")}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            {t("hero.title2")}
          </span>
        </motion.h1>

        {/* SUBTEXT 1 */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          {t("hero.subtitle1")}
        </motion.p>

        {/* SUBTEXT 2 */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          {t("hero.subtitle2")}
        </motion.p>

        {/* BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="https://calendar.app.google/NrVJcfEU5t7WjVBb9"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t("hero.ctaPrimary")}
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-sm sm:text-base border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >
            {t("hero.ctaSecondary")}
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
