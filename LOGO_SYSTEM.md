# 🎨 Sistema de Logo VF - Brand Guidelines

## 📐 Variantes Implementadas

### **Variante 1: Current (Monogram + Separator)** ✅ IMPLEMENTADO
```
V | F
```
- **V**: Font-weight 800 (bold) - Liderazgo
- **F**: Font-weight 600 (semibold) - Equilibrio
- **Separador**: Línea vertical con gradiente verde #16A34A

**Uso**: Header principal, desktop/mobile


---

## 🎯 Variantes Alternativas (Código opcional)

### **Variante 2: Monogram Compacto**
```html
<!-- Para espacios reducidos (ej: favicon, app icon) -->
<div class="logo-compact">
  <span class="logo-v">V</span>
  <span class="logo-dot"></span>
</div>
```

```css
.logo-compact {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
}

.logo-dot {
    width: 6px;
    height: 6px;
    background: var(--color-primary);
    border-radius: 50%;
    margin-bottom: 4px;
}
```

**Output visual**: `V·`


---

### **Variante 3: Full Brand (Con descriptor)**
```html
<!-- Para hero sections o páginas internas -->
<div class="logo-full">
  <div class="logo-mark">
    <span class="logo-v">V</span><span class="logo-separator"></span><span class="logo-f">F</span>
  </div>
  <span class="logo-descriptor">Developer</span>
</div>
```

```css
.logo-full {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.logo-descriptor {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--light-grey);
    padding-left: 2px;
}
```

**Output visual**:
```
V | F
DEVELOPER
```


---

## 🎨 Especificaciones Técnicas

### Tipografía
- **Font Family**: Montserrat (Display)
- **V Weight**: 800 (ExtraBold)
- **F Weight**: 600 (SemiBold)
- **Letter Spacing V**: -0.03em (tight)
- **Letter Spacing F**: 0em (normal)

### Colores

| Elemento | Default | Hover | Focus |
|----------|---------|-------|-------|
| **V** | `#F5F5F0` (off-white) | `#16A34A` (primary) | `#16A34A` |
| **F** | `#E8E8E3` (light-grey) | `#F5F5F0` (off-white) | `#F5F5F0` |
| **Separator** | `#16A34A` (80% opacity) | `#16A34A` (100% opacity) | `#16A34A` |

### Espaciado
- **Gap entre letras**: 6px
- **Altura separador**: 20px (default), 24px (hover)
- **Focus outline offset**: 8px

### Tamaños

| Contexto | V Size | F Size | Separator |
|----------|--------|--------|-----------|
| Desktop | 1.85rem | 1.75rem | 20px |
| Mobile (≤768px) | 1.6rem | 1.5rem | 18px |


---

## ♿ Accesibilidad

- ✅ `aria-label="Víctor Flórez"` en link
- ✅ Focus visible con outline verde
- ✅ Contraste WCAG AA: 14.8:1 (off-white sobre #0A0A0F)
- ✅ Tamaño mínimo touch target: 44x44px (mobile)


---

## 🚫 Restricciones de Marca

### ❌ NO HACER:
- No usar otros colores aparte del verde #16A34A como acento
- No aplicar sombras fuertes (drop-shadow)
- No rotar o distorsionar las letras
- No usar menos de 1.5rem en mobile
- No saturar con múltiples colores

### ✅ SÍ HACER:
- Mantener contraste mínimo 4.5:1
- Respetar proporción V > F (weight)
- Usar separador como único elemento verde
- Mantener spacing consistente


---

## 📱 Responsive Behavior

```css
/* Mobile first approach */
@media (max-width: 768px) {
    /* Logo reduce tamaño pero mantiene proporciones */
    .logo { font-size: 1.5rem; }
    .logo-v { font-size: 1.6rem; }
}

@media (max-width: 480px) {
    /* En pantallas muy pequeñas, considerar logo-compact */
    .logo-separator { height: 16px; }
}
```


---

## 🎯 Uso Estratégico

### Header Navigation
```html
<a href="#" class="logo">
    <span class="logo-v">V</span>
    <span class="logo-separator"></span>
    <span class="logo-f">F</span>
</a>
```
✅ Siempre visible, sticky en scroll


### Hero Section (Opcional)
Usar variante 3 (con descriptor) para reforzar marca en primera impresión


### Footer
Repetir mismo logo que header para consistencia


### Favicon
Usar solo "V" con punto verde:
```svg
<svg viewBox="0 0 100 100">
  <text x="50" y="72" font-weight="800">V</text>
  <circle cx="85" cy="25" r="8" fill="#16A34A"/>
</svg>
```


---

## 🔧 Performance

- **Weight**: ~0.5KB CSS
- **No images**: Solo HTML + CSS
- **GPU-optimized**: `transform` properties
- **Zero CLS**: Fixed positioning in nav
- **Load time**: Instantaneous (inline)


---

## 📊 Métricas de Marca

**Objetivo**: Logo debe transmitir:
- ✅ **Profesionalismo**: Weight contrast (V=800, F=600)
- ✅ **Tech/Modern**: Minimal separator, sans-serif
- ✅ **Personalidad**: Acento verde sutil (no agresivo)
- ✅ **Escalabilidad**: Funciona en 16px - 120px


---

**Diseñado por**: Brand System 2026
**Última actualización**: 1 de febrero de 2026
