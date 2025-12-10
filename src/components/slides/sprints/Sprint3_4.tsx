import { Lock, Layout, Code, Zap, CheckCircle, Link } from 'lucide-react';

export function Sprint3_4() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 3-4: Login y Landing Page</h2>
          <p className="text-xl text-purple-200">Autenticación Segura y Interfaz Principal</p>
        </div>

        {/* Sprint 3 - Login */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Lock className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 3: Implementación Login y Arquitectura Multi-Tenant</h3>
              <p className="text-white/80 leading-relaxed">
                Desarrollo de autenticación segura con AWS Cognito y aprovisionamiento de infraestructura 
                multi-tenant usando Terraform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">OAuth2</div>
              <div className="text-xs text-white/70">Protocolo Seguro</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Lock className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">JWT</div>
              <div className="text-xs text-white/70">Tokens Seguros</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Code className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Terraform</div>
              <div className="text-xs text-white/70">IaC</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">AWS</div>
              <div className="text-xs text-white/70">Cloud</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Tecnologías Implementadas
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-purple-300">React 18 + TypeScript:</strong> Frontend modular</p>
                <p>✓ <strong className="text-pink-300">AWS Cognito:</strong> Gestión de usuarios</p>
                <p>✓ <strong className="text-blue-300">Terraform:</strong> Infraestructura como código</p>
                <p>✓ <strong className="text-green-300">Arquitectura Multi-Tenant:</strong> Por cliente B2B</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-purple-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/NGI3OWVjYzA5ZmJiNGQ1NDlhMDU2ODEzNzM3NzY3Mzk" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  🔐 Módulo Login Funcional
                </a>
                <a href="https://finerio.atlassian.net/wiki/external/ZDUwNWNhNDYwZjQ0NDYxZTkzYTY0MGM3MjJiNjZlNDE" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  📁 Estructura del Proyecto
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 4 - Landing Page */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <Layout className="w-12 h-12 text-blue-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 4: Implementación Landing Page Principal</h3>
              <p className="text-white/80 leading-relaxed">
                Desarrollo de la interfaz principal presentando todas las funcionalidades del sistema 
                con diseño moderno y responsive.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Layout className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">React</div>
              <div className="text-xs text-white/70">Components</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Zustand</div>
              <div className="text-xs text-white/70">State Mgmt</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <Code className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Tailwind</div>
              <div className="text-xs text-white/70">Styling</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">UX/UI</div>
              <div className="text-xs text-white/70">Optimizado</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Características Implementadas
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ <strong className="text-blue-300">Diseño Responsive:</strong> Desktop, tablet, móvil</p>
                <p>✓ <strong className="text-cyan-300">Componentes Modulares:</strong> Reutilizables</p>
                <p>✓ <strong className="text-purple-300">React Router:</strong> Navegación optimizada</p>
                <p>✓ <strong className="text-green-300">Performance:</strong> Carga rápida optimizada</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/YjhiZTE1MWVkZGY2NDY0OGE0ZjcyZDZlMDg4MWRiYjM" 
                   className="block text-blue-300 hover:text-blue-200 truncate" target="_blank" rel="noopener noreferrer">
                  🏠 Módulo Landing Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}