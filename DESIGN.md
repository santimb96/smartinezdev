---
name: SmartinezDev
description: Portfolio de Santiago Martínez, desarrollador full-stack y de interfaces, en Mallorca.
colors:
  vellum: "#E4E7E1"
  graphite: "#151815"
  graphite-soft: "#59615A"
  hairline: "#B7BDB4"
  plate-ground: "#D2D7CF"
  signal-petrol: "#17544A"
  signal-ink: "#F2F5F0"
  vellum-dark: "#111511"
  graphite-inverse: "#E7EAE4"
  graphite-soft-dark: "#9AA39B"
  hairline-dark: "#333A34"
  plate-ground-dark: "#1B211C"
  signal-petrol-dark: "#7FC0AE"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(52px, 7.4vw, 104px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 34px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.006em"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  none: "0px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  xxl: "96px"
  xxxl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.vellum}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-petrol}"
    textColor: "{colors.signal-ink}"
  button-secondary:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "46px"
  theme-toggle:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    size: "34px"
  plate:
    backgroundColor: "{colors.plate-ground}"
    rounded: "{rounded.none}"
    width: "100%"
  spec-row:
    backgroundColor: "{colors.vellum}"
    textColor: "{colors.graphite-soft}"
    rounded: "{rounded.none}"
    padding: "7px 0"
---

# Design System: SmartinezDev

## Overview

**Creative North Star: "La lámina de taller"**

El sitio es una lámina técnica medida: papel vellum, tinta de grafito y una sola tinta de señal. No hay tarjetas, sombras ni radios; la jerarquía la construyen las reglas de 1px, la escala tipográfica y la posición en la hoja. La evidencia —años, proyectos, stacks, estados— se dibuja y se tabula en lugar de declararse en adjetivos.

La hoja se lee de arriba a abajo como un plano: bloque de título, secciones con encabezado y filete, fichas de especificación y un bloque de revisión al pie. El rail izquierdo es el índice medido de la lámina: cada sección aparece a la altura real que ocupa en el documento y una marca de 2px indica dónde está el visitante. En mobile el rail desaparece y el índice baja a una barra fija de cinco celdas.

La densidad es deliberada: el visitante que llega desde un link ve nombre, rol, estado, medida y acciones sin scrollear, y la obra empieza inmediatamente después. El retrato es una lámina con pie de foto, no un avatar.

**Key Characteristics:**
- Papel vellum y grafito; el petróleo aparece sólo en acción y estado.
- Reglas de 1px en lugar de tarjetas, sombras o radios.
- Cifras tabulares en toda la hoja; todo dato numérico se alinea.
- Un único movimiento: la marca del rail avanza con el scroll.
- Contraste alto y tamaños legibles en mobile sin excepciones.

## Colors

Paleta de dos tintas más una señal: el papel y el grafito hacen todo el trabajo y el petróleo queda reservado para lo que se puede accionar o para el estado activo.

