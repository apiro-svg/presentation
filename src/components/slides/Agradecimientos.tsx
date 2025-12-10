import { Heart, Users, Building2, Award, Globe, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export function Agradecimientos() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <Heart className="w-16 h-16 text-pink-300 mx-auto mb-4 animate-pulse" />
          <h2 className="text-5xl text-white mb-3">¡Gracias!</h2>
          <p className="text-xl text-purple-200">Por su atención y tiempo en esta presentación</p>
        </div>

        {/* Agradecimientos Principales */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10 text-purple-300" />
              <h3 className="text-2xl text-white">Finerio Connect</h3>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              Agradezco profundamente a Finerio Connect por la oportunidad de realizar mis prácticas 
              pre-profesionales en un entorno innovador, desafiante y de alto impacto en el sector FinTech.
            </p>
            <div className="space-y-2 text-white/80">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-purple-300">Diego Serrano</p>
                <p className="text-sm text-white/70">Product Owner</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-pink-300">Nataly Molano</p>
                <p className="text-sm text-white/70">Scrum Master</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-rose-300">Ronald Cárdenas</p>
                <p className="text-sm text-white/70">Head de Ingeniería</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-10 h-10 text-blue-300" />
              <h3 className="text-2xl text-white">Universidad</h3>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              A mi universidad por la sólida formación académica que hizo posible 
              enfrentar con éxito este desafío profesional.
            </p>
            <div className="space-y-2 text-white/80">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-blue-300">Jhoseline Gianella Flores Lira</p>
                <p className="text-sm text-white/70">Docente</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="font-semibold text-cyan-300">Ingeniería de Sistemas</p>
                <p className="text-sm text-white/70">Carrera Profesional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logro Personal */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-8 h-8 text-green-300" />
            <h3 className="text-xl text-white">Reflexión Final</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            Este proyecto representa un <strong className="text-green-300">crecimiento profesional y personal significativo</strong>. 
            La experiencia adquirida en Finerio Connect desarrollando el OpenFinance Control Center con tecnologías cloud-native, 
            metodología Scrum y arquitectura moderna será <strong className="text-emerald-300">invaluable para mi futura carrera</strong> como 
            ingeniero de sistemas.
          </p>
        </div>

        {/* Sistema en Producción */}
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-8 text-center">
          <Sparkles className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-3xl text-white mb-2">Sistema en Producción</h3>
          <p className="text-white/80 mb-6">
            El OpenFinance Control Center está disponible y funcionando
          </p>
          
          <a 
            href="https://openfinance-control-center.aggregation.dev.finerioconnect.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl transition-all text-lg font-semibold group"
          >
            <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Ver Sistema en Vivo
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <BookOpen className="w-8 h-8 text-purple-300 mx-auto mb-3" />
            <p className="text-2xl text-white mb-1">Airton Gabriel Piro Gonzales</p>
            <p className="text-lg text-white/70 mb-1">Ingeniería de Sistemas</p>
            <p className="text-white/50">Septiembre - Diciembre 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}