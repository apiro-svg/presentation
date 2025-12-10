import { Target, Lightbulb, Rocket, CheckCircle, TrendingUp } from 'lucide-react';

export function Solucion() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl text-white mb-3 text-center">
          OpenFinance Control Center
        </h2>
        <p className="text-xl text-purple-200 text-center mb-8">
          Dashboard interactivo para facilitar la integración de la OpenAPI
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="col-span-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Target className="w-12 h-12 text-purple-300 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white mb-3">Objetivo General del Proyecto</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Desarrollar un <strong className="text-purple-300">dashboard interactivo y multiplataforma</strong> que facilite la integración 
                  de la OpenAPI de agregación bancaria de Finerio Connect, brindando a los clientes 
                  B2B un <strong className="text-pink-300">entorno de pruebas visual, accesible y completamente funcional</strong> que acelere 
                  significativamente el proceso de adopción, evaluación técnica y comprensión del producto.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/70 mb-2">
                    <strong className="text-purple-300">Alcance del Sistema:</strong>
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                    <p>• <strong>Sistema web progresivo (PWA)</strong> con instalación nativa</p>
                    <p>• <strong>Autenticación segura</strong> con AWS Cognito (OAuth2/JWT)</p>
                    <p>• <strong>Gestión multi-tenant</strong> para diferentes clientes B2B</p>
                    <p>• <strong>Integración con +120 instituciones</strong> bancarias en LATAM</p>
                    <p>• <strong>Visualización de datos financieros</strong> en tiempo real</p>
                    <p>• <strong>Sistema de webhooks configurable</strong> con 3 niveles de seguridad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <Lightbulb className="w-10 h-10 text-yellow-300 mb-4" />
            <h3 className="text-2xl text-white mb-4">Características Clave del Sistema</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Interfaz visual e intuitiva</p>
                  <p className="text-sm text-white/70">Diseño moderno con UX optimizada para desarrolladores técnicos, siguiendo 
                  principios de diseño centrado en el usuario</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Datos y credenciales precargadas</p>
                  <p className="text-sm text-white/70">Entorno sandbox completo listo para usar sin configuración manual, 
                  acelerando significativamente el tiempo de primera integración</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Flujo completo de autenticación</p>
                  <p className="text-sm text-white/70">OAuth2 y JWT implementados de forma transparente mediante AWS Cognito, 
                  eliminando la complejidad de configuración inicial</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Recuperación de información bancaria</p>
                  <p className="text-sm text-white/70">Acceso completo a cuentas, transacciones y análisis financiero 
                  con visualización en tiempo real</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Diseño responsive (PWA)</p>
                  <p className="text-sm text-white/70">Compatible con desktop, tablet y móvil, con capacidad de instalación 
                  como aplicación nativa y funcionamiento offline</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Arquitectura multi-tenant escalable</p>
                  <p className="text-sm text-white/70">Sistema segmentado por cliente con aprovisionamiento automático 
                  mediante Terraform e infraestructura AWS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <Rocket className="w-10 h-10 text-blue-300 mb-4" />
            <h3 className="text-2xl text-white mb-4">Stack Tecnológico Completo</h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-300 font-semibold mb-2">Frontend & Estado</p>
                <p className="text-sm mb-1">• <strong>React 18 + TypeScript:</strong> Framework moderno con tipado estático</p>
                <p className="text-sm mb-1">• <strong>Zustand:</strong> State management ligero y eficiente</p>
                <p className="text-sm mb-1">• <strong>Tailwind CSS:</strong> Framework de utilidades para diseño responsive</p>
                <p className="text-sm">• <strong>Shadcn UI:</strong> Componentes accesibles y personalizables</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-blue-300 font-semibold mb-2">Backend & Autenticación</p>
                <p className="text-sm mb-1">• <strong>AWS Cognito:</strong> Gestión de usuarios con OAuth2 y JWT</p>
                <p className="text-sm mb-1">• <strong>Python + FastAPI:</strong> APIs REST de alto rendimiento</p>
                <p className="text-sm">• <strong>AWS Lambda Functions:</strong> Funciones serverless escalables</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-green-300 font-semibold mb-2">Infraestructura & DevOps</p>
                <p className="text-sm mb-1">• <strong>Terraform (IaC):</strong> Aprovisionamiento automatizado de recursos</p>
                <p className="text-sm mb-1">• <strong>AWS CloudFront + S3:</strong> CDN global y almacenamiento estático</p>
                <p className="text-sm mb-1">• <strong>GitHub Actions:</strong> CI/CD para despliegue continuo</p>
                <p className="text-sm">• <strong>Monorepo Architecture:</strong> Gestión unificada del código</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-yellow-300 font-semibold mb-2">Metodología & Gestión</p>
                <p className="text-sm mb-1">• <strong>Scrum:</strong> Sprints de 1 semana con roles definidos</p>
                <p className="text-sm mb-1">• <strong>Jira:</strong> Planificación y seguimiento de tareas</p>
                <p className="text-sm">• <strong>Confluence:</strong> Documentación técnica y procesos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6">
          <h3 className="text-2xl text-white mb-4 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-300" />
            Beneficios Esperados y Logrados
          </h3>
          <div className="grid grid-cols-3 gap-6 text-white/80">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl text-green-300 mb-2">-60%</div>
              <p className="text-lg text-white mb-2">Reducción de tiempo</p>
              <p className="text-sm text-white/70">
                Menor tiempo de integración y configuración inicial gracias al entorno precargado 
                y flujos guiados paso a paso
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl text-blue-300 mb-2">+75%</div>
              <p className="text-lg text-white mb-2">Mejor experiencia</p>
              <p className="text-sm text-white/70">
                Facilita el aprendizaje de los equipos técnicos con interfaz intuitiva y 
                visualización clara del comportamiento de la API
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl text-purple-300 mb-2">+45%</div>
              <p className="text-lg text-white mb-2">Mayor conversión</p>
              <p className="text-sm text-white/70">
                Mejora la tasa de adopción del producto y cierre de ventas B2B mediante 
                demostraciones más efectivas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}