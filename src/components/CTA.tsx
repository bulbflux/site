import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useLanguage } from "../context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 dark:from-gray-950 via-gray-800 dark:via-gray-900 to-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300"
    >

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-80 sm:w-96 h-80 sm:h-96 
                     bg-gradient-to-br from-blue-600 to-green-500 
                     rounded-full blur-3xl opacity-30"
        />

        {/* Lightbulbs decor */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 opacity-5">
          <Lightbulb className="w-full h-full text-blue-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 opacity-5">
          <Lightbulb className="w-full h-full text-green-400" />
        </div>
      </div>

      {/* CONTENT */}
      <FadeInWhenVisible>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t("cta.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 
                             bg-clip-text text-transparent">
              {t("cta.highlight")}
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 
                        mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>

          {/* FORM */}
          <form className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-left">

            {/* NAME */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">{t("form.name")}</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={t("form.name_placeholder")}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                           focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@email.com"
                required
              />
            </div>

            {/* MONTHLY REVENUE — DROPDOWN */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">{t("form.revenue")}</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option className="text-gray-800" value="">
                  {t("form.revenue_placeholder")}
                </option>
                <option className="text-gray-800" value="0-5k">0–5k €</option>
                <option className="text-gray-800" value="5-10k">5–10k €</option>
                <option className="text-gray-800" value="10-20k">10–20k €</option>
                <option className="text-gray-800" value="20-50k">20–50k €</option>
                <option className="text-gray-800" value="50k+">50k+ €</option>
              </select>
            </div>

            {/* MAIN CHALLENGE — DROPDOWN (single-select) */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">{t("form.challenge")}</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option className="text-gray-800" value="">
                  {t("form.challenge_placeholder")}
                </option>
                <option className="text-gray-800" value="leads">{t("form.c_leads")}</option>
                <option className="text-gray-800" value="conversion">{t("form.c_conversion")}</option>
                <option className="text-gray-800" value="scaling">{t("form.c_scaling")}</option>
                <option className="text-gray-800" value="strategy">{t("form.c_strategy")}</option>
              </select>
            </div>

            {/* GOALS */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">{t("form.goal")}</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                           focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={t("form.goal_placeholder")}
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-500 
                         text-white font-bold rounded-lg hover:scale-105 
                         transition-transform duration-300"
            >
              {t("form.submit")}
            </button>
          </form>

          {/* NOTE */}
          <p className="text-xs sm:text-sm text-gray-400 mt-4">
            {t("cta.note")}
          </p>

        </div>
      </FadeInWhenVisible>
    </section>
  );
}
