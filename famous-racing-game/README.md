# 🏎️ FAMOUS RACER

> The $25 million racing experience, powered by CSS transforms and broken promises.

## What is this?

A racing game built with [Famous](<https://en.wikipedia.org/wiki/Famous_(software)>) — the 3D engine that raised $25M in VC funding, promised to revolutionize the web, and delivered... CSS transforms.

This is a satirical meme game commenting on:

- **Famous Engine (2013-2015)**: Raised massive funding, promised "60fps on every device" with a "GPU-accelerated rendering pipeline" that was literally just `translate3d()` and `will-change: transform`. Pivoted multiple times. Died quietly.
- **The Mr. Doob / Sketchfab drama (2025)**: Where the creator of Three.js was vibecoding a racing game using assets from a platform whose leadership... has opinions about open source.
- **Vibecoding culture**: Where we build things with vibes instead of architecture, just like Famous built a "3D engine" with vibes instead of WebGL.

## How to play

```bash
# Just open it. No npm install. No build step.
# Unlike Famous, this actually ships.
open index.html

# Or use any local server
npx serve .
python3 -m http.server 8080
```

- **← → / A D** — Steer
- **Touch left/right** — Mobile controls
- **Avoid the other cars** — They're also divs

## Technical "Stack"

| Layer               | Technology                      |
| ------------------- | ------------------------------- |
| 3D Engine           | CSS `transform: translate3d()`  |
| Physics             | `if (obs.y > 85 && obs.y < 98)` |
| GPU Acceleration    | `will-change: transform`        |
| Rendering Pipeline  | `requestAnimationFrame`         |
| Shader Language     | `linear-gradient()`             |
| Asset Pipeline      | Emoji                           |
| Collision Detection | Vibes                           |
| Business Model      | Series A                        |

## Features

- ✅ Fake loading screen with authentic Famous-style jank
- ✅ "FPS counter" that lies (adjusted for investor demos)
- ✅ Engine status that degrades from "NOMINAL" to "SERIES B NEEDED"
- ✅ News ticker with live commentary on the drama
- ✅ Death messages roasting the entire situation
- ✅ Mobile touch controls (Famous never had those)
- ✅ Actually playable (Famous never was)

## Historical Context

In ~2013, Famous (Famo.us) burst onto the scene promising a revolutionary JavaScript framework that would bring console-quality 3D graphics to the web. They raised $25M. Their "3D engine" was CSS transforms. Their "physics engine" was a spring animation library. They pivoted to mixed reality. Then to IoT. Then they disappeared.

Meanwhile, Mr. Doob built Three.js — an actual WebGL engine — as a free, open-source project. No VC funding. No pivots. Just good code.

The irony of building a racing game with Famous in 2026 is _the entire point_.

## License

MIT — because unlike some people, we believe in open source.
