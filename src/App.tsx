import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Home } from 'lucide-react';
import { Portada } from './components/slides/Portada';
import { ContextoFintech } from './components/slides/ContextoFintech';
import { SobreEmpresa } from './components/slides/SobreEmpresa';
import { Problema } from './components/slides/Problema';
import { Solucion } from './components/slides/Solucion';
import { ArquitecturaTecnica } from './components/slides/ArquitecturaTecnica';
import { Sprint1_2 } from './components/slides/sprints/Sprint1_2';
import { Sprint3_4 } from './components/slides/sprints/Sprint3_4';
import { Sprint5_6_7 } from './components/slides/sprints/Sprint5_6_7';
import { Sprint8 } from './components/slides/sprints/Sprint8';
import { Sprint9_10 } from './components/slides/sprints/Sprint9_10';
import { Sprint11_12 } from './components/slides/sprints/Sprint11_12';
import { Sprint13_14 } from './components/slides/sprints/Sprint13_14';
import { Resultados } from './components/slides/Resultados';
import { Agradecimientos } from './components/slides/Agradecimientos';

const slides = [
  { id: 0, component: Portada, title: 'Portada', section: 'Inicio' },
  
  // Contexto
  { id: 1, component: ContextoFintech, title: 'Contexto FinTech', section: 'Contexto' },
  { id: 2, component: SobreEmpresa, title: 'Finerio Connect', section: 'Contexto' },
  
  // Problemática y Solución
  { id: 3, component: Problema, title: 'Problemática', section: 'Problema' },
  { id: 4, component: Solucion, title: 'Solución Propuesta', section: 'Solución' },
  { id: 5, component: ArquitecturaTecnica, title: 'Arquitectura Técnica', section: 'Solución' },
  
  // Desarrollo - Sprints Destacados (14 sprints en total)
  { id: 6, component: Sprint1_2, title: 'Sprints 1-2: Planificación y Documentación', section: 'Desarrollo' },
  { id: 7, component: Sprint3_4, title: 'Sprints 3-4: Login y Landing Page', section: 'Desarrollo' },
  { id: 8, component: Sprint5_6_7, title: 'Sprints 5-6-7: Configuración y Agregaciones', section: 'Desarrollo' },
  { id: 9, component: Sprint8, title: 'Sprint 8: Lanzamiento Beta Cerrada', section: 'Desarrollo' },
  { id: 10, component: Sprint9_10, title: 'Sprints 9-10: Autorizaciones', section: 'Desarrollo' },
  { id: 11, component: Sprint11_12, title: 'Sprints 11-12: Beta Pública', section: 'Desarrollo' },
  { id: 12, component: Sprint13_14, title: 'Sprints 13-14: PWA y Lanzamiento Final', section: 'Desarrollo' },
  
  // Resultados y Cierre
  { id: 13, component: Resultados, title: 'Resultados y Conclusiones', section: 'Cierre' },
  { id: 14, component: Agradecimientos, title: 'Agradecimientos', section: 'Cierre' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowMenu(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowMenu(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowMenu(false);
      if (e.key === 'Home') setCurrentSlide(0);
      if (e.key === 'End') setCurrentSlide(slides.length - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const CurrentComponent = slides[currentSlide].component;

  // Agrupar slides por sección para el menú
  const slidesBySection = slides.reduce((acc, slide) => {
    if (!acc[slide.section]) {
      acc[slide.section] = [];
    }
    acc[slide.section].push(slide);
    return acc;
  }, {} as Record<string, typeof slides>);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 min-h-screen">
        <CurrentComponent />
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-8 left-8 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        title="Abrir menú de navegación"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Home Button */}
      <button
        onClick={() => goToSlide(0)}
        className="fixed top-8 left-24 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        title="Ir al inicio"
      >
        <Home className="w-6 h-6 text-white" />
      </button>

      {/* Side Menu */}
      {showMenu && (
        <>
          <div 
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMenu(false)}
          />
          <div className="fixed left-0 top-0 h-full z-30 bg-slate-900/98 backdrop-blur-lg border-r border-white/20 w-96 overflow-y-auto">
            <div className="p-8">
              <h3 className="text-3xl text-white mb-6 flex items-center gap-2">
                <Menu className="w-8 h-8" />
                Navegación
              </h3>
              <div className="space-y-6">
                {Object.entries(slidesBySection).map(([section, sectionSlides]) => (
                  <div key={section}>
                    <h4 className="text-purple-300 text-sm uppercase tracking-wider mb-2 px-2">
                      {section}
                    </h4>
                    <div className="space-y-1">
                      {sectionSlides.map((slide) => (
                        <button
                          key={slide.id}
                          onClick={() => goToSlide(slide.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                            slide.id === currentSlide
                              ? 'bg-purple-500/30 text-white border border-purple-400/50'
                              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="text-purple-300 mr-2">{slide.id + 1}.</span>
                          {slide.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-4 px-8">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto hide-scrollbar">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all flex-shrink-0 ${
                  index === currentSlide
                    ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-400'
                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Info */}
      <div className="fixed top-8 right-8 z-20 text-right">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
          <div className="text-white/90 text-lg mb-1">
            {currentSlide + 1} / {slides.length}
          </div>
          <div className="text-white/60 text-sm">
            {slides[currentSlide].section}
          </div>
          <div className="text-white/40 text-xs mt-1">
            {slides[currentSlide].title}
          </div>
        </div>
      </div>
    </div>
  );
}