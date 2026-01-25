# AI Coding Agent Instructions for Chennai React Website

## Project Overview

This is a Next.js 16 portfolio website for the Chennai React community. It uses the **App Router** with a `src/` directory pattern, featuring 3D animations (React Three Fiber), scroll-linked animations (Framer Motion), and utility-first styling (Tailwind CSS 4).

**Tech Stack**: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Framer Motion, Three.js, React Three Fiber, GSAP

## Essential Architecture

### Component Organization (Non-Negotiable)

- **`src/app/`**: Routing and layouts ONLY. Do NOT create component folders here.
- **`src/components/`**: All UI components, organized by function:
  - `3d/`: React Three Fiber scenes and 3D models (Model.tsx, mascot-3d.tsx, robot-3d.tsx)
  - `layout/`: Global layout components (PillNav.tsx)
  - `sections/`: Page sections (main-section.tsx, about-section.tsx, stagger-testimonials.tsx)
  - `ui/`: Reusable primitives (StickerPeel.tsx, buttons, cards)
- **`src/context/`**: Global state using React Context (ScrollLogoContext.tsx manages scroll-linked UI docking)
- **`src/lib/`**: Utilities (utils.ts for Tailwind classname merging)
- **`public/`**: Static assets—images in `public/images/`, 3D models in `public/models/`

### Path Aliases (Required)

Use these configured in `tsconfig.json`:
- `@/*` → `src/*` (import components: `@/components/ui/Button`)
- `@public/*` → `public/*` (import assets: `@public/images/logo.svg`)

## File Naming & Folder Creation Conventions

### Component File Naming

Follow these patterns based on component type:

| Type | Pattern | Examples |
|------|---------|----------|
| **3D/Three.js components** | `kebab-case.tsx` | `robot-3d.tsx`, `mascot-3d.tsx`, `test-model.tsx` |
| **Section/Page components** | `kebab-case-section.tsx` | `main-section.tsx`, `about-section.tsx`, `stagger-testimonials.tsx` |
| **UI/Reusable primitives** | `PascalCase.tsx` | `StickerPeel.tsx`, `Button.tsx`, `Card.tsx` |
| **Layout components** | `PascalCase.tsx` | `PillNav.tsx`, `Header.tsx` |
| **Context files** | `PascalCaseContext.tsx` | `ScrollLogoContext.tsx` |
| **Utility functions** | `camelCase.ts` | `utils.ts`, `helpers.ts` |

**Rationale**: kebab-case for specialized components (3D, sections) signals their role; PascalCase for UI primitives/layouts reflects traditional React conventions.

### Folder Creation Rules

**When to create a new folder:**
1. **New feature/domain** with 3+ related components → Create subfolder in `src/components/`
2. **3D models** → Organize by category in `src/components/3d/` (e.g., `characters/`, `environments/`)
3. **Images/assets** → Group by purpose in `public/images/` (e.g., `icons/`, `backgrounds/`)

**Folder naming:**
- Use **lowercase with hyphens** for organizational folders: `public/images/icons/`, `src/components/3d/characters/`
- Do NOT create subdirectories inside `src/app/` for components

**Example: Adding a new "Services" feature**
```
src/components/sections/
  ├── main-section.tsx
  ├── about-section.tsx
  └── services-section.tsx          # Add here, NOT in src/app

src/components/ui/
  └── service-card.tsx               # Reusable card for services
```

### Static Assets Naming

- **Images**: `kebab-case.{svg,png,jpg}` (e.g., `chennai-central-1.svg`, `react-outline.svg`)
- **3D Models**: `kebab-case.{glb,gltf}` (e.g., `robot_playground.glb`)
- **Icons**: `kebab-case.svg` in `public/images/icons/` (e.g., `menu-icon.svg`)

## Critical Patterns

### 1. Scroll-Linked Animations

The **ScrollLogoContext** (`src/context/ScrollLogoContext.tsx`) manages state for scroll-triggered effects. Example from `main-section.tsx`:

```tsx
const { setIsLogoDocked, isLogoDocked, targetRect } = useScrollLogo();
const { scrollY } = useScroll(); // Framer Motion
const scale = useTransform(scrollY, [0, 1200], [1, 30]); // Maps scroll to zoom
```

**Key insight**: Scroll position (`scrollY`) drives animations; state flipping (docking) occurs at threshold points (~`zoomEnd - 100`). Use `useTransform` for continuous animations, manual thresholds for discrete state changes.

### 2. 3D Model Loading & Animation

Models use `@react-three/drei` for loading and animating GLTF files:

```tsx
useGLTF.preload("/models/robot_playground.glb"); // Preload in module scope
const { animations, scene } = useGLTF("/models/robot_playground.glb");
const { actions } = useAnimations(animations, scene);

useFrame(() => {
  actions["AnimationClipName"].time = scroll.offset * clipDuration;
});
```

**Conventions**: 
- Preload models at module level for performance
- Animation clips are named (e.g., "Experiment")—confirm names in Blender exports
- Tie clip playback to scroll offset or time for synchronized effects

### 3. Responsive Layout Patterns

Use `useLayoutEffect` with `getBoundingClientRect()` to measure layout on mount/resize, then pass dimensions to animation transforms. Example: `main-section.tsx` measures image size for zoom calculations.

## Development Workflow

**Start dev server**: `bun dev` (uses Bun package manager, not npm/yarn)  
**Build**: `bun build`  
**Lint**: `bun lint` (ESLint + Next.js rules)  
**Type check**: Built into dev/build pipeline

## Styling & Class Merging

Use `tailwind-merge` in utilities when combining conditional classes:
```tsx
import { cn } from "@/lib/utils";
className={cn("base-class", conditionalClass && "override-class")}
```

This prevents Tailwind specificity conflicts (e.g., `mx-auto` vs `ml-2`).

## Project-Specific Quirks & Conventions

1. **Bun over npm**: This project uses Bun. Always use `bun` commands, not `npm` or `yarn`.
2. **"Docking" pattern**: The logo/nav changes state when scroll reaches a threshold; this is tracked via ScrollLogoContext—expect UI to "dock" near the top after hero zoom.
3. **3D models in public/models/**: Keep .glb/.gltf files here; reference with `/models/filename.glb` in code.
4. **Tailwind v4**: Uses `@tailwindcss/postcss` and newer syntax; avoid v3 patterns.
5. **React 19 & strict types**: Use `Readonly<>` for component props; enable TypeScript strict mode.

## Files to Reference When Adding Features

- **Scroll animations**: [src/components/sections/main-section.tsx](src/components/sections/main-section.tsx)
- **Context/state**: [src/context/ScrollLogoContext.tsx](src/context/ScrollLogoContext.tsx)
- **3D setup**: [src/components/3d/Model.tsx](src/components/3d/Model.tsx)
- **Config**: [tsconfig.json](tsconfig.json), [next.config.mjs](next.config.mjs), [tailwind.config.ts](tailwind.config.ts)
- **Project structure rules**: [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

## Testing & Debugging Tips

- **3D models not rendering**: Check `public/models/` exists and path matches exactly (case-sensitive)
- **Scroll calculations off**: Verify scroll container is `html` element; Framer Motion scrolls from viewport
- **Class conflicts**: Use `tailwind-merge` or explicit `!important` sparingly
- **Component not updating**: Check if wrapped in `"use client"` directive if using client-only hooks
