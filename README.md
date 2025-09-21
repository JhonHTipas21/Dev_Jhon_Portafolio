# JHT • Portafolio

Portafolio profesional de **Jhon Harvey Tipas Solis** — Desarrollador de Software.  
Hecho con **Next.js 15**, **Tailwind CSS 4** y **Framer Motion**, siguiendo un diseño oscuro y sobrio inspirado en sitios modernos para reclutamiento. Incluye páginas de Home, About, Portfolio y Contact, **descarga de CV**, links directos a **WhatsApp / Email / GitHub** y tarjetas de proyectos.

<p align="center">
  <a href="https://TU-DOMINIO" target="_blank"><img alt="Demo" src="https://img.shields.io/badge/Live_Demo-Visit-120f14?logo=vercel" /></a>
  <a href="https://github.com/JhonHTipas21/portafolio/actions" target="_blank"><img alt="Build" src="https://img.shields.io/badge/Build-Vercel-0B1020?logo=vercel" /></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-19-20232a?logo=react" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-0ea5e9?logo=tailwindcss" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-2f74c0?logo=typescript" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-2b2b2b" />
</p>

---

## 👀 Preview

> Reemplaza estas imágenes por capturas reales: crea `public/readme/` y guarda ahí tus screenshots como se ve abajo.

| Home | About | Portfolio |
|---|---|---|
| ![Home](public/readme/home.png) | ![About](public/readme/about.png) | ![Portfolio](public/readme/portfolio.png) |

---

## ✨ Características

- 🎯 **Enfoque reclutamiento**: CTA visibles, links directos y narrativa clara.
- 🖼️ **Diseño oscuro** con azul suave; tarjetas, badges y sombras sutiles.
- 🧭 **Rutas**: `/` Home, `/sobre-mi`, `/proyectos`, `/contacto`.
- 🧩 **Cards de proyectos** con fallback si OG de GitHub limita.
- 📄 **CV**: botón en el header con opciones *Ver* / *Descargar*.
- 📱 **CTA flotante de WhatsApp** en móvil.
- ⚙️ **Static Imports** para imágenes locales (`/public`) → construcciones más fiables.
- 🚀 Despliegue en **Vercel** (auto-build desde `main`).

---

## 🧱 Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** Tailwind CSS 4, clsx, lucide-react
- **Animaciones:** Framer Motion
- **Datos:** @octokit/rest (repos públicos), React Query*
- **Calidad:** ESLint + Prettier
- **Deploy:** Vercel

\* *React Query queda listo por si más adelante agregas data dinámica (testimonios, blogs, etc.).*

---

## 🗺️ Páginas

- **Home**: hero con foto, pitch, CTA, accesos rápidos.
- **About**: bio clara, métricas, stack con *badges*.
- **Portfolio**: grid de repositorios (cards con imagen OG o fallback).
- **Contact**: formulario (mailto), WhatsApp, email y enlaces directos.

---

## 🏗️ Arquitectura (diagrama)

```mermaid
flowchart LR
  user[Recruiter] --> web[Next.js App]
  web --> pages[Pages: /, /sobre-mi, /proyectos, /contacto]
  web --> public[(Public assets)]
  web --> github[(GitHub API)]
  pages --> contact[Email/WhatsApp]
  public -->|/profile.jpg /logo-jhon.png /JhonHarveyCV.pdf| web
