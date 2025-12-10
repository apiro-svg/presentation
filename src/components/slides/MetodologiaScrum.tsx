import { Users, Calendar, Target, RefreshCw, MessageSquare, CheckCircle } from 'lucide-react';

export function MetodologiaScrum() {
  const eventos = [
    { name: 'Sprint Planning', duration: '2h', desc: 'Planificación semanal de objetivos y tareas', icon: Target },
    { name: 'Daily Meetings', duration: '15min', desc: 'Sincronización diaria del equipo', icon: MessageSquare },
    { name: 'Sprint Review', duration: '1h', desc: 'Demostración del incremento de producto', icon: CheckCircle },
    { name: 'Sprint Retrospective', duration: '1h', desc: 'Análisis de mejora continua', icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen px-8 py-8 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-2">Metodología Scrum</h2>
          <p className="text-lg text-purple-200">14 Sprints de 1 semana cada uno</p>
        </div>

        {/* Resumen Scrum */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-3 mb-3">
          <div className="grid md:grid-cols-3 gap-2 mb-2">
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <Calendar className="w-6 h-6 text-purple-300 mx-auto mb-1" />
              <div className="text-xl text-white mb-0.5">14</div>
              <p className="text-white/70 text-xs">Sprints</p>
            </div>
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <Target className="w-6 h-6 text-pink-300 mx-auto mb-1" />
              <div className="text-xl text-white mb-0.5">1</div>
              <p className="text-white/70 text-xs">Semana/Sprint</p>
            </div>
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <Users className="w-6 h-6 text-blue-300 mx-auto mb-1" />
              <div className="text-xl text-white mb-0.5">3</div>
              <p className="text-white/70 text-xs">Miembros</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-2">
            <h3 className="text-xs text-white mb-1.5">Roles del Equipo</h3>
            <div className="grid md:grid-cols-3 gap-1.5 text-xs">
              <div className="text-center">
                <div className="text-purple-300">Product Owner</div>
                <div className="text-white/80">Diego Serrano</div>
              </div>
              <div className="text-center">
                <div className="text-pink-300">Scrum Master</div>
                <div className="text-white/80">Nataly Molano</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300">Development</div>
                <div className="text-white/80">Airton Piro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Eventos Scrum */}
        <div className="grid md:grid-cols-2 gap-2 mb-2.5">
          {eventos.map((evento, idx) => {
            const Icon = evento.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2.5"
              >
                <div className="flex items-start gap-2">
                  <Icon className="w-6 h-6 text-purple-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="text-xs text-white">{evento.name}</h3>
                      <span className="text-purple-300 text-xs">{evento.duration}</span>
                    </div>
                    <p className="text-white/70 text-xs">{evento.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Herramientas */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-2.5">
          <h3 className="text-xs text-white mb-1.5 text-center">Herramientas de Gestión</h3>
          <div className="grid md:grid-cols-3 gap-1.5">
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <div className="text-xl mb-0.5">📊</div>
              <h4 className="text-white mb-0.5 text-xs">Jira</h4>
              <p className="text-white/60 text-xs">Gestión de tareas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <div className="text-xl mb-0.5">📝</div>
              <h4 className="text-white mb-0.5 text-xs">Confluence</h4>
              <p className="text-white/60 text-xs">Documentación</p>
            </div>
            <div className="bg-white/10 rounded-xl p-2 text-center">
              <div className="text-xl mb-0.5">💬</div>
              <h4 className="text-white mb-0.5 text-xs">Slack</h4>
              <p className="text-white/60 text-xs">Comunicación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}