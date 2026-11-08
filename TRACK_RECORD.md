# Project Track Record

**Project:** Muhammad Bin Naveed — Developer Portfolio  
**Workspace root:** `D:\GitHub\portfolio-`  
**Documentation file:** `TRACK_RECORD.md`  
**Audit date:** 2026-09-20  
**Audit scope:** Read-only discovery and documentation. No application source, configuration, assets, dependencies, or routes were modified during this audit.

> This document is the centralized technical record for the current workspace. Paths are relative to the workspace root unless marked as external URLs. Secret values, API keys, tokens, credentials, and the full external form-submission URL are intentionally omitted.

---

## 1. Project Overview

### 1.1 Purpose

This repository is a personal developer portfolio for Muhammad Bin Naveed. It presents:

- A personal introduction and professional positioning.
- A skills and technology showcase.
- A project gallery with screenshots and descriptions of external/client projects.
- An education, certification, and internship section.
- A contact page with a form, social links, contact details, and interactive 3D models.
- SEO, social metadata, sitemap, robots, and LLM-oriented documentation files.

### 1.2 Application type

- Client-side React single-page application (SPA).
- Static asset hosting model.
- No application-owned backend server was found.
- No application-owned database was found.
- No application-owned authentication or authorization system was found.
- The contact form sends data to an external Google Apps Script endpoint.

### 1.3 Current state

- The application is source-complete enough to run as a Vite development project.
- Four user-facing routes are defined.
- The UI is implemented with React, Tailwind CSS, Framer Motion, Lenis, Three.js, and React Three Fiber.
- The project has build, lint, preview, optimization, and test scripts.
- Test configuration points to a missing setup file, and no test files were found.
- Several documentation claims describe MERN/backend/database capabilities that are not implemented in this repository.

### 1.4 High-level architecture

```text
index.html
   ↓
src/main.jsx
   ↓
HashRouter
   ↓
src/App.jsx
   ├─ GlobalPreloader
   ├─ ScrollToTop
   ├─ ScrollUI
   ├─ Navbar
   ├─ Suspense
   │    └─ Routes
   │         ├─ src/Pages/Home.jsx
   │         ├─ src/Pages/About.jsx
   │         ├─ src/Pages/Project.jsx
   │         └─ src/Pages/Contact.jsx
   └─ Footer
```

---

## 2. Executive Summary

| Area | Verified state |
|---|---|
| Frontend | React 19 with Vite 8 |
| Routing | React Router DOM 7 using `HashRouter` |
| Styling | Tailwind CSS 4 through `@tailwindcss/vite`; global tokens in `src/index.css` |
| Motion | Framer Motion 12 and Lenis smooth scrolling |
| 3D | Three.js 0.175 and React Three Fiber 9; lazy-loaded on Contact |
| Backend | None found |
| Database | None found |
| Authentication | None found; reCAPTCHA is used only on the contact form |
| APIs | One external Google Apps Script POST used by the contact form |
| Deployment evidence | Vercel URLs in metadata; GitHub Pages SPA fallback also present; no deployment config file found |
| Tests | Vitest configured, but setup file and test files are absent |
| Main routes | `/`, `/About`, `/Project`, `/Contact` |
| Main issue | Documentation describes a MERN/full-stack application, but the repository contains only the frontend |

---

## 3. Technology Stack

### 3.1 Runtime and framework dependencies

| Package | Declared version | Purpose | Verified usage |
|---|---:|---|---|
| `react` | `^19.2.4` | UI framework | `src/main.jsx`, all page and component files |
| `react-dom` | `^19.2.4` | React DOM rendering | `src/main.jsx` |
| `react-router-dom` | `^7.14.1` | Routing and navigation | `src/main.jsx`, `src/App.jsx`, navigation/page components |
| `vite` | `^8.0.10` | Development server and build tool | `vite.config.js`, package scripts |
| `@vitejs/plugin-react` | `^6.0.1` | React support for Vite | `vite.config.js` |
| `@tailwindcss/vite` | `^4.2.2` | Tailwind Vite integration | `vite.config.js`, `src/index.css` |
| `tailwindcss` | `^4.2.2` | Utility-first styling | `src/index.css` and component class names |
| `framer-motion` | `^12.38.0` | Animation and gesture system | Most page and shared components |
| `lenis` | `^1.3.23` | Smooth scrolling | `src/App.jsx`, `src/Component/ScrollUI.jsx`, `src/Component/ScrollToTop.jsx` |
| `three` | `0.175.0` | 3D rendering | `src/Component/ContactScene.jsx` |
| `@react-three/fiber` | `^9.6.0` | React Three.js canvas integration | `src/Component/ContactScene.jsx` |
| `@react-three/drei` | `^10.7.7` | Three.js helpers dependency | Installed, but no source import was found |
| `lucide-react` | `^1.11.0` | Contact and ball icons | `src/Pages/Contact.jsx`, `src/Component/ball_animation.jsx` |
| `react-icons` | `^5.6.0` | Social and technology icons | Pages and shared components |

### 3.2 Development, testing, and asset dependencies

| Package | Declared version | Purpose |
|---|---:|---|
| `@eslint/js` | `^9.39.4` | ESLint recommended rules |
| `eslint` | `^9.39.4` | Linting |
| `eslint-plugin-react-hooks` | `^7.0.1` | React Hooks lint rules |
| `eslint-plugin-react-refresh` | `^0.5.2` | Vite/React refresh lint rules |
| `globals` | `^17.4.0` | Browser globals for ESLint |
| `@testing-library/react` | `^16.3.2` | React testing utilities |
| `@testing-library/jest-dom` | `^6.9.1` | DOM matchers |
| `vitest` | `^4.1.5` | Test runner |
| `jsdom` | `^29.1.1` | Vitest browser-like environment |
| `@types/react` | `^19.2.14` | React type declarations |
| `@types/react-dom` | `^19.2.3` | React DOM type declarations |
| `@gltf-transform/core` | `^4.3.0` | GLB optimization script |
| `@gltf-transform/extensions` | `^4.3.0` | glTF extensions for optimization |
| `@gltf-transform/functions` | `^4.3.0` | glTF transform functions |
| `draco3d` | `^1.5.7` | Draco encoder/decoder for GLB optimization |
| `sharp` | `^0.34.5` | Image conversion script |
| `postcss` | `^8.5.10` | CSS tooling dependency |
| `autoprefixer` | `^10.5.0` | CSS prefixing dependency |

### 3.3 Lockfile observation

`package-lock.json` contains a root dev dependency entry for `gh-pages` at `^6.3.0`, but `gh-pages` is not listed in `package.json`. This is verified lockfile/package-manifest drift.

---

## 4. Complete Project Structure

### 4.1 Workspace root

```text
.git/
.gitignore
.kilo/
  .gitignore
  agent-manager.json
  kilo.jsonc
  worktrees/
    great-filament/
    mire-haze/
.vscode/
  settings.json
eslint.config.js
index.html
package-lock.json
package.json
public/
README.md
scripts/
  convert-images.mjs
  optimize-glb.mjs
src/
  App.css
  App.jsx
  index.css
  main.jsx
  Component/
  Pages/
  hooks/
TEST.md
TRACK_RECORD.md
vite.config.js
```

### 4.2 Application source

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── Component/
│   ├── ball_animation.jsx
│   ├── Contact_cta.jsx
│   ├── ContactScene.jsx
│   ├── Footer.jsx
│   ├── GlobalPreloader.jsx
│   ├── hero.jsx
│   ├── Herowraper.jsx
│   ├── MobileHero.jsx
│   ├── Navbar.jsx
│   ├── PageLoader.jsx
│   ├── ParallaxGallery.jsx
│   ├── Powerfull_line.jsx
│   ├── Projectcomp.jsx
│   ├── projects_hom_intro.jsx
│   ├── ScrollToTop.jsx
│   ├── ScrollUI.jsx
│   ├── SEO.jsx
│   ├── What_you_do.jsx
│   └── Who_am_i.jsx
├── Pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Project.jsx
└── hooks/
    └── usePreloader.js
```

### 4.3 Public assets and static files

```text
public/
├── 404.html
├── faveicon.png
├── llms.txt
├── robots.txt
├── sitemap.xml
├── muhammad.webp
├── earth (1).glb
├── earth_optimized.glb
├── vintage_telephone.glb
├── vintage_telephone.optimized.glb
├── Home_frames/
│   └── frame_000000.webp through frame_000050.webp
├── project_logo/
│   ├── apps.webp
│   ├── img.webm
│   └── mobilehero.webp
├── parallex_home/
│   ├── Capture.webp
│   ├── Gemini_Generated_Image_gt8vr0gt8vr0gt8v.webp
│   ├── img6.webp
│   ├── mainframe.webp
│   ├── mern_balance_desk_large.webp
│   └── mernimg1.webp
├── click2print/
│   └── unnamed (1).webp through unnamed (10).webp
├── faizalamfazi/
│   ├── failalamfazi1.webp
│   └── faizalamfazi2.webp through faizalamfazi8.webp
├── iqx/
│   ├── 2026-04-18.webp
│   ├── iqx1.webp
│   ├── iqx3.webp
│   ├── iqx4.webp
│   └── iqx9.webp
└── aitransportltd/
    ├── unnamed (2).webp
    ├── unnamed (3).webp
    ├── unnamed (4).webp
    ├── unnamed (5).webp
    └── unnamed (6).webp
