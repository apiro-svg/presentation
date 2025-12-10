import { Code, Database, Cloud, Shield, Zap, Layers, GitBranch, Package } from 'lucide-react';

export function AreaTecnologia() {
  const tecnologias = [
    {
      categoria: 'Frontend',
      icon: Code,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-300/30',
      items: [
        { name: 'React 18', desc: 'Framework principal', icon: '⚛️' },
        { name: 'TypeScript', desc: 'Tipado estático', icon: '📘' },
        { name: 'Zustand', desc: 'State management', icon: '🐻' },
        { name: 'React Router', desc: 'Navegación SPA', icon: '🧭' },
        { name: 'Vite', desc: 'Build tool rápido', icon: '⚡' },
        { name: 'Tailwind CSS', desc: 'Utility-first CSS', icon: '🎨' },
      ]
    },
    {
      categoria: 'Backend & APIs',
      icon: Database,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-300/30',
      items: [
        { name: 'Python', desc: 'Lambda functions', icon: '🐍' },
        { name: 'AWS Lambda', desc: 'Serverless compute', icon: '⚡' },
        { name: 'API Gateway', desc: 'APIs REST', icon: '🚪' },
        { name: 'DynamoDB', desc: 'NoSQL database', icon: '📊' },
        { name: 'S3', desc: 'Object storage', icon: '📦' },
      ]
    },
    {
      categoria: 'Infraestructura',
      icon: Cloud,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-300/30',
      items: [
        { name: 'AWS Cloud', desc: 'Plataforma cloud', icon: '☁️' },
        { name: 'Terraform', desc: 'Infrastructure as Code', icon: '🏗️' },
        { name: 'CloudFront', desc: 'CDN global', icon: '🌐' },
        { name: 'Route 53', desc: 'DNS routing', icon: '🗺️' },
        { name: 'CloudWatch', desc: 'Monitoreo', icon: '📈' },
      ]
    },
    {
      categoria: 'Seguridad & Auth',
      icon: Shield,
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-300/30',
      items: [
        { name: 'AWS Cognito', desc: 'Auth multi-tenant', icon: '🔐' },
        { name: 'OAuth 2.0', desc: 'Autorización', icon: '🔑' },
        { name: 'JWT', desc: 'Tokens seguros', icon: '🎫' },
        { name: 'HTTPS/TLS', desc: 'Cifrado', icon: '🔒' },
      ]
    },
  ];

  const herramientas = [
    { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-300' },
    { name: 'Jira', icon: Package, color: 'text-blue-300' },
    { name: 'Confluence', icon: Layers, color: 'text-purple-300' },
    { name: 'Slack', icon: Zap, color: 'text-green-300' },
  ];

  return (
    <div className="min-h-screen px-8 py-10 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-5">
          <h2 className="text-4xl text-white mb-2">Stack Tecnológico</h2>
          <p className="text-lg text-purple-200">Tecnologías y herramientas del OpenFinance Control Center</p>
        </div>

        {/* Tecnologías Principales */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {tecnologias.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm border ${tech.borderColor} rounded-xl p-3`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-white" />
                  <h3 className="text-base text-white">{tech.categoria}</h3>
                </div>
                <div className="grid gap-1">
                  {tech.items.map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-1.5 flex items-center gap-2">
                      <span className="text-sm flex-shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-xs truncate">{item.name}</h4>
                        <p className="text-white/60 text-xs truncate">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Herramientas de Desarrollo */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-300/30 rounded-xl p-3">
          <h3 className="text-base text-white mb-2 text-center">Herramientas de Desarrollo y Colaboración</h3>
          <div className="grid grid-cols-4 gap-2">
            {herramientas.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 rounded-lg p-3 text-center"
                >
                  <Icon className={`w-7 h-7 ${tool.color} mx-auto mb-1`} />
                  <p className="text-white text-xs">{tool.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}