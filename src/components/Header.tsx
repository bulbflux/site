import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-2 sm:gap-0 group cursor-pointer flex-1 sm:flex-initial">
          <img
            src="/bulbflux_google.png"
            alt="BulbFlux"
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg"
          />
          <span
            className="text-lg sm:text-3xl font-bold text-gray-900 dark:text-white 
                       group-hover:text-transparent group-hover:bg-gradient-to-r
                       group-hover:from-blue-600 group-hover:to-green-500 
                       group-hover:bg-clip-text transition-all duration-300"
          >
            BulbFlux
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-3 sm:gap-8">

          {/* Services Button */}
          <button
            onClick={scrollToServices}
            className="hidden sm:block text-gray-700 dark:text-gray-300
                       hover:text-transparent hover:bg-gradient-to-r 
                       hover:from-blue-600 hover:to-green-500 hover:bg-clip-text
                       font-medium transition-all duration-300"
          >
            Serviços
          </button>

          {/* Google Ads Certified Badge */}
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full
                       border border-blue-500/20 bg-blue-50 dark:bg-blue-950/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />

            {/* Multicolor Google Ads Text */}
            <span
              className="text-[11px] font-medium bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
              }}
            >
              Google Ads Certified
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="https://calendar.app.google/NrVJcfEU5t7WjVBb9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 bg-gradient-to-r 
                       from-blue-600 to-green-500 text-white rounded-lg 
                       font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-105 
                       transition-all duration-300"
          >
            Marcar Call
          </a>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                       text-gray-800 dark:text-gray-200 
                       hover:bg-gray-200 dark:hover:bg-gray-700 
                       transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

      </div>
    </header>
  );
}