```

### 4.4 Non-application workspace artifacts

- `.kilo/` contains Kilo/Agent Manager state and managed worktrees. It is tooling state, not application source.
- `TEST.md` is present at the workspace root. It is not imported or used by the application.
- `node_modules/` and `dist/` were not present in the workspace listing at audit time.

---

## 5. Application Architecture

### 5.1 Entry point

`src/main.jsx`

- Imports React `StrictMode`.
- Creates the root for `#root`.
- Imports global CSS from `src/index.css`.
- Imports `App` from `src/App.jsx`.
- Wraps the application in `HashRouter`.

### 5.2 Application shell

`src/App.jsx`

Responsibilities:

1. Calls `usePreloader()` from `src/hooks/usePreloader.js`.
2. Renders `GlobalPreloader` until critical assets are ready.
3. Initializes Lenis smooth scrolling in a `useEffect`.
4. Stores the Lenis instance on `window.__lenis`.
5. Runs Lenis through `requestAnimationFrame`.
6. Destroys Lenis and clears `window.__lenis` on unmount.
7. Renders, in order:
   - `ScrollToTop`
   - `ScrollUI`
   - `Navbar`
   - `Suspense` with a text fallback
   - `Routes`
   - `Footer`
8. Lazy-loads all four page modules.

### 5.3 Routing

`src/main.jsx` uses `HashRouter`, so the browser-facing routes are hash routes:

| Route definition | Browser-facing route | Page file |
|---|---|---|
| `/` | `#/` | `src/Pages/Home.jsx` |
| `/About` | `#/About` | `src/Pages/About.jsx` |
| `/Project` | `#/Project` | `src/Pages/Project.jsx` |
| `/Contact` | `#/Contact` | `src/Pages/Contact.jsx` |

There is no wildcard/404 route in `src/App.jsx`. Unknown hash routes leave the route area empty while the global shell remains rendered.

### 5.4 Parent layout

There is no separate layout directory or layout component. `src/App.jsx` is the de facto application shell.

The shell is present on every route:

- Global preloader
- Fixed scroll progress bar
- Fixed WhatsApp button
- Conditional fixed scroll-to-top button
- Fixed navigation pill
- Lazy page content
- Footer

### 5.5 State and side effects

- Page-level state is limited to the Contact form and Contact 3D scene state.
- Shared scroll state is implemented through Framer Motion hooks and Lenis.
- Shared preload state is implemented in `src/hooks/usePreloader.js`.
- Mutable browser globals are used for Lenis and preload completion:
  - `window.__lenis`
  - `window.__preloadDone`

---

## 6. Routes & Pages

## 6.1 Home

### Route

- Route definition: `/`
- Browser route: `#/`
- File: `src/Pages/Home.jsx`
- Component name: `Home`
- Parent: `src/App.jsx`

### Purpose

Primary landing page. It introduces the developer, presents skills, displays animated project previews, and provides calls to action for the project and contact pages.

### Components

Directly imported by `src/Pages/Home.jsx`:

- `src/Component/HeroWrapper.jsx`
- `src/Component/Powerfull_line.jsx`
- `src/Component/What_you_do.jsx`
- `src/Component/Who_am_i.jsx`
- `src/Component/ParallaxGallery.jsx`
- `src/Component/projects_hom_intro.jsx`
- `src/Component/Contact_cta.jsx`
- `src/Component/SEO.jsx`

`src/Component/HeroWrapper.jsx` (actual filename `src/Component/Herowraper.jsx`) selects between:

- `src/Component/MobileHero.jsx` below the desktop breakpoint (via `md:hidden`).
- `src/Component/hero.jsx` at desktop widths (via `md:block`).

`src/Pages/Home.jsx` also imports both `Hero` and `MobileHero` directly, but neither import is used. Both components are rendered internally by `HeroWrapper`, making the direct imports in `Home.jsx` redundant.

### Hooks and state

- No page-level hooks.
- `src/Component/hero.jsx` uses:
  - `useRef`
  - `useState`
  - `useEffect`
  - Framer Motion `useScroll`, `useMotionValueEvent`, `useTransform`, `motion`, and `AnimatePresence`
- `src/Component/ParallaxGallery.jsx` uses:
  - `useRef`
  - Framer Motion `useScroll`, `useTransform`, `useInView`, and `motion`
- `src/Component/projects_hom_intro.jsx` uses:
  - `useRef`
  - Framer Motion `useScroll`, `useTransform`, and `motion`

### APIs and data

- No API calls.
- No backend or database dependencies.
- Project and skill content is static JSX/arrays in components.

### Authentication and authorization

- Public route.
- No authentication or role checks.

### Forms, buttons, and actions

- No form.
- Calls to action:
  - `Explore My Work` → `/Project`
  - `View Projects` → `/Project`
  - `Contact Me` → `/Contact`
  - `Start a Conversation` → `/Contact`
  - `View My Work` → `/Project`
  - `View Full Projects` → `/Project`

### Loading, error, and empty states

- Global loading state: `src/Component/GlobalPreloader.jsx`.
- Lazy page fallback: inline `Loading experience...` in `src/App.jsx`.
- No page-specific error state.
- No empty state.

### Assets

- `public/muhammad.webp`
- `public/Home_frames/frame_000000.webp` through `frame_000049.webp`
- `public/parallex_home/*`
- `public/click2print/*`
- `public/faizalamfazi/*`
- `public/project_logo/apps.webp`

### Animations

- Desktop hero uses scroll-driven frame replacement, parallax, scaling, rotation, content fade/blur, and headline transitions.
- Mobile hero uses entrance animations.
- Skill orbs use hover, float, pulse, scale, and spin variants.
- Gallery and project strips use viewport-triggered and scroll-driven motion.
- CTA and cards use hover/tap motion.

### Responsive behavior

- `src/Component/HeroWrapper.jsx` switches implementations at the `md` breakpoint.
- `src/Component/hero.jsx` changes parallax values when `window.innerWidth < 768`.
- Project strips switch from desktop scroll strips to horizontal mobile sliders below `md`.
- Grids collapse from two/three columns to one column on smaller screens.

### Related files

- `src/App.jsx`
- `src/Component/HeroWrapper.jsx`
- `src/Component/hero.jsx`
- `src/Component/MobileHero.jsx`
- `src/Component/SEO.jsx`
- `src/hooks/usePreloader.js`
- All Home section components listed above.

---

## 6.2 About

### Route

- Route definition: `/About`
- Browser route: `#/About`
- File: `src/Pages/About.jsx`
- Component name: `About`
- Parent: `src/App.jsx`

### Purpose

Professional biography page covering:

- Personal introduction.
- Social links.
- Journey and skills.
- Internship experience.
- External project links.
- Education and certifications.
- Development approach.

### Components and dependencies

- `src/Component/SEO.jsx`
- Framer Motion `motion`
- `react-icons/fa`
- `react-icons/fi`
- `react-icons/si`
- `react-icons/md`

### Hooks and state

- No React state hooks.
- Framer Motion container/item variants are defined locally.
- The page uses `whileInView` animations.

### APIs and data

- No API calls.
- No backend or database dependencies.
- Project URLs are a local array.
- Skill and education content is local static data.

### Authentication and authorization

- Public route.
- No authentication or role checks.

### Forms, buttons, and actions

- No form.
- Social links open LinkedIn, Facebook, Instagram, and WhatsApp.
- Four external project URLs open in a new tab.

### Loading, error, and empty states

- Global preloader and lazy route fallback apply.
- No page-specific loading, error, or empty state.

### Assets

- Video: `public/project_logo/img.webm`
- Missing poster referenced by code: `public/project_logo/fallback.jpg`
- Image: `public/project_logo/apps.webp`

### Animations

- Video background with gradient overlay.
- Badge words animate with opacity, vertical movement, and blur.
- Skills grid uses staggered viewport animations.
- Cards and project links use transition effects.

### Responsive behavior

- Main content uses `px-4 sm:px-6 lg:px-8`.
- Main About card changes from one column to two columns at `lg`.
- Journey/skills grid changes from one column to two columns at `lg`.
- Skills grid changes from 2 to 3 to 4 columns at `sm` and `lg`.
- Social links change from a two-column grid to a wrapping flex row at `sm`.

### Related files

- `src/Component/SEO.jsx`
- `src/App.jsx`
- `public/project_logo/img.webm`
- `public/project_logo/apps.webp`

---

## 6.3 Project

### Route

- Route definition: `/Project`
- Browser route: `#/Project`
- File: `src/Pages/Project.jsx`
- Component name: `Project`
- Parent: `src/App.jsx`

### Purpose

Dedicated project showcase page with a hero, animated sequence, and four detailed external project case-study sections.

### Components

- `src/Component/SEO.jsx`
- `src/Component/ball_animation.jsx`
- `src/Component/Projectcomp.jsx`

### Hooks and state

- No page-level hooks.
- `src/Component/ball_animation.jsx` owns:
  - `showTick`
  - `showText`
