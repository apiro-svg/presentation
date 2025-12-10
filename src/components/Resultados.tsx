import { TrendingUp, Users, Zap, Award, Target, Globe } from 'lucide-react';

export function Resultados() {
  const logros = [
    {
      icon: Target,
      title: 'Centralización de funcionalidades',
      description: 'Consola unificada que reúne todas las capacidades de integración en un solo lugar',
      color: 'text-blue-300'
    },
    {
      icon: Users,
      title: 'Mejora en percepción de valor',
      description: 'Diseño moderno y responsive que profesionaliza la experiencia del usuario',
      color: 'text-purple-300'
    },
    {
      icon: Zap,
      title: 'Experiencia intuitiva',
      description: 'Flujo visual simplificado que facilita la comprensión de autenticación y tokens',
      color: 'text-yellow-300'
    },
    {
      icon: TrendingUp,
      title: 'Reducción de fricción',
      description: 'Menor tiempo de integración al guiar desde el primer acceso',
      color: 'text-green-300'
    },
    {
      icon: Award,
      title: 'Profesionalización de demos',
      description: 'Fortalece presentaciones comerciales sin configuraciones complejas',
      color: 'text-pink-300'
    },
    {
      icon: Globe,
      title: 'Alineamiento con el sector',
      description: 'Posicionamiento al nivel de plataformas tecnológicas líderes',
      color: 'text-cyan-300'
    }
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-white mb-2 text-center">
          Resultados Alcanzados
        </h2>
        <p className="text-lg text-purple-200 text-center mb-4">
          Impacto real en la experiencia de integración
        </p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {logros.map((logro, idx) => {
            const Icon = logro.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5"
              >
                <div className="flex items-start gap-2">
                  <Icon className={`w-5 h-5 ${logro.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-xs text-white mb-0.5">{logro.title}</h3>
                    <p className="text-white/70 text-xs">{logro.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl p-2.5 text-center">
            <div className="text-2xl text-green-300 mb-1">25%</div>
            <p className="text-white/80 text-xs">Mejora rendimiento</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-xl p-2.5 text-center">
            <div className="text-2xl text-blue-300 mb-1">100%</div>
            <p className="text-white/80 text-xs">Feedback positivo</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-xl p-2.5 text-center">
            <div className="text-2xl text-purple-300 mb-1">14</div>
            <p className="text-white/80 text-xs">Sprints completados</p>
          </div>
        </div>
      </div>
    </div>
  );
}