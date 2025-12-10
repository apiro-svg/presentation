import { Building2, Webhook, Settings } from 'lucide-react';

export function Sprint5_6() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-4 py-2 bg-orange-500/30 border border-orange-400/50 rounded-lg text-orange-200 text-sm">
              Sprints 5-6
            </div>
            <Settings className="w-7 h-7 text-orange-300" />
          </div>
          <h2 className="text-4xl text-white mb-2">Módulo de Configuración</h2>
          <p className="text-lg text-purple-200">Instituciones y Webhooks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sprint 5 */}
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
              <Building2 className="w-7 h-7 text-blue-300" />
              Sprint 5: Instituciones
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white mb-2">Funcionalidades</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Listado de instituciones financieras</li>
                  <li>• Filtros de búsqueda</li>
                  <li>• Tarjetas de información</li>
                  <li>• Gestión por tenant</li>
                </ul>
              </div>

              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <p className="text-blue-200 text-sm mb-1"><strong>Integración</strong></p>
                <p className="text-white/70 text-sm">Conexión con endpoints del backend para listar más de 120 instituciones disponibles</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">Componentes reutilizables documentados para futuras secciones del módulo Config</p>
              </div>
            </div>
          </div>

          {/* Sprint 6 */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
              <Webhook className="w-7 h-7 text-purple-300" />
              Sprint 6: Webhooks
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-white mb-2">Niveles de Seguridad</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• OAuth 2.0</li>
                  <li>• API Key</li>
                  <li>• OAuth ROPC</li>
                </ul>
              </div>

              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <p className="text-purple-200 text-sm mb-1"><strong>Configuración</strong></p>
                <p className="text-white/70 text-sm">Formularios para crear, actualizar y listar webhooks con selección de nivel de seguridad</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">Gestión de estados (carga, error, éxito) para asegurar configuraciones correctas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4">Logros de estos Sprints</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-orange-200 mb-2">✓ Módulo Config completo</p>
              <p className="text-white/70 text-sm">Base sólida para gestión de configuraciones del sistema</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-amber-200 mb-2">✓ Arquitectura modular</p>
              <p className="text-white/70 text-sm">Componentes reutilizables que facilitan mantenimiento y escalabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}