- `src/Component/Projectcomp.jsx` uses static project data only.

### APIs and data

- No API calls.
- No backend or database dependencies.
- Project content and screenshots are static arrays in `src/Component/Projectcomp.jsx`.

### Authentication and authorization

- Public route.
- No authentication or role checks.

### Forms, buttons, and actions

- Hero anchor: `View Projects` → `#projects`.
- Each project has an `Explore Work` link to an external project URL.
- No form, modal, table, or empty state.

### Loading, error, and empty states

- Global preloader and lazy route fallback apply.
- No page-specific error or empty state.

### Assets

- `public/click2print/*`
- `public/faizalamfazi/*`
- `public/aitransportltd/*`
- `public/iqx/*`

### Animations

- Ball drops, shows a checkmark, then reveals three sequential statements.
- Project sections are static; no scroll animation is implemented in `Projectcomp.jsx`.

### Responsive behavior

- Hero changes from stacked layout to two columns at `lg`.
- Text and animation sizing changes at `sm`, `md`, and `lg`.
- Project content stacks on mobile and becomes side-by-side at `lg`.
- Project screenshots use a two-column grid on desktop and remain full-width/stacked on smaller screens.

### Related files

- `src/Component/SEO.jsx`
- `src/Component/ball_animation.jsx`
- `src/Component/Projectcomp.jsx`

---

## 6.4 Contact

### Route

- Route definition: `/Contact`
- Browser route: `#/Contact`
- File: `src/Pages/Contact.jsx`
- Exported component name: `LandingPage`
- Parent: `src/App.jsx`

### Purpose

Contact and conversion page containing:

- Hero content and project calls to action.
- Telephone 3D model.
- Contact information and social links.
- Earth 3D model.
- Contact form with reCAPTCHA.
- External form submission through Google Apps Script.

### Components

- `src/Component/SEO.jsx`
- Lazy-loaded `src/Component/ContactScene.jsx`
- `react-router-dom` `Link`
- `lucide-react` contact icons
- `react-icons/fa` social icons

### Hooks and state

- `useState`
  - `formState`
  - `status`
  - `captchaToken`
- `useRef`
  - `container1Ref`
  - `container2Ref`
- `useEffect`
  - Registers global reCAPTCHA callbacks.
  - Attempts to render the reCAPTCHA widget if `window.grecaptcha` is already available.
- `lazy` and `Suspense`
  - Lazy-load the Three.js scene chunk.
- `ContactScene.jsx` uses React Three Fiber hooks and Three.js loaders.

### API call

One external API/integration call was verified:

| Method | Endpoint | Caller | Request | Response handling |
|---|---|---|---|---|
| `POST` | Google Apps Script execution endpoint; full URL intentionally omitted | `src/Pages/Contact.jsx` | URL-encoded `name`, `email`, `phone`, `message`, `token`, and a hardcoded key field | Expects JSON containing `status === "success"` |

Details:

- Content type: `application/x-www-form-urlencoded`.
- reCAPTCHA token is required before submission.
- Native browser validation is used for required fields.
- Submission status is one of `idle`, `sending`, `success`, or `error`.
- Success resets the form and reCAPTCHA token.
- Errors are shown as inline text.
- The response is parsed with `JSON.parse` without an HTTP status/content-type check.
- The response is logged to the browser console.

### Authentication and authorization

- Public route.
- No user authentication.
- No protected route logic.
- reCAPTCHA is an anti-abuse mechanism, not authentication.

### Forms and validation

Fields:

- Name — required text input.
- Email — required email input.
- Phone — optional telephone input.
- Message — required textarea.
- reCAPTCHA — required before submission.

Validation:

- Browser-native `required` and email-type validation.
- No custom client-side validation beyond the reCAPTCHA token check.
- No server-side validation can be verified in this repository.

### Buttons and actions

- `Get Started` → `/Project`
- `View Work` → `/Project`
- `Send Message` / `Sending...`
- Social links: LinkedIn, Facebook, Instagram, WhatsApp.
- Email and telephone links.

### Loading states

- Lazy 3D scene fallback: spinning purple border indicator.
- Submit button changes to `Sending...`.
- Global preloader applies on initial application load.

### Error states

- Missing reCAPTCHA: browser alert.
- Non-success response: inline red error message.
- Network/parse exception: inline red error message and console error.

### Empty states

- No empty state.
- The 3D context-loss state displays `3D model unavailable` in `src/Component/ContactScene.jsx`.

### Assets

- `public/vintage_telephone.optimized.glb`
- `public/earth_optimized.glb`
- `public/project_logo/img.webm` is not used by Contact; it is used by About.
- Google-hosted Draco decoder is referenced by `src/Component/ContactScene.jsx`.

### Animations

- Lazy scene fallback spinner.
- Telephone and Earth canvases use continuous render loops.
- Telephone model auto-rotates.
- Earth model auto-rotates.
- Contact cards and buttons use Tailwind transitions.
- Scroll progress and floating action buttons use Framer Motion.

### Responsive behavior

- Hero is one column on mobile and two columns at `md`.
- Telephone model is hidden below `md`.
- Contact content is one column on mobile and two columns at `md`.
- Earth model container changes height at `sm` and `md`.
- Form and information card stack on mobile.

### Related files

- `src/Component/ContactScene.jsx`
- `src/Component/SEO.jsx`
- `src/App.jsx`
- `index.html` for the external reCAPTCHA script
- `public/vintage_telephone.optimized.glb`
- `public/earth_optimized.glb`

---

## 7. Page-by-Page Cross-Reference

| Page | SEO | Navigation | Main content | External data | 3D |
|---|---|---|---|---|---|
| `src/Pages/Home.jsx` | `src/Component/SEO.jsx` | `src/Component/Navbar.jsx` | Hero, skills, gallery, project strips, CTA | None | None |
| `src/Pages/About.jsx` | `src/Component/SEO.jsx` | `src/Component/Navbar.jsx` | Bio, journey, skills, internship, projects, education | External project links only | None |
| `src/Pages/Project.jsx` | `src/Component/SEO.jsx` | `src/Component/Navbar.jsx` | Hero, ball animation, project case studies | External project links only | None |
| `src/Pages/Contact.jsx` | `src/Component/SEO.jsx` | `src/Component/Navbar.jsx` | Contact hero, info card, form, social links | Google Apps Script POST | Telephone and Earth |

---

## 8. Component Registry

### 8.1 Shared/layout components

| Component | Exact path | Purpose | Props/state | Pages using it |
|---|---|---|---|---|
| `App` | `src/App.jsx` | Application shell, Lenis, preloader, routes, footer | Uses `usePreloader`; no props | All |
| `Navbar` | `src/Component/Navbar.jsx` | Fixed responsive navigation pill | No props; scroll motion value | All |
| `Footer` | `src/Component/Footer.jsx` | Navigation, contact, social, map, copyright | No props | All |
| `ScrollUI` | `src/Component/ScrollUI.jsx` | Scroll progress, WhatsApp FAB, scroll-to-top | `visible` state; scroll hooks | All |
| `ScrollToTop` | `src/Component/ScrollToTop.jsx` | Resets scroll on route changes | No props; route effect | All |
| `GlobalPreloader` | `src/Component/GlobalPreloader.jsx` | Full-screen preload overlay | `progress`, `visible` | All |
| `SEO` | `src/Component/SEO.jsx` | Dynamic title/meta/OG/Twitter/JSON-LD injection | `page` | All pages |
| `HeroWrapper` | `src/Component/Herowraper.jsx` | Chooses mobile/desktop hero | No props | Home |

### 8.2 Home components

| Component | Exact path | Purpose | Important behavior |
|---|---|---|---|
| `hero` | `src/Component/hero.jsx` | Desktop scroll-driven hero | 50-frame image sequence, parallax, headline rotation |
| `MobileHero` | `src/Component/MobileHero.jsx` | Mobile landing hero | Background image, profile, CTA |
| `Powerfull_line` | `src/Component/Powerfull_line.jsx` | Word-by-word statement | Blur/fade viewport animation |
| `What_you_do` | `src/Component/What_you_do.jsx` | Availability and role CTA | Staggered entrance, hover/tap buttons |
| `Who_am_i` | `src/Component/Who_am_i.jsx` | Skill orb gallery | Hover, float, pulse, scale, spin variants |
| `ParallaxGallery` | `src/Component/ParallaxGallery.jsx` | Image and skill showcase | Scroll parallax, viewport animations, image grid |
| `projects_hom_intro` | `src/Component/projects_hom_intro.jsx` | Home project gallery | Desktop scroll strips and mobile swipe sliders |
| `Contact_cta` | `src/Component/Contact_cta.jsx` | Final conversion CTA | Glow, hover/tap motion |

### 8.3 Project components

| Component | Exact path | Purpose | Important behavior |
|---|---|---|---|
| `Projectcomp` | `src/Component/Projectcomp.jsx` | Four project case-study sections | Static descriptions, screenshot grids, external links |
| `ball_animation` | `src/Component/ball_animation.jsx` | Project-page animated sequence | Drop, checkmark, sequential text reveal |

### 8.4 Contact components

