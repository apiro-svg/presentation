import { FileText, Users, Calendar, Target, CheckCircle, Link } from 'lucide-react';

export function Sprint1_2() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sprints 1-2: Planificación y Documentación</h2>
          <p className="text-xl text-purple-200">Fundamentos del Proyecto OpenFinance Control Center</p>
        </div>

        {/* Sprint 1 */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Target className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 1: Planificación y Organización Inicial</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Establecer las bases del proyecto definiendo alcance, metas, equipo de trabajo, 
                entregables clave y planificación de sprints.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Equipo Asignado</div>
              <div className="text-sm text-white/70">Product Owner, Scrum Master, Developer</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 text-pink-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Metodología</div>
              <div className="text-sm text-white/70">Scrum - Sprints 1 semana</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Target className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-white/90 mb-1">Alcance Definido</div>
              <div className="text-sm text-white/70">Dashboard B2B Interactivo</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Logros Sprint 1
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ Definición completa del alcance y objetivos</p>
                <p>✓ Asignación de roles y responsabilidades</p>
                <p>✓ Cronograma de 14 sprints establecido</p>
                <p>✓ Herramientas configuradas: Jira, Slack, Confluence</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-purple-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/MjA4ZjZjYzE2MDA0NDEwMTg3ZDJmNjNmY2ZjZTFjMjc" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  📄 Alcance y Roles
                </a>
                <a href="https://finerio.atlassian.net/wiki/external/NmUzNjRkOGMwYzkwNDU1OWJhNDY4NzAxOGRlZWYzNmY" 
                   className="block text-purple-300 hover:text-purple-200 truncate" target="_blank" rel="noopener noreferrer">
                  📅 Cronograma de Actividades
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 2 */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <FileText className="w-12 h-12 text-blue-300 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl text-white mb-2">Sprint 2: Documentación del Proyecto y Procesos</h3>
              <p className="text-white/80 leading-relaxed mb-3">
                Iniciar la documentación formal del proyecto definiendo estructura, contenidos 
                clave y procedimientos que guiarán el desarrollo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <FileText className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">4</div>
              <div className="text-sm text-white/70">Documentos Técnicos Creados</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Target className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Procesos Documentados</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">Confluence</div>
              <div className="text-sm text-white/70">Plataforma Oficial</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                Logros Sprint 2
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>✓ Estructura documental jerárquica creada</p>
                <p>✓ Proceso de aprovisionamiento de accesos</p>
                <p>✓ Guías de diseño de interfaces establecidas</p>
                <p>✓ Plantillas estandarizadas para documentación</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-300" />
                Evidencias Confluence
              </h4>
              <div className="space-y-2 text-sm">
                <a href="https://finerio.atlassian.net/wiki/external/NzAzOTljNGExNDc3NDgzMThlMTdlOTc4Nzg3NDcyMzU" 
                   className="block text-blue-300 hover:text-blue-200 truncate" target="_blank" rel="noopener noreferrer">
                  🔐 Aprovisionamiento Accesos
                </a>
                <a href="https://finerio.atlassian.net/wiki/external/MjA4OWNiZjQ2MjU3NDIzZjgxOGM2NmM2ZGZhM2UxZDY" 
                   className="block text-blue-300 hover:text-blue-200 truncate" target="_blank" rel="noopener noreferrer">
                  🎨 Diseño de Interfaces
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}