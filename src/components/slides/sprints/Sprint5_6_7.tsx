import { CheckCircle, Database, Webhook, Zap, Code, Settings } from 'lucide-react';

export function Sprint5_6_7() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 5-6-7: Configuración y Agregaciones</h2>
          <p className="text-xl text-purple-200">Instituciones, Webhooks y Solicitud de Agregaciones</p>
        </div>

        {/* Sprint 5 - Instituciones */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Database className="w-10 h-10 text-blue-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 5: Instituciones Disponibles</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                <strong className="text-blue-300">Objetivo:</strong> Implementar el módulo de gestión de instituciones 
                financieras disponibles dentro del sistema, permitiendo visualizar y administrar las integraciones con 
                bancos del Tenant. Este módulo utiliza React y Zustand para gestión de estado, garantizando rendimiento 
                óptimo y escalabilidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-300" />
                Actividades Principales
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-blue-300">Interfaz UX/UI optimizada:</strong> Diseño siguiendo lineamientos 
                de usabilidad con visualización responsive en todos los dispositivos</p>
                <p>• <strong className="text-blue-300">Componentes modulares reutilizables:</strong> Lista de instituciones, 
                filtros de búsqueda y tarjetas informativas con documentación completa</p>
                <p>• <strong className="text-blue-300">Integración con Zustand:</strong> Estado global para gestionar información 
                de instituciones con validaciones y sincronización automática</p>
                <p>• <strong className="text-blue-300">Conexión con servicios:</strong> Endpoints para listar instituciones del 
                Tenant con manejo de estados de carga, error y éxito</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Resultados Sprint 5
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-green-300">Módulo Config operativo:</strong> Sección de Instituciones Disponibles 
                completamente funcional e integrada</p>
                <p>• <strong className="text-green-300">+120 instituciones conectadas:</strong> Visualización en tiempo real 
                de todas las instituciones financieras disponibles</p>
                <p>• <strong className="text-green-300">Pruebas funcionales completas:</strong> Verificación de navegación 
                y listado correcto desde el Tab de Configuración</p>
                <p>• <strong className="text-green-300">Base escalable:</strong> Estructura preparada para futuras mejoras 
                y funcionalidades adicionales del módulo</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-lg p-3">
            <p className="text-white/70 text-sm">
              <strong className="text-blue-300">Evidencia Confluence:</strong> https://finerio.atlassian.net/wiki/external/NGZmY2YyZDFjNWRhNDY1OTk2MDQ0NjMwN2Q2N2UwNjg
            </p>
          </div>
        </div>

        {/* Sprint 6 - Webhooks */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Webhook className="w-10 h-10 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 6: Webhooks Disponibles</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                <strong className="text-purple-300">Objetivo:</strong> Desarrollar el módulo de configuración de webhooks 
                con 3 niveles de seguridad (<strong>OAuth, API Key, OAuth ROPC</strong>), permitiendo a los usuarios 
                especificar cómo desean recibir notificaciones de eventos del sistema de forma segura y configurable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-300" />
                Actividades Principales
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-purple-300">Interfaz de configuración:</strong> Diseño UX/UI para gestión 
                intuitiva de webhooks con selección de niveles de seguridad</p>
                <p>• <strong className="text-purple-300">Componentes especializados:</strong> Lista de webhooks, formularios 
                de configuración y controles de seguridad modulares</p>
                <p>• <strong className="text-purple-300">Estado global con Zustand:</strong> Administración centralizada con 
                validaciones y sincronización automática entre componentes</p>
                <p>• <strong className="text-purple-300">Integración completa:</strong> Endpoints para crear, actualizar 
                y listar webhooks con gestión de estados y validaciones del servidor</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Resultados Sprint 6
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-green-300">3 niveles de seguridad:</strong> OAuth, API Key y OAuth ROPC 
                completamente implementados y funcionales</p>
                <p>• <strong className="text-green-300">Configuración flexible:</strong> Los usuarios pueden especificar 
                URLs, métodos HTTP y parámetros de autenticación</p>
                <p>• <strong className="text-green-300">Validaciones robustas:</strong> Sistema de validación de URLs, 
                credenciales y configuraciones de seguridad</p>
                <p>• <strong className="text-green-300">Módulo listo para producción:</strong> Webhooks operativos con 
                alta confiabilidad y seguridad en la comunicación</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-lg p-3">
            <p className="text-white/70 text-sm">
              <strong className="text-purple-300">Evidencia Confluence:</strong> https://finerio.atlassian.net/wiki/external/NmRkMzQ3ZmY4M2JjNDc4NDhkZjg3NGIxM2FlZGJhZWI
            </p>
          </div>
        </div>

        {/* Sprint 7 - Agregaciones */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <Zap className="w-10 h-10 text-green-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 7: Solicitud de Agregaciones</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                <strong className="text-green-300">Objetivo:</strong> Desarrollar el módulo central que permite realizar 
                el <strong>proceso completo de agregación bancaria</strong>, seleccionando instituciones previamente asociadas 
                y enviando resultados a webhooks configurados. Este módulo representa el <strong className="text-emerald-300">
                núcleo funcional del OpenFinance Control Center</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-green-300" />
                Actividades Principales
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-green-300">Interfaz de solicitud:</strong> Diseño intuitivo con flujo guiado 
                paso a paso para el proceso de agregación</p>
                <p>• <strong className="text-green-300">Selección de instituciones:</strong> Tarjetas interactivas que 
                muestran las instituciones disponibles con información relevante</p>
                <p>• <strong className="text-green-300">Configuración de webhooks:</strong> Selección de destino para 
                resultados con visualización de configuraciones activas</p>
                <p>• <strong className="text-green-300">Flujo completo de datos:</strong> Desde autenticación hasta 
                recuperación de información bancaria con feedback en tiempo real</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                Resultados Sprint 7
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong className="text-emerald-300">Módulo core operativo:</strong> Solicitud de Agregaciones 
                completamente funcional con flujo end-to-end</p>
                <p>• <strong className="text-emerald-300">Integración exitosa:</strong> Reutilización de componentes 
                de Config (Webhooks e Instituciones) sin duplicación de código</p>
                <p>• <strong className="text-emerald-300">Pruebas funcionales completas:</strong> Validación del flujo 
                completo desde selección hasta envío de resultados</p>
                <p>• <strong className="text-emerald-300">UX optimizada:</strong> Feedback visual inmediato con 
                indicadores de progreso y estados de la solicitud</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 rounded-lg p-3">
            <p className="text-white/70 text-sm">
              <strong className="text-green-300">Evidencia Confluence:</strong> https://finerio.atlassian.net/wiki/external/ODVlMWM2ODBmMTdhNDg1NDg4OTc3YjQ2ZDkzMTY3ZjU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