| Component | Exact path | Purpose | Props/state | Pages using it |
|---|---|---|---|---|
| `ContactScene` | `src/Component/ContactScene.jsx` | Lazy Three.js scene dispatcher | `model`, `containerRef`; internal context-loss state | Contact |
| `TelephoneCanvas` | `src/Component/ContactScene.jsx` | Telephone model canvas | `containerRef` | Contact |
| `EarthCanvas` | `src/Component/ContactScene.jsx` | Earth model canvas | `containerRef` | Contact |

### 8.5 Utility/unused components

| Component | Exact path | Status |
|---|---|---|
| `PageLoader` | `src/Component/PageLoader.jsx` | Defined but not imported anywhere |
| `App.css` | `src/App.css` | Imported by `src/App.jsx` but empty |

### 8.6 Hooks

| Hook | Exact path | Purpose |
|---|---|---|
| `usePreloader` | `src/hooks/usePreloader.js` | Preloads three critical images and reports progress |

---

## 9. Data Flow Map

### 9.1 Application boot and preload

```text
index.html
  ↓
src/main.jsx
  ↓
HashRouter
  ↓
src/App.jsx
  ↓
src/hooks/usePreloader.js
  ↓
Critical assets:
  - public/muhammad.webp
  - public/Home_frames/frame_000000.webp
  - public/project_logo/apps.webp
  ↓
src/Component/GlobalPreloader.jsx
  ↓
src/App.jsx route shell
```

The preload hook resolves image errors as completed loads and sets a browser-global completion flag.

### 9.2 Smooth scroll and route reset

```text
src/App.jsx
  ├─ Lenis instance
  │    ↓
  │  window.__lenis
  │    ↓
  ├─ src/Component/ScrollUI.jsx
  │    └─ Scroll-to-top action
  └─ src/Component/ScrollToTop.jsx
       └─ Route change → immediate scroll reset
```

### 9.3 Home desktop hero

```text
src/Pages/Home.jsx
  ↓
src/Component/HeroWrapper.jsx
  ↓
src/Component/hero.jsx
  ↓
public/Home_frames/frame_000000.webp through frame_000049.webp
  ↓
Framer Motion scroll progress
  ↓
Image frame replacement + parallax + headline transition
  ↓
Hero UI
```

### 9.4 Home project gallery

```text
src/Pages/Home.jsx
  ↓
src/Component/projects_hom_intro.jsx
  ↓
Static image arrays:
  - public/faizalamfazi/*
  - public/click2print/*
  ↓
Desktop: scroll-driven strips
Mobile: horizontal snap slider
  ↓
Project preview UI
```

### 9.5 Contact form submission

```text
src/Pages/Contact.jsx form
  ↓
React formState + native required validation
  ↓
reCAPTCHA token
  ↓
URLSearchParams body
  ↓
POST to external Google Apps Script endpoint
  ↓
Expected JSON response with status field
  ↓
status state: success or error
  ↓
Inline success/error UI
```

There is no backend route, controller, middleware, model, or database in this flow.

### 9.6 Contact 3D scene

```text
src/Pages/Contact.jsx
  ↓ lazy import
src/Component/ContactScene.jsx
  ↓
GLTFLoader + shared DRACOLoader
  ↓
public/vintage_telephone.optimized.glb
public/earth_optimized.glb
  ↓
React Three Fiber Canvas
  ↓
TelephoneCanvas or EarthCanvas
  ↓
3D UI
```

### 9.7 SEO metadata

```text
Each page component
  ↓
<SEO page="home|about|project|contact" />
  ↓
src/Component/SEO.jsx useEffect
  ↓
document.title
  ↓
meta tags and canonical link
  ↓
Open Graph and Twitter metadata
  ↓
JSON-LD scripts
```

---

## 10. API Registry

### 10.1 Contact form submission

- **HTTP method:** `POST`
- **Endpoint:** External Google Apps Script execution endpoint. The full URL is intentionally omitted from this record.
- **Frontend caller:** `src/Pages/Contact.jsx`
- **Backend route:** None in this repository.
- **Controller:** None in this repository.
- **Middleware:** None in this repository.
- **Authentication:** None.
- **Anti-abuse:** reCAPTCHA token is sent with the request.
- **Request content type:** `application/x-www-form-urlencoded`
- **Request fields:** `name`, `email`, `phone`, `message`, `token`, and a hardcoded key field.
- **Expected response:** JSON object with a `status` field equal to `success`.
- **Success behavior:** Reset form, reset reCAPTCHA, show success message.
- **Failure behavior:** Show inline error message; log caught errors.
- **Database interaction:** None verifiable in this repository.

### 10.2 Other network integrations

These are external resources, not application API endpoints:

| Integration | Source | Purpose |
|---|---|---|
| Google reCAPTCHA script | `index.html`, `src/Pages/Contact.jsx` | Contact form anti-abuse widget |
| Google Draco decoder | `src/Component/ContactScene.jsx` | Decode Draco-compressed GLB models |
| Google Maps iframe | `src/Component/Footer.jsx` | Location map |
| WhatsApp links | `src/Component/ScrollUI.jsx`, pages, footer | Direct messaging |
| Social links | About, Contact, Footer | External profiles |
| External project links | About and Project pages | Project demonstrations |

---

## 11. Backend Architecture

### Verified status

No backend application code was found.

Absent from the workspace:

- Express or Node server entry point.
- API route files.
- Controllers.
- Middleware.
- Server-side validation.
- Authentication middleware.
- Authorization/role checks.
- Database connection configuration.
- ORM/model files.
- CORS configuration.
- Server-side form handling.

The only server-side behavior visible is the external Google Apps Script endpoint used by the Contact page. Its implementation is outside this repository and cannot be audited here.

### Documentation mismatch

The following files describe MERN, backend, database, or API capabilities:

- `README.md`
- `public/llms.txt`
- `index.html`
- `src/Component/SEO.jsx`
- `src/Pages/About.jsx`
- `src/Component/Projectcomp.jsx`
- `src/Pages/Project.jsx`

Those descriptions refer either to claimed skills, external projects, or internship experience. They do not correspond to backend code in this repository.

The `index.html` title, meta description, keywords, and Person JSON-LD all describe the developer as a "Full Stack MERN Developer" and mention Node.js, Express.js, and MongoDB, despite no backend implementation existing in this repository.

---

## 12. Database

### Verified status

No database technology or database code was found.

Specifically absent:

- MongoDB connection code.
- Mongoose models/schemas.
- PostgreSQL connection code.
- SQL tables or migrations.
- Prisma/Drizzle/Sequelize configuration.
- Database CRUD operations.
- API/database integration in the current application.

### Important distinction

The project documentation and UI mention MongoDB, PostgreSQL, REST APIs, and backend development. Those are portfolio content claims, not implemented database relationships in this workspace.

---

## 13. Authentication & Authorization

### Verified status

No authentication or authorization system exists in the repository.

Not found:

- Login page.
- Registration page.
- Logout flow.
- Session handling.
- JWT/access/refresh token handling.
- Protected routes.
- Role or permission checks.
- Auth middleware.
- Auth state store.
- Password handling.

### reCAPTCHA

`src/Pages/Contact.jsx` and `index.html` implement a client-side reCAPTCHA widget for the contact form. This is anti-spam verification only and must not be treated as user authentication.

---

## 14. Design System

### 14.1 Global styling source

- Global Tailwind import and base styles: `src/index.css`
- Application CSS import: `src/App.css` (empty)
- Most visual rules are inline Tailwind utility classes in JSX.
- No `tailwind.config.js` was found.
- Tailwind v4 theme token is defined in `src/index.css`.

### 14.2 Colors

#### Explicit colors

| Value | Location | Use |
|---|---|---|
| `#0a0a0f` | `src/index.css`, `src/App.jsx`, Contact and other page backgrounds | Primary near-black background |
| `#d1d5db` | `src/index.css` | Base body text color |
| `rgba(209, 213, 219, 0.85)` | `src/index.css` | Paragraph text |
| `#25D366` | `src/Component/ScrollUI.jsx` | WhatsApp button background |
| `#1ebe5d` | `src/Component/ScrollUI.jsx` | WhatsApp hover background |
| `#7c3aed` | `src/Component/ContactScene.jsx` | Telephone hemisphere light |
| `#1e1b4b` | `src/Component/ContactScene.jsx` | Telephone ground light |
| `#4c1d95` | `src/Component/ContactScene.jsx` | Earth hemisphere light |

#### Tailwind color tokens used

No local color palette override was found. The implementation uses Tailwind tokens including:

- `purple-950`, `purple-900`, `purple-800`, `purple-600`, `purple-500`, `purple-400`, `purple-300`, `purple-200`
- `violet-600`
- `sky-400`, `sky-500`
- `blue-950`, `blue-800`, `blue-700`, `blue-600`, `blue-500`, `blue-400`
- `pink-600`, `pink-500`
- `green-600`, `green-500`, `green-400`
- `gray-300`, `gray-400`
- `white`, `black`
- Alpha variants such as `white/5`, `white/10`, `white/15`, `white/20`, `white/40`, `white/60`, `white/70`, `white/80`, `white/85`
- Alpha variants such as `purple-500/10`, `purple-500/20`, `purple-500/30`, `purple-500/40`, `purple-600/20`, `purple-600/30`, `purple-600/80`

