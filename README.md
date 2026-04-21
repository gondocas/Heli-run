# HELI-RUN 🚁

Juego de helicóptero para iPhone. Esquiva los obstáculos y llega lo más lejos posible.

**Jugar:** [https://TU_USUARIO.github.io/heli-run](https://TU_USUARIO.github.io/heli-run)

## Cómo jugar

- **Toca / mantén pulsado** → el helicóptero sube
- **Suelta** → cae por la gravedad
- Pasa por los huecos entre obstáculos
- La velocidad y la frecuencia de obstáculos aumentan con cada punto

## Instalar en iPhone (sin App Store)

1. Abre el enlace en **Safari**
2. Pulsa el botón de compartir (cuadrado con flecha)
3. **"Añadir a pantalla de inicio"**
4. Ya tienes el icono en tu iPhone como una app nativa

## Desplegar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (ej. `heli-run`)
2. Sube todos estos archivos
3. Ve a **Settings → Pages → Source → main → / (root)**
4. En unos segundos el juego estará en `https://TU_USUARIO.github.io/heli-run`

## Archivos

```
heli-run/
├── index.html           ← el juego completo
├── manifest.json        ← configura la PWA (nombre, icono, pantalla completa)
├── sw.js                ← service worker (funciona sin internet)
├── icons/
│   ├── apple-touch-icon.png  ← icono en pantalla de inicio iPhone (180×180)
│   ├── icon-192.png          ← icono Android / PWA
│   └── icon-512.png          ← icono PWA alta resolución
└── README.md
```
