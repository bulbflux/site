import { CheckCircle } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from '../context/LanguageContext';

export default function Results() {
  const { t } = useLanguage();

  const outcomes = [
    t("results.r1"),
    t("results.r2"),
    t("results.r3"),
    t("results.r4"),
    t("results.r5"),
    t("results.r6"),
  ];

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("results.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {t("results.highlight")}
            </span>
          </h2>
        </div>

        <FadeInWhenVisible>
          <div className="relative">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl blur-xl opacity-20" />

            {/* CONTENT CARD */}
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group">

                    {/* ICON BUBBLE */}
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 
                                      bg-gradient-to-br from-blue-600 to-green-500 
                                      rounded-full flex items-center justify-center 
                                      group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                      </div>
                    </div>

                    {/* TEXT */}
                    <p className="text-sm sm:text-base lg:text-lg 
                                  text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
