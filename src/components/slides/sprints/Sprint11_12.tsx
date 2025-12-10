import { Rocket, MessageCircle, Users, Star, CheckCircle, Link, MessageSquare } from 'lucide-react';

export function Sprint11_12() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 11-12: Beta Pública y Feedback</h2>
          <p className="text-xl text-purple-200">Validación con Cliente Externo y Optimización</p>
        </div>

        {/* Sprint 11 - Beta Pública */}
        <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Users className="w-12 h-12 text-pink-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 11: Lanzamiento Beta Pública</h3>
              <p className="text-white/80 leading-relaxed">
                Demo del sistema con cliente bancario externo durante fase de presentación del producto 
                para el equipo de Agregación Bancaria.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Users className="w-8 h-8 text-pink-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">1</div>
              <div className="text-xs text-white/70">Cliente Externo</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Rocket className="w-8 h-8 text-rose-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">100%</div>
              <div className="text-xs text-white/70">Funcionalidades Demo</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <MessageSquare className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Live</div>
              <div className="text-xs text-white/70">Feedback Tiempo Real</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Star className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">100%</div>
              <div className="text-xs text-white/70">Satisfacción</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Actividades Realizadas
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-pink-300">Entorno controlado:</strong> Demostración para cliente potencial</p>
                <p>✓ <strong className="text-rose-300">Presentación completa:</strong> Todas las funcionalidades del sistema</p>
                <p>✓ <strong className="text-yellow-300">Feedback en vivo:</strong> Observaciones y sugerencias directas</p>
                <p>✓ <strong className="text-green-300">Encuestas post-demo:</strong> Evaluación cuantitativa del producto</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-pink-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://forms.gle/VSn7sJYxzBhM6pQv7" 
                   className="block text-pink-300 hover:text-pink-200 truncate" target="_blank" rel="noopener noreferrer">
                  📋 Encuesta Cliente Externo
                </a>
                <a href="https://finerio.atlassian.net/wiki/external/ODI2YmExMGMxZGViNDE4NDkwYWRjZjFiZjJmYWNjODk" 
                   className="block text-pink-300 hover:text-pink-200 truncate" target="_blank" rel="noopener noreferrer">
                  📄 Documentación Beta Pública
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 12 - Feedback */}
        <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <MessageCircle className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 12: Implementación Feedback Beta Pública</h3>
              <p className="text-white/80 leading-relaxed">
                Incorporación de observaciones y mejoras derivadas de la demostración con cliente externo, 
                optimizando flujos y presentación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Mejoras Implementadas
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-purple-300">Optimizaciones UX/UI:</strong> Mejoras visuales y de usabilidad</p>
                <p>✓ <strong className="text-indigo-300">Corrección de flujos:</strong> Inconsistencias eliminadas</p>
                <p>✓ <strong className="text-blue-300">Presentación mejorada:</strong> Información más clara y accesible</p>
                <p>✓ <strong className="text-green-300">Ajustes de rendimiento:</strong> Optimización de carga y respuesta</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-purple-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm mb-4">
                <a href="https://finerio.atlassian.net/wiki/external/M2MwMmI4MGZlY2EzNDQ1ZGE5ZDI0YWVhOTRmMzQ3YzQ" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  🔄 Implementación Feedback
                </a>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <p className="text-white/90 text-sm">Iteración basada en feedback real del mercado B2B</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-green-300" />
            Impacto de estos Sprints
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <CheckCircle className="w-10 h-10 text-green-300 mx-auto mb-2" />
              <p className="text-green-300 mb-2">Validación de Mercado</p>
              <p className="text-white/70 text-sm">Confirmación de valor con cliente real bancario</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <MessageCircle className="w-10 h-10 text-emerald-300 mx-auto mb-2" />
              <p className="text-emerald-300 mb-2">Mejora Continua</p>
              <p className="text-white/70 text-sm">Iteración basada en uso real y necesidades del cliente</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Rocket className="w-10 h-10 text-cyan-300 mx-auto mb-2" />
              <p className="text-cyan-300 mb-2">Preparación Final</p>
              <p className="text-white/70 text-sm">Sistema validado y listo para producción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}