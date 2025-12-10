import { GitMerge, Zap, CheckCircle } from 'lucide-react';

export function Sprint7() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-4 py-2 bg-emerald-500/30 border border-emerald-400/50 rounded-lg text-emerald-200 text-sm">
              Sprint 7
            </div>
            <GitMerge className="w-7 h-7 text-emerald-300" />
          </div>
          <h2 className="text-4xl text-white mb-2">Solicitud de Agregaciones</h2>
          <p className="text-lg text-purple-200">Integración de módulos Config</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-300/30 rounded-2xl p-8 mb-6">
          <h3 className="text-3xl text-white mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-emerald-300" />
            Flujo de Agregación Completo
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h4 className="text-white mb-2">Selección</h4>
              <p className="text-white/70 text-sm">Instituciones previamente asociadas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h4 className="text-white mb-2">Configuración</h4>
              <p className="text-white/70 text-sm">Webhooks para recibir resultados</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h4 className="text-white mb-2">Ejecución</h4>
              <p className="text-white/70 text-sm">Agregación bancaria en tiempo real</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-6">
              <h4 className="text-xl text-white mb-4">Funcionalidades</h4>
              <ul className="space-y-2 text-white/80">
                <li><CheckCircle className="w-4 h-4 inline mr-2 text-emerald-300" />Selección múltiple de instituciones</li>
                <li><CheckCircle className="w-4 h-4 inline mr-2 text-emerald-300" />Asociación con webhooks configurados</li>
                <li><CheckCircle className="w-4 h-4 inline mr-2 text-emerald-300" />Validación de datos en tiempo real</li>
                <li><CheckCircle className="w-4 h-4 inline mr-2 text-emerald-300" />Manejo de estados (carga, error, éxito)</li>
              </ul>
            </div>

            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
              <h4 className="text-xl text-white mb-4">Integración</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Reutilización de componentes de Config</li>
                <li>• Comunicación con API de agregación</li>
                <li>• Envío seguro de solicitudes</li>
                <li>• Visualización de respuestas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-300" />
            Resultado del Sprint
          </h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Módulo funcional que permite a los usuarios ejecutar el proceso completo de agregación bancaria, 
            desde la selección de instituciones hasta la recepción de datos a través de webhooks configurados. 
            Este sprint marcó la <span className="text-emerald-300">primera funcionalidad core completamente operativa</span> del sistema.
          </p>
        </div>
      </div>
    </div>
  );
}