import { Globe, Lock, Zap, Database, Building2 } from 'lucide-react';

export function DemoSistema() {
  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-3">
          <h2 className="text-3xl text-white mb-1">Demo del Sistema</h2>
          <p className="text-sm text-purple-200">OpenFinance Control Center en acción</p>
        </div>

        {/* URL del sistema */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-purple-300" />
            <a 
              href="https://openfinance-control-center.aggregation.dev.finerioconnect.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-300 transition-colors break-all"
            >
              openfinance-control-center.aggregation.dev.finerioconnect.com
            </a>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-xl p-3 text-center">
            <Lock className="w-6 h-6 text-blue-300 mx-auto mb-1" />
            <p className="text-white text-xs">Autenticación</p>
            <p className="text-white/60 text-xs">AWS Cognito</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl p-3 text-center">
            <Database className="w-6 h-6 text-green-300 mx-auto mb-1" />
            <p className="text-white text-xs">Instituciones</p>
            <p className="text-white/60 text-xs">17 disponibles</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-xl p-3 text-center">
            <Zap className="w-6 h-6 text-purple-300 mx-auto mb-1" />
            <p className="text-white text-xs">Webhooks</p>
            <p className="text-white/60 text-xs">14 activos</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-300/30 rounded-xl p-3 text-center">
            <Building2 className="w-6 h-6 text-orange-300 mx-auto mb-1" />
            <p className="text-white text-xs">3 Fuentes</p>
            <p className="text-white/60 text-xs">Datos unificados</p>
          </div>
        </div>

        {/* Módulos principales */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-300" />
              Login y Autenticación
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• AWS Cognito multi-tenant</li>
              <li>• OAuth 2.0 + JWT</li>
              <li>• MFA opcional</li>
              <li>• Gestión de sesiones</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-green-300" />
              Landing Principal
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• 3 Fuentes de datos</li>
              <li>• Navegación intuitiva</li>
              <li>• Cards interactivas</li>
              <li>• Acceso rápido a módulos</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-300" />
              Gestión Instituciones
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• 17 instituciones totales</li>
              <li>• 15 en bolsa interna</li>
              <li>• Filtros y búsqueda</li>
              <li>• Actualización en vivo</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-300" />
              Webhooks
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• 14 webhooks activos</li>
              <li>• 3 tipos de flujos</li>
              <li>• Auth flexible</li>
              <li>• Edición en caliente</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-300" />
              Agregación de Datos
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• Envío de credenciales</li>
              <li>• Validación en tiempo real</li>
              <li>• 3 tipos de flujo</li>
              <li>• Notificación asíncrona</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-300" />
              Redirect Links
            </h3>
            <ul className="space-y-1.5 text-white/70 text-xs">
              <li>• Enlaces de autorización</li>
              <li>• OAuth directo con banco</li>
              <li>• Sin envío de credenciales</li>
              <li>• Mayor seguridad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
