import { Code, Cloud, Users, Zap, BookOpen, Trophy } from 'lucide-react';

export function Aprendizajes() {
  const areas = [
    {
      icon: Cloud,
      title: 'Infraestructura Cloud',
      items: [
        'Dominio de servicios AWS (Cognito, Lambda, S3, DynamoDB)',
        'Infrastructure as Code con Terraform',
        'Arquitectura serverless y escalable',
        'Gestión de entornos multi-tenant'
      ],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Code,
      title: 'Desarrollo Frontend',
      items: [
        'React con TypeScript en proyectos enterprise',
        'Gestión de estado con Zustand',
        'Progressive Web Apps (PWA)',
        'Diseño de componentes reutilizables'
      ],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Zap,
      title: 'Seguridad y Autenticación',
      items: [
        'Implementación de OAuth 2.0',
        'Manejo seguro de JWT',
        'Arquitectura de seguridad multi-capa',
        'Buenas prácticas de protección de datos'
      ],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Users,
      title: 'Metodologías Ágiles',
      items: [
        'Scrum en un entorno real de desarrollo',
        'Planificación y estimación de sprints',
        'Gestión de backlog y priorización',
        'Colaboración efectiva en equipo remoto'
      ],
      color: 'from-orange-500/20 to-amber-500/20'
    },
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Aprendizajes Técnicos</h2>
          <p className="text-lg text-purple-200">Competencias y habilidades desarrolladas</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${area.color} backdrop-blur-sm border border-white/20 rounded-2xl p-2.5`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className="w-5 h-5 text-white" />
                  <h3 className="text-xs text-white">{area.title}</h3>
                </div>
                <ul className="space-y-1">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-white/80 text-xs">
                      <span className="text-purple-300 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <BookOpen className="w-5 h-5 text-indigo-300" />
              <h3 className="text-xs text-white">Habilidades Blandas</h3>
            </div>
            <ul className="space-y-0.5 text-white/80 text-xs">
              <li>• Comunicación con stakeholders</li>
              <li>• Adaptabilidad a cambios</li>
              <li>• Trabajo colaborativo</li>
              <li>• Gestión del tiempo</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Trophy className="w-5 h-5 text-green-300" />
              <h3 className="text-xs text-white">Logros Profesionales</h3>
            </div>
            <ul className="space-y-0.5 text-white/80 text-xs">
              <li>• Liderar proyecto enterprise completo</li>
              <li>• Arquitectura escalable en AWS</li>
              <li>• 14 sprints exitosos</li>
              <li>• Validación con clientes reales</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}