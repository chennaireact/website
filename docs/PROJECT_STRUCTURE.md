# Project Structure & Organization Guidelines

## Overview

This project follows the **Next.js App Router** architecture using the **`src` directory** pattern to separate application code from configuration files. We
adhere to the **"Store project files outside of app"** strategy to keep the routing directory clean and scalable.

## Directory Structure

```
├── public/                  # Static assets (images, fonts, models)
│   ├── images/              # SVG, PNG, JPG assets
│   └── models/              # 3D models (GLB, GLTF)
├── src/                     # Application source code
│   ├── app/                 # App Router (Routes & Layouts ONLY)
│   ├── components/          # Shared React Components
│   │   ├── 3d/              # Three.js / React Three Fiber scenes
│   │   ├── layout/          # Global layout components (Navbar, Footer)
│   │   ├── sections/        # Page-specific sections (Hero, About)
│   │   └── ui/              # Reusable UI primitives (Buttons, Cards)
│   ├── context/             # Global State (React Context)
│   ├── lib/                 # Utility functions and libraries
│   └── types/               # TypeScript type definitions
├── docs/                    # Documentation
├── .env.local               # Environment variables
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Conventions

### 1. The `src` Folder

All application code lives in `src/`. Configuration files (`next.config.js`, `tailwind.config.ts`, etc.) remain in the root. This clearly separates code from
config.

### 2. The `app` Directory (Routing)

The `src/app` directory is **strictly for routing**.

- **Do not** create component folders inside `app/` unless they are specific route groups or private folders for route-specific logic.
- **Top-level files**: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`.
- **Metadata**: `favicon.ico`, `icon.png`, `opengraph-image.png` live here.

### 3. Components Organization

Components are stored **outside** the `app` directory in `src/components/`.

- **Atomic Design-inspired**: Group by function rather than just "components".
  - `layout/`: Components that frame the page.
  - `sections/`: Large, distinct parts of a page (e.g., Hero, Features).
  - `ui/`: Small, reusable elements.
  - `3d/`: Heavy 3D assets and scene logic.

### 4. Assets (`public`)

- **Images**: Store in `public/images/`.
- **Models**: Store in `public/models/`.
- **Access**:
  - In Code: `import ReactLogo from "@public/images/react-outline.svg";` (via `@public` alias).
  - In JSX string: `<Image src="/images/logo.png" ... />`.

### 5. Aliases (Path Mapping)

Use absolute imports configured in `tsconfig.json`:

- `@/*` -> `src/*`
- `@public/*` -> `public/*`

Example:

```tsx
import { Button } from "@/components/ui/button";
import { utils } from "@/lib/utils";
```

## Scalability Guidelines

### Feature-Based Scaling

As the application grows, avoid dumping everything into `components/`. If a feature becomes complex (e.g., a "Dashboard"), consider the **Feature-based
Reference Structure**:

```
src/
  features/
    dashboard/
      components/
      hooks/
      utils/
```

### Route Groups

Use Route Groups `(group-name)` to organize routes without affecting the URL structure.

- `app/(marketing)/page.tsx` -> `/`
- `app/(dashboard)/layout.tsx` -> Isolation of dashboard layout.

### Private Folders

Use `_folder` to colocate files typically inside `app` if they are strictly coupled to a route and not reusable elsewhere, though we prefer `src/components` for
consistency.

## SEO & Metadata

- **Global Metadata**: Defined in `src/app/layout.tsx`.
- **Page Metadata**: Export `metadata` object from individual `page.tsx` files.
- **Icons**: `src/app/icon.png` is automatically used as the favicon/app icon.

---

_Verified against Next.js 14+ Best Practices_
