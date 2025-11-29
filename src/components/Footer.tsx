export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">

          {/* Logo + Brand */}
          <div className="flex items-center gap-2 sm:gap-0 justify-center">
            <img
              src="/bulbflux_google.png"
              alt="BulbFlux"
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg"
            />
            <span className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
              BulbFlux
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Digital Marketing Consulting
          </p>

          {/* Email */}
          <a
            href="mailto:bulbflux@gmail.com"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 
                       hover:text-blue-600 dark:hover:text-blue-400 
                       transition-colors duration-300 font-medium"
          >
            bulbflux@gmail.com
          </a>

          {/* Links */}
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500 justify-center">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Política de Privacidade
            </a>

            <span className="text-gray-300 dark:text-gray-700">•</span>

            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Termos e Condições
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 pt-4 sm:pt-6 
                         border-t border-gray-100 dark:border-gray-800 w-full">
            © BulbFlux. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
