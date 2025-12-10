# 🚀 OpenFinance Control Center - Presentación de Prácticas Pre-Profesionales

<div align="center">

![OpenFinance Control Center](https://img.shields.io/badge/OpenFinance-Control%20Center-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)

**Presentación interactiva para la defensa de prácticas pre-profesionales**

[🌐 Ver Demo](https://tu-demo-url.com) • [📄 Descargar PDF](#exportar-a-pdf) • [📖 Documentación](#características)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Exportar a PDF](#-exportar-a-pdf)
- [Diapositivas](#-diapositivas)
- [Atajos de Teclado](#-atajos-de-teclado)
- [Personalización](#-personalización)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

Esta es una **presentación web interactiva** desarrollada para la defensa de prácticas pre-profesionales realizadas en **Finerio Connect** (septiembre-diciembre 2025). El proyecto documenta el desarrollo del **OpenFinance Control Center**, un dashboard interactivo para facilitar la integración de APIs de agregación bancaria en clientes B2B.

### Contexto del Proyecto

**OpenFinance Control Center** es una plataforma desarrollada durante 14 sprints usando metodología Scrum, que simplifica la configuración de instituciones financieras, gestión de agregaciones bancarias y autorización de widgets para clientes empresariales de Finerio Connect.

### ¿Por qué una presentación web?

- ✅ **Interactiva y moderna**: Navegación fluida con animaciones
- ✅ **Responsive**: Se adapta a cualquier dispositivo
- ✅ **Exportable a PDF**: Genera presentaciones imprimibles
- ✅ **Sin dependencias externas**: PowerPoint o Keynote no necesarios
- ✅ **Fácil de compartir**: Un simple enlace

---

## ✨ Características

### 🎨 Diseño Profesional

- **Gradientes animados** de fondo
- **Animaciones suaves** en transiciones
- **Modo pantalla completa** para presentaciones
- **Tema oscuro** con acentos púrpura, rosa y azul

### 🧭 Navegación Intuitiva

- **Barra de progreso** visual
- **Menú lateral** organizado por secciones
- **Miniaturas** de navegación rápida
- **Contador de diapositivas** en tiempo real

### 📱 Totalmente Responsive

- Optimizado para **desktop** (recomendado para presentaciones)
- Compatible con **tablets** y **móviles**
- Ajuste automático de textos y elementos

### 🖨️ Exportación a PDF

- **Exportación nativa** del navegador
- **Todas las diapositivas** en un solo PDF
- **Formato 16:9** optimizado para presentaciones
- **Colores y gradientes** preservados

### ⚡ Rendimiento

- **Carga rápida** con Vite
- **Optimización de bundle** automática
- **Lazy loading** de componentes
- **Sin imágenes pesadas** (solo SVG e iconos)

---

## 🛠️ Tecnologías Utilizadas

### Frontend Framework

- **[React 18.3](https://react.dev/)** - Biblioteca de UI
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Tipado estático

### Estilos

- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Framework CSS utility-first
- **CSS Modules** - Estilos con scope local
- **Animaciones CSS** - Transiciones personalizadas

### Tooling

- **[Vite 6.0](https://vite.dev/)** - Build tool ultrarrápido
- **[ESLint](https://eslint.org/)** - Linter de código
- **[PostCSS](https://postcss.org/)** - Procesador CSS

### Iconos

- **[Lucide React](https://lucide.dev/)** - Iconos modernos y ligeros

---

## 📁 Estructura del Proyecto

```
openfinance-presentation/
├── src/
│   ├── components/
│   │   ├── slides/                # Componentes de diapositivas
│   │   │   ├── sprints/          # Diapositivas de sprints
│   │   │   │   ├── Sprint1_2.tsx
│   │   │   │   ├── Sprint3_4.tsx
│   │   │   │   ├── Sprint5_6.tsx
│   │   │   │   ├── Sprint7.tsx
│   │   │   │   ├── Sprint8.tsx
│   │   │   │   ├── Sprint9_10.tsx
│   │   │   │   ├── Sprint11_12.tsx
│   │   │   │   └── Sprint13_14.tsx
│   │   │   ├── demo/             # Diapositivas de demo
│   │   │   │   └── DemoLogin.tsx
│   │   │   ├── Portada.tsx       # Diapositiva de portada
│   │   │   ├── Indice.tsx        # Índice de contenidos
│   │   │   ├── ContextoFintech.tsx
│   │   │   ├── SobreEmpresa.tsx
│   │   │   ├── AreaTecnologia.tsx
│   │   │   ├── Problema.tsx
│   │   │   ├── Solucion.tsx
│   │   │   ├── ArquitecturaTecnica.tsx
│   │   │   ├── DesafiosSoluciones.tsx
│   │   │   ├── Aprendizajes.tsx
│   │   │   ├── Resultados.tsx
│   │   │   ├── Impacto.tsx
│   │   │   ├── TestimoniosFeedback.tsx
│   │   │   ├── Conclusiones.tsx
│   │   │   ├── Recomendaciones.tsx
│   │   │   ���── Agradecimientos.tsx
│   │   └── Portada.tsx           # Componente reutilizable
│   ├── styles/
│   │   └── globals.css           # Estilos globales y print
│   ├── App.tsx                   # Componente principal
│   ├── main.tsx                  # Punto de entrada
│   └── vite-env.d.ts            # Tipos de Vite
├── public/                       # Archivos estáticos
├── index.html                    # HTML principal
├── package.json                  # Dependencias
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts               # Configuración Vite
├── tailwind.config.js           # Configuración Tailwind
├── postcss.config.js            # Configuración PostCSS
└── README.md                     # Este archivo
```

---

## 🚀 Instalación

### Prerequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/openfinance-presentation.git
cd openfinance-presentation
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

---

## 💻 Uso

### Modo Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo con hot-reload en `http://localhost:5173`

### Build de Producción

```bash
npm run build
```

Genera los archivos optimizados en la carpeta `dist/`

### Preview de Producción

```bash
npm run preview
```

Previsualiza el build de producción localmente

### Linting

```bash
npm run lint
```

Ejecuta ESLint para verificar el código

---

## 🖨️ Exportar a PDF

### Método 1: Botón de Impresión

1. Haz clic en el **botón de impresora** 🖨️ en la esquina superior izquierda
2. En el diálogo de impresión:
   - **Destino:** Guardar como PDF
   - **Gráficos de fondo:** ✅ Activado (importante)
   - **Márgenes:** Ninguno
   - **Escala:** 100%
3. Haz clic en "Guardar"

### Método 2: Atajo de Teclado

1. Presiona `Ctrl+P` (Windows/Linux) o `Cmd+P` (Mac)
2. Configura las opciones de impresión (ver arriba)
3. Guarda el PDF

### Configuración Recomendada

- ✅ **Formato:** 16:9 (297mm x 167mm)
- ✅ **Orientación:** Horizontal
- ✅ **Colores:** Incluir gráficos de fondo
- ✅ **Márgenes:** 0
- ✅ **Páginas:** 25 diapositivas

---

## 📊 Diapositivas

La presentación consta de **25 diapositivas** organizadas en 6 secciones:

### 1. Inicio (2 slides)
- 🏠 **Portada** - Presentación del proyecto
- 📋 **Índice** - Tabla de contenidos

### 2. Contexto (3 slides)
- 🌐 **Contexto FinTech** - Industria y Open Banking
- 🏢 **Sobre Finerio Connect** - La empresa
- 💻 **Stack Tecnológico** - Tecnologías utilizadas

### 3. Problemática y Solución (3 slides)
- ⚠️ **Problema** - Desafíos identificados
- ✅ **Solución Propuesta** - OpenFinance Control Center
- 🏗️ **Arquitectura Técnica** - Diseño del sistema

### 4. Desarrollo (8 slides)
- 📅 **Sprints 1-2** - Planificación y arquitectura
- 🔐 **Sprints 3-4** - Login y landing page
- 🏦 **Sprints 5-6** - Configuración de instituciones
- 📊 **Sprint 7** - Gestión de agregaciones
- 🧪 **Sprint 8** - Beta cerrada y testing
- 🔑 **Sprints 9-10** - Sistema de autorizaciones
- 🚀 **Sprints 11-12** - Beta pública
- 📱 **Sprints 13-14** - PWA y lanzamiento

### 5. Demo (1 slide)
- 🎮 **Demo: Módulo de Login** - Sistema removido por cliente

### 6. Resultados y Cierre (8 slides)
- 🎯 **Desafíos y Soluciones** - Obstáculos superados
- 📚 **Aprendizajes Técnicos** - Conocimientos adquiridos
- 📈 **Resultados Alcanzados** - Métricas de éxito
- 💡 **Impacto del Proyecto** - Valor generado
- 💬 **Testimonios y Feedback** - Opiniones del equipo
- 🎓 **Conclusiones** - Reflexiones finales
- 🔮 **Recomendaciones** - Mejoras futuras
- 🙏 **Agradecimientos** - Reconocimientos

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `→` o `Space` | Siguiente diapositiva |
| `←` | Diapositiva anterior |
| `Home` | Ir al inicio |
| `End` | Ir al final |
| `F` | Pantalla completa |
| `Esc` | Cerrar menú / Salir de pantalla completa |
| `Ctrl+P` / `Cmd+P` | Imprimir / Exportar a PDF |

---

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `src/styles/globals.css`:

```css
/* Gradiente principal */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);
}

/* Colores de acento */
.text-purple-400 { color: #c084fc; }
.text-pink-400 { color: #f472b6; }
.text-blue-400 { color: #60a5fa; }
```

### Agregar Nuevas Diapositivas

1. Crea un nuevo componente en `src/components/slides/`:

```tsx
// src/components/slides/MiNuevaSlide.tsx
export function MiNuevaSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <h1 className="text-6xl text-white mb-6">
        Mi Nueva Diapositiva
      </h1>
      <p className="text-2xl text-white/80">
        Contenido de la diapositiva
      </p>
    </div>
  );
}
```

2. Impórtala y agrégala al array `slides` en `src/App.tsx`:

```tsx
import { MiNuevaSlide } from './components/slides/MiNuevaSlide';

const slides = [
  // ... otras slides
  { id: 25, component: MiNuevaSlide, title: 'Mi Nueva Slide', section: 'Extra' },
];
```

### Modificar Animaciones

Edita las animaciones en `src/styles/globals.css`:

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
```

---

## 👨‍💻 Autor

**Airton Gabriel Piro Gonzales**

- 🎓 Ingeniería de Sistemas
- 🏢 Prácticas en Finerio Connect
- 📅 Septiembre - Diciembre 2025
- 🌐 [LinkedIn](https://linkedin.com/in/tu-perfil)
- 💼 [Portfolio](https://tu-portfolio.com)
- 📧 [Email](mailto:tu-email@example.com)

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

```
MIT License

Copyright (c) 2025 Airton Gabriel Piro Gonzales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Agradecimientos

- **Finerio Connect** - Por la oportunidad de realizar mis prácticas
- **Equipo de Tecnología** - Por el mentoreo y apoyo continuo
- **Clientes Beta** - Por el feedback valioso
- **Universidad** - Por la formación académica

---

## 📞 Soporte

Si tienes preguntas o encuentras algún problema:

1. 🐛 [Reportar un bug](https://github.com/tu-usuario/openfinance-presentation/issues)
2. 💡 [Solicitar una característica](https://github.com/tu-usuario/openfinance-presentation/issues)
3. 📧 [Contactar al autor](mailto:tu-email@example.com)

---

## 🔄 Actualizaciones

### v1.0.0 (Diciembre 2025)
- ✅ Versión inicial
- ✅ 25 diapositivas completas
- ✅ Exportación a PDF funcional
- ✅ Modo pantalla completa
- ✅ Navegación interactiva

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

**Hecho con ❤️ por Airton Piro**

[⬆ Volver arriba](#-openfinance-control-center---presentación-de-prácticas-pre-profesionales)

</div>
