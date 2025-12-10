import { Lock, Shield, Key, CheckCircle, AlertTriangle } from 'lucide-react';

export function DemoLogin() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 bg-red-500/20 border border-red-400/30 rounded-full text-red-200 mb-2 text-sm">
            Demo del Sistema - Estado Actual
          </div>
          <h2 className="text-4xl text-white mb-2">Módulo de Login</h2>
          <p className="text-lg text-purple-200">Autenticación multi-tenant (Removido temporalmente)</p>
        </div>

        {/* Alerta de Estado */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-300/30 rounded-xl p-5 mb-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-8 h-8 text-red-300 flex-shrink-0" />
            <div>
              <h3 className="text-base text-white mb-1">Estado Actual del Módulo</h3>
              <p className="text-white/80 text-xs mb-2">
                <strong className="text-red-300">Importante:</strong> El módulo de login fue <span className="text-red-300">removido temporalmente</span> del 
                sistema en producción por solicitud del cliente bancario durante la fase de Beta Pública.
              </p>
              <div className="bg-white/10 rounded-lg p-2">
                <p className="text-white/70 mb-1 text-xs"><strong>Razón de la remoción:</strong></p>
                <ul className="space-y-0.5 text-white/70 text-xs">
                  <li>• El cliente solicitó acceso directo sin capa de autenticación adicional</li>
                  <li>• Preferencia por integración con su sistema de SSO corporativo existente</li>
                  <li>• Se mantiene en desarrollo para futura reintegración</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Implementación Original */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-xl p-4">
            <h3 className="text-base text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-300" />
              Implementación Original
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white mb-0.5 text-xs">AWS Cognito</p>
                  <p className="text-white/60 text-xs">Sistema de autenticación empresarial robusto con User Pools personalizados</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Key className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white mb-0.5 text-xs">OAuth 2.0 + JWT</p>
                  <p className="text-white/60 text-xs">Tokens seguros con tiempo de expiración configurable</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white mb-0.5 text-xs">Multi-Factor Authentication</p>
                  <p className="text-white/60 text-xs">MFA opcional para mayor seguridad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 className="text-base text-white mb-3">Características Técnicas</h3>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs">Validación en tiempo real con feedback visual</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs">Manejo robusto de errores y estados de carga</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs">Separación de datos por tenant automática</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs">Gestión de sesiones con Zustand</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-xs">Integración con infraestructura AWS mediante Terraform</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}