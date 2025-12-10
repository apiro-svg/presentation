import { Quote, Star, Users, TrendingUp } from 'lucide-react';

export function TestimoniosFeedback() {
  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Testimonios y Feedback</h2>
          <p className="text-lg text-purple-200">Validación de usuarios beta</p>
        </div>

        {/* Métricas de Satisfacción */}
        <div className="grid md:grid-cols-4 gap-2 mb-3">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-2.5 text-center">
            <Star className="w-7 h-7 text-green-300 mx-auto mb-1" />
            <div className="text-2xl text-white mb-0.5">100%</div>
            <p className="text-white/70 text-xs">Satisfacción Beta</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-2.5 text-center">
            <Users className="w-7 h-7 text-blue-300 mx-auto mb-1" />
            <div className="text-2xl text-white mb-0.5">15+</div>
            <p className="text-white/70 text-xs">Usuarios Beta</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-2.5 text-center">
            <Quote className="w-7 h-7 text-purple-300 mx-auto mb-1" />
            <div className="text-2xl text-white mb-0.5">25+</div>
            <p className="text-white/70 text-xs">Comentarios</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-2.5 text-center">
            <TrendingUp className="w-7 h-7 text-orange-300 mx-auto mb-1" />
            <div className="text-2xl text-white mb-0.5">0</div>
            <p className="text-white/70 text-xs">Bugs Críticos</p>
          </div>
        </div>

        {/* Comentarios Destacados */}
        <div className="space-y-2">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3">
            <div className="flex items-start gap-2">
              <Quote className="w-6 h-6 text-purple-300 flex-shrink-0" />
              <div>
                <p className="text-white/80 italic mb-1 text-xs">
                  "La interfaz es increíblemente intuitiva. En menos de 10 minutos pude entender 
                  todo el flujo de integración."
                </p>
                <p className="text-purple-300 text-xs">— Equipo Técnico Beta</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3">
            <div className="flex items-start gap-2">
              <Quote className="w-6 h-6 text-blue-300 flex-shrink-0" />
              <div>
                <p className="text-white/80 italic mb-1 text-xs">
                  "Finalmente una herramienta que permite probar la API sin configurar todo el entorno desde cero."
                </p>
                <p className="text-blue-300 text-xs">— Cliente Bancario Beta Pública</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3">
            <div className="flex items-start gap-2">
              <Quote className="w-6 h-6 text-green-300 flex-shrink-0" />
              <div>
                <p className="text-white/80 italic mb-1 text-xs">
                  "El diseño es moderno y profesional. La experiencia es comparable con las mejores plataformas del mercado."
                </p>
                <p className="text-green-300 text-xs">— Product Manager Interno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}