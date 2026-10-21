# Apple Liquid Glass Portfolio — Showcase Demo

A next-generation demo portfolio website powered by **liquidGL** (WebGPU / WebGL2), recreating Apple's signature "Liquid Glass" refraction, chromatic aberration, specular highlights, and fluid touch physics.

---

## 💎 Features & Optics Highlights

1. **Apple Vision Liquid Glass Centerpiece**:
   - Refracts underlying dynamic ambient videos and glowing canvas gradients in real-time.
   - Interactive 3D tilt, specular lighting sheen, and fluid displacement on cursor hover.

2. **Draggable Liquid Glass Loupe (`#floating-loupe`)**:
   - An interactive floating magnifying glass with physical chromatic dispersion (RGB split).
   - Can be dragged across the viewport to refract text, video case studies, and buttons.

3. **Dynamic Floating Navigation Island**:
   - Glassmorphic top dock with sliding liquid lens tracking active sections (`Overview`, `Featured Work`, `Architecture`, `Liquid Lab`, `Journey`, `Connect`).

4. **Real-Time Glass Optics Control Center (Bottom Dock)**:
   - Instant switching between custom physical glass presets:
     - 💎 **Sapphire**: Crystal-clear refraction with sharp chromatic aberration.
     - 🧊 **Frosted**: Diffuse frosted glass with light scattering and soft blur.
     - 🌈 **Prismatic**: Maximum Cauchy chromatic wavelength dispersion (RGB rainbow bevels).
     - 💧 **Mercury**: Viscous fluid surface tension with touch ripples.
   - Live sliders for refraction depth, chromatic aberration, and frosted blur.

5. **Lenis + GSAP Synced Scroller**:
   - Butter-smooth inertia scrolling synchronized with `liquidGL.syncWith()`.

---

## ⚡ How to Swap Your Information (Resume / Bio / Projects)

The entire portfolio is built on a **data-driven architecture**. When you finalize your details:

### Method 1: In-App Live Editor (No Code Required)
1. Open the website in your browser.
2. Click the **`⚡ Info Sheet`** button in the top navigation island.
3. Paste your resume details or edit the pre-formatted JSON.
4. Click **`Apply Live Changes`** — the entire site re-renders instantly with your data!

### Method 2: Update the Single Data File
Edit `data/portfolio-data.js`. Every section maps directly to this file:
- `personal`: Name, role title, headline, bio, contact email, social handles.
- `stats`: Key career metrics.
- `projects`: List of case studies, videos/images, descriptions, tags, and links.
- `skills`: Categorized capabilities and technologies.
- `experience`: Career journey and milestones.
- `laboratory`: Shader experiments & interactive playground.
- `testimonials`: Quotes & endorsements.
- `awards`: Honors and recognitions.

---

## 🚀 Running Locally

The local HTTP server is running at:
```
http://localhost:3000
```

To run manually at any time:
```bash
python -m http.server 3000
```
or
```bash
npx serve
```
