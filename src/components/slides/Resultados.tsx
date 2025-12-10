export function Resultados() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Resultados y Conclusiones</h2>
          <p className="text-xl text-purple-200">Impacto del OpenFinance Control Center</p>
        </div>

        {/* Métricas Principales */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-5 text-center">
            <div className="text-5xl text-green-300 mb-2">14</div>
            <p className="text-white mb-1">Sprints Completados</p>
            <p className="text-white/60 text-sm">Sept - Dic 2025</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-5 text-center">
            <div className="text-5xl text-blue-300 mb-2">100%</div>
            <p className="text-white mb-1">Satisfacción Beta</p>
            <p className="text-white/60 text-sm">Clientes internos y externos</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-5 text-center">
            <div className="text-5xl text-purple-300 mb-2">10+</div>
            <p className="text-white mb-1">Módulos Desarrollados</p>
            <p className="text-white/60 text-sm">Completamente funcionales</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-5 text-center">
            <div className="text-5xl text-orange-300 mb-2">+25%</div>
            <p className="text-white mb-1">Mejora Performance</p>
            <p className="text-white/60 text-sm">Lighthouse PWA Score</p>
          </div>
        </div>

        {/* Logros Clave */}
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl text-white mb-4 text-center">Logros Principales del Proyecto</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h4 className="text-white text-center mb-2">Centralización de Funcionalidades</h4>
              <p className="text-white/70 text-sm text-center">
                Dashboard unificado que integra todas las capacidades de agregación bancaria en un solo lugar
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-4xl mb-3 text-center">⚡</div>
              <h4 className="text-white text-center mb-2">Reducción de Fricción</h4>
              <p className="text-white/70 text-sm text-center">
                Menor tiempo de integración al proporcionar entorno de pruebas visual y precargado
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-4xl mb-3 text-center">🚀</div>
              <h4 className="text-white text-center mb-2">Profesionalización de Demos</h4>
              <p className="text-white/70 text-sm text-center">
                Fortalece presentaciones comerciales sin necesidad de configuraciones complejas
              </p>
            </div>
          </div>
        </div>

        {/* Conclusiones */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">✓</span>
              Conclusiones Principales
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm">
                  <strong className="text-green-300">Brecha de integración resuelta:</strong> Se proporcionó una 
                  solución visual y centralizada que simplifica significativamente el proceso de adopción de la OpenAPI
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm">
                  <strong className="text-emerald-300">Control Center efectivo:</strong> Demostró ser altamente 
                  efectivo para mejorar la experiencia de usuarios técnicos y stakeholders
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm">
                  <strong className="text-teal-300">Eficiencia incrementada:</strong> Mejora sustancial en procesos 
                  comerciales y técnicos, acelerando cierre de ventas B2B
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              Aprendizajes Técnicos
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <p><strong className="text-purple-300">Arquitectura Cloud-Native:</strong> Dominio de servicios AWS 
                (Cognito, Lambda, S3, CloudFront) y patrones serverless</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p><strong className="text-pink-300">Infrastructure as Code:</strong> Implementación completa con 
                Terraform para aprovisionamiento multi-tenant automatizado</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p><strong className="text-rose-300">Metodología Ágil:</strong> Aplicación práctica de Scrum con 
                sprints de 1 semana y entregables incrementales</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p><strong className="text-fuchsia-300">PWA Modernas:</strong> Desarrollo de aplicaciones web 
                progresivas con rendimiento nativo y soporte offline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alineación ODS */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <h3 className="text-2xl text-white mb-4 text-center">Alineación con Objetivos de Desarrollo Sostenible (ODS)</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-5xl mb-3">🏭</div>
              <p className="text-blue-300 mb-2">ODS 9</p>
              <p className="text-white mb-1">Industria, Innovación e Infraestructura</p>
              <p className="text-white/60 text-sm">Desarrollo de infraestructura digital moderna y escalable para el sector FinTech</p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-5xl mb-3">📚</div>
              <p className="text-cyan-300 mb-2">ODS 4</p>
              <p className="text-white mb-1">Educación de Calidad</p>
              <p className="text-white/60 text-sm">Transferencia de conocimiento técnico y mejores prácticas de desarrollo</p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-5xl mb-3">🤝</div>
              <p className="text-purple-300 mb-2">ODS 17</p>
              <p className="text-white mb-1">Alianzas para Lograr los Objetivos</p>
              <p className="text-white/60 text-sm">Cooperación tecnológica entre academia, empresa y sector financiero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}