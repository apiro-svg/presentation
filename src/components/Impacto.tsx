import { TrendingUp, Users, Clock, Star, CheckCircle, BarChart3 } from 'lucide-react';

export function Impacto() {
  const metricas = [
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Mejora en rendimiento',
      description: 'Medido con Lighthouse',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-300'
    },
    {
      icon: Clock,
      value: '-60%',
      label: 'Tiempo de integración',
      description: 'Reducción estimada',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-300'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Satisfacción beta',
      description: 'Feedback positivo',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-300'
    },
    {
      icon: Star,
      value: '14',
      label: 'Sprints completados',
      description: 'Metodología Scrum',
      color: 'from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-300'
    },
  ];

  const beneficios = [
    {
      title: 'Para los Clientes B2B',
      items: [
        'Reducción drástica del tiempo de pruebas iniciales',
        'Mayor confianza en la solución antes de la integración',
        'Disminución de barreras técnicas de entrada',
        'Experiencia moderna y profesional'
      ],
      icon: Users,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Para Finerio Connect',
      items: [
        'Incremento en tasa de conversión comercial',
        'Reducción de carga en soporte técnico',
        'Diferenciación competitiva en el mercado',
        'Base escalable para futuras funcionalidades'
      ],
      icon: BarChart3,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Para el Ecosistema FinTech',
      items: [
        'Impulso a la adopción de Open Banking',
        'Mejora en estándares de experiencia de integración',
        'Contribución a la inclusión financiera',
        'Alineación con ODS 9, 4 y 17'
      ],
      icon: TrendingUp,
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Impacto del Proyecto</h2>
          <p className="text-lg text-purple-200">Métricas y beneficios tangibles</p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {metricas.map((metrica, idx) => {
            const Icon = metrica.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${metrica.color} backdrop-blur-sm border border-white/20 rounded-2xl p-2`}
              >
                <Icon className={`w-6 h-6 ${metrica.iconColor} mb-1`} />
                <div className="text-xl text-white mb-0.5">{metrica.value}</div>
                <div className="text-xs text-white/90 mb-0.5">{metrica.label}</div>
                <div className="text-white/60 text-xs">{metrica.description}</div>
              </div>
            );
          })}
        </div>

        {/* Beneficios por stakeholder */}
        <div className="grid grid-cols-3 gap-2">
          {beneficios.map((beneficio, idx) => {
            const Icon = beneficio.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${beneficio.color} backdrop-blur-sm border border-white/20 rounded-2xl p-2.5`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className="w-5 h-5 text-white" />
                  <h3 className="text-xs text-white">{beneficio.title}</h3>
                </div>
                <div className="space-y-1">
                  {beneficio.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-1">
                      <CheckCircle className="w-3 h-3 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white/80 text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}