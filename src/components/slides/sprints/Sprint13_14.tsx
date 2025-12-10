import { Smartphone, Rocket, CheckCircle, Zap, Link, TrendingUp } from 'lucide-react';

export function Sprint13_14() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 13-14: PWA y Lanzamiento Final</h2>
          <p className="text-xl text-purple-200">Progressive Web App y Producción</p>
        </div>

        {/* Sprint 13 - PWA */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Smartphone className="w-12 h-12 text-blue-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 13: Transformación a PWA</h3>
              <p className="text-white/80 leading-relaxed">
                Convertir el sistema en Progressive Web App mejorando accesibilidad, rendimiento 
                y experiencia de usuario multiplataforma.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Smartphone className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Instalable</div>
              <div className="text-xs text-white/70">App Nativa</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Offline</div>
              <div className="text-xs text-white/70">Funcional</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <TrendingUp className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">+25%</div>
              <div className="text-xs text-white/70">Performance</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Multi</div>
              <div className="text-xs text-white/70">Plataforma</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Tecnologías PWA
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-blue-300">manifest.json:</strong> Metadata y configuración de app</p>
                <p>✓ <strong className="text-cyan-300">Service Worker:</strong> Caché y funcionamiento offline</p>
                <p>✓ <strong className="text-purple-300">Lighthouse:</strong> Mejora 25% en rendimiento</p>
                <p>✓ <strong className="text-green-300">Compatibilidad:</strong> Chrome, Edge, Safari, Firefox</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm mb-4">
                <a href="https://finerio.atlassian.net/wiki/external/YWMyOTkyZGY1YjY2NGE2Mjk5ZGRjNDMzOTNmZTIxNDc" 
                   className="block text-blue-300 hover:text-blue-200 truncate" target="_blank" rel="noopener noreferrer">
                  📱 Pruebas Compatibilidad PWA
                </a>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <p className="text-white/90 text-sm">Sistema instalable como app nativa con soporte offline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 14 - Lanzamiento Final */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Rocket className="w-12 h-12 text-green-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 14: Lanzamiento Final Beta Pública</h3>
              <p className="text-white/80 leading-relaxed">
                Despliegue estable de la versión final validando calidad, seguridad y experiencia 
                de usuario para producción.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">14</div>
              <div className="text-xs text-white/70">Sprints Completados</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Rocket className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">100%</div>
              <div className="text-xs text-white/70">Funcionalidades</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Alta</div>
              <div className="text-xs text-white/70">Estabilidad</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <TrendingUp className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Prod</div>
              <div className="text-xs text-white/70">Ready</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Validaciones Finales
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-green-300">Pruebas funcionales:</strong> Todos los módulos operativos</p>
                <p>✓ <strong className="text-emerald-300">Pruebas de rendimiento:</strong> Optimización completa</p>
                <p>✓ <strong className="text-blue-300">Monitoreo continuo:</strong> Estabilidad verificada</p>
                <p>✓ <strong className="text-purple-300">Documentación:</strong> Procesos y guías actualizadas</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-green-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm mb-4">
                <a href="https://finerio.atlassian.net/wiki/external/OThiOTEwOGUzMWMwNDYzOTk4Y2MyMTc2MmE0M2M2YjM" 
                   className="block text-green-300 hover:text-green-200 truncate" target="_blank" rel="noopener noreferrer">
                  🚀 Lanzamiento Final Completo
                </a>
              </div>
              <div className="bg-green-500/20 rounded-lg p-3">
                <p className="text-white/90 text-sm">Sistema en producción con alta estabilidad y rendimiento óptimo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logro Final */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-purple-300" />
            Hito Alcanzado: Proyecto Completo
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-4xl text-purple-300 mb-2">14</div>
              <p className="text-white mb-1">Sprints Exitosos</p>
              <p className="text-white/60 text-sm">Sept - Dic 2025</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-4xl text-pink-300 mb-2">10+</div>
              <p className="text-white mb-1">Módulos Desarrollados</p>
              <p className="text-white/60 text-sm">Completamente Funcionales</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-4xl text-blue-300 mb-2">100%</div>
              <p className="text-white mb-1">Objetivos Cumplidos</p>
              <p className="text-white/60 text-sm">Listo para Producción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}