### 14.3 Gradients and overlays

Verified gradient implementations include:

- `bg-gradient-to-br from-black via-purple-950/75 to-blue-950/70` in `src/Pages/About.jsx`.
- `bg-linear-to-r from-purple-900 via-purple-800 to-purple-900` in `src/Pages/Project.jsx`.
- `bg-linear-to-r from-violet-600 to-purple-600` for the active navigation pill in `src/Component/Navbar.jsx`.
- `bg-linear-to-r from-violet-600 to-purple-400` for the scroll progress bar in `src/Component/ScrollUI.jsx`.
- `bg-linear-to-r from-purple-500/20 to-blue-500/20` for the About image glow.
- `bg-linear-to-br from-white/10 to-white/5` for Contact info cards.
- `bg-linear-to-t from-black/50 via-black/10 to-transparent` for project image overlays.
- `bg-linear-to-r from-transparent via-purple-400/30 to-transparent` for the moving CTA glow.

### 14.4 Typography

- No custom font file or font import was found.
- No explicit font-family declaration was found.
- Global body font weight is `400` in `src/index.css`.
- Headings use Tailwind responsive size classes rather than a centralized type scale.
- Common heading sizes:
  - `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`
  - `font-bold` or `font-semibold`
  - `leading-tight` or `leading-relaxed`
- Body text commonly uses `text-sm`, `text-base`, `text-lg`, or `text-xl`.
- Labels and navigation commonly use `text-xs` or `text-sm`.
- Paragraphs have `line-height: 1.75` from `src/index.css`.

### 14.5 Spacing and layout

- Global section utility:

```css
.section-spacing {
  padding-top: clamp(4rem, 8vw, 9rem);
  padding-bottom: clamp(4rem, 8vw, 9rem);
}
```

- Custom Tailwind token:

```css
--spacing-section: clamp(4rem, 8vw, 9rem);
```

- The custom `--spacing-section` token and `.section-spacing` class were defined but no usage was found in the source scan.
- Common container widths:
  - `max-w-3xl`
  - `max-w-4xl`
  - `max-w-6xl`
  - `max-w-7xl`
- Common section padding:
  - `px-4`, `px-5`, `px-6`, `px-8`
  - `py-14`, `py-16`, `py-20`
  - Responsive variants such as `sm:py-20`, `md:py-20`

### 14.6 Buttons

There is no reusable Button component. Button styles are repeated inline.

| Style | Implementation | Typical behavior |
|---|---|---|
| Primary solid | `bg-purple-600 hover:bg-purple-500 text-white rounded-xl` | Used for project/contact CTAs |
| Secondary outline | `border border-purple-500/40 text-purple-200 hover:border-purple-400 hover:text-white` | Used for secondary CTAs |
| Hero ghost | `bg-purple-600/30 border border-purple-400/40 hover:bg-purple-600/50` | Home hero CTA |
| Icon FAB | Fixed circular WhatsApp button with explicit green colors | Always visible |
| Scroll-to-top | Fixed circular purple translucent button | Appears after 8% scroll |
| Disabled | `disabled:opacity-60 disabled:cursor-not-allowed` | Contact submit button |
| Motion buttons | Framer Motion `whileHover` and `whileTap` | Scale and press feedback |

Common button properties:

- Radius: `rounded-xl` or `rounded-full`.
- Padding: commonly `px-5 py-2`, `px-6 py-3`, or `px-8 py-3`.
- Font weight: commonly `font-medium`.
- Transition: commonly `transition-colors`, sometimes `transition-all duration-200`.
- Focus: Contact inputs use `focus:ring-2 focus:ring-purple-500`; no centralized button focus system was found.

### 14.7 Cards and panels

Common card implementation:

```text
bg-white/5
border border-white/10
rounded-2xl
backdrop-blur-md
shadow-xl or shadow-2xl
p-5/p-6/p-8
```

Variants:

- About cards: `rounded-2xl`, `border-white/10`, `bg-white/5`, `backdrop-blur-md`, `shadow-xl` or `shadow-2xl`.
- Contact info card: gradient background, `backdrop-blur-xl`, purple glow shadow.
- Project cards: `bg-white/5`, `border-white/10`, `rounded-2xl`, `shadow-lg`.
- Skill cards: `bg-white/5`, `border-white/10`, `rounded-xl`, hover background `bg-white/10`.
- Navigation pill: `bg-black/70`, `backdrop-blur-xl`, `border-white/15`, `rounded-full`.

### 14.8 Borders, radius, shadows, and glass effects

- Common border: `border-white/10`.
- Navigation border: `border-white/15`.
- Contact container border: `border-white/20` or `border-white/60`.
- Common radius:
  - `rounded-xl`
  - `rounded-2xl`
  - `rounded-full`
  - Explicit asymmetric radius: `rounded-[0px_200px_0px_200px]` in Contact.
- Common shadows:
  - `shadow-lg`
  - `shadow-xl`
  - `shadow-2xl`
  - `shadow-purple-900/20`
  - `shadow-purple-900/30`
  - `shadow-purple-900/40`
  - `shadow-black/30`
  - `shadow-black/40`
  - Explicit glow shadows such as `0_0_60px_rgba(168,85,247,0.15)` and `0_0_30px_rgba(168,85,247,0.15)`.
- Glass effects use `backdrop-blur-md` or `backdrop-blur-xl` with translucent white/black backgrounds.

### 14.9 Responsive system

No custom breakpoint configuration was found. The code uses Tailwind's standard breakpoint names:

| Token | Standard Tailwind breakpoint |
|---|---:|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Additional explicit mobile threshold:

- `window.innerWidth < 768` in `src/Component/hero.jsx`.
- `window.innerWidth < 768` in `src/Component/ContactScene.jsx` for device pixel ratio selection.

Responsive patterns:

- Navigation changes from icons to text at `md`.
- Home switches from `MobileHero` to desktop `hero` at `md`.
- About and Contact grids switch from one column to two columns at `md` or `lg`.
- Project hero switches from stacked to two columns at `lg`.
- Project screenshots switch to a two-column grid at desktop sizes.
- Home project strips become horizontal swipe sliders below `md`.
- Several font sizes and paddings increase at `sm`, `md`, and `lg`.
- `overflow-x: hidden` is applied globally in `src/index.css`.

### 14.10 Navigation

`src/Component/Navbar.jsx`

- Fixed at top with `z-50`.
- Centered pill with translucent black glass background.
- Four routes: Home, About, Project, Contact.
- Mobile displays icons only.
- Desktop displays text labels.
- Active route uses a Framer Motion `layoutId="active-pill"` background.
- Hover/tap motion is applied to each navigation item.
- Scroll changes pill padding through a motion value transform.

---

## 15. Forms and Validation

### 15.1 Contact form

File: `src/Pages/Contact.jsx`

| Field | Type | Required | State |
|---|---|---:|---|
| Name | text | Yes | `formState.name` |
| Email | email | Yes | `formState.email` |
| Phone | tel | No | `formState.phone` |
| Message | textarea | Yes | `formState.message` |
| reCAPTCHA | external widget | Yes before submit | `captchaToken` |

### 15.2 Validation behavior

- Native HTML validation is relied upon.
- reCAPTCHA token is checked before setting `sending`.
- No custom field-level validation messages.
- No normalization or trimming is visible.
- No server-side validation is available in this repository.
- No schema validation library is installed or used.

### 15.3 Submission states

- `idle`: initial state.
- `sending`: button disabled and label changes to `Sending...`.
- `success`: green inline message; form resets.
- `error`: red inline message.

### 15.4 Accessibility observations

- Inputs use placeholders but no explicit `<label>` elements.
- Status messages do not use `aria-live`.
- Missing reCAPTCHA uses `alert`.
- These are verified implementation observations; browser behavior should be tested separately.

---

## 16. Assets

### 16.1 Root assets

| Asset | Path | Used by | Purpose |
|---|---|---|---|
| Portrait | `public/muhammad.webp` | `src/Component/hero.jsx`, `src/Component/MobileHero.jsx`, `src/hooks/usePreloader.js`, SEO metadata | Developer portrait |
| Favicon | `public/faveicon.png` | `index.html` | Favicon and Apple touch icon |
| About video | `public/project_logo/img.webm` | `src/Pages/About.jsx` | Animated About-page background |
| About image | `public/project_logo/apps.webp` | `src/Pages/About.jsx`, `src/hooks/usePreloader.js` | Workspace/developer image |
| Mobile hero background | `public/project_logo/mobilehero.webp` | `src/Component/MobileHero.jsx` | Mobile hero background |

### 16.2 Hero frames

- Directory: `public/Home_frames/`
- Files: `frame_000000.webp` through `frame_000050.webp`.
- Count: 51 files.
- Runtime constant: `TOTAL_FRAMES = 50` in `src/Component/hero.jsx`.
- Runtime range: indices `0` through `49`.
- `frame_000050.webp` is present but not referenced by the current hero implementation.

### 16.3 Project screenshot directories

