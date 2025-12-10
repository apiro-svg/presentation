import { Lightbulb, TrendingUp, Users, Zap, Target, Globe } from 'lucide-react';

export function Recomendaciones() {
  const recomendaciones = [
    {
      icon: Zap,
      plazo: 'Corto Plazo (1-3 meses)',
      color: 'from-blue-500/20 to-cyan-500/20',
      items: [
        'Implementar capa de métricas y analytics para seguimiento de uso',
        'Incorporar pruebas automatizadas (unit, integration, e2e)',
        'Agregar más casos de uso en la documentación',
        'Desarrollar tutoriales en video para onboarding'
      ]
    },
    {
      icon: TrendingUp,
      plazo: 'Mediano Plazo (3-6 meses)',
      color: 'from-purple-500/20 to-pink-500/20',
      items: [
        'Ampliar funcionalidades del Control Center (analytics, reportes)',
        'Integrar con herramientas internas de soporte',
        'Implementar modo oscuro y personalización de temas',
        'Desarrollar versión móvil nativa (React Native)'
      ]
    },
    {
      icon: Globe,
      plazo: 'Largo Plazo (6-12 meses)',
      color: 'from-green-500/20 to-emerald-500/20',
      items: [
        'Expandir a nuevos mercados regionales',
        'Desarrollar módulos de IA para detección de anomalías',
        'Obtener certificaciones de seguridad (ISO 27001, SOC 2)',
        'Crear marketplace de integraciones con terceros'
      ]
    },
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Recomendaciones</h2>
          <p className="text-lg text-purple-200">Hoja de ruta para evolución del proyecto</p>
        </div>

        <div className="space-y-2 mb-3">
          {recomendaciones.map((rec, idx) => {
            const Icon = rec.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${rec.color} backdrop-blur-sm border border-white/20 rounded-2xl p-2.5`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className="w-5 h-5 text-white" />
                  <h3 className="text-sm text-white">{rec.plazo}</h3>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {rec.items.map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-1.5">
                      <p className="text-white/80 flex items-start gap-1 text-xs">
                        <span className="text-purple-300 mt-0.5 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Users className="w-5 h-5 text-orange-300" />
              <h3 className="text-xs text-white">Para Futuros Practicantes</h3>
            </div>
            <ul className="space-y-0.5 text-white/80 text-xs">
              <li>• Fortalecer habilidades en cloud computing</li>
              <li>• Dominar framework frontend moderno</li>
              <li>• Practicar metodologías ágiles</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Target className="w-5 h-5 text-indigo-300" />
              <h3 className="text-xs text-white">Para la Empresa</h3>
            </div>
            <ul className="space-y-0.5 text-white/80 text-xs">
              <li>• Evaluar sesiones de feedback con clientes</li>
              <li>• Documentar casos de uso</li>
              <li>• Planificar roadmap de features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}