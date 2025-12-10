export function Portada() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-5xl space-y-8 animate-fade-in relative z-10">
        <div className="space-y-6">
          <div className="inline-block px-6 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 mb-4">
            Informe de Prácticas Pre-Profesionales
          </div>
          
          <h1 className="text-6xl md:text-8xl text-white mb-6 leading-tight">
            OpenFinance
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Control Center
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-400 rounded-full" />
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
          </div>
        </div>

        <p className="text-2xl md:text-3xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
          Dashboard Interactivo para Simplificar la Integración de APIs de Agregación Bancaria
        </p>

        <div className="space-y-6 pt-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-xl text-white/90 mb-2">
              Prácticas realizadas en <span className="text-purple-300 font-semibold">Finerio Connect</span>
            </p>
            <p className="text-white/60">Primera plataforma de Open Banking en Hispanoamérica</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-2xl text-white mb-1">
                Airton Gabriel Piro Gonzales
              </p>
              <p className="text-lg text-white/70">
                Ingeniería de Sistemas
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 max-w-md mx-auto">
              <p className="text-white/60 text-sm mb-1">Docente</p>
              <p className="text-lg text-purple-300">
                Jhoseline Gianella Flores Lira
              </p>
            </div>
            
            <p className="text-white/50 mt-4">
              Septiembre - Diciembre 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}