| Directory | Count | Used by |
|---|---:|---|
| `public/click2print/` | 10 | `src/Component/projects_hom_intro.jsx`, `src/Component/Projectcomp.jsx` |
| `public/faizalamfazi/` | 8 | `src/Component/projects_hom_intro.jsx`, `src/Component/Projectcomp.jsx` |
| `public/aitransportltd/` | 5 | `src/Component/Projectcomp.jsx` |
| `public/iqx/` | 5 | `src/Component/Projectcomp.jsx` |
| `public/parallex_home/` | 6 | `src/Component/ParallaxGallery.jsx` |

### 16.4 3D assets

| Asset | Path | Used by | Notes |
|---|---|---|---|
| Telephone original | `public/vintage_telephone.glb` | `scripts/optimize-glb.mjs` | Source model |
| Telephone optimized | `public/vintage_telephone.optimized.glb` | `src/Component/ContactScene.jsx` | Runtime model |
| Earth original | `public/earth (1).glb` | `scripts/optimize-glb.mjs` | Source model |
| Earth optimized | `public/earth_optimized.glb` | `src/Component/ContactScene.jsx` | Runtime model |

Approximate sizes observed during audit:

- `earth (1).glb`: 19,776.6 KB.
- `vintage_telephone.glb`: 14,063.7 KB.
- `earth_optimized.glb`: 2,546.4 KB.
- `vintage_telephone.optimized.glb`: 1,294.2 KB.
- `project_logo/img.webm`: 5,475.2 KB.

### 16.5 Static SEO and hosting files

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- `public/404.html`

### 16.6 Missing referenced assets

The following paths are referenced by source but were not present in the workspace scan:

- `public/project_logo/fallback.jpg` — referenced by `src/Pages/About.jsx`.
- `public/og-image.webp` — referenced by `index.html` and `src/Component/SEO.jsx`.

---

## 17. Dependencies

The complete declared dependency list is in Section 3. Important dependency observations:

1. `@react-three/drei` is installed but no source import was found.
2. Testing libraries and Vitest are installed, but no tests or test setup file were found.
3. `gh-pages` appears in `package-lock.json` but not in `package.json`.
4. `sharp`, glTF Transform packages, and `draco3d` are used by scripts rather than application runtime code.
5. No Express, MongoDB, PostgreSQL, Prisma, Mongoose, or authentication package is declared.

---

## 18. Configuration & Environment

### 18.1 Vite

File: `vite.config.js`

Verified configuration:

- `base: "/"`
- React plugin.
- Tailwind plugin.
- Vitest environment: `jsdom`.
- Vitest globals: enabled.
- Test setup file: `./src/__tests__/setup.js`.
- Build target: `es2020`.
- CSS minification: enabled.
- Compressed size reporting: enabled.
- Chunk size warning limit: `1000`.
- Manual chunks:
  - `three-vendor`
  - `three-r3f`
  - `react-vendor`
  - `motion-vendor`
  - `icons-fa`
  - `icons-lucide`

### 18.2 ESLint

File: `eslint.config.js`

Verified configuration:

- Applies to `**/*.{js,jsx}`.
- Ignores `dist`.
- Uses `@eslint/js` recommended rules.
- Uses React Hooks recommended rules.
- Uses React Refresh Vite rules.
- Browser globals are enabled.
- JSX and latest ECMAScript source types are enabled.
- Unused variables are errors, except names matching `^[A-Z_]`.

### 18.3 Tailwind

- Tailwind is imported in `src/index.css`.
- Tailwind v4 theme syntax is used.
- No `tailwind.config.js` was found.
- No custom color palette was found.
- A custom spacing token is defined in `src/index.css`.

### 18.4 Environment

- No `.env`, `.env.*`, or `.env.example` files were found.
- The only environment-like reference is Vite's built-in `import.meta.env.BASE_URL`, used by:
  - `src/hooks/usePreloader.js`
  - `src/Component/hero.jsx`
  - `src/Component/ContactScene.jsx`
- No environment-variable names beyond `BASE_URL` were found in application source.

### 18.5 Scripts

`package.json` scripts:

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start development server |
| `build` | `vite build` | Production build |
| `preview` | `vite preview` | Preview production build |
| `lint` | `eslint .` | Lint project |
| `optimize-models` | `node scripts/optimize-glb.mjs` | Optimize GLB models |
| `test` | `vitest run` | Run tests once |
| `test:watch` | `vitest` | Watch tests |

Additional script file:

- `scripts/convert-images.mjs` converts configured source images to WebP using Sharp.
- `scripts/convert-images.mjs` is not exposed as an npm script.

---

## 19. SEO / GEO / AEO

### 19.1 Static metadata

File: `index.html`

Implemented:

- UTF-8 charset.
- Viewport metadata.
- Favicon and Apple touch icon.
- Static title.
- Meta description.
- Meta keywords.
- Author.
- Robots directive.
- Canonical URL.
- Open Graph type, title, description, URL, image, site name, locale.
- Twitter summary-large-image card.
- Static Person JSON-LD.
- Static WebSite JSON-LD.
- DNS prefetch/preconnect for Google static content.
- External reCAPTCHA script.
- GitHub Pages SPA route-restoration script.

### 19.2 Dynamic metadata

File: `src/Component/SEO.jsx`

Implemented per page:

- Title.
- Description.
- Keywords.
- Robots.
- Author.
- Canonical URL.
- Open Graph metadata.
- Twitter metadata.
- JSON-LD structured data.

Page schema mapping:

| Page key | JSON-LD types |
|---|---|
| `home` | Person, WebSite, FAQPage |
| `about` | Person |
| `project` | ItemList |
| `contact` | Person |

### 19.3 Sitemap and robots

- `public/sitemap.xml` lists `/`, `/About`, `/Project`, and `/Contact`.
- `public/robots.txt` allows crawling, disallows `/assets/*.map`, and references the sitemap.

### 19.4 LLM-oriented documentation

- `public/llms.txt` contains a structured text description of the developer, technologies, services, education, experience, projects, and site pages.

### 19.5 GEO/AEO status

Verified:

- FAQPage JSON-LD exists on the home page.
- Person, WebSite, and ItemList structured data exist.
- `public/llms.txt` provides machine-readable content.
- SEO copy includes service and expertise language.

Not found:

- A separate GEO implementation.
- A separate AEO implementation.
- Server-side rendering or static HTML generation for route-specific metadata.

---

## 20. Performance

### 20.1 Implemented optimizations

- All four pages are lazy-loaded in `src/App.jsx`.
- Contact's Three.js scene is lazy-loaded separately in `src/Pages/Contact.jsx`.
- Vite manual chunks isolate Three.js, React Three Fiber, React, Framer Motion, and icon libraries.
- Contact uses optimized Draco-compressed GLB files.
- Contact caps device pixel ratio at 1 on mobile and 1.5 on desktop.
- Contact disposes Three.js geometries, materials, renderer, and orbit controls on unmount.
- Contact handles WebGL context loss/restoration.
- Project and gallery images use `loading="lazy"`.
- Footer Google Maps iframe uses `loading="lazy"`.
- Critical initial images are preloaded by `src/hooks/usePreloader.js`.
- Remaining hero frames are progressively preloaded after the desktop hero mounts.
- CSS is minified in production builds.

### 20.2 Performance concerns

- The hero references a 51-file frame sequence; 50 frames are used by the runtime constant.
- About uses an autoplaying, looping WebM video.
- Contact renders two Three.js canvases with `frameloop="always"`.
- The Contact scene uses an external Google-hosted Draco decoder.
- No image dimensions are declared on most image elements, creating potential layout-shift risk.
- No application-level caching policy or host header configuration was found.
- The global preloader only waits for three critical images, not all above-the-fold assets.
- The ContactScene module calls `useLoader.preload` for both models when the lazy module is imported.

---

## 21. Security

### 21.1 Implemented

- reCAPTCHA is integrated into the Contact form.
- Most external social links use `target="_blank"` with `rel="noopener noreferrer"`.
- `src/Component/Footer.jsx` social links (Facebook, Instagram, LinkedIn, WhatsApp) do **not** use `target="_blank"` or `rel="noopener noreferrer"`, so they navigate the current tab away from the site and lack the `noopener`/`noreferrer` security protection.
- Required form fields use native browser validation.
- Lenis scroll listeners use passive window scroll events.
- Three.js renderer and controls are disposed on unmount.

### 21.2 Partially implemented or requiring review

- The Contact form sends a hardcoded key field from client-side code.
- The external form-submission endpoint is hardcoded in client-side code.
- The reCAPTCHA site key is embedded in client-side code.
- The response is logged to the browser console.
- No server-side validation, rate limiting, spam throttling, or abuse monitoring can be verified.
- No HTTP status or content-type validation is performed before `JSON.parse`.
- No Content Security Policy or security-header configuration was found.
- External scripts and iframe resources do not have integrity attributes.
- Form inputs use placeholders instead of persistent labels.

### 21.3 Not found

- Authentication.
- Authorization.
- Role checks.
- Password handling.
- Database security controls.
- CORS policy.
- CSRF protection for an application-owned API.
- File upload handling.
- Secret management.
- Server-side access control.