### Primary
- **Petróleo de señal** (#17544A / #7FC0AE en oscuro): botón primario, enlaces de ficha, foco de teclado, marca del rail y punto de disponibilidad. Nunca se usa como fondo de una sección.

### Neutral
- **Papel vellum** (#E4E7E1 / #111511): fondo de la hoja y de la barra superior. En oscuro el papel se vuelve casi negro verdoso, no gris.
- **Grafito** (#151815 / #E7EAE4): texto, filetes de 1px y bordes de lámina.
- **Grafito suave** (#59615A / #9AA39B): anotaciones, metadatos, pies de figura y etiquetas de especificación.
- **Filete** (#B7BDB4 / #333A34): separadores entre fichas y filas de especificación.
- **Fondo de lámina** (#D2D7CF / #1B211C): relleno detrás de capturas e imágenes mientras cargan.

### Named Rules
**La regla de la única tinta.** El petróleo cubre menos del 5% de cualquier pantalla. Su escasez es lo que lo vuelve legible como señal.

**La regla del papel primero.** Ninguna superficie se pinta de color para separar contenido: se separa con un filete de 1px.

## Typography

**Display Font:** Archivo (variable, con `ui-sans-serif` de respaldo), auto-hospedada.
**Body Font:** Archivo, misma familia.

**Character:** Una sola grotesca con eje de ancho variable. La personalidad la llevan la escala y el peso, no una segunda familia: el nombre a 104px con tracking cerrado y las anotaciones a 12,5px con cifras tabulares pertenecen al mismo mundo.

### Hierarchy
- **Display** (700, `clamp(52px, 7.4vw, 104px)`, 0.9): sólo el nombre en el bloque de título.
- **Headline** (700, `clamp(26px, 2.6vw, 34px)`, 1): encabezados de sección y título de la ficha destacada.
- **Title** (600, 19px, 1.2): rol en la trayectoria y títulos de ficha.
- **Body** (400, 16.5px, 1.6, 62ch máx.): descripciones y párrafos; el ancho se limita por columna, no por pantalla.
- **Label** (400, 12.5px, tabular): años, roles y stacks en las especificaciones; pies de figura a 11,5px.

### Named Rules
**La regla del dato alineado.** Todo número —años, conteos, fechas— se compone con cifras tabulares y se alinea en columna.

**La regla del tracking.** El display no pasa de -0.04em; el cuerpo no baja de -0.006em.

## Layout

Hoja centrada con rail fijo de 104px a partir de 1024px; el contenido arranca después del rail y respeta un margen lateral de `clamp(20px, 4vw, 64px)`, con un ancho máximo de 1360px. Grilla de dos columnas en el bloque de título (texto y retrato 4:5), en las fichas (captura y especificación) y en contacto (mensaje y enlaces).

El ritmo vertical es constante: 72–128px entre bandas, 40px entre fichas, 22px entre filas de trayectoria. Siempre hay más aire arriba de un encabezado que abajo. En mobile todo pasa a una columna, el rail desaparece, la barra superior se queda con el nombre y el tema, y el índice se convierte en una barra inferior fija de cinco celdas de 52px.

Cada sección ancla con `scroll-margin-top: 88px` para no quedar debajo de la barra fija.

## Elevation & Depth

No hay sombras. La profundidad se comunica con filetes de 1px, cambios de valor en el fondo de lámina y superposición en el orden de lectura. Ningún elemento flota: la hoja es plana por definición.

### Named Rules
**La regla del plano.** Si algo necesita separarse, se dibuja una línea; no se levanta del papel.

## Shapes

Ángulos rectos en todo el sistema: botones, láminas, campos y filetes. La única excepción es el control de tema, un círculo de 34px, y el punto de disponibilidad de 8px. Los bordes son de 1px en grafito o en filete; no hay radios de tarjeta ni esquinas suavizadas.

## Components

### Buttons
- **Shape:** rectángulo de 46px de alto, sin radio, borde de 1px.
- **Primary:** fondo petróleo, texto papel, icono de 15px a la izquierda.
- **Hover / Focus:** el primario pasa a grafito con texto papel; el secundario invierte a fondo grafito. Foco visible de 2px en petróleo con offset de 3px.
- **Secondary:** fondo papel, texto grafito, borde grafito.

### Cards / Containers
- **Corner Style:** ninguno (0px).
- **Background:** el de la hoja; la lámina de imagen usa el fondo de lámina.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1px en filete para la lámina; 1px en grafito para la lámina del retrato.
- **Internal Padding:** 40px vertical en cada ficha; 0 horizontal.

### Navigation
- **Style:** barra superior fija de 64px con filete inferior de 1px; nombre en 13px y tres enlaces en 13px con subrayado en el estado activo. El rail izquierdo lista las cuatro secciones a su altura real, en 11px, con una marca vertical de 2px que avanza con el scroll.
- **Mobile:** barra inferior de cinco celdas (cuatro secciones y el tema) a 11px, 52px de alto, con área segura inferior.

### Signature Component: la cota
La cota es el elemento memorable: una línea de 1px con ticks verticales en los extremos, los años 2021 y 2026 debajo y la leyenda «5 años · 7 proyectos · 4 equipos» arriba. Mide hechos reales del producto; no es decoración.

### Signature Component: la ficha de especificación
Cada proyecto es una fila con captura y tabla (`Rol`, `Stack`, `Estado`) separada por filetes. La fila 1 es más ancha y lleva el título a escala de headline; las demás comparten la misma grilla.

## Do's and Don'ts

### Do:
- **Do** reservar el petróleo para acción, foco y estado activo.
- **Do** separar con filetes de 1px y mantener el sistema plano.
- **Do** usar cifras tabulares y alinear los datos en columna.
- **Do** escribir el año, el rol, el stack y el estado de cada proyecto.
- **Do** mantener el foco visible de 2px en petróleo con offset de 3px.

### Don't:
- **Don't** usar sombras, degradados, glass ni radios de tarjeta.
- **Don't** poner etiquetas en mayúsculas sobre los encabezados.
- **Don't** introducir una segunda familia tipográfica.
- **Don't** usar el petróleo como fondo de sección ni como color de texto largo.
- **Don't** pasar el display de -0.04em de tracking ni el cuerpo de 80 caracteres por línea.
