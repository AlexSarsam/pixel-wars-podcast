# 🎮 Pixel Wars Podcast

Proyecto final del módulo M9 – Disseny d'interfícies web.

Podcast sobre el mundo gamer: debates, análisis y opiniones sobre videojuegos.
Primer episodio: **PC vs Consola, ¿cuál gana?**

🌐 **Web en producción:** https://pixel-wars-podcast.vercel.app

---

## Proceso de producción del podcast

1. **Planificación** – Elección del tema y estructura del episodio (introducción, argumentos, opinión y cierre).
2. **Grabación** – Voz grabada con Audacity usando micrófono externo.
3. **Edición** – Reducción de ruido, corte de silencios y ajuste de volumen en Audacity.
4. **Música** – Añadida música de fondo con Auto Duck para que baje al hablar.
5. **Exportación** – Exportado a MP3 192kbps y optimizado con FFmpeg.
6. **Web & Deploy** – Desarrollada con React + Vite + Tailwind, desplegada en Vercel.

---

## Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| Audacity | Grabación y edición del audio |
| FFmpeg | Optimización del MP3 |
| React + Vite | Framework web con bundler rápido |
| Tailwind CSS | Diseño responsivo |
| Vercel | Despliegue con HTTPS automático |

---

## Estructura del proyecto

```
src/
  components/
    AudioPlayer.jsx   reproductor con useRef
    ContactForm.jsx   formulario de contacto y envío de grabaciones
    Footer.jsx
    Header.jsx
    Hero.jsx
    Production.jsx    proceso y herramientas
    PromoVideo.jsx    vídeo de YouTube embebido
    Transcript.jsx    transcripción del episodio
  App.jsx
  main.jsx
public/
  podcast.mp3
```

---

## Características de la web

- Reproductor de audio controlado con `useRef` de React
- Diseño responsivo (móvil y escritorio)
- Navegación accesible por teclado
- Transcripción del episodio (WCAG 2.1 AA)
- Formulario de contacto con campo para enviar grabaciones
- Vídeo promocional embebido (YouTube)

---

## Licencia

Contenido bajo licencia [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es).  
Permite compartir y adaptar con atribución, sin uso comercial.
