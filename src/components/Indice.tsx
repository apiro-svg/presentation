import { Building2, AlertTriangle, Target, Monitor, Code, TrendingUp, Award, BookOpen } from 'lucide-react';

export function Indice() {
  const secciones = [
    { num: '01', title: 'Contexto FinTech', subtitle: 'Sector y Open Banking en LATAM', icon: Building2, color: 'from-blue-500/20 to-cyan-500/20' },
    { num: '02', title: 'Finerio Connect', subtitle: 'Empresa líder en Open Banking', icon: Building2, color: 'from-green-500/20 to-emerald-500/20' },
    { num: '03', title: 'Problemática', subtitle: 'Desafíos en la integración', icon: AlertTriangle, color: 'from-red-500/20 to-orange-500/20' },
    { num: '04', title: 'Solución Propuesta', subtitle: 'OpenFinance Control Center', icon: Target, color: 'from-purple-500/20 to-pink-500/20' },
    { num: '05', title: 'Desarrollo', subtitle: '14 Sprints de 1 semana cada uno', icon: Code, color: 'from-indigo-500/20 to-purple-500/20' },
    { num: '06', title: 'Demo del Sistema', subtitle: 'Módulos y funcionalidades', icon: Monitor, color: 'from-green-500/20 to-emerald-500/20' },
    { num: '07', title: 'Resultados', subtitle: 'Logros y aprendizajes', icon: TrendingUp, color: 'from-yellow-500/20 to-orange-500/20' },
    { num: '08', title: 'Conclusiones', subtitle: 'Reflexiones y recomendaciones', icon: BookOpen, color: 'from-cyan-500/20 to-blue-500/20' },
  ];

  return (
    <div className="min-h-screen px-8 py-10 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl text-white mb-2">Índice</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {secciones.map((seccion, idx) => {
            const Icon = seccion.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${seccion.color} backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-4xl text-white/40 mb-2">{seccion.num}</div>
                    <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-2">{seccion.title}</h3>
                    <p className="text-white/70">{seccion.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}