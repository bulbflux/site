import { Workflow, Lightbulb, Target, BarChart3, Settings, Zap } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Workflow,
      title: t("services.s1_title"),
      description: t("services.s1_desc"),
      bullets: [
        t("services.s1_b1"),
        t("services.s1_b2"),
        t("services.s1_b3"),
      ],
    },
    {
      icon: Lightbulb,
      title: t("services.s2_title"),
      description: t("services.s2_desc"),
      bullets: [
        t("services.s2_b1"),
        t("services.s2_b2"),
        t("services.s2_b3"),
      ],
    },
    {
      icon: Target,
      title: t("services.s3_title"),
      description: t("services.s3_desc"),
      bullets: [
        t("services.s3_b1"),
        t("services.s3_b2"),
        t("services.s3_b3"),
      ],
    },
    {
      icon: BarChart3,
      title: t("services.s4_title"),
      description: t("services.s4_desc"),
      bullets: [
        t("services.s4_b1"),
        t("services.s4_b2"),
        t("services.s4_b3"),
      ],
    },
    {
      icon: Settings,
      title: t("services.s5_title"),
      description: t("services.s5_desc"),
      bullets: [
        t("services.s5_b1"),
        t("services.s5_b2"),
        t("services.s5_b3"),
      ],
    },
    {
      icon: Zap,
      title: t("services.s6_title"),
      description: t("services.s6_desc"),
      bullets: [
        t("services.s6_b1"),
        t("services.s6_b2"),
        t("services.s6_b3"),
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 dark:opacity-5 opacity-3">
          <Lightbulb className="w-full h-full text-blue-500 rotate-45" />
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 dark:opacity-5 opacity-3">
          <Lightbulb className="w-full h-full text-green-500 -rotate-45" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {t("services.highlight")}
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.08}>
              <div
                className="group p-6 sm:p-8 bg-white dark:bg-gray-800 
                           border border-gray-100 dark:border-gray-700 
                           rounded-2xl hover:border-transparent 
                           hover:shadow-2xl transition-all duration-300 relative
                           h-full flex flex-col"
              >

                {/* TOP RIGHT BULB */}
                <div className="absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 dark:opacity-5 opacity-3">
                  <Lightbulb className="w-full h-full text-blue-500" />
                </div>

                {/* ICON */}
                <div
                  className="w-12 sm:w-16 h-12 sm:h-16 
                             bg-gradient-to-br from-blue-600 to-green-500 
                             rounded-xl flex items-center justify-center mb-4 sm:mb-6 
                             group-hover:scale-110 group-hover:rotate-3 
                             transition-transform duration-300 relative z-10"
                >
                  <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 flex-grow">
                  {service.description}
                </p>

                {/* BULLETS */}
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
