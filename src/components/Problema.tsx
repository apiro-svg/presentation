import { AlertCircle, Clock, BookOpen, TrendingDown, Target } from 'lucide-react';

export function Problema() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-white mb-3 text-center">
          Realidad Problemática
        </h2>
        <p className="text-xl text-purple-200 text-center mb-8">
          Barrera de entrada para clientes B2B en la adopción de Open Banking
        </p>

        {/* Contexto general */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-12 h-12 text-indigo-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-white mb-3">Contexto de la Problemática</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                En un entorno financiero cada vez más <strong className="text-indigo-300">dinámico y competitivo</strong>, la adopción 
                de soluciones tecnológicas ágiles se convierte en un <strong>factor determinante</strong> para las instituciones bancarias. 
                La necesidad de conectar con nuevos sistemas, como plataformas de agregación bancaria mediante APIs abiertas, requiere no 
                solo capacidades técnicas, sino también un <strong className="text-purple-300">entorno que facilite la comprensión, prueba 
                e implementación</strong> de estas tecnologías.
              </p>
              <p className="text-white/80 leading-relaxed">
                En el caso de Finerio Connect, se ha identificado una <strong className="text-pink-300">brecha importante entre la calidad 
                técnica del producto y la facilidad</strong> con la que los clientes logran integrar. Esta brecha no está relacionada con la 
                funcionalidad del producto en sí, sino con las <strong>dificultades que presentan los equipos técnicos de los bancos</strong> al 
                momento de realizar pruebas de integración usando la documentación disponible.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-300/30 rounded-2xl p-6 hover:scale-102 transition-all">
            <AlertCircle className="w-12 h-12 text-red-300 mb-4" />
            <h3 className="text-2xl text-white mb-3">Complejidad de Autenticación</h3>
            <p className="text-white/80 leading-relaxed mb-3">
              Los equipos técnicos deben <strong>implementar OAuth2 y JWT desde cero</strong> sin 
              un entorno guiado, representando una barrera importante para comenzar las pruebas de integración. 
              La mayoría de estos equipos deben <strong className="text-red-300">invertir tiempo significativo</strong> en 
              comprender la lógica de autenticación y en configurar el entorno de pruebas correctamente antes de 
              siquiera comenzar a interactuar con los endpoints principales.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-red-300">Impacto Medido:</strong>
              </p>
              <div className="space-y-1 text-sm text-white/60">
                <p>• ↑ 40% Tiempo extendido para la primera conexión exitosa</p>
                <p>• ↑ 50% Mayor necesidad de tickets de soporte técnico</p>
                <p>• Complejidad en el manejo de tokens y claves de seguridad</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-6 hover:scale-102 transition-all">
            <BookOpen className="w-12 h-12 text-orange-300 mb-4" />
            <h3 className="text-2xl text-white mb-3">Falta de Herramientas Visuales</h3>
            <p className="text-white/80 leading-relaxed mb-3">
              No existe una <strong>interfaz que permita recorrer el flujo completo</strong> de 
              integración de forma interactiva, obligando a los desarrolladores a depender únicamente 
              de documentación técnica. Este problema se agrava especialmente en los <strong className="text-orange-300">
              procesos de preventa o en las primeras fases de implementación</strong>, cuando los equipos 
              necesitan validar rápidamente la viabilidad y el comportamiento de la API.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-orange-300">Consecuencias:</strong>
              </p>
              <div className="space-y-1 text-sm text-white/60">
                <p>• Dificultad para visualizar el comportamiento real de la API</p>
                <p>• Retrasos en el inicio de la integración efectiva</p>
                <p>• Dependencia exclusiva de documentación textual</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-sm border border-yellow-300/30 rounded-2xl p-6 hover:scale-102 transition-all">
            <Clock className="w-12 h-12 text-yellow-300 mb-4" />
            <h3 className="text-2xl text-white mb-3">Curva de Aprendizaje Elevada</h3>
            <p className="text-white/80 leading-relaxed mb-3">
              La documentación requiere <strong>configuración manual de tokens, endpoints y parámetros</strong>, 
              lo cual ralentiza el proceso de pruebas y validación técnica del producto. Los potenciales 
              clientes perciben que <strong className="text-yellow-300">el producto es más complejo de lo que 
              realmente es</strong>, generando fricciones innecesarias en la experiencia de adopción.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-yellow-300">Barreras Identificadas:</strong>
              </p>
              <div className="space-y-1 text-sm text-white/60">
                <p>• Mayor inversión de tiempo en capacitación inicial</p>
                <p>• Necesidad de conocimiento técnico profundo desde el inicio</p>
                <p>• Configuraciones dispersas que aumentan complejidad</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-red-500/20 backdrop-blur-sm border border-amber-300/30 rounded-2xl p-6 hover:scale-102 transition-all">
            <TrendingDown className="w-12 h-12 text-amber-300 mb-4" />
            <h3 className="text-2xl text-white mb-3">Impacto en el Negocio</h3>
            <p className="text-white/80 leading-relaxed mb-3">
              Retrasos en tiempo de adopción, <strong>disminución en la tasa de conversión de clientes 
              potenciales</strong> y mayor necesidad de soporte técnico para onboarding. La dependencia 
              exclusiva de documentación textual <strong className="text-amber-300">no responde a las 
              expectativas actuales del sector tecnológico</strong>, donde los usuarios valoran experiencias 
              de integración rápidas e interactivas.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-amber-300">Impacto Comercial:</strong>
              </p>
              <div className="space-y-1 text-sm text-white/60">
                <p>• ↓ 30% Tasa de conversión de clientes potenciales</p>
                <p>• Percepción negativa del producto en demos iniciales</p>
                <p>• Pérdida de oportunidades comerciales por fricciones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <Target className="w-10 h-10 text-purple-300 flex-shrink-0" />
            <div className="w-full">
              <h3 className="text-2xl text-white mb-3">Definición del Problema</h3>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                El problema principal radica en que los <strong className="text-purple-300">equipos técnicos de los 
                clientes B2B de Finerio Connect enfrentan dificultades significativas</strong> al integrar la OpenAPI 
                de agregación bancaria, lo que compromete la percepción de valor de una solución tecnológica robusta 
                pero poco accesible para pruebas iniciales. Como resultado, se retrasa el tiempo de adopción y se 
                compromete la competitividad frente a otras plataformas que ya implementan herramientas visuales y 
                sandboxes interactivos.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl text-red-300 mb-2">↑ 40%</div>
                  <p className="text-white/70">Tiempo de onboarding técnico</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl text-orange-300 mb-2">↓ 30%</div>
                  <p className="text-white/70">Tasa de conversión de leads</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl text-yellow-300 mb-2">↑ 50%</div>
                  <p className="text-white/70">Tickets de soporte requeridos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}