import { MessageCircle, Layers, Rocket } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const steps = [
  {
    icon: MessageCircle,
    step: 'Etapa 1',
    title: 'Discovery Call',
    description: 'Compreender o seu negócio, objetivos e principais desafios.',
    timeline: '30–45 minutos',
  },
  {
    icon: Layers,
    step: 'Etapa 2',
    title: 'Strategy Design',
    description: 'Receba um roadmap claro de funnels e canais para aumentar a receita.',
    timeline: 'Entregue em 3–5 dias úteis',
  },
  {
    icon: Rocket,
    step: 'Etapa 3',
    title: 'Execução & Otimização',
    description: 'Implementar, testar, melhorar e escalar a performance em vários canais.',
    timeline: 'Otimização contínua',
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Um Processo{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Claro e Eficaz
            </span>
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.15}>
              <div className="relative">

                {/* ICON + NUMBER */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    {/* CIRCLE GOOGLE */}
                    <div className="w-20 sm:w-24 h-20 sm:h-24 
                                    bg-gradient-to-br from-blue-600 to-green-500
                                    rounded-full flex items-center justify-center shadow-xl">
                      <step.icon className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                    </div>

                    {/* STEP NUMBER */}
                    <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 
                                    bg-white dark:bg-gray-950 border-2 
                                    border-blue-100 dark:border-blue-700
                                    rounded-full flex items-center justify-center 
                                    text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {index + 1}
                    </div>
                  </div>

                  {/* LABEL */}
                  <span className="text-xs sm:text-sm font-semibold 
                                   text-transparent bg-gradient-to-r 
                                   from-blue-600 to-green-500 bg-clip-text mb-2">
                    {step.step}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold 
                                 text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 
                                leading-relaxed max-w-xs mb-3">
                    {step.description}
                  </p>

                  {/* TIMELINE */}
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {step.timeline}
                  </p>
                </div>

                {/* CONNECTING LINE */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 
                                  bg-gradient-to-r from-blue-600 to-green-500 opacity-30" />
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
