// @ts-nocheck

import { MessageCircle, Layers, Rocket } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      step: t("process.step1"),
      title: t("process.title1"),
      description: t("process.desc1"),
      timeline: t("process.time1"),
    },
    {
      icon: Layers,
      step: t("process.step2"),
      title: t("process.title2"),
      description: t("process.desc2"),
      timeline: t("process.time2"),
    },
    {
      icon: Rocket,
      step: t("process.step3"),
      title: t("process.title3"),
      description: t("process.desc3"),
      timeline: t("process.time3"),
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("process.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {t("process.highlight")}
            </span>
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.15}>
              <div className="relative flex flex-col items-center text-center h-full">

                {/* WRAPPER */}
                <div className="relative flex flex-col items-center mb-6 w-full">

                  {/* LINE BEHIND ICON */}
                  <div
                    className="
                      absolute 
                      top-[48%]       /* ligeiramente acima do centro (48% em vez de 50%) */
                      left-0 
                      w-full 
                      h-0.5 
                      bg-gradient-to-r 
                      from-blue-600 to-green-500 
                      opacity-30
                    "
                  />

                  {/* ICON CIRCLE */}
                  <div className="relative z-10 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center shadow-xl">
                    <step.icon className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                  </div>

                  {/* NUMBER */}
                  <div className="relative z-20 mt-[-12px] w-6 sm:w-8 h-6 sm:h-8 bg-white dark:bg-gray-950 border-2 border-blue-100 dark:border-blue-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    {index + 1}
                  </div>
                </div>

                {/* STEP LABEL */}
                <span className="text-xs sm:text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text mb-2">
                  {step.step}
                </span>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mb-3">
                  {step.description}
                </p>

                {/* TIMELINE */}
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {step.timeline}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
