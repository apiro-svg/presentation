import { Server, Database, Lock, Cloud, Layers, Zap, Code, GitBranch, Shield } from 'lucide-react';

export function ArquitecturaTecnica() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Arquitectura Técnica del Sistema</h2>
          <p className="text-xl text-purple-200">Infraestructura Multi-Tenant Cloud-Native en AWS</p>
        </div>

        {/* Diagrama Principal de Capas */}
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl text-white mb-4 text-center flex items-center justify-center gap-2">
            <Cloud className="w-8 h-8 text-indigo-300" />
            Arquitectura por Capas
          </h3>
          
          <div className="grid grid-cols-4 gap-4">
            {/* Capa 1: Frontend */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-xl p-4">
              <Layers className="w-10 h-10 text-blue-300 mb-3 mx-auto" />
              <h4 className="text-white mb-2 text-center">Frontend Layer</h4>
              <p className="text-blue-200 text-sm mb-3 text-center">React + TypeScript</p>
              <div className="space-y-2 text-xs text-white/80">
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-blue-300">UI Components</p>
                  <p className="text-white/70">Shadcn + Tailwind</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-cyan-300">State Management</p>
                  <p className="text-white/70">Zustand Global</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-purple-300">PWA</p>
                  <p className="text-white/70">Service Worker</p>
                </div>
              </div>
            </div>

            {/* Capa 2: Autenticación */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-xl p-4">
              <Lock className="w-10 h-10 text-purple-300 mb-3 mx-auto" />
              <h4 className="text-white mb-2 text-center">Security Layer</h4>
              <p className="text-purple-200 text-sm mb-3 text-center">AWS Cognito</p>
              <div className="space-y-2 text-xs text-white/80">
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-purple-300">OAuth 2.0</p>
                  <p className="text-white/70">Protocolo Estándar</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-pink-300">JWT Tokens</p>
                  <p className="text-white/70">Sesiones Seguras</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-rose-300">Multi-Tenant</p>
                  <p className="text-white/70">Aislamiento B2B</p>
                </div>
              </div>
            </div>

            {/* Capa 3: Backend */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl p-4">
              <Server className="w-10 h-10 text-green-300 mb-3 mx-auto" />
              <h4 className="text-white mb-2 text-center">Backend Layer</h4>
              <p className="text-green-200 text-sm mb-3 text-center">Python + Lambda</p>
              <div className="space-y-2 text-xs text-white/80">
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-green-300">FastAPI</p>
                  <p className="text-white/70">APIs REST</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-emerald-300">Serverless</p>
                  <p className="text-white/70">AWS Lambda</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-teal-300">Webhooks</p>
                  <p className="text-white/70">3 Niveles Seguridad</p>
                </div>
              </div>
            </div>

            {/* Capa 4: Datos */}
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-300/30 rounded-xl p-4">
              <Database className="w-10 h-10 text-orange-300 mb-3 mx-auto" />
              <h4 className="text-white mb-2 text-center">Data Layer</h4>
              <p className="text-orange-200 text-sm mb-3 text-center">DynamoDB + S3</p>
              <div className="space-y-2 text-xs text-white/80">
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-orange-300">NoSQL DB</p>
                  <p className="text-white/70">DynamoDB</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-amber-300">Storage</p>
                  <p className="text-white/70">S3 Buckets</p>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <p className="font-semibold text-yellow-300">CDN</p>
                  <p className="text-white/70">CloudFront</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detalles Técnicos */}
        <div className="grid grid-cols-3 gap-4">
          {/* Infrastructure as Code */}
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-10 h-10 text-purple-300" />
              <div>
                <h3 className="text-xl text-white">Infrastructure as Code</h3>
                <p className="text-sm text-purple-200">Terraform</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-purple-300 mb-1">✓ Aprovisionamiento Automatizado</p>
                <p className="text-white/60 text-xs">Recursos AWS creados mediante código versionado</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-indigo-300 mb-1">✓ Entornos Replicables</p>
                <p className="text-white/60 text-xs">Dev, Staging y Production idénticos</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-blue-300 mb-1">✓ Multi-Tenant por Configuración</p>
                <p className="text-white/60 text-xs">Aislamiento seguro por cliente B2B</p>
              </div>
            </div>
          </div>

          {/* CI/CD Pipeline */}
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-10 h-10 text-blue-300" />
              <div>
                <h3 className="text-xl text-white">CI/CD Pipeline</h3>
                <p className="text-sm text-blue-200">GitHub Actions</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-blue-300 mb-1">✓ Despliegue Continuo</p>
                <p className="text-white/60 text-xs">Build automático en cada push a main</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-cyan-300 mb-1">✓ Testing Automatizado</p>
                <p className="text-white/60 text-xs">Unit tests y validaciones pre-deploy</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-purple-300 mb-1">✓ Monorepo Architecture</p>
                <p className="text-white/60 text-xs">Frontend y Backend unificados</p>
              </div>
            </div>
          </div>

          {/* Servicios AWS */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-green-300" />
              <div>
                <h3 className="text-xl text-white">Servicios AWS</h3>
                <p className="text-sm text-green-200">Cloud Native</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-blue-300 font-semibold">Cognito</p>
                <p className="text-white/60">Auth</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-purple-300 font-semibold">Lambda</p>
                <p className="text-white/60">Functions</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-green-300 font-semibold">API Gateway</p>
                <p className="text-white/60">REST APIs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-orange-300 font-semibold">S3</p>
                <p className="text-white/60">Storage</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-pink-300 font-semibold">DynamoDB</p>
                <p className="text-white/60">Database</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <p className="text-cyan-300 font-semibold">CloudFront</p>
                <p className="text-white/60">CDN Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}