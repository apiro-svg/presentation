import { X, Printer, FileDown } from 'lucide-react';

interface ExportGuideProps {
  onClose: () => void;
}

export function ExportGuide({ onClose }: ExportGuideProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 to-purple-900 border border-purple-400/30 rounded-2xl p-8 max-w-2xl mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-500/20 rounded-full">
            <Printer className="w-8 h-8 text-purple-300" />
          </div>
          <h2 className="text-3xl text-white">
            Exportar Presentación a PDF
          </h2>
        </div>

        <div className="space-y-6 text-white/80">
          <p className="text-lg">
            Al hacer clic en el botón de impresión, se mostrarán automáticamente <span className="text-purple-300 font-semibold">todas las 30 diapositivas</span> optimizadas para formato <span className="text-purple-300 font-semibold">16:9 (presentación estándar)</span>.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <h3 className="text-xl text-purple-300 flex items-center gap-2">
              <FileDown className="w-6 h-6" />
              Pasos para exportar:
            </h3>
            
            <ol className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-purple-400 font-semibold">1.</span>
                <span>Haz clic en el botón <span className="text-purple-300">🖨️ Imprimir</span> o presiona la tecla <kbd className="px-2 py-1 bg-white/10 rounded text-sm">P</kbd></span>
              </li>
              
              <li className="flex gap-3">
                <span className="text-purple-400 font-semibold">2.</span>
                <span>En el diálogo de impresión, selecciona <span className="text-purple-300">"Guardar como PDF"</span> como destino</span>
              </li>
              
              <li className="flex gap-3">
                <span className="text-purple-400 font-semibold">3.</span>
                <span>Configura las opciones:</span>
              </li>
              
              <div className="ml-8 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span><strong className="text-white">Diseño:</strong> Horizontal (Landscape)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span><strong className="text-white">Márgenes:</strong> Ninguno</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span><strong className="text-white">Gráficos de fondo:</strong> ✓ Activado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span><strong className="text-white">Escala:</strong> 100% (Predeterminado)</span>
                </div>
              </div>
              
              <li className="flex gap-3">
                <span className="text-purple-400 font-semibold">4.</span>
                <span>Haz clic en <span className="text-purple-300">"Guardar"</span> y elige la ubicación del archivo</span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 flex gap-3">
            <div className="text-blue-400 text-xl">💡</div>
            <div className="flex-1">
              <p className="text-blue-200 mb-2">
                <strong>Formato 16:9 para Presentaciones:</strong> El PDF exportado tendrá formato de presentación estándar (como PowerPoint o Google Slides).
              </p>
              <p className="text-blue-200/80 text-sm mb-2">
                Puedes importar el PDF directamente en:
              </p>
              <ul className="text-blue-200/80 text-sm space-y-1 ml-4">
                <li>• <strong>Google Slides:</strong> Archivo {'->'} Abrir {'->'} Subir {'->'} Seleccionar PDF</li>
                <li>• <strong>PowerPoint:</strong> Insertar {'->'} Imágenes {'->'} Desde archivo (cada página como imagen)</li>
                <li>• <strong>Canva:</strong> Importar archivo PDF</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-4 flex gap-3">
            <div className="text-green-400 text-xl">✨</div>
            <div className="flex-1">
              <p className="text-green-200 text-sm">
                <strong>Tip profesional:</strong> Una vez exportado, podrás editar el PDF en herramientas de presentación, agregar animaciones adicionales, notas del presentador, o convertirlo a formato PPTX.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}