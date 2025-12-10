import { CheckCircle, Target } from 'lucide-react';

export function Conclusiones() {
  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Conclusiones</h2>
          <p className="text-lg text-purple-200">Reflexiones finales del proyecto</p>
        </div>

        <div className="space-y-3">
          {/* Conclusiones */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <h3 className="text-base text-white">Conclusiones Principales</h3>
            </div>
            <div className="space-y-1.5 text-white/80 text-xs">
              <div className="bg-white/10 rounded-lg p-2">
                <p>
                  <span className="text-green-300">✓</span> Se resolvió la <span className="text-green-300">brecha de integración</span>, 
                  proporcionando una solución visual y centralizada.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <p>
                  <span className="text-green-300">✓</span> El Control Center demostró ser <span className="text-green-300">efectivo</span> para 
                  mejorar la experiencia del usuario técnico.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <p>
                  <span className="text-green-300">✓</span> Se <span className="text-green-300">incrementó la eficiencia</span> del proceso 
                  comercial y técnico.
                </p>
              </div>
            </div>
          </div>

          {/* ODS */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-6 h-6 text-purple-300" />
              <h3 className="text-sm text-white">Alineación con ODS</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-xl mb-0.5">🏭</div>
                <p className="text-purple-300 mb-0.5 text-xs">ODS 9</p>
                <p className="text-white mb-0.5 text-xs">Industria e Innovación</p>
                <p className="text-white/70 text-xs">Infraestructura digital moderna</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-xl mb-0.5">📚</div>
                <p className="text-blue-300 mb-0.5 text-xs">ODS 4</p>
                <p className="text-white mb-0.5 text-xs">Educación de Calidad</p>
                <p className="text-white/70 text-xs">Transferencia de conocimiento</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-xl mb-0.5">🤝</div>
                <p className="text-green-300 mb-0.5 text-xs">ODS 17</p>
                <p className="text-white mb-0.5 text-xs">Alianzas Estratégicas</p>
                <p className="text-white/70 text-xs">Cooperación tecnológica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}