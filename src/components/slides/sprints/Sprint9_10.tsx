import { Shield, FileCheck, CheckCircle, Code, Link, Zap } from 'lucide-react';

export function Sprint9_10() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 9-10: Gestión de Autorizaciones</h2>
          <p className="text-xl text-purple-200">Solicitud y Detalle de Autorizaciones Bancarias</p>
        </div>

        {/* Sprint 9 - Solicitud */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Shield className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 9: Solicitud de Autorizaciones</h3>
              <p className="text-white/80 leading-relaxed">
                Módulo para gestionar solicitudes de autorización hacia instituciones vinculadas, 
                controlando el flujo de permisos y comunicación segura con webhooks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Shield className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Permisos</div>
              <div className="text-xs text-white/70">Seguros</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Zustand</div>
              <div className="text-xs text-white/70">State</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Code className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">APIs</div>
              <div className="text-xs text-white/70">REST</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Validado</div>
              <div className="text-xs text-white/70">100%</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Funcionalidades Clave
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-purple-300">Interfaz responsive:</strong> Formularios optimizados</p>
                <p>✓ <strong className="text-pink-300">Componentes modulares:</strong> Tarjetas y controles</p>
                <p>✓ <strong className="text-blue-300">Estado global:</strong> Sincronización automática</p>
                <p>✓ <strong className="text-green-300">Integración APIs:</strong> Flujo completo</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-purple-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/NGFiODc0YWM4YzdiNDIyNjhkYjk4YmFhYTM4MGM1NDA" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  🔐 Módulo Solicitud de Autorizaciones
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 10 - Detalle */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <FileCheck className="w-12 h-12 text-blue-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 10: Detalle de Autorizaciones</h3>
              <p className="text-white/80 leading-relaxed">
                Visualización, seguimiento y administración detallada de autorizaciones emitidas 
                con trazabilidad completa del flujo de permisos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <FileCheck className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Historial</div>
              <div className="text-xs text-white/70">Completo</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Shield className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Trazabilidad</div>
              <div className="text-xs text-white/70">Total</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Tiempo Real</div>
              <div className="text-xs text-white/70">Updates</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Integrado</div>
              <div className="text-xs text-white/70">Sistema</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Capacidades Implementadas
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-blue-300">Visualización detallada:</strong> Registro completo</p>
                <p>✓ <strong className="text-cyan-300">Actualización automática:</strong> Estados en vivo</p>
                <p>✓ <strong className="text-purple-300">Gestión de revocaciones:</strong> Control total</p>
                <p>✓ <strong className="text-green-300">Integridad de datos:</strong> Validaciones servidor</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/ZDAyMzk5ODYzZDIxNDVhN2FmYWNjMDk4OWVmZDIzYzk" 
                   className="block text-blue-300 hover:text-blue-200 truncate" target="_blank" rel="noopener noreferrer">
                  📋 Módulo Detalle de Autorizaciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}