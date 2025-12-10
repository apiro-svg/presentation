import { AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

export function DesafiosSoluciones() {
  const desafios = [
    {
      desafio: 'Curva de aprendizaje de AWS',
      solucion: 'Capacitación intensiva y documentación de AWS, apoyo del equipo de infraestructura',
      categoria: 'Técnico'
    },
    {
      desafio: 'Integración multi-tenant compleja',
      solucion: 'Uso de Terraform para automatizar aprovisionamiento y aislamiento de datos por tenant',
      categoria: 'Arquitectura'
    },
    {
      desafio: 'Gestión de estado en aplicación grande',
      solucion: 'Implementación de Zustand con estructura modular y escalable',
      categoria: 'Frontend'
    },
    {
      desafio: 'Tiempo limitado (1 semana por sprint)',
      solucion: 'Priorización efectiva en Sprint Planning y enfoque en MVP por sprint',
      categoria: 'Metodología'
    },
    {
      desafio: 'Compatibilidad cross-browser',
      solucion: 'Pruebas exhaustivas y uso de características web estándar',
      categoria: 'Frontend'
    },
    {
      desafio: 'Seguridad en autenticación',
      solucion: 'Implementación de AWS Cognito con OAuth 2.0 y JWT',
      categoria: 'Seguridad'
    },
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Desafíos y Soluciones</h2>
          <p className="text-lg text-purple-200">Obstáculos superados durante el desarrollo</p>
        </div>

        <div className="grid gap-2 mb-2.5">
          {desafios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5"
            >
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <div className={`px-2 py-0.5 rounded-full text-xs ${
                    item.categoria === 'Técnico' ? 'bg-blue-500/30 text-blue-200' :
                    item.categoria === 'Arquitectura' ? 'bg-purple-500/30 text-purple-200' :
                    item.categoria === 'Frontend' ? 'bg-green-500/30 text-green-200' :
                    item.categoria === 'Metodología' ? 'bg-yellow-500/30 text-yellow-200' :
                    'bg-red-500/30 text-red-200'
                  }`}>
                    {item.categoria}
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      <AlertTriangle className="w-3 h-3 text-orange-300" />
                      <h3 className="text-white text-xs">Desafío</h3>
                    </div>
                    <p className="text-white/70 text-xs">{item.desafio}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      <CheckCircle className="w-3 h-3 text-green-300" />
                      <h3 className="text-white text-xs">Solución</h3>
                    </div>
                    <p className="text-white/70 text-xs">{item.solucion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-2.5">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-6 h-6 text-green-300 flex-shrink-0" />
            <div>
              <h3 className="text-sm text-white mb-1">Lecciones Aprendidas</h3>
              <p className="text-white/80 leading-relaxed text-xs">
                La resolución de estos desafíos fortaleció las capacidades técnicas y demostró 
                la importancia de planificación ágil y comunicación efectiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}