import { Workflow, Lightbulb, Target, BarChart3, Settings, Zap } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const services = [
  {
    icon: Workflow,
    title: 'Conversion Funnels',
    description: 'Criação de funnels completos que transformam cliques em clientes.',
    bullets: ['Landing pages', 'Estrutura da oferta', 'Funnel strategy'],
  },
  {
    icon: Lightbulb,
    title: 'Digital Strategy',
    description: 'Planos claros e acionáveis para otimizar performance e escalar resultados.',
    bullets: ['Positioning', 'Seleção de canais', 'Growth prioritization'],
  },
  {
    icon: Target,
    title: 'Lead Generation Systems',
    description: 'Geração de leads através de processos escaláveis e automatizados.',
    bullets: ['Automation', 'Lead magnets', 'High-intent capture'],
  },
  {
    icon: BarChart3,
    title: 'Marketing Optimization',
    description: 'Melhoria contínua de campanhas, eliminação de bottlenecks e aumento de conversões.',
    bullets: ['A/B testing', 'CRO', 'Auditorias de performance'],
  },
  {
    icon: Settings,
    title: 'Consulting & Implementation',
    description: 'Acompanhamento estratégico ou execução completa em vários canais.',
    bullets: ['Hands-on support', 'Implementação', 'Strategic advisory'],
  },
  {
    icon: Zap,
    title: 'Growth Tracking & Analytics',
    description: 'Monitorização e otimização através de métricas e insights data-driven.',
    bullets: ['Dashboards', 'KPIs', 'Revenue tracking'],
  },
];

export default function Services() {
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
            Serviços Pensados para{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Aumentar a Sua Receita
            </span>
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.08}>
              <div
                className="group p-6 sm:p-8 bg-white dark:bg-gray-800 
                           border border-gray-100 dark:border-gray-700 
                           rounded-2xl hover:border-transparent 
                           hover:shadow-2xl transition-all duration-300 relative"
              >

                {/* TOP RIGHT BACKLIGHT BULB */}
                <div className="absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 dark:opacity-5 opacity-3">
                  <Lightbulb className="w-full h-full text-blue-500" />
                </div>

                {/* ICON CIRCLE */}
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
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* BULLETS */}
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r 
                                   from-blue-600 to-green-500 flex-shrink-0"
                      />
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
