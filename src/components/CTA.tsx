import { ArrowRight, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 dark:from-gray-950 via-gray-800 dark:via-gray-900 to-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Google Glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-80 sm:w-96 h-80 sm:h-96 
                     bg-gradient-to-br from-blue-600 to-green-500 
                     rounded-full blur-3xl opacity-30"
        />

        {/* Lightbulbs decor */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 
                        w-24 sm:w-32 h-২৪ sm:h-৩২ opacity-5">
          <Lightbulb
            className="w-full h-full text-blue-400 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 
                        w-24 sm:w-32 h-24 sm:h-32 opacity-5">
          <Lightbulb className="w-full h-full text-green-400" />
        </div>
      </div>

      {/* CONTENT */}
      <FadeInWhenVisible>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pronto para Escalar a Sua{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 
                             bg-clip-text text-transparent">
              Receita?
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 
                        mb-8 sm:mb-12 max-w-২xl mx-auto leading-relaxed">
            Marque uma consulta gratuita e descubra a estratégia exata que o seu negócio precisa.
          </p>

          {/* BUTTON */}
          <a
            href="https://calendar.app.google/NrVJcfEU5t7WjVBb9"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 
                       bg-gradient-to-r from-blue-600 to-green-500 
                       text-white rounded-lg font-bold text-sm sm:text-base md:text-lg 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300 
                       flex items-center justify-center gap-2 sm:gap-3 mx-auto inline-flex mb-4 sm:mb-6"
          >
            Marcar Strategy Call
            <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 
                                   group-hover:translate-x-1 transition-transform" />
          </a>

          {/* SUBNOTE */}
          <p className="text-xs sm:text-sm text-gray-400">
            Sem compromissos. Sem pressão. 100% estratégia.
          </p>
        </div>
      </FadeInWhenVisible>

    </section>
  );
}
