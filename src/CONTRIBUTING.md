# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a empezar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conducta

Este proyecto sigue el [Código de Conducta de Contributor Covenant](https://www.contributor-covenant.org/). Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

## 🎯 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug:

1. **Verifica** que no exista ya un issue similar
2. **Abre un nuevo issue** con:
   - Título descriptivo
   - Pasos para reproducir el bug
   - Comportamiento esperado vs. real
   - Screenshots si aplica
   - Tu entorno (OS, navegador, versión)

### Sugerir Mejoras

Para sugerir nuevas características:

1. **Verifica** que no exista una sugerencia similar
2. **Abre un nuevo issue** con:
   - Título claro
   - Descripción detallada de la característica
   - ¿Por qué sería útil?
   - Ejemplos de uso si aplica

### Mejorar Documentación

La documentación siempre puede mejorar:

- Corregir typos
- Aclarar instrucciones confusas
- Agregar ejemplos
- Traducir a otros idiomas

## 🔧 Proceso de Desarrollo

### 1. Fork el Repositorio

```bash
# Haz fork desde GitHub, luego:
git clone https://github.com/tu-usuario/openfinance-presentation.git
cd openfinance-presentation
```

### 2. Crea una Rama

```bash
git checkout -b feature/mi-nueva-caracteristica
# o
git checkout -b fix/correccion-de-bug
```

### 3. Instala Dependencias

```bash
npm install
```

### 4. Inicia el Servidor de Desarrollo

```bash
npm run dev
```

### 5. Haz tus Cambios

- Escribe código limpio y legible
- Comenta código complejo
- Sigue la guía de estilo del proyecto

### 6. Prueba tus Cambios

```bash
npm run build
npm run preview
```

Verifica:

- ✅ La aplicación funciona correctamente
- ✅ No hay errores en la consola
- ✅ El export a PDF funciona
- ✅ Es responsive

### 7. Commit tus Cambios

```bash
git add .
git commit -m "feat: descripción breve del cambio"
```

### 8. Push a tu Fork

```bash
git push origin feature/mi-nueva-caracteristica
```

### 9. Abre un Pull Request

Ve a GitHub y abre un Pull Request desde tu rama.

## 🎨 Guía de Estilo

### JavaScript/TypeScript

```typescript
// ✅ Bueno
export function MiComponente({ titulo, descripcion }: Props) {
  const [estado, setEstado] = useState(false);

  const manejarClick = () => {
    setEstado(true);
  };

  return (
    <div className="container">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
}

// ❌ Malo
export function micomponente(props) {
  let x = false;
  return <div><h1>{props.titulo}</h1></div>;
}
```

### CSS/Tailwind

```tsx
// ✅ Bueno - Clases organizadas y legibles
<div className="flex flex-col items-center justify-center min-h-screen px-8">
  <h1 className="text-6xl text-white mb-6">Título</h1>
</div>

// ❌ Malo - Clases desordenadas
<div className="px-8 flex min-h-screen items-center text-white flex-col justify-center">
  <h1 className="mb-6 text-6xl">Título</h1>
</div>
```

### Nombres de Archivos

- **Componentes:** `PascalCase.tsx` (ej: `MiComponente.tsx`)
- **Utilidades:** `camelCase.ts` (ej: `miUtilidad.ts`)
- **Estilos:** `kebab-case.css` (ej: `mi-estilo.css`)

### Estructura de Componentes

```tsx
// Imports
import { useState } from "react";
import { Icon } from "lucide-react";

// Types
interface MiComponenteProps {
  titulo: string;
  descripcion?: string;
}

// Component
export function MiComponente({
  titulo,
  descripcion,
}: MiComponenteProps) {
  // Hooks
  const [estado, setEstado] = useState(false);

  // Handlers
  const manejarClick = () => {
    setEstado(!estado);
  };

  // Render
  return <div>{/* Content */}</div>;
}
```

## 📝 Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
tipo(scope): descripción breve

Descripción detallada opcional.
```

### Tipos

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Cambios en build o herramientas

### Ejemplos

```bash
# Nueva característica
git commit -m "feat(slides): agregar diapositiva de roadmap"

# Corrección de bug
git commit -m "fix(navigation): corregir error en navegación con teclado"

# Documentación
git commit -m "docs(readme): actualizar instrucciones de instalación"

# Estilo
git commit -m "style(portada): mejorar espaciado del título"

# Refactor
git commit -m "refactor(app): simplificar lógica de navegación"
```

## 🔀 Pull Requests

### Antes de Enviar

- ✅ Tu código sigue la guía de estilo
- ✅ Has probado tus cambios
- ✅ Has actualizado la documentación si es necesario
- ✅ Tu rama está actualizada con `main`

### Descripción del PR

Incluye:

1. **Qué** cambiaste
2. **Por qué** lo cambiaste
3. **Cómo** probaste los cambios
4. **Screenshots** si hay cambios visuales

### Ejemplo

```markdown
## Descripción

Agrega una nueva diapositiva sobre métricas de rendimiento del proyecto.

## Motivación

Los revisores solicitaron información sobre el impacto cuantitativo del proyecto.

## Cambios

- Nuevo componente `MetricasRendimiento.tsx`
- Agregado al array de slides en `App.tsx`
- Actualizado `README.md` con nueva diapositiva

## Screenshots

[Captura de pantalla de la nueva diapositiva]

## Testing

- [x] Probado en Chrome, Firefox y Safari
- [x] Export a PDF funciona correctamente
- [x] Responsive en mobile y tablet
```

## 🧪 Testing

Antes de enviar tu PR, verifica:

### Funcionalidad

- [ ] La aplicación inicia correctamente
- [ ] Todas las diapositivas se muestran
- [ ] La navegación funciona (flechas, menú)
- [ ] El modo pantalla completa funciona
- [ ] El export a PDF funciona

### Responsive

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Navegadores

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## 📞 ¿Necesitas Ayuda?

- 💬 Abre un [Discussion](https://github.com/tu-usuario/openfinance-presentation/discussions)
- 📧 Envía un email a [tu-email@example.com](mailto:tu-email@example.com)
- 🐛 Reporta bugs en [Issues](https://github.com/tu-usuario/openfinance-presentation/issues)

## 🎉 ¡Gracias!

Tu contribución hace que este proyecto sea mejor. ¡Gracias por tu tiempo y esfuerzo!

---

<div align="center">

**⭐ No olvides dar una estrella al proyecto si te gustó ⭐**

</div>