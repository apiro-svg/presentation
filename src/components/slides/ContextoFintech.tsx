import { TrendingUp, Globe, DollarSign, Users, Building2, Zap } from 'lucide-react';

export function ContextoFintech() {
  const estadisticas = [
    { icon: Building2, value: '600+', label: 'FinTechs en México', color: 'text-blue-300' },
    { icon: TrendingUp, value: '193', label: 'FinTechs en Perú', color: 'text-green-300' },
    { icon: DollarSign, value: '20%', label: 'Del total en LATAM', color: 'text-yellow-300' },
    { icon: Users, value: '77%', label: 'Crecimiento en pagos', color: 'text-purple-300' },
  ];

  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Contexto: Sector FinTech</h2>
          <p className="text-xl text-purple-200">Open Banking y Open Finance en América Latina</p>
        </div>

        {/* Panorama Global */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <Globe className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-white mb-3">Panorama Regional del Sector FinTech</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                El sector FinTech en América Latina ha experimentado un <span className="text-purple-300 font-semibold">crecimiento sostenido y acelerado</span> en 
                la última década, impulsado por la <strong>necesidad de digitalizar servicios financieros, ampliar la inclusión 
                bancaria</strong> y aprovechar las oportunidades que ofrecen modelos disruptivos como <span className="text-pink-300 font-semibold">Open Banking</span> y{' '}
                <span className="text-blue-300 font-semibold">Open Finance</span>. La región se ha consolidado como uno de los <strong className="text-cyan-300">
                mercados más dinámicos y prometedores del mundo</strong> para la innovación financiera.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/90 mb-2">
                    <strong className="text-purple-300">Open Banking:</strong> Permite compartir información financiera de manera segura entre instituciones,
                    facilitando nuevos servicios y mejorando la experiencia del usuario final mediante APIs estandarizadas.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/90 mb-2">
                    <strong className="text-pink-300">Open Finance:</strong> Expande el concepto de Open Banking hacia otros servicios financieros
                    como seguros, inversiones y pensiones, democratizando el acceso a productos más sofisticados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {estadisticas.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:scale-105 transition-all`}
              >
                <Icon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-3xl text-white mb-2">{stat.value}</div>
                <p className="text-white/80 text-sm mb-2">{stat.label}</p>
                <p className="text-white/60 text-xs">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* México vs Perú */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🇲🇽</span> México - Líder Regional Consolidado
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-green-300">Líder absoluto en FinTech:</strong> Concentra alrededor del 20% del total de 
                  startups FinTech en América Latina, con más de 600 empresas activas en 2024</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-green-300">Ley FinTech desde 2018:</strong> Primera regulación integral en América Latina, 
                  estableciendo lineamientos claros para la operación de estas empresas</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-green-300">Marco regulatorio maduro:</strong> Genera confianza tanto para inversionistas 
                  como para usuarios, posicionando a México como referente regional</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-green-300">Hub de innovación financiera:</strong> Mercado estratégico para el desarrollo 
                  y escalamiento de soluciones financieras digitales con ecosistema maduro</span>
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 mt-3">
                <p className="text-sm text-white/70">
                  <strong className="text-green-300">Principales verticales:</strong> Pagos digitales, préstamos, 
                  gestión patrimonial e infraestructura tecnológica
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-300/30 rounded-2xl p-6">
            <h3 className="text-2xl text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🇵🇪</span> Perú - Mercado Emergente Dinámico
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-red-300">Crecimiento acelerado:</strong> Entre 2021 y 2024, el número de FinTech 
                  locales pasó de 132 a 193, con alta adopción digital por parte de los usuarios</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-red-300">46% de crecimiento:</strong> De 132 a 193 FinTechs en 3 años (2021-2024), 
                  actualmente operan unas 346 empresas incluyendo extranjeras</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-red-300">Adopción digital acelerada:</strong> Los pagos electrónicos per cápita 
                  crecieron un 30%, y el volumen de operaciones aumentó 77% (2024 vs 2023)</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="flex items-start gap-2 mb-2">
                  <Zap className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-red-300">Gran potencial de expansión:</strong> Mercado emergente con capacidad de 
                  atraer tanto empresas locales como extranjeras en busca de oportunidades</span>
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 mt-3">
                <p className="text-sm text-white/70">
                  <strong className="text-red-300">Principales verticales:</strong> Préstamos digitales, pagos y transferencias, 
                  e infraestructura tecnológica financiera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}