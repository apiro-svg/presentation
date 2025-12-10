import { Building2, Award, Globe, Users, MapPin, TrendingUp, Target } from 'lucide-react';

export function SobreEmpresa() {
  return (
    <div className="min-h-screen px-8 py-12 overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-white mb-3">Sobre Finerio Connect</h2>
          <p className="text-xl text-purple-200">Primera plataforma de Open Banking en Hispanoamérica</p>
        </div>

        {/* Header destacado */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <Building2 className="w-12 h-12 text-purple-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-white mb-3">Empresa Líder en Open Banking y Open Finance</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Fundada en 2016</strong> en la Ciudad de México, Finerio Connect es una empresa mexicana 
                de base tecnológica, especializada en el diseño y operación de <strong>infraestructura financiera 
                digital</strong> bajo los modelos de Open Banking y Open Finance. Se ha consolidado como la 
                <strong className="text-purple-300"> primera plataforma de este tipo en Hispanoamérica</strong>, 
                ofreciendo interfaces de programación de aplicaciones (APIs) seguras, escalables y estandarizadas 
                que permiten la interoperabilidad entre instituciones financieras, fintechs y empresas de diversos sectores.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Actualmente conecta con <strong className="text-pink-300">más de 120 instituciones financieras</strong> en 
                México, Chile, Colombia y Brasil, facilitando la agregación, análisis y enriquecimiento de datos financieros. 
                Su propuesta de valor radica en transformar los datos en un recurso estratégico para optimizar procesos como 
                la evaluación crediticia, la gestión de riesgos y el desarrollo de productos financieros innovadores.
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <MapPin className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">4</div>
                  <div className="text-white/70">Países</div>
                  <div className="text-white/50 text-sm mt-1">LATAM</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <Globe className="w-6 h-6 text-pink-300 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">+120</div>
                  <div className="text-white/70">Instituciones</div>
                  <div className="text-white/50 text-sm mt-1">Conectadas</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <TrendingUp className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">9</div>
                  <div className="text-white/70">Años</div>
                  <div className="text-white/50 text-sm mt-1">Experiencia</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <Users className="w-6 h-6 text-green-300 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">+50</div>
                  <div className="text-white/70">Clientes B2B</div>
                  <div className="text-white/50 text-sm mt-1">Activos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
            <Award className="w-10 h-10 text-pink-300" />
            <h3 className="text-xl text-white">Reconocimientos y Premios Destacados</h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-purple-300 mb-2 font-semibold">2024 - Año de Reconocimiento Internacional</p>
                <p className="mb-1">• <strong>Forbes México - Latam FinTech 50:</strong> Seleccionada como una de las 50 FinTech más prometedoras de América Latina</p>
                <p className="mb-1">• <strong>AWS Generative AI Accelerator:</strong> Elegida entre las 80 startups globales, orientado a la adopción de inteligencia artificial generativa</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-pink-300 mb-2 font-semibold">2022 - Consolidación Regional</p>
                <p className="mb-1">• <strong>Premios Fintech Américas (Categoría Platino):</strong> Ganadora en innovación en infraestructura financiera</p>
                <p className="mb-1">• <strong>Forbes México:</strong> Entre las 30 promesas de negocio y las 100 startups de mayor crecimiento</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-blue-300 mb-2 font-semibold">2021 - Innovación y Cultura</p>
                <p className="mb-1">• <strong>Finnovating Global Platform:</strong> Primera API de Open Finance consolidada en Hispanoamérica</p>
                <p className="mb-1">• <strong>Awards of Happiness "Work from Anywhere":</strong> Cultura organizacional y adaptación al trabajo remoto</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-green-300 mb-2 font-semibold">2018-2020 - Primeros Años</p>
                <p className="mb-1">• <strong>BBVA Open Talent México:</strong> Finalista regional de startups FinTech</p>
                <p className="mb-1">• <strong>MassChallenge México:</strong> Aceleración de startups prometedoras</p>
                <p className="mb-1">• <strong>Village Capital:</strong> Reconocida por escalabilidad e impacto social</p>
                <p className="mb-1">• <strong>Premio Everis:</strong> Innovación tecnológica aplicada a las finanzas</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
              <Globe className="w-10 h-10 text-blue-300" />
              <h3 className="text-xl text-white">Misión</h3>
              <p className="text-white/80 leading-relaxed">
                Impulsar la <strong className="text-blue-300">inclusión financiera</strong> a través de infraestructura 
                tecnológica accesible y segura que conecte instituciones financieras con desarrolladores, maximizando el 
                valor de la información financiera y <strong className="text-cyan-300">democratizando el acceso</strong> a 
                servicios bancarios digitales en América Latina.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
              <Target className="w-10 h-10 text-purple-300" />
              <h3 className="text-xl text-white">Visión</h3>
              <p className="text-white/80 leading-relaxed">
                Ser la <strong className="text-purple-300">plataforma líder de Open Finance</strong> en América Latina, 
                facilitando la transformación digital del sector financiero y promoviendo un ecosistema colaborativo 
                caracterizado por la <strong className="text-pink-300">interoperabilidad, transparencia e innovación continua</strong>.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
              <Users className="w-10 h-10 text-green-300" />
              <h3 className="text-xl text-white">Área de Tecnología</h3>
              <p className="text-white/80 leading-relaxed">
                Equipo multidisciplinario de Ingeniería especializado en <strong className="text-green-300">desarrollo de APIs, 
                integración bancaria, seguridad informática</strong> y soluciones de agregación de datos financieros, 
                trabajando bajo <strong className="text-emerald-300">metodología Scrum</strong> con enfoque en mejora continua 
                y excelencia técnica.
              </p>
            </div>
          </div>
        </div>

        {/* Cobertura geográfica */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4 text-center flex items-center justify-center gap-3">
            <MapPin className="w-6 h-6 text-blue-300" />
            Presencia Regional en América Latina
          </h3>
          <div className="grid grid-cols-4 gap-4 text-white/80">
            <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-4xl mb-2">🇲🇽</div>
              <div className="text-lg text-white mb-1">México</div>
              <p className="text-sm text-white/60">Sede principal, hub de innovación y mayor mercado regional</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-4xl mb-2">🇨🇱</div>
              <div className="text-lg text-white mb-1">Chile</div>
              <p className="text-sm text-white/60">Expansión en el mercado del Cono Sur</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-4xl mb-2">🇨🇴</div>
              <div className="text-lg text-white mb-1">Colombia</div>
              <p className="text-sm text-white/60">Presencia estratégica en la región Andina</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
              <div className="text-4xl mb-2">🇧🇷</div>
              <div className="text-lg text-white mb-1">Brasil</div>
              <p className="text-sm text-white/60">Mayor mercado de América Latina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}