---

## 22. Deployment

### 22.1 Verified deployment evidence

- Canonical, Open Graph, Twitter, sitemap, and JSON-LD URLs use `https://muhammadbin-naveed.vercel.app`.
- `public/llms.txt` identifies the same site URL.
- `public/404.html` contains a GitHub Pages SPA redirect.
- `README.md` mentions Namecheap/Hostinger and a GitHub repository.
- No `vercel.json`, `netlify.toml`, Dockerfile, CI workflow, or other deployment configuration file was found.

### 22.2 Build and preview commands

```text
npm run dev
npm run build
npm run preview
```

### 22.3 Deployment ambiguity

The repository contains evidence for multiple hosting approaches:

- Vercel-oriented canonical URLs.
- GitHub Pages SPA fallback logic.
- README references to Namecheap/Hostinger.

The active production deployment method cannot be verified from this workspace alone.

---

## 23. Verified Issues

| Severity | Issue | Exact location | Evidence | Impact |
|---|---|---|---|---|
| High | Client-side hardcoded form integration configuration | `src/Pages/Contact.jsx` | Endpoint, reCAPTCHA key, and key field are embedded in browser code | External submission configuration is exposed and difficult to rotate safely |
| High | Test setup is missing | `vite.config.js`, `src/__tests__/setup.js` | Config references setup file; file and directory do not exist | `npm test` is expected to fail before tests run |
| Medium | No backend despite full-stack/MERN claims | `README.md`, `public/llms.txt`, `src/Component/SEO.jsx`, `src/Pages/About.jsx` | No server, API, controller, model, or database files exist | Documentation and actual architecture disagree |
| Medium | Missing About video poster | `src/Pages/About.jsx` | References `public/project_logo/fallback.jpg`; file is absent | Video may show no poster before playback |
| Medium | Missing Open Graph/Twitter image | `index.html`, `src/Component/SEO.jsx` | References `public/og-image.webp`; file is absent | Social sharing image will not resolve |
| Medium | Hash routing conflicts with path-oriented SEO/deployment files | `src/main.jsx`, `index.html`, `public/sitemap.xml`, `public/404.html` | App uses `HashRouter`; canonical/sitemap use path routes; 404 restoration logic restores pathname | Direct links, sitemap URLs, and route restoration may not resolve as intended |
| Medium | Duplicate structured data on Home | `index.html`, `src/Component/SEO.jsx` | Static Person/WebSite JSON-LD plus dynamic Home Person/WebSite/FAQ scripts | Search engines may see duplicate schema |
| Medium | Contact response handling is fragile | `src/Pages/Contact.jsx` | No `response.ok` or content-type check before `JSON.parse` | Non-JSON/error responses become generic errors |
| Low | Unused component | `src/Component/PageLoader.jsx` | No import references found | Dead code |
| Low | Empty CSS file | `src/App.css` | File contains no styles but is imported by `src/App.jsx` | Confusing unused import |
| Low | Unused imports | `src/Pages/Home.jsx`, `src/Pages/About.jsx`, `src/Component/ParallaxGallery.jsx` | Direct `Hero` and `MobileHero` in Home, `SiFramer`, and `isInView` are unused | Dead code and lint noise |
| Low | Unused asset-convert imports and stale source list | `scripts/convert-images.mjs` | `readdir`, `unlink`, and `path` are unused; many listed source files do not exist | Script skips most configured conversions |
| Low | Lockfile/package drift | `package-lock.json`, `package.json` | `gh-pages` appears in lockfile root but not package manifest; commit `28dd202` ("fix: configure for Vercel deployment - remove gh-pages") removed it from `package.json` but the lockfile was not regenerated | Dependency state is inconsistent |
| Low | Invalid footer LinkedIn URL | `src/Component/Footer.jsx` | LinkedIn href lacks a URL scheme | Link may resolve as a relative URL |
| Low | Nonstandard scroll behavior fallback | `src/Component/ScrollToTop.jsx` | Uses `behavior: "instant"` | Browser support is inconsistent |
| Informational | Extra hero frame | `public/Home_frames/frame_000050.webp`, `src/Component/hero.jsx` | 51 files exist; runtime uses 50 indices | Unused asset |
| Informational | `@react-three/drei` is unused | `package.json`, source scan | Dependency exists; no import found | Potential unnecessary dependency |

---

## 24. Potential Issues / Needs Review

These items are suspicious or require runtime/browser verification; they are not presented as confirmed bugs.

1. **reCAPTCHA loading race:** `src/Pages/Contact.jsx` only attempts widget rendering during the initial effect. If the external script loads after mount, no later render trigger is visible.
2. **Global callback names:** `window.onCaptchaChange` and `window.onCaptchaExpired` may conflict with other code that uses the same global names.
3. **Lenis/window scroll mismatch:** `src/Component/Navbar.jsx` reads `window.scrollY` directly while Lenis controls scrolling.
4. **Always-running 3D loops:** Both Contact canvases use `frameloop="always"`; actual GPU impact needs device testing.
5. **3D error boundary:** Model load failures are not wrapped in a visible error boundary beyond Suspense/context-loss handling.
6. **Hero stacking behavior:** The desktop hero uses a negative-z image, fixed content, sticky container, and global Lenis; visual behavior needs browser testing.
7. **Nonstandard Tailwind sizing utilities:** Classes such as `h-62.5`, `h-75`, `h-87.5`, `h-100`, `h-125`, `w-100`, and `w-150` appear in Contact/Footer and need build-output verification.
8. **Nonstandard z-index utilities:** Classes `z-60` (`src/Component/ScrollUI.jsx`), `z-100` (`src/Component/PageLoader.jsx`), and `z-200` (`src/Component/GlobalPreloader.jsx`) appear in the codebase. Tailwind's default z-index scale is `0, 10, 20, 30, 40, 50`; these higher values require explicit theme extension in Tailwind v4 and may not produce any CSS output without it.
9. **SEO crawler behavior:** Dynamic metadata is injected client-side in a Vite SPA; crawler support depends on hosting/rendering behavior.
10. **Accessibility:** Icon-only mobile navigation links and form fields without explicit labels need keyboard/screen-reader testing.
11. **External URL validity:** Social, project, WhatsApp, Maps, reCAPTCHA, and Apps Script targets were not network-tested during this read-only audit.
12. **Image dimensions and loading:** Most images lack explicit width/height; layout shift should be measured.
13. **Deployment route behavior:** The interaction between HashRouter and the GitHub Pages 404 redirect needs production testing.
14. **SEO duplicate content:** Static and dynamic JSON-LD should be validated with a structured-data testing tool.
15. **Test command behavior:** The exact Vitest failure mode should be confirmed by running tests in a future authorized validation step.
16. **GitHub username inconsistency:** `public/llms.txt` lists the GitHub profile as `https://github.com/muhammadbin-naveed`, while `README.md` references `https://github.com/muhammadbinnaveed01-oss/Portfolio.git` and `https://github.com/muhammadbinnaveed01-oss`. The two usernames differ.

---

## 25. Technical Debt

### 25.1 Architecture debt

- No centralized API/service layer, although only one external integration currently exists.
- No backend or database layer despite full-stack documentation claims.
- No route-level error boundary.
- No centralized form validation or submission service.
- No centralized design-token/Button/Card components; styles are repeated in JSX.
- No centralized contact/configuration module; integration values are embedded in a page.

### 25.2 Code debt

- `src/App.css` is empty.
- `src/Component/PageLoader.jsx` is unused.
- Unused imports exist in Home, About, and ParallaxGallery.
- `import React from "react"` is present in 7 files (`src/Pages/Project.jsx`, `src/Pages/Home.jsx`, `src/Pages/About.jsx`, `src/Component/MobileHero.jsx`, `src/Component/ParallaxGallery.jsx`, `src/Component/projects_hom_intro.jsx`, `src/Component/Projectcomp.jsx`) but is unnecessary under React 19's automatic JSX runtime.
- `src/Component/ParallaxGallery.jsx` computes `isInView` but never uses it.
- `scripts/convert-images.mjs` contains a stale conversion list and unused imports.
- `src/Pages/Contact.jsx` has inconsistent indentation and local function placement.
- `src/Pages/About.jsx` imports `SiFramer` while using `FiTriangle` for Framer Motion.
- Global mutable browser state is used for Lenis and preload completion.

### 25.3 Content/deployment debt

- README, `llms.txt`, SEO copy, About copy, and Project copy describe technologies not present in this repository.
- Deployment evidence is inconsistent across Vercel URLs, GitHub Pages fallback, and README hosting notes.
- Sitemap and canonical URLs use path routes while the application uses hash routing.
- Missing social image and video poster reduce robustness.

### 25.4 Test debt

- Vitest is configured but no tests exist.
- The configured setup file is missing.
- Testing-library dependencies are installed but unused.

---

## 26. Important Project Decisions

