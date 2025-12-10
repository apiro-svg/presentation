import { Calendar, Code, TestTube, Rocket } from 'lucide-react';

export function Desarrollo() {
  const sprints = [
    {
      num: '1-2',
      title: 'Planificación y Documentación',
      icon: Calendar,
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-300/30',
      items: [
        'Definición de alcance y objetivos',
        'Asignación de roles (Scrum)',
        'Documentación de procesos (PPP)',
        'Estructura en Confluence'
      ]
    },
    {
      num: '3-4',
      title: 'Login y Landing Page',
      icon: Code,
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-300/30',
      items: [
        'Aprovisionamiento con Terraform',
        'Sistema de tenants en AWS',
        'Interfaz de login funcional',
        'Landing page principal'
      ]
    },
    {
      num: '5-7',
      title: 'Módulos Core',
      icon: Code,
      color: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-300/30',
      items: [
        'Instituciones disponibles',
        'Configuración de webhooks',
        'Solicitud de agregaciones',
        'Integración con APIs'
      ]
    },
    {
      num: '8',
      title: 'Beta Cerrada',
      icon: TestTube,
      color: 'from-orange-500/20 to-amber-500/20',
      border: 'border-orange-300/30',
      items: [
        'Pruebas con usuarios internos',
        'Recopilación de feedback',
        'Ajustes de usabilidad',
        'Validación de funcionalidades'
      ]
    },
    {
      num: '9-10',
      title: 'Autorizaciones',
      icon: Code,
      color: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-300/30',
      items: [
        'Solicitud de autorizaciones',
        'Detalle de autorizaciones',
        'Gestión de permisos',
        'Trazabilidad completa'
      ]
    },
    {
      num: '11-12',
      title: 'Beta Pública',
      icon: Rocket,
      color: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-300/30',
      items: [
        'Demo con cliente externo',
        'Encuestas de evaluación',
        'Implementación de mejoras',
        'Optimización UX/UI'
      ]
    },
    {
      num: '13-14',
      title: 'PWA y Lanzamiento',
      icon: Rocket,
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-300/30',
      items: [
        'Conversión a PWA',
        'Service Worker y caché',
        'Pruebas de rendimiento',
        'Lanzamiento final'
      ]
    }
  ];

  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-white mb-2 text-center">
          Desarrollo del Proyecto
        </h2>
        <p className="text-lg text-purple-200 text-center mb-6">
          14 Sprints Scrum con entregables progresivos
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sprints.map((sprint) => {
            const Icon = sprint.icon;
            return (
              <div
                key={sprint.num}
                className={`bg-gradient-to-br ${sprint.color} backdrop-blur-sm border ${sprint.border} rounded-2xl p-6 hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                  <div>
                    <p className="text-white/60">Sprint {sprint.num}</p>
                    <h3 className="text-xl text-white">{sprint.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80">
                  {sprint.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-300 mt-1">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-3">Herramientas de Gestión</h3>
          <div className="grid md:grid-cols-3 gap-4 text-white/80">
            <div>
              <p className="text-purple-300">Jira</p>
              <p>Planificación y seguimiento</p>
            </div>
            <div>
              <p className="text-purple-300">Confluence</p>
              <p>Documentación del proyecto</p>
            </div>
            <div>
              <p className="text-purple-300">Slack</p>
              <p>Comunicación del equipo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}