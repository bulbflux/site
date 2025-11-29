import { Search, Zap, Users, TrendingUp } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const values = [
  {
    icon: Search,
    title: 'Identificar Problemas',
    description:
      'Perceba exatamente onde o seu funnel perde receita e que bloqueios impedem as conversões.',
  },
  {
    icon: Zap,
    title: 'Desenhar Funnels de Alta Conversão',
    description:
      'Criar percursos otimizados que transformam tráfego frio em compras e strategy calls.',
  },
  {
    icon: Users,
    title: 'Gerar Leads Consistentes',
    description:
      'Desenvolver sistemas escaláveis que atraem leads de alta qualidade todos os meses.',
  },
  {
    icon: TrendingUp,
    title: 'Escalar em Vários Canais',
    description:
      'Replicar o que funciona em paid ads, estratégias locais e plataformas digitais.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>

              {/* CARD */}
              <div
                className="group p-6 sm:p-8 bg-gray-50 dark:bg-gray-900 
                           border border-gray-100 dark:border-gray-800 
                           rounded-2xl hover:shadow-xl hover:scale-105 
                           transition-all duration-300"
              >
                {/* ICON */}
                <div
                  className="w-12 sm:w-14 h-12 sm:h-14 
                             bg-gradient-to-br from-blue-600 to-green-500
                             rounded-xl flex items-center justify-center mb-4 sm:mb-6
                             group-hover:scale-110 transition-transform duration-300"
                >
                  <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>

              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