| Decision | Verified implementation | Reason |
|---|---|---|
| Use React and Vite | `src/main.jsx`, `src/App.jsx`, `vite.config.js` | Current application architecture |
| Use hash routing | `src/main.jsx` | Verified implementation; deployment rationale unknown |
| Lazy-load all pages | `src/App.jsx` | Reduces initial route bundle |
| Lazy-load Contact 3D scene | `src/Pages/Contact.jsx` | Keeps Three.js code out of initial route load |
| Use Tailwind v4 CSS-first configuration | `src/index.css`, `vite.config.js` | No Tailwind config file exists |
| Use Framer Motion for UI animation | Components throughout `src/Component` and `src/Pages` | Verified implementation |
| Use Lenis for smooth scrolling | `src/App.jsx` | Verified implementation |
| Use optimized GLB models at runtime | `src/Component/ContactScene.jsx` | Reduces model payload versus original GLBs |
| Use external Google Apps Script for contact submissions | `src/Pages/Contact.jsx` | No application backend exists; external-service rationale otherwise unknown |
| Use static SEO plus dynamic SEO | `index.html`, `src/Component/SEO.jsx` | Static crawler fallback plus route-specific updates; exact rationale not documented |
| Use GitHub Pages SPA fallback | `public/404.html` | Verified file; current deployment target unknown |

---

## 27. Cross-File Relationships

### 27.1 Page → components

```text
src/Pages/Home.jsx
├── src/Component/HeroWrapper.jsx
│   ├── src/Component/MobileHero.jsx
│   └── src/Component/hero.jsx
├── src/Component/Powerfull_line.jsx
├── src/Component/What_you_do.jsx
├── src/Component/Who_am_i.jsx
├── src/Component/ParallaxGallery.jsx
├── src/Component/projects_hom_intro.jsx
└── src/Component/Contact_cta.jsx

src/Pages/About.jsx
└── src/Component/SEO.jsx

src/Pages/Project.jsx
├── src/Component/SEO.jsx
├── src/Component/ball_animation.jsx
└── src/Component/Projectcomp.jsx

src/Pages/Contact.jsx
├── src/Component/SEO.jsx
└── src/Component/ContactScene.jsx
```

### 27.2 Shared shell → pages

```text
src/App.jsx
├── src/hooks/usePreloader.js
├── src/Component/GlobalPreloader.jsx
├── src/Component/ScrollToTop.jsx
├── src/Component/ScrollUI.jsx
├── src/Component/Navbar.jsx
├── src/Component/Footer.jsx
└── src/Pages/*
```

### 27.3 Assets → consumers

```text
public/muhammad.webp
└── src/Component/hero.jsx
    src/Component/MobileHero.jsx
    src/hooks/usePreloader.js

public/Home_frames/*
└── src/Component/hero.jsx

public/project_logo/apps.webp
└── src/Pages/About.jsx
    src/hooks/usePreloader.js

public/project_logo/img.webm
└── src/Pages/About.jsx

public/project_logo/mobilehero.webp
└── src/Component/MobileHero.jsx

public/parallex_home/*
└── src/Component/ParallaxGallery.jsx

public/click2print/*
└── src/Component/projects_hom_intro.jsx
    src/Component/Projectcomp.jsx

public/faizalamfazi/*
└── src/Component/projects_hom_intro.jsx
    src/Component/Projectcomp.jsx

public/aitransportltd/*
└── src/Component/Projectcomp.jsx

public/iqx/*
└── src/Component/Projectcomp.jsx

public/vintage_telephone.optimized.glb
public/earth_optimized.glb
└── src/Component/ContactScene.jsx
```

### 27.4 API → frontend → external service

```text
src/Pages/Contact.jsx
└── POST form data
    └── External Google Apps Script endpoint
        └── Response status
            └── src/Pages/Contact.jsx status UI
```

No backend or database relationship exists for this flow.

---

## 28. Development History

- `README.md` describes the project as a personal developer portfolio and records a project-update commit link.
- The current audit did not modify application history or commit state.
- `public` contains both original and optimized GLB assets, indicating prior model optimization work.
- `scripts/optimize-glb.mjs` documents the intended Draco/dedup/prune/weld optimization workflow.
- `scripts/convert-images.mjs` documents a prior image-conversion workflow, but many source paths are no longer present.
- `.kilo/worktrees/` contains managed worktree state from prior agent sessions; it is not application history.

---

## 29. Current Development State

### Ready/verified

- Source tree is present and internally navigable.
- Vite configuration is present.
- Four routes are defined.
- Main UI modules are present.
- Static assets are largely present.
- Optimized 3D models are present and referenced by runtime code.
- SEO metadata files and components are present.

### Not ready or incomplete

- Test command is not ready because the configured setup file is absent.
- Social preview image is absent.
- About video poster is absent.
- Backend/database/auth claims are not represented in code.
- Deployment method is not unambiguous.
- No automated tests were found.

---

## 30. Future Work

This section records candidate work only. Nothing in this audit was changed.

1. Reconcile frontend-only implementation with MERN/full-stack documentation.
2. Decide whether routing should remain HashRouter or move to path-based routing.
3. Add a valid Open Graph image and About video poster.
4. Repair or remove stale test configuration and add tests.
5. Move external form integration configuration out of client source and validate the external service contract.
6. Add server-side validation/rate limiting if the contact integration is replaced by an application-owned backend.
7. Centralize repeated button/card/form styles.
8. Remove unused imports/components and reconcile lockfile drift.
9. Add route-level error handling and visible 3D load failure states.
10. Validate accessibility, responsive behavior, social metadata, and deployment redirects in a browser/production environment.

---

## 31. Unknown / Needs Review

The following cannot be verified from the current workspace:

- Whether the external Google Apps Script endpoint is live and accepts the documented request shape.
- The external endpoint's actual response schema and error behavior.
- Whether reCAPTCHA renders correctly after SPA navigation and script-load timing variations.
- Whether the production site is deployed to Vercel, GitHub Pages, Namecheap, Hostinger, or another host.
- Whether path-based canonical/sitemap URLs resolve correctly with the current HashRouter implementation.
- Whether external social/project URLs are currently reachable.
- Exact image dimensions for the WebP/PNG assets.
- Actual browser accessibility behavior for icon-only navigation and unlabeled form fields.
- Actual GPU/CPU performance of the two always-rendering Contact canvases.
- Whether `@react-three/drei` is retained for future work or is unused debt.
- Whether the `gh-pages` lockfile entry is intentional.
- Whether the external project descriptions accurately describe the deployed external sites.

---

## 32. AI Development Rules

Future AI agents working in this workspace should follow these rules:

1. Treat this file as the first source of truth before rediscovering the project.
2. Use exact relative paths from the workspace root.
3. Do not assume a backend, database, authentication system, or API exists.
4. Verify every route, component, asset, and integration against actual files before changing code.
5. Do not expose or commit secrets, tokens, API keys, credentials, private environment values, or full external integration URLs in code or documentation.
6. Preserve the distinction between:
   - current application implementation;
   - external project descriptions;
   - portfolio claims in README/SEO/LLM content.
7. Respect the current HashRouter architecture unless a routing change is explicitly approved.
8. Respect Tailwind CSS v4 CSS-first configuration in `src/index.css`.
9. Keep new shared UI patterns centralized rather than duplicating inline styles.
10. Add or update tests when changing behavior; first resolve the missing `src/__tests__/setup.js` configuration.
11. Run lint/build validation after implementation work when authorized.
12. Do not remove or overwrite optimized GLB assets without visual verification.
13. Do not treat reCAPTCHA as authentication.
14. Do not invent routes, API endpoints, database models, or deployment settings.
15. Mark unverifiable information as `Unknown / Needs Review`.

---

## 33. Documentation Maintenance Log

| Date | Change | Scope |
|---|---|---|
| 2026-09-20 | Initial centralized project record created from read-only workspace audit | Entire current workspace |
| 2026-09-20 | Confirmed four routes, 19 component files, one hook, no backend/database/auth implementation | Source and configuration |
| 2026-09-20 | Confirmed one external contact-form POST integration without recording its secret/full URL | API/security |
| 2026-09-20 | Confirmed missing test setup, missing social image, missing About poster, unused code, and documentation/architecture mismatches | Issues/debt |
| 2026-09-20 | Re-verified all source files, public assets, config, and scripts against documented claims | Corrections and additions across sections 6, 11, 21, 23, 24, 25, 33 |

---

## 34. Final Verification Checklist

- [x] Project purpose and current state documented.
- [x] Root/source/public/script/configuration structure documented.
- [x] All four discovered routes documented.
- [x] Parent shell and page/component relationships documented.
- [x] Important reusable components inventoried.
- [x] Contact form data flow traced to the external service boundary.
- [x] Backend and database absence documented.
- [x] Authentication/authorization absence documented.
- [x] Colors, typography, spacing, buttons, cards, borders, shadows, gradients, and breakpoints documented.
- [x] Responsive behavior documented.
- [x] Animation and interaction system documented.
- [x] Assets inventoried with exact paths.
- [x] Dependencies and lockfile discrepancy documented.
- [x] Environment/build/deployment configuration documented.
- [x] SEO/GEO/AEO artifacts documented.
- [x] Performance and security observations documented.
- [x] Verified issues separated from needs-review items.
- [x] Technical debt and cross-file relationships documented.
- [x] Unknown information explicitly marked.
- [x] No application source code was modified during this audit.
