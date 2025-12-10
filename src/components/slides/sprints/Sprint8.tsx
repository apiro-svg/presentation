import { Rocket, Users, CheckCircle, TrendingUp, Link, MessageSquare } from 'lucide-react';

export function Sprint8() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprint 8: Lanzamiento Beta Cerrada</h2>
          <p className="text-xl text-purple-200">Validación Interna con Usuarios Seleccionados</p>
        </div>

        {/* Header del Sprint */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Rocket className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Objetivo del Sprint</h3>
              <p className="text-white/80 leading-relaxed">
                Ejecutar el lanzamiento de la <strong className="text-purple-300">versión Beta Cerrada</strong> del 
                OpenFinance Control Center, permitiendo que un <strong className="text-pink-300">grupo seleccionado de 
                usuarios internos</strong> acceda, pruebe las funcionalidades y brinde retroalimentación crítica antes 
                del lanzamiento público.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Users className="w-10 h-10 text-blue-300 mx-auto mb-2" />
              <div className="text-3xl text-white mb-1">12</div>
              <div className="text-sm text-white/70">Usuarios Beta Internos</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <CheckCircle className="w-10 h-10 text-green-300 mx-auto mb-2" />
              <div className="text-3xl text-white mb-1">7</div>
              <div className="text-sm text-white/70">Módulos Probados</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <MessageSquare className="w-10 h-10 text-yellow-300 mx-auto mb-2" />
              <div className="text-3xl text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Respuestas Encuesta</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <TrendingUp className="w-10 h-10 text-purple-300 mx-auto mb-2" />
              <div className="text-3xl text-white mb-1">4.5/5</div>
              <div className="text-sm text-white/70">Satisfacción Promedio</div>
            </div>
          </div>
        </div>

        {/* Actividades y Resultados */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-300" />
              Actividades Realizadas
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-white mb-1">✓ Preparación del entorno Beta Cerrada</p>
                <p className="text-white/60">Configuración controlada con permisos y accesos diferenciados</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-white mb-1">✓ Selección de usuarios internos</p>
                <p className="text-white/60">Coordinación con stakeholders, criterios de uso definidos</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-white mb-1">✓ Monitoreo y soporte continuo</p>
                <p className="text-white/60">Canales de comunicación y registro de feedback activos</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-white mb-1">✓ Encuestas de evaluación</p>
                <p className="text-white/60">Recopilación de opiniones sobre UX, usabilidad y funcionalidades</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-300" />
              Resultados del Sprint
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3">
                <p className="font-semibold text-green-300 mb-1">✓ Beta Cerrada exitosa</p>
                <p className="text-white/70">Todos los módulos operativos con alto nivel de estabilidad</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3">
                <p className="font-semibold text-blue-300 mb-1">✓ Feedback valioso recopilado</p>
                <p className="text-white/70">Identificación de mejoras en UX y flujos de navegación</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                <p className="font-semibold text-purple-300 mb-1">✓ Validación técnica completa</p>
                <p className="text-white/70">Consistencia de datos, estabilidad y rendimiento verificados</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3">
                <p className="font-semibold text-yellow-300 mb-1">✓ Preparado para Beta Pública</p>
                <p className="text-white/70">Sistema listo para usuarios externos con ajustes priorizados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Evidencias */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4 flex items-center gap-2">
            <Link className="w-6 h-6 text-indigo-300" />
            Evidencias y Documentación
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://forms.gle/azEqdqrfov6S8dZy5" 
               className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all" 
               target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">📋 Encuesta Evaluación Interna</p>
                  <p className="text-white/60 text-sm">Feedback de usuarios beta internos</p>
                </div>
              </div>
            </a>
            <a href="https://finerio.atlassian.net/wiki/external/ZDYzOGYyYmI1MmJmNGExM2I1YWEyMDI3MjJiOWFiZWI" 
               className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all" 
               target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-3">
                <Link className="w-8 h-8 text-purple-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">📄 Documentación Confluence</p>
                  <p className="text-white/60 text-sm">Proceso completo de Beta Cerrada</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}